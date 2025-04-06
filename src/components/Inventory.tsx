
import React from 'react';
import { Shield, Sword, Wand2, Hammer, Cpu } from 'lucide-react';

const Inventory = () => {
  const tools = [
    {
      category: "Frontend Armaments",
      items: [
        { name: "React", icon: <Shield className="w-5 h-5" />, level: 9 },
        { name: "TypeScript", icon: <Shield className="w-5 h-5" />, level: 8 },
        { name: "Next.js", icon: <Shield className="w-5 h-5" />, level: 7 },
        { name: "TailwindCSS", icon: <Wand2 className="w-5 h-5" />, level: 9 }
      ]
    },
    {
      category: "Backend Enchantments",
      items: [
        { name: "Node.js", icon: <Sword className="w-5 h-5" />, level: 8 },
        { name: "Express", icon: <Sword className="w-5 h-5" />, level: 8 },
        { name: "PostgreSQL", icon: <Cpu className="w-5 h-5" />, level: 7 },
        { name: "MongoDB", icon: <Cpu className="w-5 h-5" />, level: 7 }
      ]
    },
    {
      category: "Development Tools",
      items: [
        { name: "Git", icon: <Hammer className="w-5 h-5" />, level: 9 },
        { name: "Docker", icon: <Hammer className="w-5 h-5" />, level: 7 },
        { name: "Jest", icon: <Hammer className="w-5 h-5" />, level: 8 },
        { name: "GitHub Actions", icon: <Hammer className="w-5 h-5" />, level: 7 }
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
          <div key={i} className="h-2 bg-leather flex-1 mr-0.5 rounded-sm"></div>
        ))}
        {[...Array(emptySegments)].map((_, i) => (
          <div key={i} className="h-2 bg-leather/20 flex-1 mr-0.5 rounded-sm"></div>
        ))}
      </div>
    );
  };

  return (
    <section id="inventory" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-cinzel mb-2">Adventurer's Inventory</h2>
          <p className="font-imfell text-leather-dark italic">Tools and equipment mastered through countless quests</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((category, index) => (
              <div key={index}>
                <div className="bg-leather text-parchment-light px-4 py-3 rounded-t-md font-metamorphous tracking-wider">
                  {category.category}
                </div>
                <div className="parchment rounded-b-md p-4">
                  <div className="space-y-4">
                    {category.items.map((item, i) => (
                      <div key={i} className="bg-parchment-light p-3 rounded-md border border-leather/20">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-leather/10 flex items-center justify-center mr-2 text-leather">
                              {item.icon}
                            </div>
                            <span className="font-metamorphous">{item.name}</span>
                          </div>
                          <span className="font-cinzel text-sm">Lv.{item.level}</span>
                        </div>
                        {getLevelBar(item.level)}
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

export default Inventory;
