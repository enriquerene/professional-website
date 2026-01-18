import { SocialLink, NavLink } from "@/types";

// Common text strings used throughout the application
export const SITE_DESCRIPTION = "Full Stack UX Engineer | PHP and React specialist | Figma, Storybook, Next.js, React Native, Laravel, WordPress.";

// Other constants can be added here as needed
export const SITE_NAME = "Enrique René";
export const SITE_URL = "https://enriquerene.com.br";
export const SITE_EMAIL = "enriquerenebr@gmail.com";
export const SITE_PHONE = "5521964470631";
export const CALENDLY_URL = "https://calendly.com/enriquerenebr/30min";
export const WHATSAPP_URL = "https://wa.me/5521964470631";
export const GITHUB_URL = "https://github.com/enriquerene";
export const LINKEDIN_URL = "https://linkedin.com/in/enriquerenebr";
export const TWITTER_URL = "https://twitter.com/enriquerenebr";
export const MEDIUM_URL = "https://medium.com/@enriquerenebr";
export const STACKOVERFLOW_URL = "https://stackoverflow.com/users/5382576/enrique-rené";
export const RESUME_URL = "https://enriquerene.com.br/whoiam/docs/software-engineer-resume.pdf";
export const DRIBBBLE_URL = "https://dribbble.com/enriquerene";

export const NAV_LINKS: NavLink[] = [
  { name: 'Hero', href: '#' },
  { name: 'Experience', href: '#featured-roles' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Skills', href: '#skills' },
  { name: 'Professional', href: '#professional' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: LINKEDIN_URL, iconName: 'linkedin', label: 'LinkedIn' },
  { href: GITHUB_URL, iconName: 'github', label: 'GitHub' },
  { href: RESUME_URL, iconName: 'file-pdf', label: 'Resume' },
  { href: STACKOVERFLOW_URL, iconName: 'stackoverflow', label: 'StackOverflow' },
  { href: MEDIUM_URL, iconName: 'medium', label: 'Medium' },
  { href: DRIBBBLE_URL, iconName: 'dribbble', label: 'Dribbble' }
];

export const TECHNICAL_SKILLS = [
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "Storybook",
  "Jest",
  "PHP",
  "Laravel",
  "WordPress",
  "MySQL",
  "Figma",
  "Tailwind CSS",
  "Docker",
  "AWS",
];