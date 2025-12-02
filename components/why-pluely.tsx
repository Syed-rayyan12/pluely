"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function WhyPluely() {
  const [activeIndex, setActiveIndex] = useState(0)

  const features = [
    {
      title: "Complete Invisibility",
      description:
        "Pluely's translucent overlay window sits above all applications, invisible in video calls, screen shares, and recordings. Perfect stealth for meetings on Zoom, Google Meet, Microsoft Teams, and Slack Huddles.",
      video: "/video/complete-1.mp4",
    },
    {
      title: "Keyboard Shortcuts",
      description:
        "Fully customizable global shortcuts for instant access. Toggle window, Dashboard, System Audio, Voice Input, Screenshot, and more with custom keybindings.",
      video: "/video/complete-2.mp4",
    },
    {
      title: "Always On Top",
      description:
        "Position your AI assistant anywhere on screen with smooth drag-and-drop. Adjustable transparency, always-on-top mode, and instant keyboard access keep Pluely ready when you need it.",
      video: "/video/complete-3.mp4",
    },
    {
      title: "AI-Powered Assistance",
      description:
        "Get intelligent suggestions and real-time help powered by advanced AI. From code completion to meeting summaries, Pluely understands context and delivers relevant assistance instantly.",
      video: "/video/complete-4.mp4",
    },
    {
      title: "Multi-Platform Support",
      description:
        "Seamlessly works across Windows, macOS, and Linux. Your AI assistant follows you everywhere, maintaining consistent experience across all your devices and workflows.",
      video: "/video/slide-1.mp4",
    },
  ]

  return (
    <section id="why" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mb-20 flex justify-center flex-col items-center text-center">
         <h2 className="text-5xl font-bold mb-12">
          Enterprise-Grade Features
          <br />
          <span className="">Built for Privacy</span>
        </h2>
        <p className="max-w-2xl text-center">Connect to any AI provider using simple curl commands. OpenAI, Anthropic, Google, xAI, Mistral, Cohere, Perplexity, Groq, Ollama, or your own custom endpoint. Switch providers anytime without losing your chat history or configuration. Full streaming and non-streaming support with complete flexibility.</p>
      </div>
      <div className="max-w-5xl mx-auto">
       

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Accordion */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black border-b border-gray-400/20  overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-48 pb-6 px-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Box */}
          <div className="relative rounded-xl bg-black border  border-gray-600/20  p-2 max-w-6xl h-full mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-gray-600/20 h-full bg-black">
              <video
                key={activeIndex}
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-full object-cover rounded-xl"
              >
                <source src={features[activeIndex].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
