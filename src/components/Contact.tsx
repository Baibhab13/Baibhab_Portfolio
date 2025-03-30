
import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

/**
 * Contact section component
 * 
 * This component displays your contact information and social media links.
 */
const Contact = () => {
  // Social links for easy modification
  const socialLinks = [
    {
      name: "Email",
      icon: <Mail size={20} />,
      link: "mailto:baibhabsahu31@gmail.com",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      link: "https://github.com/Baibhab13",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      link: "https://linkedin.com/in/Baibhab07",
    },
  ];
  
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-medium mb-6">Send me a message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message"
                />
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center"
              >
                Send Message
                <ArrowRight size={16} className="ml-2" />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-medium mb-6">Contact Information</h3>
            
            <p className="text-muted-foreground mb-8">
              I'm currently a Computer Science Engineering Student at PMEC Berhampur. If you're interested in connecting, please get in touch.
            </p>
            
            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  className="flex items-center space-x-4 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                    {social.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{social.name}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">
                      {social.link.replace('mailto:', '')}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
