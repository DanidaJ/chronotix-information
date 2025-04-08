"use client"

import { motion } from "framer-motion"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function SolutionScreenshot3() {
    return (
        <div className="h-full w-full flex flex-col justify-center p-8">
            <div className="max-w-5xl w-full mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-6 text-center"
                >
                    Solution Showcase
                </motion.h2>

                <div className="flex-1 flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="relative w-full max-w-3xl max-h-[60vh] rounded-xl overflow-hidden border-2 border-purple-400/30 shadow-xl shadow-purple-900/30"
                    >
                        <div className="aspect-video relative">
                            <LazyLoadImage
                                src="/timetable.png"
                                alt="Solution Screenshot 3"

                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-4 bg-purple-800/30 backdrop-blur-sm p-4 rounded-lg border border-purple-500/30 max-w-3xl"
                    >
                        <h3 className="text-xl font-semibold mb-2">View Timetable</h3>
                        
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

