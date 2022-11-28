import { BlogsList, LoadingScreen } from "components";
import { getPosts } from "lib/utils";

import React, { Suspense } from "react";

export default async function page() {
  const { data: posts, error } = await getPosts();

  return (
    <Suspense fallback={<LoadingScreen />}>
      {posts && <BlogsList posts={posts} error={error} />}
    </Suspense>
  );
}
