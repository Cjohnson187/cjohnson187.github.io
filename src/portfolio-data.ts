export const portfolioData = {
  personal: {
    name: "Christopher Johnson",
    title: "Full Stack Software Engineer",
    bio: "Dynamic Full Stack Software Engineer with a proven track record at Silicon Mountain Technologies, adept in Java EE, Spring, Node.js, React.js and cloud services (AWS). Spearheaded the integration of critical APIs and Denver, Coloardo re-platformed legacy systems, enhancing operational efficiency. A collaborative leader, skilled in mentoring teams and driving Agile development practices.",
    image: "/new-pro.jpg"
  },
  contact: {
    email: "chrisfjohnson3@gmail.com",
    github: "https://github.com/Cjohnson187",
    linkedin: "https://www.linkedin.com/in/cjohnson289"
  },
  about: {
    paragraphs: [
      "I am a results-driven Full Stack Software Engineer with over five years of experience specializing in building secure, scalable enterprise applications. My core expertise is in the Java/Spring Boot ecosystem for resilient backend services and modern React/TypeScript for high-performance user interfaces.",
      "Throughout my career at Silicon Mountain Technologies, I focused on high-stakes projects, including successfully re-platforming a legacy AngularJS system to a modern React stack to improve maintainability and team velocity. I combine my development skills with deep DevOps proficiency, administering and optimizing AWS infrastructure, automating CI/CD pipelines with Jenkins and Kubernetes, and engineering secure microservices that meet stringent federal security protocols.",
      "I am driven by clean code, technical excellence, and the challenge of simplifying complex data integration problems."
    ]
  },
  skills: [
    {
      category: "Frontend",
      icon: "Globe",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "JSP", "FreeMarker", "Responsive Design"]
    },
    {
      category: "Backend",
      icon: "Database",
      items: ["Java", "JavaEE", "Python", "PostgreSQL", "MongoDB", "Spring Boot", "Node.js", "Express", "RESTful APIs" ]
    },
    {
      category: "DevOps",
      icon: "Cloud",
      items: ["AWS", "Elastic Beanstalk", "EC2", "S3", "RDS", "CloudWatch", "IAM", "VPC", "CI/CD", "Jenkins", "Docker", "Kubernetes", "Vite" ]
    },
    {
      category: "Tools",
      icon: "Code2",
      items: ["Github", "Gitlab", "Jest", "J-unit", "Mockito", "OpenAPI/Swagger", "Postman", "Maven", "Gradle", "Agile/Scrum", "Kanban" ]
    }
  ],
  projects: [
    {
      title: "Personal Website",
      description: "This is my portfolio website, designed with figma, developed with typesscript/react and deployed staticly with vite.",
      image: "/portfolio-screenshot.png",
      technologies: ["React", "TypeScript", "Node", "Vite", "Github Pages"],
      liveUrl: "https://www.christopherfjohnson.com/",
      githubUrl: "https://github.com/Cjohnson187/cjohnson187.github.io"
    },
    {
      title: "Big O Cheat Sheet",
      description: "A web application that provides a comprehensive cheat sheet for Big O notation, helping developers understand the time and space complexity of various algorithms and data structures. Built with React for the frontend and Node.js for the backend, this project aims to be a quick reference guide for computer science students and professionals.",
      image: "/bigO.png",
      technologies: ["React", "TypeScript", "Node.js", "Vite", "Tailwind CSS", "Netlify"],
      liveUrl: "https://iventure.dev/#bigo",
      githubUrl: "https://github.com/Cjohnson187/react-static-sandbox/tree/main/src/projects/bigO"
    },
    {
      title: "Sudoku Solver in Haskell",
      description: "A command-line Sudoku solver implemented in Haskell. This project was completed as an assignment for CS3210 (Principles of Programming Languages) in Fall 2019, demonstrating udnerstaning of functional programming concepts such as recursion, pattern matching, and high-order functions.",
      image: "/SudokuSolverScreenshot.png",
      technologies: ["Haskell"],
      // liveUrl: "https://cjohnson187.github.io/",
      githubUrl: "https://github.com/PPL-Monce-Chris/Sudoku-Solver"
    },
  ]
};
