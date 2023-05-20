export interface IMetaHead {
  title: string;
  description: string;
}

export interface IAboutProps {
  name: string;
  about: string;
  jobDescription: string;
}

export interface IExperience {
  name: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  companyTags: string[];
  description: string[];
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
}
export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
}

export interface ITechProps {
  technologies: string[];
}