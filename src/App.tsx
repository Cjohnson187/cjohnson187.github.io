    import React from 'react';

    const App = () => {
      // This text should render if the React root is mounted correctly.
      return (
        <div 
          className="text-center p-20 min-h-screen" 
          style={{ backgroundColor: '#cc0000', color: 'white', fontSize: '2rem' }}
        >
          SUCCESS: REACT APP IS RENDERING!
        </div>
      );
    };

    export default App;
    


// import { Navigation } from './components/Navigation';
// import { ProjectCard } from './components/ProjectCard';
// import { Button } from './components/ui/button';
// import { Badge } from './components/ui/badge';
// import { Card, CardContent } from './components/ui/card';
// import { ImageWithFallback } from './components/figma/ImageWithFallback';
// import { Mail, Code2, Database, Globe, Smartphone, Cloud } from 'lucide-react';
// import { portfolioData } from './portfolio-data';

// // Icon mapping for skills
// const iconMap = {
//   Globe,
//   Database,
//   Smartphone,
//   Code2,
//   Cloud,
// };

// export default function App() {
//   const { personal, contact, about, skills, projects } = portfolioData;

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Hero Section */}
//       <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-8 flex justify-center">
//             <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-primary/10">
//               <ImageWithFallback
//                 src={personal.image}
//                 alt={`${personal.name} - Professional headshot`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//           <h1 className="mb-6">Hi, I'm {personal.name}</h1>
//           <h2 className="text-muted-foreground mb-8">
//             {personal.title}
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
//             {personal.bio}
//           </p>
//           <div className="flex gap-4 justify-center">
//             <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
//               Get In Touch
//             </Button>
//             <Button size="lg" variant="outline" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
//               View Projects
//             </Button>
//           </div>
//           <div className="flex gap-4 justify-center mt-8">
//             <Button variant="ghost" size="icon" asChild>
//               <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
//                   <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.813 1.102.813 2.222 0 1.606-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
//                 </svg>
//               </a>
//             </Button>
//             <Button variant="ghost" size="icon" asChild>
//               <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
//                   <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.8c0-1.86-.03-4.27-2.6-4.27-2.6 0-3 2.04-3 4.14V24h-5V8z"/>
//                 </svg>
//               </a>
//             </Button>
//             <Button variant="ghost" size="icon" asChild>
//               <a href={`mailto:${contact.email}`}>
//                 <Mail className="h-5 w-5" />
//               </a>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="mb-8 text-center">About Me</h2>
//           <div className="space-y-4 text-muted-foreground">
//             {about.paragraphs.map((paragraph) => (
//               <p key={paragraph}>{paragraph}</p>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="mb-12 text-center">Skills & Technologies</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {skills.map((skill) => {
//               const Icon = iconMap[skill.icon as keyof typeof iconMap];
//               return (
//                 <Card key={skill.category}>
//                   <CardContent className="pt-6">
//                     <div className="flex items-center gap-2 mb-4">
//                       <Icon className="h-5 w-5 text-primary" />
//                       <h3>{skill.category}</h3>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {skill.items.map((item) => (
//                         <Badge key={item} variant="secondary">
//                           {item}
//                         </Badge>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       {/* update projects and links in portfolio data file */}
//       <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="mb-4 text-center">Featured Projects</h2>
//           <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//             Here are some of my recent projects that showcase my skills and experience in building modern web applications.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project) => (
//               <ProjectCard key={project.title} {...project} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="mb-4">Let's Work Together</h2>
//           <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
//             I'm always interested in hearing about new projects and opportunities. 
//             Whether you have a question or just want to say hi, feel free to reach out!
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" asChild>
//               <a href={`mailto:${contact.email}`}>
//                 <Mail className="mr-2 h-5 w-5" />
//                 Send Email
//               </a>
//             </Button>
//             <Button size="lg" variant="outline" asChild>
//               <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
//                 <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="currentColor">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.849-3.036-1.85 0-2.134 1.445-2.134 2.939v5.666H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.268 2.369 4.268 5.451v6.29zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.143 0 2.07.927 2.07 2.07 0 1.143-.927 2.07-2.07 2.07zM6.818 20.452H3.855V9h2.963v11.452z"/>
//                 </svg>
//                 Connect on LinkedIn
//               </a>
//             </Button>
//           </div>
//         </div>
//       </section>
//       {/* Footer */}
//       <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
//         <div className="max-w-6xl mx-auto text-center text-muted-foreground">
//           <p>© 2025 {personal.name}. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }