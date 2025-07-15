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
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={28} /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700" size={28} /> },
      { name: "Prisma", icon: <SiPrisma className="text-indigo-700" size={28} /> },
      { name: "RESTful APIs", icon: <FaDatabase className="text-teal-500" size={28} /> },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={28} /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700" size={28} /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-900" size={28} /> },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws className="text-orange-400" size={28} /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" size={28} /> },
      { name: "Jenkins", icon: <SiJenkins className="text-red-400" size={28} /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" size={28} /> },
    ],
  },
  {
    label: "Programming / DSA",
    skills: [
      { name: "Python", icon: <FaPython className="text-blue-500" size={28} /> },
      { name: "Java", icon: <FaJava className="text-red-500" size={28} /> },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" size={28} /> },
      { name: "GitHub", icon: <SiGithub className="text-black" size={28} /> },
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat) => (
          <div
            key={cat.label}
            className="bg-[#0F1116] rounded-2xl shadow-md border border-slate-800 p-8 flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-bold mb-6 text-yellow-400">{cat.label}</h3>
            <div className="flex flex-wrap justify-center gap-5">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-1 min-w-[80px]"
                >
                  <span>{skill.icon}</span>
                  <span className="text-sm font-medium text-yellow-400">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
