import type { IAbout, IWorkExperience } from "lib/types/about.types";

const about: IAbout = {
  name: "Abdi Zamed Mohamed",
  city: "Mogadishu",
  state: "Banaadir",
  bio: "Software Engineer | Web Developer | Blogger",
  excerpt:
    "A Full Stack Developer with 2+ years of experience in designing and developing user interfaces, testing, debugging, and training staff within modern technologies. Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies. some of the work I accomplished for them included creating websites, web applications, brands, and other things.",
};

const workExpereince: IWorkExperience[] = [
  {
    company: "Silicon ICT",
    position: "Full Stack Developer",
    description:
      "I worked as a full stack developer at Silicon, I worked on a many projects and I learned a lot of things, I worked with  different technologies and I learned how to use them, I learned how to work in a team and how to communicate with my team members, I learned how to work under pressure and how to deliver the project on time.",
    startDate: "2021",
    endDate: "2022",
  },
];

export { about, workExpereince };
