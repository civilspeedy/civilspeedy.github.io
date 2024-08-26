export type homePage = {
  h1: string;
  name: string;
};

export type softwarePage = {
  name: string;
  h1: string;
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

export type page = {
  name: string;
  h1: string;
  tools: string[];
  projects: project[];
};

export type GraphicDesignPageT = {
  name: string;
  h1: string;
  tools: string[];
  projects: string[];
};

export type aboutMePage = {
  name: string;
  h1: string;
  contact: contact[];
  bio: string[];
  education: education[];
  other: string[];
};

export type PhotographyPageT = page & {
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

export type TYPES = { page: page };

export type scale = { width: number; height: number };

export type resolutions = {
  sHeight: number;
  sWidth: number;
  wHeight: number;
  wWidth: number;
};
