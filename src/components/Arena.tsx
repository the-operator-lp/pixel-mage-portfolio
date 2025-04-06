
import React from 'react';
import { Trophy, Swords, Hash, Code, Target } from 'lucide-react';

const Arena = () => {
  const leetCodeStats = {
    rank: 8642,
    totalSolved: 387,
    easyProblems: 142,
    mediumProblems: 204,
    hardProblems: 41,
    languages: ['JavaScript', 'Python', 'C++'],
    contests: [
      {
        name: "Weekly Contest 347",
        rank: 983,
        solved: 3,
        total: 4,
        date: "2023-10-28"
      },
      {
        name: "Biweekly Contest 118",
        rank: 654,
        solved: 4,
        total: 4,
        date: "2023-10-14"
      }
    ]
  };

  return (
    <section id="arena" className="py-16 bg-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl font-jetbrains mb-2 text-gray-300">THE ARENA</h2>
          <p className="font-jetbrains text-xs text-gray-500">
            <span className="text-gray-400">$ cat</span> /var/log/battle_records.log
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="terminal mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <div className="text-gray-500 text-xs mb-1">&gt; CURRENT_RANK</div>
                <div className="flex items-center justify-center md:justify-start">
                  <Trophy className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="font-jetbrains text-2xl text-gray-300">{leetCodeStats.rank}</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center px-4 py-3 bg-gray-900 rounded-sm">
                <div className="text-gray-500 text-[10px] mb-1">TOTAL_VICTORIES</div>
                <div className="text-2xl font-jetbrains text-gray-300">{leetCodeStats.totalSolved}</div>
              </div>
            </div>
            
            {/* Stats bars */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-900 rounded-sm p-3 text-center">
                <div className="text-[10px] text-gray-500 mb-1">EASY</div>
                <div className="text-lg font-bold text-green-500">{leetCodeStats.easyProblems}</div>
              </div>
              <div className="bg-gray-900 rounded-sm p-3 text-center">
                <div className="text-[10px] text-gray-500 mb-1">MEDIUM</div>
                <div className="text-lg font-bold text-yellow-500">{leetCodeStats.mediumProblems}</div>
              </div>
              <div className="bg-gray-900 rounded-sm p-3 text-center">
                <div className="text-[10px] text-gray-500 mb-1">HARD</div>
                <div className="text-lg font-bold text-red-500">{leetCodeStats.hardProblems}</div>
              </div>
            </div>
            
            {/* Languages */}
            <div className="mb-6">
              <div className="text-gray-500 text-xs mb-2">&gt; BATTLE_LANGUAGES</div>
              <div className="flex flex-wrap gap-2">
                {leetCodeStats.languages.map((language, index) => (
                  <div key={index} className="px-3 py-1 bg-gray-900 rounded-sm border border-gray-800 flex items-center">
                    <Code className="w-3 h-3 text-gray-500 mr-1" />
                    <span className="text-gray-400 text-xs">{language}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recent contests */}
            <div>
              <div className="text-gray-500 text-xs mb-2">&gt; RECENT_TOURNAMENTS</div>
              <div className="space-y-4">
                {leetCodeStats.contests.map((contest, index) => (
                  <div key={index} className="bg-gray-900 p-3 rounded-sm border border-gray-800">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-jetbrains text-sm text-gray-300">{contest.name}</h4>
                      <div className="text-[10px] text-gray-500">{contest.date}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-[10px]">
                          <Hash className="w-3 h-3 text-gray-500 mr-1" />
                          <span className="text-gray-500">RANK:</span>
                        </div>
                        <span className="text-[10px] text-gray-300">{contest.rank}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-[10px]">
                          <Target className="w-3 h-3 text-gray-500 mr-1" />
                          <span className="text-gray-500">SOLVED:</span>
                        </div>
                        <span className="text-[10px] text-gray-300">{contest.solved}/{contest.total}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-gray-900 px-4 py-2 rounded-sm border border-gray-800">
              <div className="flex items-center text-xs">
                <Swords className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-gray-500 font-jetbrains">COMBAT_EFFICIENCY:</span>
                <span className="text-gray-300 ml-1 font-bold">94.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arena;
