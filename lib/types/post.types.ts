export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  createdAt: Date;
  image: any;
  avatar: string;
  author: string;
  category: string;
  tags: string[];
  content: string[];
};

export type Posts = Post[];
