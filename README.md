# My Personal Portfolio

A modern, responsive personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Supabase**. Showcasing projects, certificates, and professional information with an interactive UI.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Configuration](#configuration)

## ✨ Features
- **Responsive Design** - Mobile-friendly and works on all screen sizes
- **Interactive Components** - Dynamic project showcases and certificate viewing
- **Certificate Gallery** - View and download certificates with zoom functionality
- **Contact Section** - Get in touch form
- **Modern UI** - Built with Lucide React icons
- **Type Safe** - Written in TypeScript for better code quality
- **Performance Optimized** - Vite for fast builds and development

## 🛠️ Tech Stack

### Core Framework
- **React** (18.3.1) - UI library for building interactive components
- **React DOM** (18.3.1) - DOM rendering for React
- **TypeScript** (5.5.3) - Static typing for JavaScript

### Build & Development Tools
- **Vite** (5.4.2) - Lightning-fast build tool and dev server
- **Vite React Plugin** (4.3.1) - React support for Vite
- **ESLint** (9.9.1) - Code quality and linting

### UI & Icons
- **Lucide React** (0.344.0) - Beautiful, consistent SVG icons

### Backend/Database
- **Supabase** (2.57.4) - Open-source Firebase alternative for backend services

### Development Dependencies
- **ESLint Plugins**
  - `@eslint/js` (9.9.1)
  - `eslint-plugin-react-hooks` (5.1.0-rc.0)
  - `eslint-plugin-react-refresh` (0.4.11)
  - `typescript-eslint` (8.3.0)
- **Type Definitions**
  - `@types/react` (18.3.5)
  - `@types/react-dom` (18.3.0)
- **Utilities**
  - `globals` (15.9.0)

## 📦 Installation

### Prerequisites
- Node.js (v16.x or higher)
- npm or yarn

### Setup Steps

1. **Clone or navigate to the project**
   ```bash
   cd My_Personal_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## 🎯 Dependencies

### Production Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.1 | Core UI library |
| react-dom | ^18.3.1 | React DOM rendering |
| lucide-react | ^0.344.0 | Icon library |
| @supabase/supabase-js | ^2.57.4 | Backend API client |

### Development Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| vite | ^5.4.2 | Build tool & dev server |
| typescript | ^5.5.3 | Type checking |
| eslint | ^9.9.1 | Code linting |
| @vitejs/plugin-react | ^4.3.1 | Vite React integration |
| @types/react | ^18.3.5 | React TypeScript types |
| @types/react-dom | ^18.3.0 | React DOM TypeScript types |

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npm run typecheck
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx
│   ├── Certificates.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Try.tsx
├── assets/
│   ├── certificates/
│   │   ├── cert1.png
│   │   ├── cert1.pdf
│   │   └── ...
│   └── projects/
├── App.tsx
├── main.tsx
├── index.css
└── App.css
```

## ⚙️ Configuration Files

- **`vite.config.ts`** - Vite configuration
- **`tsconfig.json`** - TypeScript configuration
- **`tsconfig.app.json`** - App-specific TypeScript settings
- **`eslint.config.js`** - ESLint rules and settings
- **`package.json`** - Project metadata and dependencies

## 🚀 Deployment

To build for production:
```bash
npm run build
```

This creates an optimized build in the `dist/` directory, ready for deployment.

## 📄 License

This is a personal portfolio project.

---

**Created with ❤️ using React + TypeScript + Vite**
