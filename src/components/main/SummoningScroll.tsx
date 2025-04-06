import React, { useEffect, useState } from "react";
import { Terminal, Code, Medal, Sword } from "lucide-react";
import summonData from "@/data/summon.json";
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
