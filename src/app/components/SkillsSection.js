// SkillsSection.js
import { FaReact, FaNodeJs, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" size={28} /> },
  { name: "React", icon: <FaReact className="text-blue-400" size={28} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" size={28} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={28} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={28} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" size={28} /> },
];

export default function SkillsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-extrabold mb-8 text-orange-600 tracking-wide text-center">
        Skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="bg-orange-50 border border-orange-200 text-orange-700 font-semibold px-6 py-4 rounded-xl shadow-sm flex flex-col items-center gap-2 w-40"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
