
import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// 🌌 ClockDisplay – 和の時空の紋章 (ChronoSigil of Harmony)
const ClockDisplay = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');
  const [location, setLocation] = useState<string>('未知の領域'); // "Unknown Realm" in Japanese
  const [loading, setLoading] = useState<boolean>(true);
  const { toast } = useToast();

  // Japanese weekday names
  const jpWeekdays = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];

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
      
      // Format date with Japanese weekday: 曜日, Month DD, YYYY
      const jpWeekday = jpWeekdays[now.getDay()];
      setCurrentDate(`${jpWeekday}, ${now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}`);
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
          title: "位置探知失敗", // "Location Scrying Failed" in Japanese
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
      <h3 className="text-sm text-gray-500 mb-2 flex items-center">
        <Clock className="w-4 h-4 mr-1" /> 
        <span lang="ja" className="mr-2">時の印</span> ARCANE TIMEKEEPER
      </h3>
      <div className="flex flex-col">
        <div className="text-xl font-jetbrains mb-1 typewriter text-gray-300">
          {loading ? '00:00:00' : currentTime}
          <span className="cursor-blink"> </span>
        </div>
        <div className="text-sm text-gray-400">
          {loading ? '日付占い中...' : currentDate}
        </div>
        <div className="mt-2 text-xs text-gray-500 flex items-center">
          <span className="inline-block h-2 w-2 rounded-full bg-gray-500 mr-2 animate-pulse"></span>
          {loading ? '位置探知中...' : `領域: ${location}`}
        </div>
      </div>
    </div>
  );
};

export default ClockDisplay;
