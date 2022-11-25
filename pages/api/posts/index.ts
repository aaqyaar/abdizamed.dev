import { createPost, updatePost, getPosts } from "lib/prisma/posts";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "GET") {
    try {
      const { posts, error } = await getPosts();
      if (error) throw new Error(error as string);
      res.status(200).json({ posts, success: true });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  if (method === "POST") {
    try {
      const { post, error } = await createPost(req.body);
      if (error) throw new Error(error as string);
      res.status(200).json({ post, success: true });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  if (method === "PUT") {
    try {
      const { post: updatedPost, error } = await updatePost(
        req.body.id,
        req.body
      );
      if (error) throw new Error(error as string);

      res.status(200).json({ post: updatedPost, success: true });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST", "PUT"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}
