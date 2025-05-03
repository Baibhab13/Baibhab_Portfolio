
import React from 'react';
import { ArrowRight, Code, Layers, ExternalLink, CheckSquare, FileText, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Projects section component
 * 
 * This component showcases your projects with images, descriptions,
 * and links to live demos or repositories.
 */
const Projects = () => {
  const isMobile = useIsMobile();
  
  const projects = [
    {
      id: 1,
      title: "Farm 2 You",
      description: "Developed an Android app using Jetpack Compose and Android Studio for SIII. The app connects farmers directly with markets, eliminating intermediaries. Features include an intuitive UI, smooth navigation, and an AI assistant for informed decision-making.",
      image: "https://images.unsplash.com/photo-150093738664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      tags: ["Android", "Jetpack Compose", "AI", "Kotlin"],
      demoLink: "#",
      codeLink: "#",
      icon: <Layers className="text-primary" />
    },
    {
      id: 2,
      title: "Todo App",
      description: "A comprehensive Android todo application built with Jetpack Compose for the frontend and Room database for local data persistence. Features include add, edit, delete, and mark tasks as complete with a modern, responsive UI.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
      tags: ["Android", "Jetpack Compose", "Room Database", "Kotlin"],
      demoLink: "#",
      codeLink: "https://github.com/baibhav1314/Todo",
      icon: <CheckSquare className="text-primary" />
    },
    {
      id: 3,
      title: "Resume Categorization",
      description: "Developed a system to automatically categorize resumes based on job descriptions using natural language processing and machine learning techniques, streamlining the HR recruitment process.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "NLP", "Machine Learning", "Data Analysis"],
      demoLink: "#",
      codeLink: "https://github.com/baibhav1314/Resume-categoriazation",
      icon: <FileText className="text-primary" />
    },
    {
      id: 4,
      title: "Attendance Tracker",
      description: "A comprehensive attendance management system that allows institutions to track student attendance efficiently. Features include automated reports, attendance status visualization, and Excel export functionality.",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "HTML", "CSS", "Frontend"],
      demoLink: "#",
      codeLink: "https://github.com/baibhav1314/Attendence-Tracker",
      icon: <Calendar className="text-primary" />
    },
    {
      id: 5,
      title: "FarmConnect",
      description: "Created for the Project Innovation Contest ICDCIT 2025, this app enables secure transactions and contract farming. Built with Jetpack Compose and Android Studio, it provides fraud protection and an AI assistant.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      tags: ["Android", "Jetpack Compose", "AI", "Security"],
      demoLink: "#",
      codeLink: "#",
      icon: <Layers className="text-primary" />
    },
    {
      id: 6,
      title: "Laptop Price Prediction",
      description: "Developed a user-friendly web app with Streamlit, allowing users to input laptop features and receive price predictions using an ML model trained on market data.",
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Streamlit", "Machine Learning", "Data Analysis"],
      demoLink: "#",
      codeLink: "#",
      icon: <Code className="text-primary" />
    },
  ];
  
  return (
    <section id="projects" className="py-12 md:py-20 bg-gradient-to-b from-purple-50/30 to-blue-50/30 backdrop-blur-sm dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title gradient-text text-2xl md:text-3xl mb-4 md:mb-6">My Projects</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 md:mb-12">
          A collection of my recent work. Each project is unique and built with the goal of solving a specific problem.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden border border-primary/10 bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 h-full flex flex-col"
              style={{ 
                animationDelay: `${0.1 * index}s`,
                opacity: 0,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              {/* Project Image with Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1545239351-cefa43af60f3?q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                </div>
              </div>
              
              <CardHeader className="flex flex-row items-center gap-2 p-4 md:p-5 pb-0">
                <span className="p-2 rounded-md bg-primary/10 dark:bg-primary/20 shrink-0">
                  {project.icon}
                </span>
                <h3 className="text-lg md:text-xl font-medium line-clamp-1">{project.title}</h3>
              </CardHeader>
              
              <CardContent className="p-4 md:p-5 flex-grow">
                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm md:text-base">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-primary/5 text-primary/90 dark:bg-primary/10 dark:text-primary-foreground border-primary/20 text-xs md:text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between p-4 md:p-5 pt-0 gap-2 mt-auto">
                <Button
                  variant="outline"
                  size={isMobile ? "sm" : "sm"}
                  className="transition-all duration-300 group-hover:border-primary group-hover:text-primary flex-1 text-xs md:text-sm"
                  asChild
                >
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={isMobile ? 14 : 16} className="mr-1" />
                    Demo
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size={isMobile ? "sm" : "sm"}
                  className="transition-all duration-300 group-hover:border-primary group-hover:text-primary flex-1 text-xs md:text-sm"
                  asChild
                >
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Code size={isMobile ? 14 : 16} className="mr-1" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
