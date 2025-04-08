"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export default function CompetitorAnalysis() {
    return (
        <div className="h-full w-full flex items-center justify-center p-8">
            <div className="max-w-4xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center"
                >
                    Competitor Analysis
                </motion.h2>

                <div className="overflow-x-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="min-w-full"
                    >
                        <table className="w-full border-collapse">
                            <thead>
                            <tr>
                                <th className="p-4 bg-purple-800/50 text-left rounded-tl-lg">Features</th>
                                <th className="p-4 bg-purple-800/50 text-center">ChronoTix</th>
                                <th className="p-4 bg-purple-800/50 text-center">FET</th>
                                <th className="p-4 bg-purple-800/50 text-center">Edutimer</th>
                                <th className="p-4 bg-purple-800/50 text-center">Timewise</th>
                                <th className="p-4 bg-purple-800/50 text-center">Celcat</th>
                                <th className="p-4 bg-purple-800/50 text-center rounded-tr-lg">Google Calendar</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="p-4 bg-purple-700/20 font-medium">Progressive Web Application</td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <Check className="w-5 h-5 mx-auto text-green-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 bg-purple-800/20 font-medium">AI Optimization</td>
                                <td className="p-4 bg-purple-800/20 text-center">
                                    <Check className="w-5 h-5 mx-auto text-green-400" />
                                </td>
                                <td className="p-4 bg-purple-800/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-800/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-800/20 text-center">
                                    <Check className="w-5 h-5 mx-auto text-green-400" />
                                </td>
                                <td className="p-4 bg-purple-800/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-800/20 text-center">
                                    <Check className="w-5 h-5 mx-auto text-green-400" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 bg-purple-700/20 font-medium">Predictive Analytics</td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <Check className="w-5 h-5 mx-auto text-green-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 bg-purple-800/20 font-medium">Automated Conflict Detection and Resolution</td>
                                <td className="p-4 bg-purple-800/20 text-center">
                                    <Check className="w-5 h-5 mx-auto text-green-400" />
                                </td>
                                <td className="p-4 bg-purple-800/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-800/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-800/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-800/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-800/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 bg-purple-700/20 font-medium rounded-bl-lg">Personalized Scheduling</td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <Check className="w-5 h-5 mx-auto text-green-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <Check className="w-5 h-5 mx-auto text-green-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <Check className="w-5 h-5 mx-auto text-green-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center rounded-br-lg">
                                    <Check className="w-5 h-5 mx-auto text-green-400" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 bg-purple-700/20 font-medium rounded-bl-lg">AI Chatbot</td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <Check className="w-5 h-5 mx-auto text-green-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                                <td className="p-4 bg-purple-700/20 text-center rounded-br-lg">
                                    <X className="w-5 h-5 mx-auto text-red-400" />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </div>


            </div>
        </div>
    )
}

