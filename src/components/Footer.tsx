
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: "https://github.com/shadowcaster", label: "GitHub" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/in/shadowcaster", label: "LinkedIn" },
    { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com/shadowcaster", label: "Twitter" },
    { icon: <Mail className="w-4 h-4" />, href: "mailto:codex@shadowcaster.dev", label: "Email" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-[#222]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <div className="font-jetbrains text-xl text-gray-400">
              <span className="text-gray-600">&lt;</span>
              <span className="text-gray-400">shadow_caster</span>
              <span className="text-gray-600">&gt;</span>
            </div>
            <div className="font-jetbrains text-xs text-gray-600 mt-1">
              SYSTEM: {`${currentYear}.exe | all_rights_reserved`}
            </div>
          </div>
          
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-800/50 rounded-md transition-colors border border-gray-800"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center text-xs text-gray-600 font-jetbrains">
            <p className="mb-2">
              <span className="text-gray-500">//</span> crafted with dark magic and binary curses
            </p>
            <p>
              <span className="text-gray-500">&gt;</span> session_id: 
              <span className="text-gray-400"> {Math.random().toString(36).substring(2, 10)}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
