
import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Projects section component
 * 
 * This component showcases your projects with images, descriptions,
 * and links to live demos or repositories.
 */
const Projects = () => {
  // Array of projects for easy modification
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform with shopping cart, payment integration, and user authentication.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A simple yet powerful task management application with drag-and-drop functionality and real-time updates.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Firebase", "Tailwind CSS", "DnD"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern portfolio website for showcasing projects and skills with dark/light mode toggle.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      codeLink: "#",
    },
  ];
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">My Projects</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          A collection of my recent work. Each project is unique and built with the goal of solving a specific problem.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.demoLink} 
                    className="flex items-center text-sm font-medium hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="flex items-center text-sm font-medium hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
