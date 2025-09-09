import { Download, FileText } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Resume
        </h2>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="text-white" size={24} />
                <h3 className="text-xl font-semibold text-white">Krishna_Palekar_Resume.pdf</h3>
              </div>
              <a
                href="https://drive.google.com/file/d/1vU-aT2-dY_A47jBbklIhod7WGJxBZ1Q1/view?usp=sharing"
                download
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                <Download size={16} />
                Download
              </a>
            </div>
          </div>

          <div className="p-6">
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe src="/resume.pdf" className="w-full h-96 md:h-[600px]" title="Resume PDF" />
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">
              PDF viewer not supported?{" "}
              <a href="https://drive.google.com/file/d/1vU-aT2-dY_A47jBbklIhod7WGJxBZ1Q1/view?usp=sharing" className="text-white hover:underline">
                Click here to download
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
