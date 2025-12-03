"use client"

import { Apple, ChevronLeft, ChevronRight, Download, DownloadCloud, DownloadIcon, Icon } from "lucide-react"
import { Button } from "./ui/button"

const platforms = [
  {
    name: "macOS",
    desc: "Apple Silicon & Intel",
    icon: <Apple />,
  },
  {
    name: "Windows",
    desc: "x64 Architecture",
    icon: <Apple />,
  },
  {
    name: "Linux",
    desc: "Debian Package",
    icon: <Apple />,
  },
]

const platformsTwo = [
  {
    name: "macOS",
    desc: "Apple Silicon & Intel",
    icon: <Apple />,
  },
  {
    name: "Windows",
    desc: "x64 Architecture",
    icon: <Apple />,
  },
  {
    name: "Linux",
    desc: "Debian Package",
    icon: <Apple />,
  },
]

const platformsThree = [
  {
    name: "Ready to get started",
    desc: "Download Pluely now and experience the privacy-first AI assistant that works seamlessly in the background.",

  },

]

export default function Downloads() {
  return (
    <section id="downloads" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111] m-6 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 data-animate">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Explore Pluely</h2>
          <p className="text-gray-400">
            Download for your platform, browse release history, or explore our development journey
          </p>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <DownloadIcon />
          <h3 className="text-xl font-semibold ">Download Pluely</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          {platforms.map((platform, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all group cursor-pointer data-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{platform.icon}</div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold ">{platform.name}</h3>
                    <p className="text-gray-400 text-sm ">{platform.desc}</p>
                  </div>
                </div>
                <ChevronRight />
              </div>
              <button className="flex items-center justify-center gap-2 w-full px-4 cursor-pointer  hover:bg-gray-600/50 py-1 bg-[#121212]/10 text-white rounded-3xl font-medium  transition-colors border border-gray-600/20">
                <Download size={18} />
                Download for macOS
              </button>
            </div>
          ))}
        </div>



        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 ">
            <DownloadIcon />
            <h3 className="text-xl font-semibold ">Recent Releases
            </h3>
          </div>
          <Button className="border border-gray-600/20 rounded-xl text-white py-4 bg-transparent hover:bg-white/5 bg-transparent flex items-center gap-2 cursor-pointer">
            View Release History
            <DownloadCloud />
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-4 mb-8">

          {platformsTwo.map((platform, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all group cursor-pointer data-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl mb-4">{platform.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{platform.desc}</p>
                  </div>
                </div>
                <ChevronRight />
              </div>
              <button className="flex items-center justify-center gap-2 w-full px-4 cursor-pointer  hover:bg-gray-600/50 py-1 bg-[#121212]/10 text-white rounded-3xl font-medium  transition-colors border border-gray-600/20">
                <Download size={18} />
                View Release
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-4 ">
            <DownloadIcon />
            <h3 className="text-xl font-semibold ">Recent Releases
            </h3>
          </div>
          <Button className="border border-gray-600/20 rounded-xl text-white py-4 bg-transparent hover:bg-white/5 bg-transparent flex items-center gap-2 cursor-pointer">
            View Release History
            <DownloadCloud />
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-4">

          {platformsTwo.map((platform, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all group cursor-pointer data-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl mb-4">{platform.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{platform.desc}</p>
                  </div>
                </div>
                <ChevronRight />
              </div>
              <button className="flex items-center justify-center gap-2 w-full px-4 cursor-pointer  hover:bg-gray-600/50 py-1 bg-[#121212]/10 text-white rounded-3xl font-medium  transition-colors border border-gray-600/20">
                <Download size={18} />
                View Release
              </button>
            </div>
          ))}
        </div>


        <div className="grid md:grid-cols-1 gap-6 mt-4">

          {platformsThree.map((platform, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all group cursor-pointer data-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >



              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className="text-muted-foreground max-w-md mx-auto">{platform.desc}</p>
              </div>

              <div className="flex  center gap-4 max-w-md mx-auto">
                <button className="flex items-center justify-center gap-2 w-full px-4 cursor-pointer  hover:bg-gray-600/50 py-1 bg-[#121212]/10 text-white rounded-3xl font-medium  transition-colors border border-gray-600/20">
                  <Download size={18} />
                  View Release
                </button>
                <button className="flex items-center justify-center gap-2 w-full px-4 cursor-pointer  hover:bg-gray-600/50 py-1 bg-[#121212]/10 text-white rounded-3xl font-medium  transition-colors border border-gray-600/20">
                  <Download size={18} />
                  View Release
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
