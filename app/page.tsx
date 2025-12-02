"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import WhyPluely from "@/components/why-pluely"
import Invisibility from "@/components/invisibility"
import KeyboardShortcuts from "@/components/keyboard-shortcuts"
import ScreenshotCapture from "@/components/screenshot-capture"
import AlwaysReady from "@/components/always-ready"
import AIControl from "@/components/ai-control"
import VoiceAudio from "@/components/voice-audio"
import ReadyToGo from "@/components/ready-to-go"
import FAQ from "@/components/faq"
import Downloads from "@/components/downloads"
import Footer from "@/components/footer"
import Video from "@/components/video"
import CompleteInvisibility from "@/components/complete-invisibility"
import CompleteInvisibilityTwo from "@/components/complete-visibility-two"
import CompleteInvisibilityThree from "@/components/completevisibility-three"
import CompleteInvisibilityFour from "@/components/complete-visibility-four"

export default function Home() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Intersection Observer for lazy animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Video />
      <Features />
      <CompleteInvisibility />
        <CompleteInvisibilityTwo />
         <CompleteInvisibilityThree />
          <CompleteInvisibilityFour />
      <WhyPluely />
      <Invisibility />
      <KeyboardShortcuts />
      <ScreenshotCapture />
      <AlwaysReady />
      <AIControl />
      <VoiceAudio />
      <ReadyToGo />
      <FAQ />
      <Downloads />
      <Footer />
    </div>
  )
}
