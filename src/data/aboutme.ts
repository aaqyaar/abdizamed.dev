interface IAboutMe {
  name: string;
  bio: string;
  avatar: string;
  experience: string;
  description: string;
}

const withStyles = {
  bio: `<span className="text-blue-600 underline">XirfadCamp</span>`,
};

const aboutMe: IAboutMe = {
  name: "Abdi Zamed Mohamed",
  bio: `Software Engineer | Founder & CEO at ${withStyles.bio}`,
  avatar: "https://www.github.com/aaqyaar.png",
  experience: "2+",
  description:
    " I am a young Somali software engineer with a passion for web and mobile development. At 18 years old, I embarked on a self-taught coding journey, developing a strong foundation in software engineering. I gained valuable experience working with local companies and delved into personal side projects to enhance my skills. Currently, I work as a Mobile App Developer at Bixi, where I collaborate on innovative and user-friendly applications. My expertise lies in web and mobile development, with proficiency in front-end technologies like HTML, CSS, and JavaScript, and popular frameworks such as React and React Native. Additionally, I have experience in server-side technologies like Node.js and databases like MongoDB. I embrace continuous learning and staying up-to-date with industry trends, thriving in collaborative environments and taking on new challenges. With a growth mindset and a passion for innovation, I am eager to contribute to the ever-evolving world of software development.",
};

export { aboutMe };
