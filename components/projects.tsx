import { memo } from "react"
import { Github } from "lucide-react"

const Projects = memo(function Projects() {
  const mainProjects = [
    {
      title: "AI MOCK INTERVIEWER",
      description:
        "An AI-driven mock interview platform that analyzes speech, tone, grammar, and facial expressions in real time, providing instant feedback and a structured final report for interview preparation.",
      technologies: ["Next.js", "RAG Bot", "Fast API", "Firebase"],
      githubUrl: "https://github.com/Krishna311204/mock-interviewer.git",
    },
    {
      title: "AI Powered Game Character Generator using GAN based Facial Stylization",
      description:
        "An AI-powered tool that generates unique game characters using GAN-based facial stylization, bringing realism and creativity to character design.",
      technologies: [
        "Next.js",
        "RAG Bot",
        "FastAPI",
        "Firebase",
        "StyleGAN2",
        "pSp Encoder",
        "Python",
        "OpenCV",
      ],
      githubUrl:
        "https://github.com/Krishna311204/AI-Powered-Game-Character-Generator-using-GAN-based-Facial-Stylization.git",
    },
    {
      title: "AI Face Recognition Attendance System",
      description:
        "An AI-powered attendance system that uses facial recognition to automatically mark student or employee attendance. It ensures accuracy, reduces proxy, and streamlines the process by integrating real-time face detection and recognition.",
      technologies: [
        "Python",
        "OpenCV",
        "Face Recognition Library",
        "Tkinter",
        "Firebase",
        "TensorFlow",
        "Keras",
      ],
      githubUrl:
        "https://github.com/Krishna311204/AI-Face-Recognition-Attendance-System.git",
    },
    {
      title: "AI Repo Agent",
      description:
        "An AI-powered repository assistant that analyzes codebases, generates documentation, answers queries using RAG, and streamlines project navigation for developers.",
      technologies: ["FastAPI", "RAG Bot", "LangChain", "LangGraph", "Google Gemini API"],
      githubUrl: "https://github.com/Krishna311204/AI-Repo-Agent.git",
    },
    {
      title: "AI Natural Language Database Query Tool",
      description:
        "An AI-powered natural language database query tool that securely converts plain English questions into SQL queries. It ensures safety through a two-step architecture, supports dynamic schema awareness, and outputs structured results ready for visualization.",
      technologies: ["Node.js", "Express.js", "MySQL/PostgreSQL", "Google Gemini API", "Dotenv"],
      githubUrl: "https://github.com/Krishna311204/AI-Query-Generator.git",
    },
    {
      title: "College ERP - Attendance Management System",
      description:
        "A College ERP Attendance Management System built with Flask and SQLite, featuring multi-role authentication (Admin, Faculty, Student), secure login, course and student management, and detailed attendance tracking with analytics and reports.",
      technologies: ["HTML", "CSS", "JavaScript", "SQL", "Python", "Flask"],
      githubUrl: "https://github.com/Krishna311204/Collage-ERP-DBMS-Project.git",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {mainProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-200 p-6"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link only */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Projects
