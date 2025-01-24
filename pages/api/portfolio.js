import fs from "fs";
import { join } from "path";

export default function handler(req, res) {
  const portfolioData = join(process.cwd(), "/data/portfolio.json");
  if (req.method === "POST") {
    fs.writeFileSync(
      portfolioData,
      JSON.stringify(req.body),
      "utf-8",
      (err) => console.log(err)
    );
  }
}
