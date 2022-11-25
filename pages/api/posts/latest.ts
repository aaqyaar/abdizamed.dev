/* eslint-disable @typescript-eslint/no-explicit-any */
import { getLatestPosts } from "lib/prisma/posts";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "GET") {
    try {
      const { posts, error } = await getLatestPosts();
      if (error) throw new Error(error as string);
      return res.status(200).json({ posts, success: true });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
  res.setHeader("Allow", ["GET"]);
  return res.status(405).end(`Method ${method} Not Allowed`);
}
