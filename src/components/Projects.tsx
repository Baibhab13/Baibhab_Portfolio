
import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Projects section component
 * 
 * This component showcases your projects with images, descriptions,
 * and links to live demos or repositories.
 */
const Projects = () => {
  // Array of projects for easy modification - updated from resume
  const projects = [
    {
      id: 1,
      title: "Farm 2 You",
      description: "Developed an Android app using Jetpack Compose and Android Studio for SIII. The app connects farmers directly with markets, eliminating intermediaries. Features include an intuitive UI, smooth navigation, and an AI assistant for informed decision-making.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      tags: ["Android", "Jetpack Compose", "AI", "Kotlin"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "FarmConnect",
      description: "Created for the Project Innovation Contest ICDCIT 2025, this app enables secure transactions and contract farming. Built with Jetpack Compose and Android Studio, it provides fraud protection and an AI assistant.",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?auto=format&fit=crop&w=800&q=80",
      tags: ["Android", "Jetpack Compose", "AI", "Security"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Laptop Price Prediction",
      description: "Developed a user-friendly web app with Streamlit, allowing users to input laptop features and receive price predictions using an ML model trained on market data.",
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Streamlit", "Machine Learning", "Data Analysis"],
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
