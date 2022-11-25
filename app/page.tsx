import { About, Contact, Hero, Blogs, Projects } from "containers";
import { Suspense } from "react";
import { useDynamicApi } from "lib/utils";

const HomePage = async () => {
  const { res: posts, error } = await useDynamicApi({
    route: "/api/posts/latest",
    method: "GET",
  });
  console.log(error);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container my-10">
        <Hero />
        <About />
        <Projects />
        <Blogs data={posts} error={error} />
        <Contact />
      </div>
    </Suspense>
  );
};

export default HomePage;
