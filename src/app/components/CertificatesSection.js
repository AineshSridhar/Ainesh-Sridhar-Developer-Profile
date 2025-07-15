// CertificatesSection.js
const certificates = [
  {
    name: "AWS Solutions Architect",
    org: "Ethnus",
    date: "April 2024",
    img: "/AWS_Solutions_Architect.png",
    link: "#",
  },
  {
    name: "DevOps",
    org: "IBM Adroit",
    date: "June 2025",
    img: "/IBM_Adroit_DevOps_Prolearn.png",
    link: "#",
  },
  {
    name: "Developing Back-End Apps with Node.js and Express",
    org: "Coursera",
    date: "Dec 2022",
    img: "/CourseraExpressNode.png",
    link: "#",
  },
];

export default function CertificatesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-extrabold mb-8 text-orange-600 tracking-wide text-center">
        Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert) => (
          <div key={cert.name} className="bg-orange-50 rounded-xl shadow-lg overflow-hidden border border-orange-100 flex flex-col items-center p-6">
            <img src={cert.img} alt={cert.name} className="h-24 mb-4 object-contain" />
            <h3 className="font-bold text-lg text-orange-700 mb-1">{cert.name}</h3>
            <span className="text-gray-600 text-sm mb-2">{cert.org}</span>
            <span className="text-gray-400 text-xs mb-4">{cert.date}</span>
            <a
              href={cert.link}
              className="text-orange-600 font-semibold hover:underline"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
