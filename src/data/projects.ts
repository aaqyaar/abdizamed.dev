interface IProject {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  githubUrl: string;
}

const projects: IProject[] = [
  {
    imgSrc: "",
    title: "XirfadCamp (Web App)",
    description:
      "XirfadCamp is an e-learning platform that aims to revolutionize the way people learn and acquire new skills. With a diverse range of courses and high-quality content, XirfadCamp is committed to providing learners with a dynamic and interactive learning experience.",
    link: "https://www.xirfadcamp.com",
    githubUrl: "",
  },
  {
    imgSrc: "",
    title: "Sooyaal (Mobile App)",
    description:
      "Sooyaal is a fantastic social media blogging app designed specifically for the Somali community, enabling individuals to share their thoughts, ideas, and creativity with a wider audience. It serves as a virtual platform for Somalis to connect, express themselves, and engage with the ideas of others.",
    link: "",
    githubUrl: "https://www.github.com/aaqyaar/sooyaal-app",
  },
];

export { projects };
