
import React from "react";
import { MapPin } from "lucide-react";

// MapRitual - Fantasy realm map component extracted to its own file
const RealmMap = () => {
  return (
    <section id="realm-map" className="py-16 bg-[#0a0a0a] border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-jetbrains mb-2 text-gray-300">THE REALM ATLAS</h2>
          <p className="font-jetbrains text-xs text-gray-500">
            <span className="text-gray-400">$ cartographer</span> --render-lands
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="aspect-square max-h-[400px] w-full relative rounded-md overflow-hidden">
            {/* Dark overlay with grid pattern for map texture */}
            <div className="absolute inset-0 bg-gray-900 opacity-90"></div>
            
            {/* Map grid lines */}
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `linear-gradient(rgba(80, 80, 80, 0.1) 1px, transparent 1px), 
                                  linear-gradient(90deg, rgba(80, 80, 80, 0.1) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}>
            </div>
            
            {/* Map content */}
            <div className="absolute inset-0 p-4">
              {/* Mountain ranges */}
              <div className="absolute top-[15%] left-[20%] w-[30%] h-[25%] flex items-center justify-center">
                <div className="text-center opacity-80">
                  <div className="text-xs text-gray-400 rotate-[-10deg]">⛰️⛰️⛰️</div>
                  <div className="text-[10px] text-gray-500">The Shadow Peaks</div>
                </div>
              </div>
              
              {/* Forest */}
              <div className="absolute top-[35%] right-[25%] w-[20%] h-[20%] flex items-center justify-center">
                <div className="text-center opacity-80">
                  <div className="text-xs text-gray-400 rotate-[5deg]">🌲🌲🌲</div>
                  <div className="text-[10px] text-gray-500">Whispering Woods</div>
                </div>
              </div>
              
              {/* Castle */}
              <div className="absolute top-[55%] left-[50%] transform -translate-x-1/2 w-[15%] h-[15%] flex items-center justify-center">
                <div className="text-center opacity-80">
                  <div className="text-xs text-gray-300">🏰</div>
                  <div className="text-[10px] text-gray-400">Dread Keep</div>
                </div>
              </div>
              
              {/* Ancient ruins */}
              <div className="absolute bottom-[20%] left-[15%] w-[15%] h-[15%] flex items-center justify-center">
                <div className="text-center opacity-80">
                  <div className="text-xs text-gray-400 rotate-[8deg]">🏛️</div>
                  <div className="text-[10px] text-gray-500">Forgotten Ruins</div>
                </div>
              </div>
              
              {/* Dungeon */}
              <div className="absolute bottom-[25%] right-[20%] w-[15%] h-[15%] flex items-center justify-center">
                <div className="text-center opacity-80">
                  <div className="text-xs text-gray-400 rotate-[-5deg]">🧪</div>
                  <div className="text-[10px] text-gray-500">Crypts of Code</div>
                </div>
              </div>
              
              {/* Map compass */}
              <div className="absolute top-2 right-2 text-xs text-gray-500">
                <div>N</div>
                <div className="flex">
                  <span>W</span>
                  <span className="mx-2">+</span>
                  <span>E</span>
                </div>
                <div>S</div>
              </div>
              
              {/* Map title */}
              <div className="absolute bottom-2 left-2 text-[8px] text-gray-600 italic">
                Cartographer's Notes: The Dark Realms of Code & Logic
              </div>
            </div>
            
            {/* Map border */}
            <div className="absolute inset-0 border border-gray-700 rounded-md pointer-events-none"></div>
            
            {/* Animated glowing points (magical locations) */}
            <div className="absolute top-[30%] left-[40%] h-1 w-1 rounded-full bg-gray-300 opacity-50 animate-pulse"></div>
            <div className="absolute top-[60%] left-[65%] h-1 w-1 rounded-full bg-gray-300 opacity-50 animate-pulse"></div>
            <div className="absolute top-[75%] left-[30%] h-1 w-1 rounded-full bg-gray-300 opacity-50 animate-pulse"></div>
          </div>
          
          <div className="text-xs text-gray-500 mt-4 text-center italic">
            * This map reveals the magical realms traversed on the developer's journey.
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealmMap;
