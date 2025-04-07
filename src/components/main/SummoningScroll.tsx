
import React, { useEffect, useState } from "react";
import { Terminal, Code, Medal, Sword, Clock } from "lucide-react";
import summonData from "@/data/summon.json";
import { useToast } from "@/hooks/use-toast";

// 🕰️ ChronoRune – Rewritten clock with realm location magic
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
      
      // Format time: HH:MM:SS (24-hour format)
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
    <div className="w-full bg-gray-900/60 border border-gray-800 p-4 rounded-md mb-6">
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
                    {/* ChronoRune Clock - Positioned at the top of the scroll */}
                    <ClockSpell />
                    
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SummoningScroll;
