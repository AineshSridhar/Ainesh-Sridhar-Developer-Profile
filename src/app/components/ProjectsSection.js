const projects = [
  {
    title: "SkillSync",
    desc: "AI-powered partner matching with dynamic feedback and AWS DevOps.",
    img: "/placeholder/project1.jpg",
    link: "#",
    tech: [
      "Next.js", "MySQL", "AWS", "Kubernetes", "Docker", "DevOps", "CI/CD"
    ],
  },
  {
    title: "Sinchronize",
    desc: "Real-time group study platform with AI content and collaborative rooms.",
    img: "/placeholder/project2.jpg",
    link: "#",
    tech: [
      "MERN", "Socket.io", "Redux", "Gemini AI API", "DevOps"
    ],
  },
  {
    title: "MockVerse",
    desc: "AI-driven mock interview platform with live audio and analytics.",
    img: "/placeholder/project3.jpg",
    link: "#",
    tech: [
      "Next.js", "FastAPI", "PostgreSQL", "Gemini AI API", "AWS", "Web Speech API"
    ],
  }
];


export default function ProjectsSection() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-yellow-400 tracking-wide text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#13151A] rounded-xl shadow-lg overflow-hidden border border-slate-800 flex flex-col"
          >
            <div className="h-40 bg-[#1A1C22] flex items-center justify-center">
              <img src={project.img} alt={project.title} className="object-contain h-24" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-lg text-yellow-400 mb-2">{project.title}</h3>
              <p className="text-yellow-300 mb-4 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="bg-yellow-950 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="mt-auto text-yellow-400 font-semibold hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
