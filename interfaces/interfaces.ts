export interface IMenu {
  projects: string;
  contacts: string;
  resume: string;
  startups: string;
}
export interface IProjectScreen {
  github: string;
  project1: string;
  project2: string;
  project3: string;
}

export interface ISocial {
  linkdin: string;
  telegram: string;
  mail: string;
  twitter: string;
  phone: string;
}
export interface IEdu {
  description: string;
  title: string;
}
export interface IEduData {
  description: ILang;
  title: ILang;
}
export interface IResumeScreen {
  buttonDownload: string;
  course: IEdu;
  diploma: IEdu;
  education: string;
  skills: {
    allSkills: string[];
    title: string;
  };
}

export interface IStartupScreen {
  project: string;
}

export interface IDataLang {
  _id: string;
  data: string;
  menu: IMenu;
  projectScreen: IProjectScreen;
  resumeScreen: IResumeScreen;
  startupScreen: IStartupScreen;
  contactScreen: ISocial;
}

export interface ILang {
  en: string;
  ua: string;
  ru: string;
}

export interface IMenuData {
  projects: ILang;
  contacts: ILang;
  resume: ILang;
  startups: ILang;
}
export interface IPeojectScreenData {
  github: ILang;
  project1: ILang;
  project2: ILang;
  project3: ILang;
}
export interface IResumeScreenData {
  buttonDownload: ILang;
  course: IEduData;
  diploma: IEduData;
  education: ILang;
  skills: {
    allSkills: string[];
    title: ILang;
  };
}
export interface IStartupScreenData {
  project: ILang;
}
export interface IData {
  _id: string;
  data: string;
  menu: IMenuData;
  projectScreen: IPeojectScreenData;
  resumeScreen: IResumeScreenData;
  startupScreen: IStartupScreenData;
  contactScreen: ISocial;
}
