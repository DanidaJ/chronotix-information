"use client"

import { motion } from "framer-motion"
import { Lightbulb, Zap, Shield } from "lucide-react"

export default function ProposedSolution() {
    return (
        <div className="h-full w-full flex items-center justify-center p-8">
            <div className="max-w-4xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center"
                >
                    Proposed Solution
                </motion.h2>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="bg-purple-700/20 p-6 rounded-lg border border-purple-500/30 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-amber-400 to-yellow-300 shadow-lg">
                            <Lightbulb className="w-8 h-8 text-amber-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Smart, user-friendly timetabling system to optimize schedules and resolve conflicts automatically.</h3>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="bg-purple-700/20 p-6 rounded-lg border border-purple-500/30 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-blue-400 to-cyan-300 shadow-lg">
                            <Zap className="w-8 h-8 text-blue-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Focus on classroom availability, travel times, peak periods, and laboratory utilization.</h3>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="bg-purple-700/20 p-6 rounded-lg border border-purple-500/30 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-green-400 to-emerald-300 shadow-lg">
                            <Shield className="w-8 h-8 text-green-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Exclude non-academic event scheduling, facility changes, individual preferences, external data sources, and unrelated administrative tasks.</h3>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

