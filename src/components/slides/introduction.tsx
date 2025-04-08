"use client"

import { motion } from "framer-motion"

export default function Introduction() {
    return (
        <div className="h-full w-full flex items-center justify-center p-8">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-center"
                >
                    {/* Logo Image */}
                    <img
                        src="/icon.png  "
                        alt="Project Logo"
                        className="mx-auto mb-6 w-24 h-24 md:w-32 md:h-32 object-contain"
                    />

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white">
                       ChronoTix
                    </h1>
                    <p className="text-xl md:text-2xl text-purple-200 mb-8">AI Powered Dynamic Scheduler</p>

                </motion.div>
            </div>
        </div>
    )
}
