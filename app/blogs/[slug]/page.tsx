import { ComingSoon, LoadingScreen } from "components";
import SingleBlog from "components/SingleBlog";
import { getPost } from "lib/utils";
import React, { Suspense } from "react";

export default async function page({ params }: any) {
  const { slug } = params;
  const { data } = await getPost(slug);
  return (
    <Suspense fallback={<LoadingScreen />}>
      {<SingleBlog post={data[0]} />}
    </Suspense>
  );
}
