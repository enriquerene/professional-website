# Enrique René | Full Stack UX Engineer Portfolio

Professional portfolio website designed to showcase expertise in Full Stack Engineering and User Experience, specifically optimized for US and LATAM recruiters.

**Live Website:** [https://enriquerene.com.br](https://enriquerene.com.br)

## 🚀 Overview

This project is a high-performance, modern web application built with Next.js. It features a sophisticated design, optimized for readability and professional impact, highlighting technical mastery across the entire software development lifecycle.

## 🛠️ Technical Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:**
    - Tailwind CSS (Utility-first styling)
    - Styled Components (Complex UI logic)
- **UI Components:** React Icons
- **Documentation & UI Development:** Storybook
- **Testing:** Vitest
- **Infrastructure:** AWS, Google Tag Manager

## 🏗️ Architecture: Domain-Driven Atomic Design

The project follows a structured component architecture to ensure scalability and maintainability:

- `src/components/ui/base/`: Atomic UI elements (Buttons, Icons, Badges).
- `src/components/ui/composed/`: Molecules and Organisms (Navigation rows, Menus).
- `src/components/layout/base/`: Structural atoms (Sections).
- `src/components/layout/composed/`: Complex layout organisms (Header, Footer).
- `src/components/domain/[feature]/`: Feature-specific logic and UI (Hero, Experience, TechStack).

## ✨ Key Features

- **Strategic Value Proposition:** Clear messaging targeting international recruitment.
- **Featured Experience:** Detailed career history with technical highlight badges.
- **US & LATAM Focus:** Explicit emphasis on timezone alignment, bilingual communication, and remote work expertise.
- **Technical Arsenal:** Interactive list of modern technologies (React, Next.js, Node.js, Laravel, etc.).
- **Professional Design:** Sophisticated background effects, glassmorphism, and responsive layouts.
- **Integrated Documentation:** Full Storybook coverage for all UI components.

## 🛠️ Development

### Prerequisites

- Node.js (v18+)
- npm / yarn

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build & Production

- Build the application:
  ```bash
  npm run build
  ```
- Start production server:
  ```bash
  npm start
  ```

### Storybook

View and interact with the component library in isolation:

```bash
npm run storybook
```

## 📄 License

© 2026 Enrique René. All rights reserved.
