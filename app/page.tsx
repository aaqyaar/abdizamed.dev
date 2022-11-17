import { About, Contact, Hero, Projects } from "containers";
import { type NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="container my-10">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
