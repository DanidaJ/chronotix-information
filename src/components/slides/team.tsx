"use client"

import { motion } from "framer-motion"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Team() {
    const teamMembers = [
        {
            name: "Asfack Ahamah",
            image: "/ahamath.jpg",
            color: "from-purple-500 to-pink-500",
        },
        {
            name: "Neluki Hamangoda",
            image: "neluki.png",
            color: "from-blue-500 to-cyan-400",
        },
        {
            name: "Danida Jayakody",
            image: "danida.png",
            color: "from-green-400 to-emerald-500",
        },
        {
            name: "Navyaa Manivannan",
            image: "navyaa.png",
            color: "from-yellow-400 to-orange-500",
        },
        {
            name: "Hiruka Thennakoon",
            image: "/hiruka.png",
            color: "from-pink-500 to-rose-400",
        },
        {
            name: "Yenuli Liyanage",
            image: "yenuli.png",
            color: "from-indigo-500 to-violet-500",
        },
    ]

    return (
        <div className="h-full w-full flex items-center justify-center p-8">
            <div className="max-w-5xl w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center"
                >
                    Our Team
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 mb-8"
                >
                    <p className="text-xl leading-relaxed text-center">
                        We bring together expertise in technology, design, and business to deliver an exceptional solution.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                            className="bg-purple-700/20 p-6 rounded-lg border border-purple-500/30 flex flex-col items-center text-center"
                        >
                            <div
                                className={`w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mb-4 p-1 bg-gradient-to-br ${member.color} shadow-lg`}
                            >
                                <div className="w-full h-full rounded-full overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                    <LazyLoadImage
                                        src={member.image}
                                        alt={member.name}
                                        width={96}
                                        height={96}
                                        className="object-cover rounded-full"
                                    />

                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">{member.name}</h3>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

