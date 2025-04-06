
import React from 'react';
import { MapPin, Calendar, Award, BookOpen } from 'lucide-react';

const QuestLog = () => {
  const quests = [
    {
      title: "Senior Code Enchanter",
      company: "Arcane Technologies",
      period: "2021 - Present",
      description: "Led a team of 5 developers in crafting powerful web applications using React and Node.js. Developed arcane code solutions that improved site performance by 40%.",
      achievements: ["Implemented CI/CD spells", "Mentored 7 junior wizards", "Refactored legacy enchantments"],
      xp: 2500,
      icon: <BookOpen className="w-10 h-10" />
    },
    {
      title: "Full-Stack Alchemist",
      company: "Eldritch Solutions Inc.",
      period: "2018 - 2021",
      description: "Transformed raw requirements into elegant code solutions using Vue.js and Express. Created responsive user interfaces with mystical animations.",
      achievements: ["Developed REST API potions", "Reduced loading times by 60%", "Integrated third-party spell components"],
      xp: 1800,
      icon: <BookOpen className="w-10 h-10" />
    },
    {
      title: "Frontend Apprentice",
      company: "Novice Guild Co.",
      period: "2016 - 2018",
      description: "Learned the basics of web development magic. Crafted HTML, CSS, and JavaScript spells to create interactive user experiences.",
      achievements: ["Mastered responsive design incantations", "Built jQuery components", "Implemented CSS animations"],
      xp: 1200,
      icon: <BookOpen className="w-10 h-10" />
    }
  ];

  return (
    <section id="quests" className="py-16 bg-leather/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-cinzel mb-2">Quest Log</h2>
          <p className="font-imfell text-leather-dark italic">Chronicles of professional adventures</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {quests.map((quest, index) => (
            <div key={index} className="mb-8">
              <div className="scroll relative">
                {/* Quest header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pb-4 border-b border-leather/20">
                  <div className="flex-1">
                    <h3 className="text-xl font-cinzel font-bold">{quest.title}</h3>
                    <div className="flex items-center mt-1">
                      <MapPin className="w-4 h-4 text-leather mr-1" />
                      <span className="text-sm font-metamorphous text-leather">{quest.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 text-leather mr-1" />
                    <span className="text-sm font-imfell">{quest.period}</span>
                  </div>
                </div>
                
                {/* Quest details */}
                <div className="mb-4">
                  <p className="font-imfell">{quest.description}</p>
                </div>
                
                {/* Quest achievements */}
                <div className="mb-6">
                  <h4 className="font-metamorphous text-sm text-leather mb-2">QUEST ACHIEVEMENTS:</h4>
                  <ul className="space-y-1">
                    {quest.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-leather-dark mr-2">•</span>
                        <span className="font-imfell">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* XP gained */}
                <div className="flex items-center justify-end border-t border-leather/20 pt-3">
                  <div className="flex items-center bg-leather/10 px-3 py-1 rounded-full">
                    <Award className="w-4 h-4 text-leather mr-1" />
                    <span className="font-metamorphous text-xs mr-1">XP GAINED:</span>
                    <span className="font-bold text-leather">{quest.xp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestLog;
