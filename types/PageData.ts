export interface PageProps {
  object: {
    slug: string;
    title: string;
    type: string;
    metadata: {
      hero: {
        picture: ImageProps;
        heading: string;
        buttons: ButtonProps[];
      };
      project: {
        card: ProjectCardProps[];
      };
      experience: {
        card: ExperienceCardProps[];
      };
      about: {
        descricao: string;
        picture: ImageProps;
      };
      contact: {
        title: string;
        description: string;
        buttons: ButtonProps[];
      };
    };
  };
}

export interface ImageProps {
  url?: string;
  imgix_url: string;
}

export interface ButtonProps {
  download: boolean;
  icon: string | ImageProps;
  url?: string;
  pdf?: null | ImageProps;
}

export interface ProjectCardProps {
  link?: boolean;
  url?: string;
  image: ImageProps;
  tag: string;
  title: string;
  description: string;
}

export interface ExperienceCardProps {
  position: string;
  firm: string;
  company_time: string;
  description: string;
}
