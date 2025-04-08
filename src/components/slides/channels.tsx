"use client"

import { motion } from "framer-motion"
import { Globe, Mail, MessageSquare, Share2 } from "lucide-react"

export default function Channels() {
    return (
        <div className="h-full w-full flex items-center justify-center p-8">
            <div className="max-w-4xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center"
                >
                    Channels
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 mb-8"
                >
                    <p className="text-xl leading-relaxed">
                        Our multi-channel strategy ensures we reach our target audience effectively and provide value at every
                        touchpoint.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="bg-purple-700/20 p-6 rounded-lg border border-purple-500/30"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gradient-to-br from-blue-500 to-indigo-400 shadow-md">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold">Content Marketing & SEO</h3>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="bg-purple-700/20 p-6 rounded-lg border border-purple-500/30"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gradient-to-br from-pink-500 to-rose-400 shadow-md">
                                <Share2 className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold">
                                Paid Digital Ads and Social media</h3>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="bg-purple-700/20 p-6 rounded-lg border border-purple-500/30"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gradient-to-br from-amber-400 to-yellow-300 shadow-md">
                                <Mail className="w-6 h-6 text-amber-900" />
                            </div>
                            <h3 className="text-2xl font-semibold">Email Outreach</h3>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="bg-purple-700/20 p-6 rounded-lg border border-purple-500/30"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gradient-to-br from-green-400 to-emerald-300 shadow-md">
                                <MessageSquare className="w-6 h-6 text-green-900" />
                            </div>
                            <h3 className="text-2xl font-semibold">Partnerships & Collaborations</h3>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

