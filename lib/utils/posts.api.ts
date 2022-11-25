/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import axios from "axios";
import useDynamicApi from "./dynamicApi";

export async function getPosts() {
  const blogsDirectory = path.join(process.cwd(), "lib", "data", "posts");
  const filenames = fs.readdirSync(blogsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(blogsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, content };
  });
  return posts as any;
}

// export async function getPost(slug: string) {
//   const res = await axios.get(`/api/posts?${slug}`);
//   return res.data;
// }

export const getLatestPosts = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return await useDynamicApi({
    method: "GET",
    route: "/api/posts/latest",
  });
};
