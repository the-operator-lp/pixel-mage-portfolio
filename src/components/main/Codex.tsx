import React from "react";
import { Github, ExternalLink, Star, GitBranch, Code, Skull } from "lucide-react";
import codex from "@/data/codex.json";
const Codex = () => {
    const projects = codex;

    return (
        <section id="codex" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-xl font-jetbrains mb-2 text-gray-300">THE CODEX</h2>
                    <p className="font-jetbrains text-xs text-gray-500">
                        <span className="text-gray-400">$ ls -la</span> ~/arcane_repositories/
                    </p>
                    <div className="flex justify-center items-center mt-3">
                        <Github className="w-4 h-4 mr-2 text-gray-500" />
                        <a href="https://github.com/shadowcaster" className="text-gray-400 hover:text-gray-200 transition font-jetbrains text-xs underline" target="_blank" rel="noopener noreferrer">
                            github.com/shadowcaster
                        </a>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-[#0a0a0a] border border-gray-800 rounded-md p-5 hover:border-gray-700 transition-all glitch-hover" data-text={project.name}>
                                <div className="flex items-center mb-3">
                                    <Skull className="w-4 h-4 mr-2 text-gray-500" />
                                    <h3 className="text-base font-jetbrains font-bold text-gray-300">{project.name}</h3>
                                </div>

                                <p className="font-jetbrains text-xs text-gray-400 mb-4 h-12 overflow-hidden">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.languages.map((lang, i) => (
                                        <span key={i} className="px-2 py-1 bg-gray-900 text-gray-400 text-[10px] rounded-sm font-jetbrains">
                                            {lang}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center text-xs">
                                    <div className="flex space-x-3">
                                        <div className="flex items-center">
                                            <Star className="w-3 h-3 mr-1 text-gray-500" />
                                            <span className="text-gray-400">{project.stars}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <GitBranch className="w-3 h-3 mr-1 text-gray-500" />
                                            <span className="text-gray-400">{project.forks}</span>
                                        </div>
                                    </div>

                                    <a href={project.link} className="flex items-center text-gray-500 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                                        <Code className="w-3 h-3 mr-1" />
                                        <span className="font-jetbrains text-[10px]">/SOURCE</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Codex;
