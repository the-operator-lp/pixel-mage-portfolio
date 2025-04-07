
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

const ClockWidget: React.FC = () => {
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
    <div className="scroll mb-6">
      <div className="relative z-10">
        <h3 className="text-lg font-bold mb-2 glitch-hover" data-text="Arcane Timekeeper">
          Arcane Timekeeper
        </h3>
        
        <div className="terminal p-4 mb-2 relative overflow-hidden">
          <div className="flex flex-col">
            <div className="text-2xl font-jetbrains mb-1 typewriter">
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
          
          {/* Magical effect overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#121212] to-transparent opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default ClockWidget;
