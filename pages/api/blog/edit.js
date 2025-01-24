import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export default function handler(req, res) {
  const postsfolder = join(process.cwd(), `/_posts/`);
  if (req.method === "POST") {
    const { date, title, tagline, preview, image } = req.body.variables;
    fs.writeFile(
      postsfolder + req.body.slug + ".md",
      matter.stringify(req.body.content, {
        date,
        title,
        tagline,
        preview,
        image,
      }),
      "utf-8",
      (err) => console.log(err)
    );
    res.status(200).json({ status: "DONE" });
  }
}
