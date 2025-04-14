
import React from 'react';
import { User, Briefcase, Book, Code, UserCheck, FileCode, Globe, Figma, Server, Database, Cpu, ChevronRight, Trophy, Award, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

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
    <section id="about" className="py-20 bg-gradient-to-b from-teal-50/80 to-indigo-50/80 dark:from-gray-900/80 dark:to-indigo-950/80">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-medium mb-10 text-center">
          <span className="gradient-text">About Me</span>
        </h2>
        
        {/* Main grid layout with new arrangement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Personal Info - Taking up 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="neo-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <User size={20} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="gradient-text">Personal Info</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="personal-info-grid">
                  <div className="info-label">Name:</div>
                  <div className="info-value">Baibhab Sahu</div>
                  
                  <div className="info-label">Email:</div>
                  <div className="info-value">baibhabsahu31@gmail.com</div>
                  
                  <div className="info-label">Location:</div>
                  <div className="info-value">Berhampur, Odisha</div>
                  
                  <div className="info-label">GitHub:</div>
                  <div className="info-value">Baibhab13</div>
                </div>
                
                <p className="text-muted-foreground mt-4 border-t border-border pt-4 dark:text-gray-300">
                  I'm a passionate developer with a keen eye for design. I enjoy creating seamless, 
                  user-centric digital experiences that solve real problems.
                </p>
              </CardContent>
            </Card>
            
            {/* Skills combined in one card */}
            <Card className="neo-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Code size={20} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="gradient-text">Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <h3 className="text-lg font-medium mb-3 text-foreground/90 dark:text-gray-200">Technical</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {technicalSkills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="skill-badge animate-scale-in" 
                      style={{ animationDelay: `${0.1 + 0.05 * index}s` }}>
                      <span className="mr-1">{skill.icon}</span> {skill.name}
                    </Badge>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <h3 className="text-lg font-medium mb-3 text-foreground/90 dark:text-gray-200">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="skill-badge animate-scale-in"
                      style={{ animationDelay: `${0.3 + 0.1 * index}s` }}>
                      <span className="mr-1">{skill.icon}</span> {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Middle section - Taking up 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="neo-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Book size={20} className="text-accent-foreground" />
                  </div>
                  <CardTitle className="gradient-text">Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="education-card">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-foreground dark:text-white">BTech in Computer Science</h4>
                    <span className="text-xs bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded-full">2022 - present</span>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mb-1">Parala Maharaja Engineering College, Berhampur</p>
                  <p className="text-sm font-medium text-primary dark:text-primary">CGPA: 8.7</p>
                </div>
                
                <div className="education-card">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-foreground dark:text-white">Senior Secondary (CBSE XII)</h4>
                    <span className="text-xs bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded-full">2018 - 2020</span>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mb-1">Kendriya Vidyalaya, Berhampur</p>
                  <p className="text-sm font-medium text-primary dark:text-primary">Percentage: 90.8%</p>
                </div>
                
                <div className="education-card">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-foreground dark:text-white">Higher Secondary (CBSE X)</h4>
                    <span className="text-xs bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded-full">2018</span>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mb-1">Kendriya Vidyalaya, Berhampur</p>
                  <p className="text-sm font-medium text-primary dark:text-primary">Percentage: 91%</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Experience Card */}
            <Card className="neo-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Briefcase size={20} className="text-accent-foreground" />
                  </div>
                  <CardTitle className="gradient-text">Experience</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="experience-card">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-foreground dark:text-white">Summer Intern</h4>
                    <span className="text-xs bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded-full">June - July 2024</span>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">PMEC, Berhampur, Odisha</p>
                  <ul className="text-sm space-y-2 pl-5 list-disc">
                    <li className="text-muted-foreground dark:text-gray-300">Developed 3 ML projects under professors' guidance.</li>
                    <li className="text-muted-foreground dark:text-gray-300">Created a neural network for image classification with 95% accuracy on 10,000 images.</li>
                    <li className="text-muted-foreground dark:text-gray-300">Enhanced an LLM project, boosting performance by 20%.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right section - Taking up 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            {/* Achievements Card */}
            <Card className="neo-card animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center">
                    <Trophy size={20} className="text-destructive-foreground" />
                  </div>
                  <CardTitle className="gradient-achievement">Achievements</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                {achievements.map((achievement, index) => (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <div className="achievement-item animate-fade-in" style={{ animationDelay: `${0.6 + 0.1 * index}s` }}>
                        <Award size={18} className="text-destructive flex-shrink-0" />
                        <p className="text-sm text-muted-foreground dark:text-gray-300 line-clamp-1">
                          {achievement.split(',')[0]}...
                        </p>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-4">
                      <p className="text-sm">{achievement}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </CardContent>
            </Card>
            
            {/* Responsibilities Card */}
            <Card className="neo-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Users size={20} className="text-secondary-foreground" />
                  </div>
                  <CardTitle className="gradient-responsibility">Responsibilities</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                {responsibilities.map((responsibility, index) => (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <div className="responsibility-item animate-fade-in" style={{ animationDelay: `${0.7 + 0.1 * index}s` }}>
                        <UserCheck size={18} className="text-secondary-foreground/70 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground dark:text-white">{responsibility.position}</h4>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-4">
                      <h4 className="font-medium mb-2">{responsibility.position}</h4>
                      <p className="text-sm">{responsibility.description}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
