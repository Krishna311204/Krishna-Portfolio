"use client"

import { memo } from "react"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

const AnimatedProjects = memo(function AnimatedProjects() {
  const projects = [
    {
      quote:
        "A modern weather application with beautiful animations and accurate forecasts. Built with React and OpenWeather API for real-time data.",
      name: "Weather App",
      designation: "React • API Integration • Responsive Design",
      src: "/placeholder.svg?height=400&width=600",
    },
    {
      quote:
        "A social media dashboard for managing multiple platforms. Features analytics, scheduling, and engagement tracking with beautiful data visualizations.",
      name: "Social Media Dashboard",
      designation: "Vue.js • Node.js • Chart.js • MongoDB",
      src: "/placeholder.svg?height=400&width=600",
    },
    {
      quote:
        "An expense tracking application with budget management and financial insights. Helps users manage their finances effectively with smart categorization.",
      name: "Expense Tracker",
      designation: "React Native • SQLite • Push Notifications",
      src: "/placeholder.svg?height=400&width=600",
    },
    {
      quote:
        "A recipe sharing platform where users can discover, save, and share their favorite recipes with the community. Features meal planning and shopping lists.",
      name: "Recipe Sharing Platform",
      designation: "Next.js • Prisma • PostgreSQL • Cloudinary",
      src: "/placeholder.svg?height=400&width=600",
    },
    {
      quote:
        "A fitness tracking app with workout plans, progress tracking, and social features to motivate users. Includes AI-powered workout recommendations.",
      name: "Fitness Tracker",
      designation: "Flutter • Firebase • Health APIs • Charts",
      src: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="other-work" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Other Projects
        </h2>
        <AnimatedTestimonials testimonials={projects} autoplay={true} />
      </div>
    </section>
  )
})

export default AnimatedProjects
