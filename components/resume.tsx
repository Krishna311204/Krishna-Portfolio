import { Download } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Resume
        </h2>

        {/* Resume box with 2 pages side by side */}
        <div className="bg-black p-4 rounded-xl border border-gray-800 shadow-lg flex flex-col md:flex-row gap-4 justify-center">
          <img
            src="/Krishna 9-1.png"
            alt="Resume Page 1"
            className="w-full md:w-1/2 h-auto object-contain rounded-lg"
          />
          <img
            src="/Krishna 9-2.png"
            alt="Resume Page 2"
            className="w-full md:w-1/2 h-auto object-contain rounded-lg"
          />
        </div>

        {/* Download button */}
        <a
          href="https://drive.google.com/file/d/1vU-aT2-dY_A47jBbklIhod7WGJxBZ1Q1/view?usp=sharing"
          download
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          <Download size={18} />
          Download Resume
        </a>
      </div>
    </section>
  )
}
