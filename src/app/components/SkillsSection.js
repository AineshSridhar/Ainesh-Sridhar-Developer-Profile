import { FaReact, FaNodeJs, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaHtml5, FaGitAlt, FaDatabase, FaAws, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiPrisma, SiJenkins, SiKubernetes, SiGithub } from "react-icons/si";

const skillCategories = [
  {
    label: "Frontend",
    gradient: "from-cyan-200 via-blue-100 to-white",
    skills: [
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" size={28} /> },
      { name: "React.js", icon: <FaReact className="text-blue-400" size={28} /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" size={28} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={28} /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" size={28} /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={28} /> },
    ],
  },
  {
    label: "Backend",
    gradient: "from-green-200 via-teal-100 to-white",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={28} /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700" size={28} /> },
      { name: "Prisma", icon: <SiPrisma className="text-indigo-700" size={28} /> },
      { name: "Python", icon: <FaPython className="text-blue-500" size={28} /> },
      { name: "Java", icon: <FaJava className="text-red-500" size={28} /> },
      { name: "RESTful APIs", icon: <FaDatabase className="text-teal-500" size={28} /> },
    ],
  },
  {
    label: "Databases",
    gradient: "from-yellow-100 via-orange-50 to-white",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={28} /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700" size={28} /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-900" size={28} /> },
    ],
  },
  {
    label: "Cloud & DevOps",
    gradient: "from-orange-100 via-yellow-50 to-white",
    skills: [
      { name: "AWS", icon: <FaAws className="text-orange-400" size={28} /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" size={28} /> },
      { name: "Jenkins", icon: <SiJenkins className="text-red-400" size={28} /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" size={28} /> },
    ],
  },
  {
    label: "Tools",
    gradient: "from-purple-100 via-pink-50 to-white",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" size={28} /> },
      { name: "GitHub", icon: <SiGithub className="text-black" size={28} /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-cyan-50 to-blue-50 min-h-screen">
      <h2 className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-700 to-teal-600 drop-shadow-lg">
        Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {skillCategories.map((category) => (
          <div
            key={category.label}
            className={`rounded-3xl shadow-2xl p-8 bg-gradient-to-br ${category.gradient} backdrop-blur-xl border border-white/30 relative overflow-hidden`}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 drop-shadow-sm tracking-wide flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-400 animate-pulse"></span>
              {category.label}
            </h3>
            <ul className="flex flex-wrap gap-6 justify-center">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex flex-col items-center justify-center bg-white/70 border border-white/40 rounded-full shadow-md px-6 py-4 gap-2 hover:scale-105 hover:bg-white/90 transition-all duration-200 backdrop-blur-md"
                  style={{
                    minWidth: 100,
                    minHeight: 100,
                  }}
                >
                  {skill.icon}
                  <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
                </li>
              ))}
            </ul>
            {/* Decorative floating shapes */}
            <span className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-200 rounded-full opacity-20 blur-2xl pointer-events-none"></span>
            <span className="absolute -bottom-10 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-20 blur-2xl pointer-events-none"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
