
import React, { useState } from 'react';
import { Menu, X, Scroll, MapPin } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Character", href: "#hero", icon: <Scroll className="w-5 h-5 mr-2" /> },
    { name: "Quests", href: "#quests", icon: <MapPin className="w-5 h-5 mr-2" /> },
    { name: "Skills", href: "#skills", icon: <Scroll className="w-5 h-5 mr-2" /> },
    { name: "Battles", href: "#battles", icon: <Scroll className="w-5 h-5 mr-2" /> },
    { name: "Inventory", href: "#inventory", icon: <Scroll className="w-5 h-5 mr-2" /> },
    { name: "Contact", href: "#contact", icon: <Scroll className="w-5 h-5 mr-2" /> },
  ];

  return (
    <header className="parchment sticky top-0 z-50 py-2 px-4 shadow-md border-b border-leather">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-cinzel text-xl font-bold text-leather-dark">Adventurer's Codex</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="flex items-center font-metamorphous text-sm text-leather hover:text-leather-dark transition-colors"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-leather hover:text-leather-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-4 parchment border-t border-leather">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center font-metamorphous p-2 text-leather hover:text-leather-dark hover:bg-parchment-dark rounded-md transition-colors"
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
