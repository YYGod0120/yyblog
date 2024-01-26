const { db } = require("@vercel/postgres");
const data = require("../app/lib/fileData");
async function uploadBlogs(client, files) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "blogs" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date DATE,
        categories VARCHAR(255),
        excerpt TEXT
      );
    `;

    console.log(`Created "blogs" table`);

    // Insert data into the "blogs" table
    const insertedBlogs = await Promise.all(
      files.map(async (file) => {
        return client.sql`
          INSERT INTO blogs (title, date, categories, excerpt)
          VALUES (${file.title}, ${file.date}, ${file.categories}, ${file.excerpt})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Uploaded ${insertedBlogs.length} blogs`);

    return {
      createTable,
      blogs: insertedBlogs,
    };
  } catch (error) {
    console.error("Error uploading blogs:", error);
    throw error;
  }
}

//main
async function main() {
  const client = await db.connect();
  const files = data.data.map((file) => {
    const { html, ...rest } = file;
    return rest;
  });
  await uploadBlogs(client, files);
  await client.end();
}
main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
