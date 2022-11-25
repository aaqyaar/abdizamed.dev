import { About, Contact, Hero, Blogs, Projects } from "containers";
import { useDynamicApi } from "lib/utils";

const HomePage = async () => {
  const { res: posts, error } = await useDynamicApi({
    route: "/api/posts/latest",
    method: "GET",
  });

  return (
    <div className="container my-10">
      <Hero />
      <About />
      <Projects />
      <Blogs data={posts} error={error} />
      <Contact />
    </div>
  );
};

export default HomePage;
