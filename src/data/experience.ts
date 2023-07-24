interface IWorkExperience {
  name: string;
  endDate: string;
  startDate: string;
  title: string;
  description: string;
}

const workExperience: IWorkExperience[] = [
  {
    name: "Silicon LLC",
    startDate: "March 2022",
    endDate: "August 2022",
    title: "MERN Stack Developer",
    description:
      "During my time at Silicon.so, I assumed the role of a software developer, where I actively contributed to a range of projects, gaining valuable experience in the software development industry. In this capacity, I undertook various responsibilities, such as coding, designing, and implementing software solutions. My collaborative efforts with the team were instrumental in achieving successful project outcomes. Throughout the development process, I actively engaged in all stages, from gathering requirements to conducting testing and overseeing deployment.",
  },
  {
    name: "BixiHQ",
    startDate: "March 2023",
    endDate: "Present",
    title: "Mobile App Developer",
    description:
      "In my current role as a Mobile App Developer at Bixi, I am entrusted with the responsibility of conceptualizing, developing, and implementing new features for mobile applications. My primary focus lies in creating user-friendly and innovative apps, which entails leveraging cutting-edge technologies like React Native to build dynamic and responsive interfaces. Additionally, I am deeply committed to optimizing app performance to ensure seamless user experiences. As part of my role, I actively participate in various stages of the app development process, from initial ideation and design to rigorous testing and final deployment.",
  },
];

export { workExperience };
