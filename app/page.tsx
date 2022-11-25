import { About, Contact, Hero, Blogs, Projects } from "containers";
// import type { Posts } from "lib/types";
import { getLatestPosts } from "lib/utils";

const HomePage = async () => {
  const { res: posts, error } = await getLatestPosts();
  // const res = await fetch("http://localhost:3000/api/posts");
  // const data = await res.json();
  // console.log(data);
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
