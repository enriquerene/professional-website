// Common types used throughout the application

export type SocialIconName = 'github' | 'twitter' | 'linkedin' | 'medium' | 'whatsapp' | 'calendar' | 'stackoverflow' | 'file-pdf' | 'dribbble';

export type SocialLink = {
  href: string;
  iconName: SocialIconName;
  label: string;
};

export type NavLink = {
  name: string;
  href: string;
  external?: boolean;
};

export type SectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

export type SubProject = {
  title: string;
  description: string;
};

export type FeaturedRole = {
  id: string;
  title: string;
  company: string;
  period: string;
  brief: string;
  description: string;
  technologies: string[];
  subProjects?: SubProject[];
};
