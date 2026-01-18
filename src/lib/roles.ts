import { FeaturedRole } from "../types";

export const FEATURED_ROLES: FeaturedRole[] = [
  {
    id: 'trident1',
    title: 'Full Stack Engineer',
    company: 'Trident1 – Inspired',
    period: '07/2025 – 12/2025',
    brief: 'US based commerce management system for in-person firearm store what is extending to high scale ecommerce bringing new needs on its architecture demanding redesign of legacy non-OOP PHP source code into modern stack. Additionally the system integrates to several ecommerce platforms like WooCommerce, Shopify, Big Commerce among others.',
    description: 'Maintenance and contributions to migration process of a eCommerce management system in the US firearm industry. Legacy system being replaced by Laravel REST API, GraphQL endpoint and ReactJS application. Perform System integration with WooCommerce, maintenance of WordPress Plugins, documentation, UI/UX aspects of plugin widgets and blocks. Website optimization. Global environment.',
    technologies: ['PHP', 'Laravel', 'ReactJS', 'WordPress', 'WooCommerce', 'GraphQL', 'API Integration', 'UI/UX']
  },
  {
    id: 'cnf',
    title: 'Full Stack Engineer',
    company: 'CNF – Derrico Consultoria',
    period: '04/2024 – 07/2024, 12/2024 – 02/2025',
    brief: 'National deceased register with large database exceeding 15 GB size. Migration of a legacy PHP system to Laravel framework, redesigning database entity relation, implementing a REST API and multi-role management panel using Filament.',
    description: 'CNF stands for Cadastro Nacional de Falecidos (National Registry of Deceased) and aims to gather notary offices data related to deceased people for easy online paper work services and data analysis. The current job is a migration project from legacy PHP system website into a modern system built in Laravel. The new project comes with better UX interface following recent practices, new database modeling to handle huge amount of data (about 15GB), a REST API as a service for other companies usage. All the design system is based on Bootstrap. Implementation of administration area with Filament. The deployment pipeline starts on development environment and pass through stage environment for client approval and move forward to production finally. All the process is tracked in JIRA and Bitbucket platforms.',
    technologies: ['Laravel', 'PHP 8.3', 'MySQL', 'Filament', 'Bootstrap', 'REST API', 'PHPUnit', 'JIRA', 'Bitbucket']
  },
  {
    id: 'petcoach',
    title: 'Full Stack Engineer',
    company: 'PetCoach - Oowlish',
    period: '06/2021 – 05/2025',
    brief: 'US based pet healthcare product from large holding company specialized in pet industry. The product offers Question & Answer and online Consultation with pet experts. Maintenance of Hybrid Mobile App and website built in Backbone.js and Cordova, a Swagger documented REST API built in Symfony with Sonata for administrative panel. Drove SEO and accessibility improvements, leveraging AWS infrastructure, and manage the deployment and scaling of the application, ensuring reliability and performance with effective cross-team work.',
    description: 'Maintenance of a REST API built in Symfony framework, event driven system for a famous Pet Care service in USA where Pet owners can ask questions in the open forum and private chat consultation. Both ones are paid services integrated with PayPal and Stripe third party service. Infrastructure is based on AWS. The application lies on EC2 instances, S3 Buckets, RDS and Cloud Front. The new features and bugfixes must pass through four environments which lie on Docker containerization: from development, integration, Q&A and finally to production environment. The chosen platform is GitLab that runs its own CI/CD tools for each merge request. The agile methodology is followed up in JIRA but at the beginning was in Trello boards. Maintenance checking Sentry, FastCron, PreRender, Google Analytics and other tools. Strongly based in SEO and Accessibility work there.',
    technologies: ['Symfony', 'PHP', 'BackboneJS', 'Cordova', 'ReactJS', 'AWS', 'Docker', 'MySQL', 'PHPUnit', 'Cypress', 'GitLab CI/CD', 'SEO']
  },
  {
    id: 'milbby',
    title: 'Frontend Developer',
    company: 'Milbby - Oowlish',
    period: '01/2021 – 06/2021',
    brief: 'Leading spanish e-commerce with more than 2000 products and hundreds of categories. Handled the UI/UX of a Shopify Theme following Adobe XD wireframes for pixel perfect redesign, focusing on cross-browser compatibility, mobile experience improvements and performance optimization, which reduced load time by almost 70%.',
    description: 'Work on UI/UX redesign of Shopify theme for a spanish ecommerce with more than 2000 products and more than 200 categories that delivers for most of the countries in Europe. The team had started with three developers and growed up to 10 ones. The tasks mainly focused on CSS restyle, improve JS bundles, remove unused code and keep cross browser compatibility. Monthly LightHouse reports for track results from road map.',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'SCSS', 'HTML5', 'UI/UX']
  }
];
