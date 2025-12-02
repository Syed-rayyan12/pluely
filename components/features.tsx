"use client"

import { Zap, Eye, Lock, Cpu, Headphones, Settings } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Complete Invisibility",
    description: "Undetectable in video calls and screen shares",
  },
  {
    icon: Lock,
    title: "Privacy-First",
    description: "All data stored locally, zero telemetry",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "~10MB size, 27x smaller than alternatives",
  },
  {
    icon: Cpu,
    title: "Instant Startup",
    description: "Launches in under 100ms",
  },
  {
    icon: Headphones,
    title: "Any AI Provider",
    description: "OpenAI, Claude, Gemini, Grok, or custom",
  },
  {
    icon: Settings,
    title: "Full Control",
    description: "Customize everything to your needs",
  },
  {
    icon: Settings,
    title: "Full Control",
    description: "Customize everything to your needs",
  },
  {
    icon: Settings,
    title: "Full Control",
    description: "Customize everything to your needs",
  },
  {
    icon: Settings,
    title: "Full Control",
    description: "Customize everything to your needs",
  },
  {
    icon: Settings,
    title: "Full Control",
    description: "Customize everything to your needs",
  },
  {
    icon: Settings,
    title: "Full Control",
    description: "Customize everything to your needs",
  },
  {
    icon: Settings,
    title: "Full Control",
    description: "Customize everything to your needs",
  },

]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 data-animate">Why Pluely?</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 data-animate">
          Pluely redefines what an AI assistant can be. Built from the ground up with privacy, performance, and
          discretion in mind.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black border flex items-center gap-4 border-gray-400/40  rounded-xl px-4 py-3 hover:border-gray-400/80 transition-all duration-300 cursor-pointer data-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              <feature.icon size={24} className="text-yellow-400" />

              <div className="">
                <h3 className="text-md font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
