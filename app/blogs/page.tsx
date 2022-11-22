import { ComingSoon } from "components";
import { getBlogs } from "lib/utils";

import React from "react";

export default async function page() {
  const blogs = await getBlogs();
  return <ComingSoon />;
}
