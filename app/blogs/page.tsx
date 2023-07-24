import { LoadingScreen, BlogsList } from "components";
import { getPosts } from "lib/utils";

import React, { Suspense, lazy } from "react";

// const  = lazy(() => import("components/BlogsList"));

export default async function page() {
  const { data: posts, error } = await getPosts();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <BlogsList posts={posts} error={error} />
    </Suspense>
  );
}
