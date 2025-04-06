
import React from 'react';
import { Calendar, Award, Scroll, ArrowRight } from 'lucide-react';
import questData from "@/data/quest.json";

const QuestTome = () => {
  const quests = questData

  return (
    <section id="quests" className="py-16 bg-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl font-jetbrains mb-2 text-gray-300">THE QUEST TOME</h2>
          <p className="font-jetbrains text-xs text-gray-500">
            <span className="text-gray-400">$ cat</span> /var/log/professional_campaigns.log
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {quests.map((quest, index) => (
            <div key={index} className="mb-8">
              <div className="terminal relative">
                {/* Terminal header */}
                <div className="flex items-center mb-4 pb-3 border-b border-gray-800">
                  <div className="flex space-x-1.5 absolute top-4 left-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                  </div>
                  
                  <div className="w-full text-center text-gray-500 text-xs">
                    quest_{index + 1}.exe
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-gray-500 text-xs mb-1">&gt; ROLE:</div>
                    <h3 className="text-lg font-jetbrains font-bold text-gray-200">{quest.title}</h3>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <Scroll className="w-3 h-3 mr-1" />
                      <span>{quest.company}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 md:mt-0 text-right">
                    <div className="flex items-center justify-end text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{quest.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4 text-gray-400 text-sm border-l-2 border-gray-800 pl-3">
                  <p className="font-jetbrains">{quest.description}</p>
                </div>
                
                <div className="mb-4">
                  <div className="text-gray-500 text-xs mb-2">&gt; KEY_ACHIEVEMENTS:</div>
                  <ul className="space-y-1 text-gray-400 text-xs">
                    {quest.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gray-600 mr-2">$</span>
                        <span className="font-jetbrains">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="text-gray-500 text-xs mb-2">&gt; SKILLS_IMPROVED:</div>
                  {quest.skills.map((skill, i) => (
                    <div key={i} className="mb-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}/100</span>
                      </div>
                      <div className="progress-bar mt-1">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-end border-t border-gray-800 pt-3">
                  <div className="flex items-center bg-gray-800 px-3 py-1 rounded-sm">
                    <Award className="w-3 h-3 text-gray-400 mr-1" />
                    <span className="font-jetbrains text-xs text-gray-500 mr-1">XP_GAINED:</span>
                    <span className="font-bold text-gray-300">{quest.xp}</span>
                  </div>
                </div>
              </div>
              
              {index < quests.length - 1 && (
                <div className="flex justify-center my-4">
                  <ArrowRight className="w-4 h-4 text-gray-700" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestTome;
