interface IAbout {
  name: string;
  city: string;
  state: string;
  bio: string;
  excerpt: string;
}

interface IWorkExperience {
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
}

export type { IAbout, IWorkExperience };
