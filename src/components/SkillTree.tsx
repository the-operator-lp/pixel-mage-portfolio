
import React from 'react';
import { Github, Code, ExternalLink, Star, GitBranch } from 'lucide-react';

const SkillTree = () => {
  const skills = [
    {
      category: "React Magic",
      projects: [
        {
          name: "Enchanted UI Component Library",
          description: "A collection of reusable UI components built with React and Styled Components",
          stars: 48,
          forks: 12,
          link: "https://github.com/pixelmage/enchanted-ui"
        },
        {
          name: "Potion State Manager",
          description: "Lightweight state management solution for React applications",
          stars: 27,
          forks: 5,
          link: "https://github.com/pixelmage/potion-state"
        }
      ]
    },
    {
      category: "Node.js Alchemy",
      projects: [
        {
          name: "Mystic API",
          description: "RESTful API framework with middleware support and automatic documentation",
          stars: 36,
          forks: 8,
          link: "https://github.com/pixelmage/mystic-api"
        },
        {
          name: "Arcane Auth",
          description: "Authentication library with support for OAuth, JWT, and session-based auth",
          stars: 42,
          forks: 14,
          link: "https://github.com/pixelmage/arcane-auth"
        }
      ]
    },
    {
      category: "Data Sorcery",
      projects: [
        {
          name: "Crystal Visualizer",
          description: "Data visualization library for creating interactive charts and graphs",
          stars: 21,
          forks: 3,
          link: "https://github.com/pixelmage/crystal-viz"
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-cinzel mb-2">Skill Tree</h2>
          <p className="font-imfell text-leather-dark italic">Magical abilities unlocked through experience</p>
          <div className="flex justify-center items-center mt-3">
            <Github className="w-5 h-5 mr-2 text-leather" />
            <a href="https://github.com/pixelmage" className="text-leather hover:text-leather-dark transition font-metamorphous text-sm underline" target="_blank" rel="noopener noreferrer">
              github.com/pixelmage
            </a>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-leather text-parchment-light px-4 py-3 rounded-t-md font-metamorphous text-sm tracking-wider flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  {skill.category}
                </div>
                
                <div className="flex-grow flex flex-col parchment rounded-b-md p-4 space-y-4">
                  {skill.projects.map((project, i) => (
                    <div key={i} className="scroll magical-glow bg-parchment-light">
                      <h3 className="text-lg font-cinzel mb-2">{project.name}</h3>
                      <p className="font-imfell text-sm mb-4">{project.description}</p>
                      
                      <div className="flex justify-between items-center border-t border-leather/20 pt-3 text-sm">
                        <div className="flex space-x-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-leather" />
                            <span>{project.stars}</span>
                          </div>
                          <div className="flex items-center">
                            <GitBranch className="w-4 h-4 mr-1 text-leather" />
                            <span>{project.forks}</span>
                          </div>
                        </div>
                        
                        <a 
                          href={project.link} 
                          className="flex items-center text-leather hover:text-leather-dark"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          <span className="font-metamorphous text-xs">VIEW</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillTree;
