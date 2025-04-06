
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/username", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/username", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/username", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:email@example.com", label: "Email" }
  ];

  return (
    <footer className="py-8 bg-leather text-parchment-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <div className="font-cinzel text-xl">Pixel Mage</div>
            <div className="font-imfell text-sm text-parchment-light/70">"On a Quest to Master Code & Conquer Challenges"</div>
          </div>
          
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-wood rounded-full transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center text-sm text-parchment-light/70 font-imfell">
            <p className="mb-1">© {new Date().getFullYear()} Pixel Mage. All rights reserved.</p>
            <p>Crafted with magical code and fantasy inspiration</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
