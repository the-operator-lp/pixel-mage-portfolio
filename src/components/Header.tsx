
import React, { useState } from 'react';
import { Menu, X, Terminal, Code, Sword, Skull, Scroll, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Summoning", href: "#summoning", icon: <Terminal className="w-4 h-4 mr-2" /> },
    { name: "Quests", href: "#quests", icon: <Scroll className="w-4 h-4 mr-2" /> },
    { name: "Codex", href: "#codex", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "Arena", href: "#arena", icon: <Sword className="w-4 h-4 mr-2" /> },
    { name: "Grimoire", href: "#grimoire", icon: <Skull className="w-4 h-4 mr-2" /> },
    { name: "Gate", href: "#gate", icon: <Mail className="w-4 h-4 mr-2" /> },
  ];

  return (
    <header className="sticky top-0 z-50 py-4 px-4 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#333]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-jetbrains text-lg font-bold text-gray-300 tracking-tight">&lt;shadow_caster&gt;</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="flex items-center font-jetbrains text-xs text-gray-400 hover:text-gray-200 glitch-hover"
              data-text={item.name}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-4 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#333]">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center font-jetbrains p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800/30 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
