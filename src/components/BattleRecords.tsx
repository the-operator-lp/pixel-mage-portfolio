
import React from 'react';
import { Trophy, Swords, Code, Hash } from 'lucide-react';

const BattleRecords = () => {
  const leetCodeStats = {
    rank: 12485,
    totalSolved: 237,
    easyProblems: 86,
    mediumProblems: 113,
    hardProblems: 38,
    languages: ['JavaScript', 'Python', 'Java'],
    badges: ['100 Days Badge', 'Weekly Contest Winner', 'Streak Master']
  };
  
  const contests = [
    {
      name: "Weekly Contest 341",
      rank: 1245,
      solvedProblems: 3,
      totalProblems: 4,
      date: "2023-10-15"
    },
    {
      name: "Biweekly Contest 112",
      rank: 876,
      solvedProblems: 4,
      totalProblems: 4,
      date: "2023-09-30"
    }
  ];

  return (
    <section id="battles" className="py-16 bg-leather/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-cinzel mb-2">Battle Records</h2>
          <p className="font-imfell text-leather-dark italic">Challenges conquered through logic and code</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="scroll mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <div className="font-metamorphous text-sm text-leather mb-1">ADVENTURER RANK</div>
                <div className="flex items-center justify-center md:justify-start">
                  <Trophy className="w-5 h-5 text-leather mr-2" />
                  <span className="font-cinzel text-2xl">{leetCodeStats.rank}</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center px-6 py-3 bg-leather rounded-md text-parchment-light">
                <div className="font-metamorphous text-xs mb-1">TOTAL BATTLES WON</div>
                <div className="text-3xl font-cinzel">{leetCodeStats.totalSolved}</div>
              </div>
            </div>
            
            {/* Problem difficulty stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="parchment rounded-md p-3 text-center">
                <div className="font-metamorphous text-xs text-leather mb-1">EASY</div>
                <div className="text-xl font-bold text-green-600">{leetCodeStats.easyProblems}</div>
              </div>
              <div className="parchment rounded-md p-3 text-center">
                <div className="font-metamorphous text-xs text-leather mb-1">MEDIUM</div>
                <div className="text-xl font-bold text-amber-600">{leetCodeStats.mediumProblems}</div>
              </div>
              <div className="parchment rounded-md p-3 text-center">
                <div className="font-metamorphous text-xs text-leather mb-1">HARD</div>
                <div className="text-xl font-bold text-red-600">{leetCodeStats.hardProblems}</div>
              </div>
            </div>
            
            {/* Languages */}
            <div className="mb-8">
              <h3 className="font-cinzel text-lg mb-4">Spell Languages</h3>
              <div className="flex flex-wrap gap-2">
                {leetCodeStats.languages.map((language, index) => (
                  <div key={index} className="px-3 py-1 bg-leather/10 rounded-full border border-leather/30">
                    <div className="flex items-center">
                      <Code className="w-4 h-4 text-leather mr-1" />
                      <span className="font-metamorphous text-sm">{language}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Badges */}
            <div>
              <h3 className="font-cinzel text-lg mb-4">Achievement Badges</h3>
              <div className="flex flex-wrap gap-3">
                {leetCodeStats.badges.map((badge, index) => (
                  <div key={index} className="flex items-center px-3 py-2 bg-parchment-dark rounded-md border border-leather/30">
                    <div className="w-8 h-8 rounded-full bg-leather flex items-center justify-center mr-2">
                      <Trophy className="w-4 h-4 text-parchment-light" />
                    </div>
                    <span className="font-imfell text-sm">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Recent Contests */}
          <div>
            <h3 className="font-cinzel text-xl mb-4 text-center">Recent Tournament Battles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {contests.map((contest, index) => (
                <div key={index} className="scroll">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-cinzel text-lg">{contest.name}</h4>
                    <div className="text-sm font-imfell text-leather">{contest.date}</div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Hash className="w-4 h-4 text-leather mr-1" />
                      <span className="font-metamorphous text-sm">Rank:</span>
                    </div>
                    <span className="font-bold">{contest.rank}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Swords className="w-4 h-4 text-leather mr-1" />
                      <span className="font-metamorphous text-sm">Problems Solved:</span>
                    </div>
                    <span className="font-bold">{contest.solvedProblems}/{contest.totalProblems}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BattleRecords;
