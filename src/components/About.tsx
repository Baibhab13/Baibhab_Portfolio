
import React from 'react';
import { User, Briefcase, Book, Code, UserCheck } from 'lucide-react';

/**
 * About section component
 * 
 * This component renders information about yourself, your education,
 * experience, and skills.
 */
const About = () => {
  // Skills array for easy modification - updated from resume
  const technicalSkills = [
    "C", "Python", "Kotlin", "Java", "Figma", "MS Office", "HTML", "CSS", 
    "React", "Scikit-learn", "Dagger-Hilt", "KSP", "Koin", "Firebase", "Room", "Seaborn"
  ];
  
  const softSkills = [
    "Teamwork", "Leadership", "Problem Solving", "Decision Making"
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
              I'm a passionate developer with a keen eye for design. I enjoy creating seamless, 
              user-centric digital experiences that solve real problems.
            </p>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>
                <span>Baibhab Sahu</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span>baibhabsahu31@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Location:</span>
                <span>Berhampur, Odisha</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">GitHub:</span>
                <span>Baibhab13</span>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in dark:bg-gray-900" style={{ animationDelay: '0.4s' }}>
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
                  <span className="text-sm text-muted-foreground dark:text-gray-400">2022 - present</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1 dark:text-gray-400">Parala Maharaja Engineering College, Berhampur</p>
                <p className="text-sm">CGPA: 8.7</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">Senior Secondary (CBSE Class XII)</h4>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">2018 - 2020</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1 dark:text-gray-400">Kendriya Vidyalaya, Berhampur</p>
                <p className="text-sm">Percentage: 90.8%</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">Higher Secondary (CBSE Class X)</h4>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">2018</span>
                </div>
                <p className="text-sm text-muted-foreground dark:text-gray-400">Kendriya Vidyalaya, Berhampur</p>
                <p className="text-sm">Percentage: 91%</p>
              </div>
            </div>
          </div>
          
          {/* Experience */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in dark:bg-gray-900" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 dark:bg-gray-700">
                <Briefcase size={20} className="text-primary dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-medium">Experience</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">Summer Intern</h4>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">June 2024 - July 2024</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1 dark:text-gray-400">PMEC, Berhampur, Odisha</p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>Developed 3 ML projects under professors' guidance.</li>
                  <li>Created a neural network for image classification with 95% accuracy on 10,000 images.</li>
                  <li>Enhanced an LLM project, boosting performance by 20%.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in dark:bg-gray-900" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 dark:bg-gray-700">
                <Code size={20} className="text-primary dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-medium">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-secondary rounded-full shadow-sm text-sm animate-fade-in dark:bg-gray-800 dark:text-gray-100"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in dark:bg-gray-900" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 dark:bg-gray-700">
                <UserCheck size={20} className="text-primary dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-medium">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-secondary rounded-full shadow-sm text-sm animate-fade-in dark:bg-gray-800 dark:text-gray-100"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
