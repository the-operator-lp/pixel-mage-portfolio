
import React, { useEffect, useState } from "react";
import { Terminal, Code, Medal, Sword, MapPin, Clock } from "lucide-react";
import summonData from "@/data/summon.json";
import { useToast } from "@/hooks/use-toast";

// ClockSpell - Magical digital clock component
const ClockSpell = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');
  const [location, setLocation] = useState<string>('Unknown Realm');
  const [loading, setLoading] = useState<boolean>(true);
  const { toast } = useToast();

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      const now = new Date();
      
      // Format time: HH:MM:SS
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
      }));
      
      // Format date: Day, Month DD, YYYY
      setCurrentDate(now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    }, 1000);

    // Get location using IP Geolocation API
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('Failed to fetch location');
        
        const data = await response.json();
        setLocation(`${data.city}, ${data.country_name}`);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching location:', error);
        toast({
          title: "Location Scrying Failed",
          description: "The magical scrying spell could not determine your location.",
          variant: "destructive"
        });
        setLoading(false);
      }
    };

    fetchLocation();

    return () => {
      clearInterval(timeInterval);
    };
  }, [toast]);

  return (
    <div className="mt-6 bg-gray-900/60 border border-gray-800 p-4 rounded-md">
      <h3 className="text-sm text-gray-500 mb-2 flex items-center"><Clock className="w-4 h-4 mr-1" /> ARCANE TIMEKEEPER</h3>
      <div className="flex flex-col">
        <div className="text-xl font-jetbrains mb-1 typewriter text-gray-300">
          {loading ? '00:00:00' : currentTime}
          <span className="cursor-blink"> </span>
        </div>
        <div className="text-sm text-gray-400">
          {loading ? 'Divining date...' : currentDate}
        </div>
        <div className="mt-2 text-xs text-gray-500 flex items-center">
          <span className="inline-block h-2 w-2 rounded-full bg-gray-500 mr-2 animate-pulse"></span>
          {loading ? 'Scrying location...' : `Realm: ${location}`}
        </div>
      </div>
    </div>
  );
};

// MapRitual - Fantasy realm map component
const MapRitual = () => {
  return (
    <div className="mt-6 bg-gray-900/60 border border-gray-800 p-4 rounded-md">
      <h3 className="text-sm text-gray-500 mb-2 flex items-center"><MapPin className="w-4 h-4 mr-1" /> REALM MAP</h3>
      
      <div className="aspect-square max-h-[300px] w-full relative rounded-md overflow-hidden">
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
      
      <div className="text-xs text-gray-500 mt-2 italic">
        * This mystical map reveals the developer's journey through the arcane arts.
      </div>
    </div>
  );
};

const SummoningScroll = () => {
    const [displayText, setDisplayText] = useState("");
    const { fullText, runtime, battles, name, className, level, tier } = summonData;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.substring(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [fullText]);

    const asciiArt = `
  ┌───────────────────────┐
  │ ╦ ╦╔═╗╦═╗╦  ╔╦╗       │
  │ ║║║║ ║╠╦╝║   ║║       │
  │ ╚╩╝╚═╝╩╚═╩═╝═╩╝       │
  │   ╔═╗╔═╗╔═╗╦═╗╔═╗╔╦╗╔═╗╦═╗  │
  │   ║ ║╠═╝╔═╝╠╦╝╠═╣ ║ ║ ║╠╦╝  │
  │   ╚═╝╩  ╚═╝╩╚═╩ ╩ ╩ ╚═╝╩╚═  │
  └───────────────────────┘
  `;

    return (
        <section id="summoning" className="py-24 min-h-[60vh] flex items-center">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-gray-800 rounded-md p-6 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* ASCII Art or Symbol */}
                        <div className="w-full md:w-2/5 mb-6 md:mb-0">
                            <div className="font-mono text-gray-600 text-xs md:text-sm whitespace-pre animate-pulse">{asciiArt}</div>
                            <div className="mt-4 flex justify-center space-x-4">
                                <div className="flex flex-col items-center text-gray-500 text-xs">
                                    <Terminal className="w-4 h-4 mb-1" />
                                    <span>RUNTIME</span>
                                    <span className="text-gray-300">{runtime}</span>
                                </div>
                                <div className="flex flex-col items-center text-gray-500 text-xs">
                                    <Code className="w-4 h-4 mb-1" />
                                    <span>BATTLES</span>
                                    <span className="text-gray-300">{battles}</span>
                                </div>
                                <div className="flex flex-col items-center text-gray-500 text-xs">
                                    <Medal className="w-4 h-4 mb-1" />
                                    <span>TIER</span>
                                    <span className="text-gray-300">{tier}</span>
                                </div>
                            </div>
                            
                            {/* ClockSpell component */}
                            <ClockSpell />
                        </div>

                        {/* Intro Content */}
                        <div className="w-full md:w-3/5 text-left">
                            <div className="mb-1 flex items-center">
                                <span className="inline-block w-3 h-3 bg-gray-600 rounded-full mr-2 animate-flicker"></span>
                                <span className="text-gray-500 text-xs">/usr/bin/summoning.sh</span>
                            </div>

                            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-300 font-jetbrains">{name}</h1>

                            <div className="mb-3 flex items-center">
                                <span className="bg-gray-800 px-2 py-1 text-xs text-gray-400 font-jetbrains rounded">
                                    <span className="text-gray-500">class:</span> {className}
                                </span>
                                <span className="ml-2 bg-gray-800 px-2 py-1 text-xs text-gray-400 font-jetbrains rounded">
                                    <span className="text-gray-500">lvl:</span> {level}
                                </span>
                            </div>

                            <p className="font-jetbrains text-gray-400 mb-6 text-sm border-l-2 border-gray-700 pl-3 typewriter cursor-blink">{displayText}</p>

                            <div className="flex space-x-2">
                                <a href="#codex" className="bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs px-4 py-2 rounded-sm transition-colors flex items-center">
                                    <Code className="w-4 h-4 mr-2" />
                                    VIEW_CODEX
                                </a>
                                <a
                                    href="#gate"
                                    className="bg-transparent hover:bg-gray-800 text-gray-500 hover:text-gray-300 text-xs px-4 py-2 rounded-sm transition-colors border border-gray-700 flex items-center"
                                >
                                    <Sword className="w-4 h-4 mr-2" />
                                    INITIATE_CONTACT
                                </a>
                            </div>
                            
                            {/* MapRitual component */}
                            <MapRitual />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SummoningScroll;
