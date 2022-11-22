export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  createdAt: Date;
  image: string;
  avatar: string;
  author: string;
  category: string;
  tags: string[];
  content: string[];
}

export type Posts = Post[];
