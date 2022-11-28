import { About, Contact, Hero, Blogs, Projects } from "containers";
import { Suspense } from "react";
import { getPosts } from "lib/utils";
import { LoadingScreen } from "components";

const HomePage = async () => {
  // const { res: posts, error } = await useDynamicApi({
  //   route: "/api/posts/latest",
  //   method: "GET",
  // });

  const { data: posts, error } = await getPosts();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="my-10">
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
