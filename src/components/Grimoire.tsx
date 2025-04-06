
import React from 'react';
import { Shield, Sword, Wand2, HardDrive, Database, Cpu } from 'lucide-react';

const Grimoire = () => {
  const tools = [
    {
      category: "Frontend Weapons",
      items: [
        { name: "React.js", icon: <Shield className="w-4 h-4" />, level: 9, desc: "Shield of Component Rendering" },
        { name: "TypeScript", icon: <Shield className="w-4 h-4" />, level: 8, desc: "Armor of Type Safety" },
        { name: "Next.js", icon: <Shield className="w-4 h-4" />, level: 7, desc: "Helm of Server-Side Rendering" },
        { name: "TailwindCSS", icon: <Wand2 className="w-4 h-4" />, level: 9, desc: "Wand of Responsive Styling" }
      ]
    },
    {
      category: "Backend Arsenal",
      items: [
        { name: "Node.js", icon: <Sword className="w-4 h-4" />, level: 8, desc: "Sword of Server Execution" },
        { name: "Express", icon: <Sword className="w-4 h-4" />, level: 8, desc: "Dagger of API Routing" },
        { name: "PostgreSQL", icon: <Database className="w-4 h-4" />, level: 7, desc: "Tome of Relational Data" },
        { name: "Redis", icon: <Database className="w-4 h-4" />, level: 6, desc: "Potion of In-Memory Caching" }
      ]
    },
    {
      category: "DevOps Relics",
      items: [
        { name: "Docker", icon: <HardDrive className="w-4 h-4" />, level: 7, desc: "Scroll of Containerization" },
        { name: "AWS", icon: <Cpu className="w-4 h-4" />, level: 6, desc: "Staff of Cloud Infrastructure" },
        { name: "GitHub Actions", icon: <HardDrive className="w-4 h-4" />, level: 8, desc: "Amulet of CI/CD" },
        { name: "Kubernetes", icon: <Cpu className="w-4 h-4" />, level: 5, desc: "Orb of Container Orchestration" }
      ]
    }
  ];

  const getLevelBar = (level: number) => {
    const maxLevel = 10;
    const filledSegments = level;
    const emptySegments = maxLevel - level;
    
    return (
      <div className="flex w-full">
        {[...Array(filledSegments)].map((_, i) => (
          <div key={i} className="h-1 bg-gray-500 flex-1 mr-0.5 rounded-sm"></div>
        ))}
        {[...Array(emptySegments)].map((_, i) => (
          <div key={i} className="h-1 bg-gray-800 flex-1 mr-0.5 rounded-sm"></div>
        ))}
      </div>
    );
  };

  return (
    <section id="grimoire" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl font-jetbrains mb-2 text-gray-300">THE GRIMOIRE</h2>
          <p className="font-jetbrains text-xs text-gray-500">
            <span className="text-gray-400">$ find</span> /usr/bin/tools -type f -name "*.skill"
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((category, index) => (
              <div key={index}>
                <div className="bg-gray-900 text-gray-300 px-3 py-2 rounded-t-sm font-jetbrains text-xs tracking-wider">
                  {category.category}
                </div>
                <div className="bg-[#0a0a0a] rounded-b-sm p-4 border-x border-b border-gray-800">
                  <div className="space-y-4">
                    {category.items.map((item, i) => (
                      <div key={i} className="bg-gray-900 p-3 rounded-sm border border-gray-800">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-sm bg-gray-800 flex items-center justify-center mr-2">
                              {item.icon}
                            </div>
                            <span className="font-jetbrains text-xs text-gray-300">{item.name}</span>
                          </div>
                          <span className="font-jetbrains text-xs text-gray-500">Lv.{item.level}</span>
                        </div>
                        
                        {getLevelBar(item.level)}
                        
                        <div className="mt-2 text-[10px] text-gray-500 italic">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grimoire;
