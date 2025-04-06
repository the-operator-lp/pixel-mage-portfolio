
import React from 'react';
import { Shield, Sword, BookOpen, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="scroll max-w-4xl mx-auto fancy-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-leather/20"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-leather/20"></div>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Character Avatar */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-leather relative">
                  <div className="bg-parchment-dark w-full h-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-leather">PX</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-leather text-parchment-light rounded-full p-3 shadow-lg">
                  <Code className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            {/* Character Info */}
            <div className="md:col-span-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <h1 className="text-3xl md:text-4xl font-cinzel font-bold mb-2">Pixel Mage</h1>
                <div className="w-10 h-10 rounded-full bg-leather flex items-center justify-center ml-2 text-parchment-light">
                  <span className="font-bold text-sm">Lv42</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="px-3 py-1 bg-leather/10 rounded-full text-leather-dark border border-leather/30 text-sm font-metamorphous">
                  Full-Stack Mage
                </div>
              </div>
              
              <p className="font-imfell text-lg italic text-ink mb-6">
                "On a Quest to Master Code & Conquer Challenges"
              </p>
              
              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="flex flex-col items-center border border-leather/30 rounded-md p-3 bg-parchment-light">
                  <Shield className="w-5 h-5 text-leather mb-1" />
                  <span className="font-metamorphous text-xs">FRONTEND</span>
                  <span className="font-bold text-leather">9/10</span>
                </div>
                <div className="flex flex-col items-center border border-leather/30 rounded-md p-3 bg-parchment-light">
                  <Sword className="w-5 h-5 text-leather mb-1" />
                  <span className="font-metamorphous text-xs">BACKEND</span>
                  <span className="font-bold text-leather">8/10</span>
                </div>
                <div className="flex flex-col items-center border border-leather/30 rounded-md p-3 bg-parchment-light">
                  <BookOpen className="w-5 h-5 text-leather mb-1" />
                  <span className="font-metamorphous text-xs">DESIGN</span>
                  <span className="font-bold text-leather">7/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
