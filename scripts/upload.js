const { db } = require("@vercel/postgres");
const data = require("../app/lib/fileData");
async function uploadBlogs(client, files) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date DATE,
        categories VARCHAR(255),
        excerpt TEXT,
        html TEXT
      );
    `;

    console.log(`Created "blog" table`);

    // Insert data into the "users" table
    const insertedBlogs = await Promise.all(
      files.map(async (file) => {
        return client.sql`
        INSERT INTO blogs (title, date, categories, excerpt, html)
        VALUES (${file.id}, ${file.title}, ${file.date}, ${file.categories}, ${file.excerpt}, ${file.html})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`upload ${insertedBlogs.length} blogs`);

    return {
      createTable,
      blogs: insertedBlogs,
    };
  } catch (error) {
    console.error("Error upload blogs:", error);
    throw error;
  }
}

//main
async function main() {
  const client = await db.connect();
  await uploadBlogs(client, data);
  await client.end();
}
main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
