"use client"

import { motion } from "framer-motion"

export default function ThankYou() {
    return (
        <div className="h-full w-full flex items-center justify-center p-8">
            <div className="max-w-4xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white">
                        Thank You!
                    </h2>

                    <p className="text-2xl md:text-3xl text-purple-200 mb-12">Any questions?</p>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="text-xl">Contact us:</p>
                        <p className="text-lg text-purple-300">contact@chronotix.io</p>
                        <p className="text-lg text-purple-300">chronotix.io</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

