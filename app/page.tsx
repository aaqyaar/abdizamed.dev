import { About, Contact, Hero, Blogs, Projects } from "containers";
import type { Posts } from "lib/types";
import { getBlogs } from "lib/utils";

const HomePage = async () => {
  // const blogs: Posts = await getBlogs();
  const blogs: Posts = [];
  return (
    <div className="container my-10">
      <Hero />
      <About />
      <Projects />
      <Blogs data={blogs} />
      <Contact />
    </div>
  );
};

export default HomePage;
