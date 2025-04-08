"use client"

import { motion } from "framer-motion"

export default function TechStack() {
    const technologies = [
        { name: "React", description: "Frontend UI library", color: "from-cyan-400 to-blue-500" },
        { name: "Vite", description: "framework", color: "from-purple-500 to-fuchsia-500" },
        { name: "TypeScript", description: "Type-safe JavaScript", color: "from-blue-500 to-blue-700" },
        { name: "Flask", description: "Backend", color: "from-green-500 to-emerald-600" },
        { name: "MongoDB", description: "NoSQL database", color: "from-green-600 to-green-800" },
        { name: "Vercel & Render", description: "Deployment platform", color: "from-gray-900 to-black" },
    ]

    return (
        <div className="h-full w-full flex items-center justify-center p-8">
            <div className="max-w-4xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center"
                >
                    Tech Stack
                </motion.h2>



                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                            className="bg-purple-700/20 p-4 rounded-lg border border-purple-500/30 flex flex-col"
                        >
                            <div
                                className={`h-12 mb-2 rounded-md bg-gradient-to-r ${tech.color} flex items-center justify-center shadow-md`}
                            >
                                <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                            </div>
                            <p className="text-sm text-purple-200/80">{tech.description}</p>
                        </motion.div>
                    ))}
                </div>


            </div>
        </div>
    )
}

