Portfolio React
A modern, responsive portfolio website built with React and Vite, showcasing technical skills, professional experience, and key projects. This repository, hosted on a GitHub User Page (cjohnson187.github.io), is configured for seamless deployment directly from the source code.

🛠️ Tech Stack & Features
Framework: React (using the latest features and hooks)

Build Tool: Vite (for fast local development and optimized production builds)

Language: JavaScript / JSX

Styling: [Insert your primary styling method here, e.g., Tailwind CSS, Modular CSS, SCSS]

Deployment: GitHub Pages

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
You need Node.js (which includes npm) installed on your system.

Installation
Clone the repository:

git clone [https://github.com/Cjohnson187/cjohnson187.github.io.git](https://github.com/Cjohnson187/cjohnson187.github.io.git)


Navigate to the directory:

cd cjohnson187.github.io


Checkout the development branch (where the React code resides):

git checkout dev-react


Install dependencies:

npm install


▶️ Available Scripts
In the project directory, you can run:

Command

Description

npm run dev

Runs the app in development mode. Opens http://localhost:5173 to view it in the browser.

npm run build

Builds the app for production to the dist folder. The build is minified and the filenames include hashes.

npm run preview

Serves the production dist folder locally for testing purposes.

npm run lint

Runs ESLint to check for code quality and style issues.

☁️ Deployment for GitHub Pages
This repository utilizes a User Page structure (USERNAME.github.io), meaning the site is served from the root of the repository URL (https://cjohnson187.github.io/).

Deployment Strategy: The recommended strategy is to configure GitHub Pages to serve the content generated from the npm run build command on the dev-react branch.

Deployment Steps (Manual or CI/CD)
Run the Build Command: This generates the production-ready static files inside the dist folder.

npm run build


Configure GitHub Pages:

Go to Settings in your GitHub repository.

Navigate to the Pages section.

Under Build and deployment, ensure the Source is set to:

Branch: dev-react

Folder: /dist

Commit and Push: Push the built code and the rest of your source code to the dev-react branch. The GitHub Pages workflow will automatically deploy the contents of the dist folder from that branch.

git add .
git commit -m "Build and push for deployment"
git push origin dev-react


✍️ Contribution
If you are a collaborator, please ensure all new features and bug fixes are committed to a feature branch derived from dev-react and merged back via a Pull Request.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
