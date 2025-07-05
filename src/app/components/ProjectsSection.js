// ProjectsSection.js
const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
    img: "/placeholder/project1.jpg",
    link: "#",
  },
  {
    title: "E-commerce Dashboard",
    desc: "Full-stack dashboard for managing products and orders.",
    img: "/placeholder/project2.jpg",
    link: "#",
  },
  {
    title: "Blog Platform",
    desc: "A feature-rich blog platform with markdown support.",
    img: "/placeholder/project3.jpg",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-extrabold mb-8 text-orange-600 tracking-wide text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 flex flex-col">
            <div className="h-40 bg-orange-50 flex items-center justify-center">
              {/* Placeholder image */}
              <img src={project.img} alt={project.title} className="object-contain h-24" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-lg text-orange-700 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{project.desc}</p>
              <a
                href={project.link}
                className="mt-auto text-orange-600 font-semibold hover:underline"
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
