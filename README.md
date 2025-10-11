Portfolio React
A modern, responsive portfolio website built with React and Vite, showcasing technical skills, professional experience, and key projects. This repository, hosted on a GitHub User Page (cjohnson187.github.io) The page is also available here (https://www.christopherfjohnson.com/), is configured for automated, seamless deployment via GitHub Actions.

🛠️ Tech Stack & Features
Framework: React (using functional components and hooks)

Build Tool: Vite (for fast local development and optimized production builds)

Language: TypeScript / JSX

Styling: Tailwind CSS (for utility-first, fully responsive styling)

Deployment: GitHub Pages (via GitHub Actions)

Routing: Single-Page Application (SPA)

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
You need Node.js (which includes npm) installed on your system.

Installation
Clone the repository:

git clone [https://github.com/Cjohnson187/cjohnson187.github.io.git](https://github.com/Cjohnson187/cjohnson187.github.io.git)

Navigate to the directory:

cd cjohnson187.github.io

Checkout the development branch (where the React source code resides):

git checkout dev-react

Install dependencies:

npm install

▶️ Available Scripts
In the project directory, you can run:

Command

Description

npm run dev

Runs the app in development mode. Opens http://localhost:5173 to view it in the browser with Hot Module Replacement (HMR).

npm run build

(Deployment Step) Builds the optimized, production-ready static files into the dist folder.

npm run preview

Serves the production dist folder locally for testing before deployment.

npm run lint

Runs ESLint to check for code quality and style issues.

☁️ Continuous Deployment for GitHub Pages
This repository utilizes a GitHub User Page structure (USERNAME.github.io). Deployment is handled automatically using the GitHub Pages workflow.

Deployment Strategy:
Source Code: All development happens on the dev-react branch.

Build Automation: A GitHub Action is configured to listen for pushes to dev-react, run the npm run build command, and upload the resulting /dist folder as the deployment artifact.

GitHub Pages Setup: Ensure your repository's Settings → Pages is configured to use "GitHub Actions" as the build and deployment source.

Deployment Flow:
Simply commit your changes and push to the source branch:

git add .
git commit -m "feat: completed new section"
git push origin dev-react

✍️ Contribution
If you are a collaborator, please ensure all new features and bug fixes are committed to a feature branch derived from dev-react and merged back via a Pull Request to maintain code stability.
