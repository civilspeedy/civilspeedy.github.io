// could do with clean up
export type PageBasic = {
  h1: string;
  name: string;
};

export type softwarePage = PageBasic & {
  languages: string[];
  frameworks: string[];
  tools: string[];
  projects: project[];
};

export type project = {
  title: string;
  description: string;
  link: string | string[];
  icons: string[];
  images: string[];
};

export type PortfolioPage = PageBasic & {
  tools: string[];
  projects: string[];
};

export type CinemaPage = PageBasic & {
  tools: string[];
  projects: project[];
};

export type aboutMePage = PageBasic & {
  contact: contact[];
  bio: string[];
  education: education[];
  other: string[];
};

export type PhotographyPageT = PageBasic & {
  images: string[];
};

type contact = {
  name: string;
  link: string;
};

type education = {
  name: string;
  subjects: subject[];
};

type subject = {
  subject: string;
  grade: string;
};

export type TYPES = { page: PortfolioPage };

export type scale = { width: number; height: number };

export type resolutions = {
  sHeight: number;
  sWidth: number;
  wHeight: number;
  wWidth: number;
};
