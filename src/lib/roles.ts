import { FeaturedRole } from "../types";

export const FEATURED_ROLES: FeaturedRole[] = [
  {
    id: 'trident1',
    title: 'Full Stack Engineer (Contract)',
    company: 'Trident1 (US Firearm Industry)',
    period: '07/2025 - 12/2025',
    brief: 'Migration of a legacy non-OOP PHP WordPress plugin to modern block based composer based PHP 8.3 project.',
    description: 'Developed complex integrations between the POS system and external WooCommerce platforms. Focused on modernizing legacy codebases using modern PHP 8.3 practices and WordPress block editor (Gutenberg) integration.',
    technologies: ['PHP 8.3', 'WordPress', 'WooCommerce', 'React', 'Gutenberg', 'API Integration']
  },
  {
    id: 'oowlish',
    title: 'Senior Full Stack Engineer',
    company: 'Oowlish (Remote / US Clients)',
    period: '01/2021 – 05/2025',
    brief: 'Provided staff-augmentation services for high-profile US startups, specializing in e-commerce and pet healthcare platforms.',
    description: 'Lead developer in various projects, bridging technical excellence with business growth. Managed complex legacy migrations, e-commerce optimizations, and cloud infrastructure.',
    technologies: ['Symfony', 'PHP', 'React', 'Shopify', 'AWS', 'Stripe/PayPal', 'Performance'],
    subProjects: [
      {
        title: 'PetCoach (US Pet Healthcare)',
        description: 'Maintained and modernized a high-traffic legacy application using Symfony, Backbone.js, and Cordova. Managed AWS infrastructure (EC2, RDS) ensuring 99.9% uptime for paid consultation services.'
      },
      {
        title: 'Milbby (European E-commerce)',
        description: 'Executed a pixel-perfect redesign of a massive Shopify store. Optimized Liquid code and JS bundles, achieving a 70% reduction in page load time.'
      }
    ]
  },
  {
    id: 'cnf',
    title: 'Full Stack Developer',
    company: 'CNF (National Registry)',
    period: '04/2024 – 02/2025',
    brief: 'Migrating a 15GB+ database system from legacy PHP to Laravel & Filament.',
    description: 'Designing a REST API to serve external partners and modernizing the UI with Bootstrap-based design systems. Focus on handling large data volumes and efficient database architecture.',
    technologies: ['Laravel', 'Filament', 'PHP', 'MySQL', 'REST API', 'Bootstrap']
  },
  {
    id: 'freelance',
    title: 'Freelance Web Developer & Consultant',
    company: 'Self-Employed',
    period: '2011 – 2021',
    brief: 'Delivered 20+ web projects for startups and local businesses.',
    description: 'Built custom PWA solutions using React, AWS LightSail, and Django REST Framework. Developed custom WordPress themes and plugins. Configured advanced tracking setups using Google Tag Manager to help clients understand user behavior.',
    technologies: ['React', 'WordPress', 'Django', 'AWS LightSail', 'GTM', 'Google Maps API']
  }
];
