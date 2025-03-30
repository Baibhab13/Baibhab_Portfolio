
import React from 'react';
import { User, Briefcase, Book } from 'lucide-react';

/**
 * About section component
 * 
 * This component renders information about yourself, your education,
 * experience, and skills.
 */
const About = () => {
  // Skills array for easy modification
  const skills = [
    "JavaScript", "React", "TypeScript", "Node.js", 
    "CSS/SCSS", "Tailwind CSS", "HTML5", "Git",
    "Responsive Design", "UI/UX Design", "RESTful APIs", "GraphQL"
  ];
  
  return (
    <section id="about" className="py-20 bg-secondary/30 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          {/* Personal Info */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in dark:bg-gray-900" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 dark:bg-gray-700">
                <User size={20} className="text-primary dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-medium">Personal Info</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 dark:text-gray-300">
              I'm a passionate web developer with a keen eye for design. I enjoy creating seamless, 
              user-centric digital experiences that solve real problems.
            </p>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>
                <span>Baibhab Sahu</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Age:</span>
                <span>30</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Location:</span>
                <span>New York, USA</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Experience:</span>
                <span>5+ Years</span>
              </div>
            </div>
          </div>
          
          {/* Experience */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in dark:bg-gray-900" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 dark:bg-gray-700">
                <Briefcase size={20} className="text-primary dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-medium">Experience</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">Senior Developer</h4>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">2021 - Present</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1 dark:text-gray-400">Acme Inc.</p>
                <p className="text-sm">Led development teams on multiple projects, specializing in React and Node.js applications.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">Web Developer</h4>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">2018 - 2021</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1 dark:text-gray-400">Tech Solutions LLC</p>
                <p className="text-sm">Developed responsive websites and applications for various clients across different industries.</p>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in dark:bg-gray-900" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 dark:bg-gray-700">
                <Book size={20} className="text-primary dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-medium">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">BTech in Computer Science</h4>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">2018 - 2022</span>
                </div>
                <p className="text-sm text-muted-foreground dark:text-gray-400">NIT Rourkela</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">Higher Secondary</h4>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">2016 - 2018</span>
                </div>
                <p className="text-sm text-muted-foreground dark:text-gray-400">DAV Public School</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">Web Development Certification</h4>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">2020</span>
                </div>
                <p className="text-sm text-muted-foreground dark:text-gray-400">freeCodeCamp</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-medium mb-6">My Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white rounded-full shadow-sm text-sm animate-fade-in dark:bg-gray-900 dark:text-gray-100"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
