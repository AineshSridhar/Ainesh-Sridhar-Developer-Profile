import {
  FaReact, FaNodeJs, FaCss3Alt, FaJsSquare, FaPython, FaJava,
  FaHtml5, FaGitAlt, FaDatabase, FaAws, FaDocker
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql,
  SiMysql, SiPrisma, SiJenkins, SiKubernetes, SiGithub
} from "react-icons/si";

const skillCategories = [
  {
    label: "Frontend",
    gradient: "from-cyan-100 to-blue-50",
    skills: [
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" size={22} /> },
      { name: "React.js", icon: <FaReact className="text-blue-400" size={22} /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" size={22} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={22} /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" size={22} /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={22} /> },
    ],
  },
  {
    label: "Backend",
    gradient: "from-green-100 to-teal-50",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={22} /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700" size={22} /> },
      { name: "Prisma", icon: <SiPrisma className="text-indigo-700" size={22} /> },
      { name: "Python", icon: <FaPython className="text-blue-500" size={22} /> },
      { name: "Java", icon: <FaJava className="text-red-500" size={22} /> },
      { name: "RESTful APIs", icon: <FaDatabase className="text-teal-500" size={22} /> },
    ],
  },
  {
    label: "Databases",
    gradient: "from-yellow-50 to-orange-50",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={22} /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700" size={22} /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-900" size={22} /> },
    ],
  },
  {
    label: "Cloud & DevOps",
    gradient: "from-orange-50 to-yellow-50",
    skills: [
      { name: "AWS", icon: <FaAws className="text-orange-400" size={22} /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" size={22} /> },
      { name: "Jenkins", icon: <SiJenkins className="text-red-400" size={22} /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" size={22} /> },
    ],
  },
  {
    label: "Tools",
    gradient: "from-purple-50 to-pink-50",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" size={22} /> },
      { name: "GitHub", icon: <SiGithub className="text-black" size={22} /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-10 px-2 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
      <h2 className="text-3xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-700 to-teal-600 drop-shadow-lg">
        Skills
      </h2>
      <div className="flex flex-wrap gap-6 justify-center max-w-4xl mx-auto">
        {skillCategories.map((category) => (
          <div
            key={category.label}
            className={`
              flex flex-col w-full sm:w-[325px] md:w-[300px] 
              bg-gradient-to-br ${category.gradient} 
              rounded-2xl shadow-xl border border-white/40 
              p-4 relative overflow-hidden
              hover:scale-[1.03] transition-transform duration-200
            `}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-400 animate-pulse"></span>
              <h3 className="text-lg font-bold text-slate-800 tracking-wide">{category.label}</h3>
            </div>
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-1">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`
                    flex items-center gap-2 px-3 py-1
                    bg-white/80 border border-white/40 rounded-full shadow
                    text-sm font-semibold text-slate-700
                    hover:bg-white/95 hover:shadow-lg transition-all duration-150
                    min-w-[90px]
                  `}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
            {/* Subtle floating shapes */}
            <span className="absolute -top-6 -right-6 w-12 h-12 bg-cyan-200 rounded-full opacity-10 blur-2xl pointer-events-none"></span>
            <span className="absolute -bottom-8 left-6 w-8 h-8 bg-blue-100 rounded-full opacity-10 blur-2xl pointer-events-none"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
