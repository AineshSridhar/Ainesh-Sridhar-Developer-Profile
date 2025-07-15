import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    score: "9.03/10",
    icon: <FaUniversity className="text-3xl text-[#14b8a6]" />,
    institution: "VIT Bhopal University",
    degree: "B.Tech, Computer Science Engineering",
    location: "Bhopal, MP",
    date: "Expected Aug 2026",
  },
  {
    score: "93.2%",
    icon: <FaGraduationCap className="text-3xl text-[#fbbf24]" />,
    institution: "N.K. Bagrodia Public School",
    degree: "Class XII, CBSE",
    location: "New Delhi",
    date: "May 2022",
  },
  {
    score: "93.33%",
    icon: <FaSchool className="text-3xl text-[#0f766e]" />,
    institution: "Amity Global School",
    degree: "Class X, IGCSE",
    location: "New Delhi",
    date: "May 2020",
  },
];

export default function EducationSection() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-12 tracking-tight">
        My Education
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
          >
            <div className="mb-4">{edu.icon}</div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">{edu.institution}</h3>
            <div className="text-md text-slate-600 mb-1">{edu.degree}</div>
            <div className="text-sm text-slate-500 mb-1">{edu.location}</div>
            <div className="text-sm text-slate-400 mb-3">{edu.date}</div>
            <div className="inline-block px-4 py-1 bg-slate-100 rounded-full text-lg font-bold text-teal-700 mt-2">
              {edu.score}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
