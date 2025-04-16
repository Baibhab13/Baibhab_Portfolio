import React from 'react';
import { User, Briefcase, Book, Code, UserCheck, FileCode, Globe, Figma, Server, Database, Cpu, ChevronRight, Trophy, Award, Users } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

/**
 * About section component
 * 
 * This component renders information about yourself, your education,
 * experience, and skills.
 */
const About = () => {
  // Skills array with icons for easy modification
  const technicalSkills = [
    { name: "C", icon: <FileCode size={16} /> },
    { name: "Python", icon: <FileCode size={16} /> },
    { name: "Kotlin", icon: <FileCode size={16} /> },
    { name: "Java", icon: <FileCode size={16} /> },
    { name: "Figma", icon: <Figma size={16} /> },
    { name: "MS Office", icon: <FileCode size={16} /> },
    { name: "HTML", icon: <Globe size={16} /> },
    { name: "CSS", icon: <Globe size={16} /> },
    { name: "React", icon: <Code size={16} /> },
    { name: "Scikit-learn", icon: <Cpu size={16} /> },
    { name: "Dagger-Hilt", icon: <Code size={16} /> },
    { name: "KSP", icon: <Code size={16} /> },
    { name: "Koin", icon: <Code size={16} /> },
    { name: "Firebase", icon: <Server size={16} /> },
    { name: "Room", icon: <Database size={16} /> },
    { name: "Seaborn", icon: <Cpu size={16} /> }
  ];
  
  const softSkills = [
    { name: "Teamwork", icon: <UserCheck size={16} /> },
    { name: "Leadership", icon: <UserCheck size={16} /> },
    { name: "Problem Solving", icon: <ChevronRight size={16} /> },
    { name: "Decision Making", icon: <ChevronRight size={16} /> }
  ];

  // Achievements array
  const achievements = [
    "Secured 3rd Prize at NIT Rourkela INNOVISION 2024 IMAGINE AI Hackathon, demonstrating AI innovation and teamwork.",
    "Won 1st Prize in the Internal Smart India Hackathon held at PMEC.",
    "Secured 2nd Prize at ML DL Workshop.",
    "Participated in the 14th Project Innovation Contest (ICDCIT–2025), showcasing technical expertise."
  ];

  // Positions of Responsibility array
  const responsibilities = [
    {
      position: "Secretary",
      description: "Led and coordinated club activities, managed communications, and oversaw event planning, driving member engagement."
    },
    {
      position: "Organizer, CodeKriti 3.0",
      description: "Managed the overall planning and execution of the college's flagship techfest."
    },
    {
      position: "Organizer, DevXtreme Hackathon",
      description: "Brought alumni mentors to guide students in full-stack development."
    },
    {
      position: "Technical Coordinator, ICORSVB 2025",
      description: "Handled all technical aspects of the international conference held at PMEC."
    },
    {
      position: "Session Coordinator, ICMIB 2025",
      description: "Coordinated session scheduling and management for the international conference."
    }
  ];
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50/50 to-purple-50/50 backdrop-blur-sm dark:from-gray-900/50 dark:to-purple-900/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title gradient-text mb-10">About Me</h2>
        
        {/* Horizontal Tabs for Personal Info, Education, and Experience */}
        <div className="mb-16">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-1 rounded-full">
              <TabsTrigger 
                value="personal" 
                className="flex items-center gap-2 px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <User size={18} />
                <span>Personal Info</span>
              </TabsTrigger>
              <TabsTrigger 
                value="education" 
                className="flex items-center gap-2 px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Book size={18} />
                <span>Education</span>
              </TabsTrigger>
              <TabsTrigger 
                value="experience" 
                className="flex items-center gap-2 px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Briefcase size={18} />
                <span>Experience</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Personal Info Tab Content */}
            <TabsContent value="personal" className="animate-in fade-in-50 mt-6">
              <div className="glass-card p-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-icon-bg))] flex items-center justify-center mr-4">
                    <User size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-medium gradient-text">Personal Info</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 dark:text-gray-300">
                  I'm a passionate developer with a keen eye for design. I enjoy creating seamless, 
                  user-centric digital experiences that solve real problems.
                </p>
                
                <div className="space-y-3">
                  <div className="info-item">
                    <span className="info-label">Name:</span>
                    <span className="info-value">Baibhab Sahu</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Email:</span>
                    <span className="info-value">baibhabsahu31@gmail.com</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Location:</span>
                    <span className="info-value">Berhampur, Odisha</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">GitHub:</span>
                    <span className="info-value">Baibhab13</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Education Tab Content */}
            <TabsContent value="education" className="animate-in fade-in-50 mt-6">
              <div className="glass-card p-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-icon-bg))] flex items-center justify-center mr-4">
                    <Book size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-medium gradient-text">Education</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="education-card">
                    <div className="education-header">
                      <h4 className="education-title">BTech in Computer Science</h4>
                      <span className="education-date">2022 - present</span>
                    </div>
                    <p className="education-school">Parala Maharaja Engineering College, Berhampur</p>
                    <p className="education-grade">CGPA: 8.7</p>
                  </div>
                  
                  <div className="education-card">
                    <div className="education-header">
                      <h4 className="education-title">Senior Secondary (CBSE Class XII)</h4>
                      <span className="education-date">2018 - 2020</span>
                    </div>
                    <p className="education-school">Kendriya Vidyalaya, Berhampur</p>
                    <p className="education-grade">Percentage: 90.8%</p>
                  </div>
                  
                  <div className="education-card">
                    <div className="education-header">
                      <h4 className="education-title">Higher Secondary (CBSE Class X)</h4>
                      <span className="education-date">2018</span>
                    </div>
                    <p className="education-school">Kendriya Vidyalaya, Berhampur</p>
                    <p className="education-grade">Percentage: 91%</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Experience Tab Content */}
            <TabsContent value="experience" className="animate-in fade-in-50 mt-6">
              <div className="glass-card p-8 animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-icon-bg))] flex items-center justify-center mr-4">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-medium gradient-text">Experience</h3>
                </div>
                
                <div className="education-card">
                  <div className="education-header">
                    <h4 className="education-title">Summer Intern</h4>
                    <span className="education-date">June - July 2024</span>
                  </div>
                  <p className="education-school">PMEC, Berhampur, Odisha</p>
                  <ul className="text-sm list-disc pl-5 space-y-2 mt-2">
                    <li className="text-muted-foreground dark:text-gray-300">Developed 3 ML projects under professors' guidance.</li>
                    <li className="text-muted-foreground dark:text-gray-300">Created a neural network for image classification with 95% accuracy on 10,000 images.</li>
                    <li className="text-muted-foreground dark:text-gray-300">Enhanced an LLM project, boosting performance by 20%.</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Achievements Section - Keeping the previous style */}
        <div className="mt-16 glass-card p-8 animate-slide-in-right delay-200">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-achievement-bg))] flex items-center justify-center mr-4">
              <Trophy size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-medium gradient-achievement">Achievements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card animate-bounce-in" 
                style={{ animationDelay: `${0.3 + 0.1 * index}s` }}>
                <Award size={18} className="text-[hsl(var(--about-achievement-bg))] mt-1 flex-shrink-0" />
                <span className="text-muted-foreground dark:text-gray-300">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Positions of Responsibility Section - Keeping the previous style */}
        <div className="mt-10 glass-card p-8 animate-slide-in-left delay-400">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-responsibility-bg))] flex items-center justify-center mr-4">
              <Users size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-medium gradient-responsibility">Positions of Responsibility</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="responsibility-card animate-bounce-in" 
                style={{ animationDelay: `${0.5 + 0.1 * index}s` }}>
                <UserCheck size={18} className="text-[hsl(var(--about-responsibility-bg))] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground dark:text-white">{responsibility.position}</h4>
                  <p className="text-sm text-muted-foreground mt-1 dark:text-gray-300">{responsibility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills - Keeping the previous style */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div className="glass-card p-8 animate-slide-in-right delay-600">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-icon-bg))] flex items-center justify-center mr-4">
                <Code size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-medium gradient-text">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 backdrop-blur-sm bg-white/70 dark:bg-black/30 rounded-full shadow-sm text-sm animate-bounce-in flex items-center gap-2"
                  style={{ animationDelay: `${0.7 + 0.05 * index}s` }}
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="glass-card p-8 animate-slide-in-left delay-700">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--about-icon-bg))] flex items-center justify-center mr-4">
                <UserCheck size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-medium gradient-text">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 backdrop-blur-sm bg-white/70 dark:bg-black/30 rounded-full shadow-sm text-sm animate-bounce-in flex items-center gap-2"
                  style={{ animationDelay: `${0.9 + 0.1 * index}s` }}
                >
                  {skill.icon}
                  {skill.name}
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
