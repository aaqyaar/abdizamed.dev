import path from "path";
import fs from "fs";
import matter from "gray-matter";
export default async function getBlogs() {
  const blogsDirectory = path.join(process.cwd(), "lib", "data", "posts");
  const filenames = fs.readdirSync(blogsDirectory);
  const blogs = filenames.map((filename) => {
    const filePath = path.join(blogsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, content };
  });
  return blogs as any;
}
