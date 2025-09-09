"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="flex items-center justify-end">
        <div className="hidden md:flex items-center space-x-8 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-white"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-black/90 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[200px]">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left text-white hover:text-gray-300 transition-colors duration-200 py-2 text-sm font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
