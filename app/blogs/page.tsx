import { BlogList, ComingSoon } from "components";
import { getPosts } from "lib/utils";

import React from "react";

export default async function page() {
  const { data: posts, error } = await getPosts();

  return <BlogList posts={posts} error={error} />;
}
