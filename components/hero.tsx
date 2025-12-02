"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {

  const cardWidth = 320;
  const cardHeight = 180;
  const snakeLength = 40;
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient circles */}



      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <Link
            href="https://github.com/iamsrikanthnani/pluely"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect hover:bg-white/10 transition-all"
          >
            <span className="text-yellow-400">✨</span>
            <span className="text-sm text-gray-300">Open Source Alternative to Cluely</span>
            <ArrowRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-tight animate-fade-in-up">
            Your Invisible

            <span className=""> AI Assistant</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Pluely operates with complete stealth during meetings, interviews, and presentations. Undetectable in video
            calls, screen shares, and recordings. Built with Tauri and Rust for blazing-fast performance, ~10MB size,
            and absolute privacy. 
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
          >
            <Link
              href="#downloads"
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              Download Now
              <ArrowRight size={18} />
            </Link>
            <Link
              href="https://github.com/iamsrikanthnani/pluely"
              className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:border-white/40 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Star size={18} className="text-yellow-400" />
              <span>1.2K stars on GitHub</span>
            </Link>
          </div>
        </div>

        {/* Hero Image/Demo */}

        <div className="rounded-xl relative bg-black border  border-gray-600/20  p-4 max-w-6xl   mx-auto">
          <div
            className="absolute bottom-0 left-0 w-full h-1/2  rounded-b-2xl"
            style={{
              background: 'linear-gradient(to top, black, rgba(0,0,0,0))',
            }}
          />
          <img src="/app.png" alt="" className="rounded-xl" />
        </div>






      </div>
    </section>
  )
}
