"use client"

import { Download } from "lucide-react"

const platforms = [
  {
    name: "macOS",
    desc: "Apple Silicon & Intel",
    icon: "🍎",
  },
  {
    name: "Windows",
    desc: "x64 Architecture",
    icon: "🪟",
  },
  {
    name: "Linux",
    desc: "Debian Package",
    icon: "🐧",
  },
]

export default function Downloads() {
  return (
    <section id="downloads" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-400/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 data-animate">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Explore Pluely</h2>
          <p className="text-gray-400">
            Download for your platform, browse release history, or explore our development journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all group cursor-pointer text-center data-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{platform.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{platform.desc}</p>
              <button className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition-colors group-hover:shadow-lg group-hover:shadow-yellow-400/20">
                <Download size={18} />
                Download
              </button>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div
            className="glass-effect rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all cursor-pointer data-animate text-center"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="font-semibold mb-2">All Downloads</h3>
            <p className="text-gray-400 text-sm mb-4">Latest release downloads</p>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">View Downloads →</button>
          </div>
          <div
            className="glass-effect rounded-xl p-6 border border-white/10 hover:border-green-400/30 transition-all cursor-pointer data-animate text-center"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="font-semibold mb-2">Version History</h3>
            <p className="text-gray-400 text-sm mb-4">Browse all releases</p>
            <button className="text-green-400 hover:text-green-300 text-sm font-semibold">Browse Versions →</button>
          </div>
          <div
            className="glass-effect rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all cursor-pointer data-animate text-center"
            style={{ animationDelay: "0.5s" }}
          >
            <h3 className="font-semibold mb-2">Changelog</h3>
            <p className="text-gray-400 text-sm mb-4">Development timeline</p>
            <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold">View Timeline →</button>
          </div>
        </div>
      </div>
    </section>
  )
}
