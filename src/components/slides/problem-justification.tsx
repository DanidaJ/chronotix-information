"use client"

import { motion } from "framer-motion"
import { BarChart, PieChart } from "lucide-react"

export default function ProblemJustification() {
    return (
        <div className="h-full w-full flex items-center justify-center p-8">
            <div className="max-w-4xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center"
                >
                    Problem Justification
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30"
                    >
                        <div className="flex items-center mb-4">
                            <BarChart className="w-8 h-8 mr-3 text-purple-300" />
                            <h3 className="text-2xl font-semibold">Market Research</h3>
                        </div>
                        <p className="text-lg">
                            [Include market research data that validates the problem. This could be statistics, survey results, or
                            industry reports.]
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30"
                    >
                        <div className="flex items-center mb-4">
                            <PieChart className="w-8 h-8 mr-3 text-purple-300" />
                            <h3 className="text-2xl font-semibold">User Feedback</h3>
                        </div>
                        <p className="text-lg">
                            [Summarize user feedback or pain points that demonstrate the need for your solution. Include quotes or
                            testimonials if available.]
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-6 bg-purple-700/20 p-6 rounded-lg border border-purple-500/30"
                >
                    <h3 className="text-2xl font-semibold mb-4">Impact:</h3>
                    <p className="text-lg">
                        [Explain the impact of this problem on users, businesses, or society. Why is solving this problem
                        important?]
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

