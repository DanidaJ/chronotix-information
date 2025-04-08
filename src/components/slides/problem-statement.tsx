"use client"

import { motion } from "framer-motion"

export default function ProblemStatement() {
    return (
        <div className="h-full w-full flex items-center justify-center p-8">
            <div className="max-w-4xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center"
                >
                    Problem Statement
                </motion.h2>



                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-8 bg-purple-700/20 p-6 rounded-lg border border-purple-500/30"
                >
                    <h3 className="text-2xl font-semibold mb-4">Key Challenges:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-lg">Universities have complex schedules with multiple courses, professors, and resources to manage.</li>
                        <li className="text-lg">Manual scheduling is time-consuming and prone to errors.</li>

                        <li className="text-lg">Students often face conflicts in their course schedules, leading to frustration and delays.</li>
                        <li className="text-lg">Lecturers struggle to balance their work due to inefficient scheduling.</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

