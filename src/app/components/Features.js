// app/_components/Features.js
import { FaRegSmile, FaHeadset, FaRocket } from "react-icons/fa";

const features = [
  {
    icon: <FaRegSmile size={32} className="text-blue-500" />,
    title: "Vivid Responsiveness",
    desc: "Your site looks great on any device.",
  },
  {
    icon: <FaHeadset size={32} className="text-blue-500" />,
    title: "Live Tech Support",
    desc: "Prompt communication and troubleshooting.",
  },
  {
    icon: <FaRocket size={32} className="text-blue-500" />,
    title: "Speed Ready Message",
    desc: "Optimized performance for fast loading.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-blue-900">Simple way to support your customers</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((f, idx) => (
          <div key={idx} className="bg-blue-50 rounded-2xl p-8 shadow hover:shadow-lg transition flex flex-col items-center">
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-bold text-lg text-blue-700 mb-2">{f.title}</h3>
            <p className="text-gray-600 text-center">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
