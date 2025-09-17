import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import AnimatedProjects from "@/components/animated-projects"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import VantaEffect from "@/components/vanta-effect"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Vanta Background */}
      <div id="vanta-bg" className="fixed inset-0 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        {/* <AnimatedProjects /> */}
        <Resume />
        <Contact />
      </div>

      <VantaEffect />
    </div>
  )
}
