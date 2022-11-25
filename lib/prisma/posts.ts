import type { Post } from "lib/types";
import prisma from ".";

export const getPosts = async () => {
  try {
    const posts = await prisma.posts.findMany();
    return { posts };
  } catch (error) {
    return { error };
  }
};

export const getPost = async (slug: string) => {
  try {
    const post = await prisma.posts.findUnique({
      where: {
        slug,
      },
    } as any);
    return { post };
  } catch (error) {
    return { error };
  }
};

export const createPost = async (post: Post) => {
  try {
    const result = await prisma.posts.create({
      data: post,
    } as any);
    return { post: result };
  } catch (error) {
    return { error };
  }
};

export const updatePost = async (id: string, post: Post) => {
  try {
    const result = await prisma.posts.update({
      where: {
        id,
      },
      data: post,
    } as any);
    return { post: result };
  } catch (error) {
    return { error };
  }
};

export const deletePost = async (id: string) => {
  try {
    const result = await prisma.posts.delete({
      where: {
        id,
      },
    });
    return { post: result, message: "Post deleted successfully" };
  } catch (error) {
    return { error };
  }
};

// get latest 4 posts
export const getLatestPosts = async () => {
  try {
    const posts = await prisma.posts.findMany({
      take: 4,
      orderBy: {
        createdAt: "desc",
      },
    });
    return { posts };
  } catch (error) {
    return { error };
  }
};

// Path: pages\api\posts.ts
