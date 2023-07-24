import { LoadingScreen, SingleBlog } from "components";
import { getPost } from "lib/utils";
import React, { Suspense, lazy } from "react";

// const SingleBlog = lazy(() => import("components/SingleBlog"));

export default async function page({ params }: any) {
  const { slug } = params;
  const { data } = await getPost(slug);
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SingleBlog post={data[0]} />
    </Suspense>
  );
}
