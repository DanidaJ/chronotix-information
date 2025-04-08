"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function KeyFeatures() {
    const features = [
        {
            title: "Feature 1",
            description: "Tailored Optimal Scheduling",
            color: "text-emerald-400",
        },
        {
            title: "Feature 2",
            description: "Congestion Prediction and Prevention",
            color: "text-blue-400",
        },
        {
            title: "Feature 3",
            description: "Automated Conflict Resolution",
            color: "text-purple-400",
        },
        {
            title: "Feature 4",
            description: "Learning from Patterns of Use",
            color: "text-pink-400",
        },
        {
            title: "Feature 5",
            description: "Optimization of Resource Utilisation",
            color: "text-amber-400",
        },
        {
            title: "Feature 6",
            description: "Personalized Scheduling and Real - Time Updates and Notifications",

            color: "text-cyan-400",
        },
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
                    Key Features
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                            className="bg-purple-800/30 backdrop-blur-sm p-5 rounded-lg border border-purple-500/30"
                        >
                            <div className="flex items-start">
                                <CheckCircle className={`w-6 h-6 mr-3 ${feature.color} shrink-0 mt-1`} />
                                <div>
                                    <h3 className={`text-xl font-semibold mb-2 ${feature.color}`}>{feature.title}</h3>
                                    <p className="text-purple-100/90">{feature.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </div>
    )
}

