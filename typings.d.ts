interface SanityBody {
  _createAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  heroTitle: string;
  heroImage: Image;
  aboutTitle: string;
  aboutInfo: string;
  aboutImage: Image;
  contactText: string;
}

export interface Project extends SanityBody {
  _type: "project";
  category: string;
  title: string;
  description: string;
  image: Image;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
  icon: Image;
}

export interface Translations {
  home: string;
  projects: string;
  about: string;
  contact: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  submit: string;
}
