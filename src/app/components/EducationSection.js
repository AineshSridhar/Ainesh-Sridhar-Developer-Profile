import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    score: "9.03/10",
    icon: <FaUniversity className="text-2xl text-[#14b8a6]" />,
    institution: "VIT Bhopal University",
    degree: "B.Tech, Computer Science Engineering",
    location: "Bhopal, MP",
    date: "Expected Aug 2026",
    color: "bg-[#e0f2f1]",
  },
  {
    score: "93.2%",
    icon: <FaGraduationCap className="text-2xl text-[#fbbf24]" />,
    institution: "N.K. Bagrodia Public School",
    degree: "Class XII, CBSE",
    location: "New Delhi",
    date: "May 2022",
    color: "bg-[#fef9c3]",
  },
  {
    score: "93.33%",
    icon: <FaSchool className="text-2xl text-[#0f766e]" />,
    institution: "Amity Global School",
    degree: "Class X, IGCSE",
    location: "New Delhi",
    date: "May 2020",
    color: "bg-[#f0fdf4]",
  },
];

export default function EducationSection() {
  return (
    <section className="w-full py-16 px-4 bg-[#f9fafb]">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-12 tracking-tight">
        My Education
      </h2>
      <div className="flex flex-col md:flex-row md:justify-center gap-8 overflow-x-auto">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className={`relative flex-shrink-0 w-full md:w-96 ${edu.color} rounded-3xl shadow-xl transition-transform hover:-translate-y-2 duration-300`}
            style={{ minWidth: "320px" }}
          >
            <div className="flex flex-col items-center pt-8 pb-6 px-8">
              <div className="text-5xl font-extrabold text-teal-700 drop-shadow mb-2">
                {edu.score}
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border-2 border-white mb-4">
                {edu.icon}
              </div>
              <h3 className="text-xl font-semibold text-teal-700 mb-1 text-center">
                {edu.institution}
              </h3>
              <div className="text-md text-slate-700 font-medium text-center mb-1">
                {edu.degree}
              </div>
              <div className="flex flex-col items-center text-sm text-slate-500 mb-2">
                <span>{edu.location}</span>
                <span>{edu.date}</span>
              </div>
              <div className="w-10 h-1 rounded-full bg-gradient-to-r from-teal-400 via-yellow-300 to-teal-700 opacity-60 mt-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
