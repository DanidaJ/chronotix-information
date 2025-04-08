"use client"

import { motion } from "framer-motion"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Competitors() {
    const competitors = [
        { name: "Google Calander", color: "from-blue-500 to-cyan-400" },
        { name: "EduTimer", color: "from-purple-500 to-pink-500" },
        { name: "Timewise", color: "from-amber-400 to-orange-500" },
        { name: "Celcat", color: "from-emerald-400 to-teal-500" },
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
                    Competitors
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 mb-8"
                >
                    <p className="text-xl leading-relaxed">
                        Understanding our competition helps us position our solution effectively and highlight our unique value
                        proposition.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {competitors.map((competitor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                            className="bg-purple-700/20 p-6 rounded-lg border border-purple-500/30 flex flex-col items-center"
                        >
                            <div
                                className={`w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mb-4 p-1 bg-gradient-to-br ${competitor.color} shadow-lg`}
                            >
                                <div className="w-full h-full rounded-full overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                    <LazyLoadImage
                                        src="/placeholder.svg?height=96&width=96"
                                        alt={competitor.name}
                                        width={96}
                                        height={96}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-center">{competitor.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

