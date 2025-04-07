import React, { useState, useEffect } from 'react';
import { Map, Compass } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

// Interactive realm map component with Japanese elements
const RealmMap = () => {
  const [activeRealm, setActiveRealm] = useState<string | null>(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  // Realm data with coordinates and descriptions
  const realms = [
    { id: 'abyss', name: '深淵', engName: 'The Abyss', x: 20, y: 80, description: 'Endless void where forgotten code resides' },
    { id: 'nexus', name: '結合点', engName: 'The Nexus', x: 50, y: 50, description: 'Central hub connecting all digital realms' },
    { id: 'archive', name: '古文書館', engName: 'The Archives', x: 80, y: 30, description: 'Repository of ancient knowledge and algorithms' },
    { id: 'forge', name: '鍛冶場', engName: 'The Forge', x: 30, y: 40, description: 'Where new code is tempered and hardened' },
    { id: 'void', name: '虚空', engName: 'The Void', x: 70, y: 70, description: 'Realm of untapped potential and possibilities' },
  ];

  // Update coordinates on mouse move over map
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setCoordinates({ x, y });
  };

  // Handle realm node click
  const handleRealmClick = (realmId: string) => {
    setActiveRealm(activeRealm === realmId ? null : realmId);
  };

  return (
    <section className="py-12 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-jetbrains mb-2 text-gray-300">
              <span lang="ja" className="block text-sm text-gray-500 mb-1">世界地図</span>
              REALM ATLAS
            </h2>
            <p className="text-xs text-gray-500 font-jetbrains">
              <span className="text-gray-400">$</span> ./navigate_realms.sh --verbose
            </p>
          </div>
          
          <div className="relative border border-gray-800 rounded-md overflow-hidden bg-[#0d0d0d]">
            {/* Map container */}
            <div 
              className="relative w-full h-64 md:h-80" 
              onMouseMove={handleMouseMove}
            >
              {/* Grid lines */}
              <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
                {Array.from({ length: 10 }).map((_, i) => (
                  <React.Fragment key={i}>
                    {Array.from({ length: 10 }).map((_, j) => (
                      <div key={`${i}-${j}`} className="border border-gray-800/30"></div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
              
              {/* Realm nodes */}
              {realms.map((realm) => (
                <div 
                  key={realm.id}
                  className={`absolute w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    activeRealm === realm.id 
                      ? 'bg-gray-300 shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  style={{ 
                    left: `${realm.x}%`, 
                    top: `${realm.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => handleRealmClick(realm.id)}
                >
                  {/* Pulse animation for nodes */}
                  <span className="absolute inset-0 rounded-full animate-ping bg-gray-600 opacity-75"></span>
                  
                  {/* Realm name tooltip */}
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 whitespace-nowrap bg-gray-900 px-2 py-1 rounded text-xs text-gray-300 transition-opacity ${
                    activeRealm === realm.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <span lang="ja" className="mr-1">{realm.name}</span>
                    <span className="text-gray-500">{realm.engName}</span>
                  </div>
                </div>
              ))}
              
              {/* Connection lines between realms */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {realms.map((realm, i) => (
                  realms.slice(i + 1).map((otherRealm, j) => (
                    <line 
                      key={`${realm.id}-${otherRealm.id}`}
                      x1={`${realm.x}%`}
                      y1={`${realm.y}%`}
                      x2={`${otherRealm.x}%`}
                      y2={`${otherRealm.y}%`}
                      stroke="#333"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  ))
                ))}
              </svg>
              
              {/* Coordinates display */}
              <div className="absolute bottom-2 right-2 text-[10px] text-gray-600 font-mono">
                x: {coordinates.x} y: {coordinates.y}
              </div>
            </div>
            
            {/* Active realm info */}
            {activeRealm && (
              <Card className="m-4 bg-gray-900/60 border-gray-800">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <Compass className="w-4 h-4 text-gray-500 mr-2" />
                    <h3 className="text-sm text-gray-300 font-jetbrains">
                      <span lang="ja" className="mr-2">
                        {realms.find(r => r.id === activeRealm)?.name}
                      </span>
                      {realms.find(r => r.id === activeRealm)?.engName}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400">
                    {realms.find(r => r.id === activeRealm)?.description}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-600 font-jetbrains">
              <span lang="ja" className="text-gray-500">地図の伝説</span> • Map Legend • <span lang="ja">八領域</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealmMap;
