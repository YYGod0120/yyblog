import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import { UTCToString } from "./time";
import path from "path";
import chalk from "chalk";
const _postFolder = "./_posts";
type mdFile = {
  mdMatter: matter.GrayMatterFile<string>;
  mdHtml: string;
};
/**
 * The function reads files from a specified folder, extracts metadata using the matter library, and
 * converts the content to HTML using the marked library.
 */
export function readFile(): mdFile[] {
  const files: mdFile[] = [];
  fs.readdir(_postFolder, (error, file) => {
    if (error) {
      console.log(error);
    } else {
      file.forEach(async (file) => {
        const _file = fs.readFileSync(`${_postFolder}/${file}`, "utf-8");
        const _matter = matter(_file);
        const newMatter = {
          ..._matter,
          data: { ..._matter.data, date: UTCToString(_matter.data.date) },
        };
        const htmlText = await marked(_matter.content);
        console.log(`Essay ${chalk.blue(path.parse(file).name)} product`);
        files.push({ mdMatter: newMatter, mdHtml: htmlText });
      });
    }
  });
  return files;
}

export function writeFile() {}
