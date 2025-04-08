"use client"

import { motion } from "framer-motion"
import { DollarSign, Users, TrendingUp, HandCoins } from "lucide-react"

export default function BusinessRevenueModel() {
    return (
        <div className="h-full w-full flex items-center justify-center p-8">
            <div className="max-w-4xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center"
                >
                    Business Revenue Model
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-green-400 to-emerald-300 shadow-lg">
                            <DollarSign className="w-8 h-8 text-green-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Subscription fees</h3>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-blue-400 to-cyan-300 shadow-lg">
                            <Users className="w-8 h-8 text-blue-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Data analytics services</h3>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-amber-400 to-yellow-300 shadow-lg">
                            <TrendingUp className="w-8 h-8 text-amber-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Customization fees</h3>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-amber-400 to-yellow-300 shadow-lg">
                            <HandCoins className="w-8 h-8 text-amber-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Advertisements and Sponsorshipss</h3>

                    </motion.div>
                </div>


            </div>
        </div>
    )
}

