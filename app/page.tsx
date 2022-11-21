import { About, Contact, Hero, Blogs, Projects } from "containers";
import { type NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="container my-10">
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
};

export default HomePage;
