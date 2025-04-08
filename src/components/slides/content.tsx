"use client"

import { motion } from "framer-motion"

export default function Content() {
    const items = [
        "Introduction",
        "Problem Statement",
        "Problem Justification",
        "Proposed Solution",
        "Tech Stack",
        "Solution Showcase",
        "Key Features",
        "Business Revenue Model",
        "Channels",
        "Competitors & Analysis",
        "Team",
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
                    Content
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            className="bg-purple-800/30 backdrop-blur-sm p-4 rounded-lg border border-purple-500/30"
                        >
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-3 text-purple-900 font-bold">
                                    {index + 1}
                                </div>
                                <p className="text-lg">{item}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

