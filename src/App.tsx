"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Introduction from "@/components/slides/introduction"
import Content from "@/components/slides/content"
import ProblemStatement from "@/components/slides/problem-statement"
import ProblemJustification from "@/components/slides/problem-justification"
import JustificationScreenshot from "@/components/slides/justification-screenshot"
import ProposedSolution from "@/components/slides/proposed-solution"
import TechStack from "@/components/slides/tech-stack"
import SolutionScreenshot1 from "@/components/slides/solution-screenshot-1"
import SolutionScreenshot2 from "@/components/slides/solution-screenshot-2"
import SolutionScreenshot3 from "@/components/slides/solution-screenshot-3"
import KeyFeatures from "@/components/slides/key-features"
import BusinessRevenueModel from "@/components/slides/business-revenue-model"
import Channels from "@/components/slides/channels"
import Competitors from "@/components/slides/competitors"
import CompetitorAnalysis from "@/components/slides/competitor-analysis"
import Team from "@/components/slides/team"
import ThankYou from "@/components/slides/thank-you"
import JustificationScreenshot2 from "@/components/slides/justification-screenshot-2.tsx";
import JustificationScreenshot3 from "@/components/slides/justification-screenshot-3.tsx";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isScrolling, setIsScrolling] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const slides = [
        { id: "introduction", component: <Introduction /> },
        { id: "content", component: <Content /> },
        { id: "problem-statement", component: <ProblemStatement /> },
        { id: "problem-justification", component: <ProblemJustification /> },
        { id: "justification-screenshot", component: <JustificationScreenshot /> },
        { id: "justification-screenshot-2", component: <JustificationScreenshot2/> },
        { id: "justification-screenshot-3", component: <JustificationScreenshot3 /> },
        { id: "proposed-solution", component: <ProposedSolution /> },
        { id: "tech-stack", component: <TechStack /> },
        { id: "solution-screenshot-1", component: <SolutionScreenshot1 /> },
        { id: "solution-screenshot-2", component: <SolutionScreenshot2 /> },
        { id: "solution-screenshot-3", component: <SolutionScreenshot3 /> },
        { id: "key-features", component: <KeyFeatures /> },
        { id: "business-revenue-model", component: <BusinessRevenueModel /> },
        { id: "channels", component: <Channels /> },
        { id: "competitors", component: <Competitors /> },
        { id: "competitor-analysis", component: <CompetitorAnalysis /> },
        { id: "team", component: <Team /> },
        { id: "thank-you", component: <ThankYou /> },
    ]

    const handleWheel = (e: WheelEvent) => {
        if (isScrolling) return

        setIsScrolling(true)
        if (e.deltaY > 0 && currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1)
        } else if (e.deltaY < 0 && currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }

        setTimeout(() => {
            setIsScrolling(false)
        }, 1000)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (isScrolling) return

        if ((e.key === "ArrowDown" || e.key === "PageDown") && currentSlide < slides.length - 1) {
            setIsScrolling(true)
            setCurrentSlide(currentSlide + 1)
            setTimeout(() => setIsScrolling(false), 1000)
        } else if ((e.key === "ArrowUp" || e.key === "PageUp") && currentSlide > 0) {
            setIsScrolling(true)
            setCurrentSlide(currentSlide - 1)
            setTimeout(() => setIsScrolling(false), 1000)
        }
    }

    useEffect(() => {
        const container = containerRef.current
        if (container) {
            window.addEventListener("wheel", handleWheel, { passive: false })
            window.addEventListener("keydown", handleKeyDown)
        }

        return () => {
            window.removeEventListener("wheel", handleWheel)
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [currentSlide, isScrolling])

    const goToNextSlide = () => {
        if (currentSlide < slides.length - 1 && !isScrolling) {
            setIsScrolling(true)
            setCurrentSlide(currentSlide + 1)
            setTimeout(() => setIsScrolling(false), 1000)
        }
    }

    const goToPrevSlide = () => {
        if (currentSlide > 0 && !isScrolling) {
            setIsScrolling(true)
            setCurrentSlide(currentSlide - 1)
            setTimeout(() => setIsScrolling(false), 1000)
        }
    }

    return (
        <div
            ref={containerRef}
            className="h-screen w-screen overflow-hidden bg-gradient-to-br from-purple-700 via-purple-500 to-purple-800 text-white"
        >
            <div className="fixed top-4 right-4 z-50 flex gap-2">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={goToPrevSlide}
                    disabled={currentSlide === 0 || isScrolling}
                    className="bg-purple-800/50 border-purple-400 text-white hover:bg-purple-700"
                >
                    <ChevronUp className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={goToNextSlide}
                    disabled={currentSlide === slides.length - 1 || isScrolling}
                    className="bg-purple-800/50 border-purple-400 text-white hover:bg-purple-700"
                >
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </div>

            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <div className="flex gap-1">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                index === currentSlide ? "bg-white w-4" : "bg-white/30"
                            }`}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="h-full w-full"
                >
                    {slides[currentSlide].component}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

