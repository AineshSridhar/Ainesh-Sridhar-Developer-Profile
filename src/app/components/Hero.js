import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] bg-gray-200 flex flex-col md:flex-row items-center justify-between px-8 pt-16">
      {/* Left: Text */}
      <div className="flex-1 z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Delight your customers with <span className="">happy elements</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          I build seamless digital experiences that engage and convert.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition"
        >
          Get in Touch
        </a>
      </div>
      {/* Right: Profile Image with Floating Cards */}
      <div className="flex-1 flex items-center justify-center relative mt-10 md:mt-0">
        <div className="relative w-120 h-100">
          <Image
            src="/Ainesh Sridhar OLD.png"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
          {/* Floating UI Card Example */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-xl shadow-lg px-4 py-2">
            <span className="font-bold text-indigo-600">Full-stack Developer</span>
          </div>
          <div className="absolute right-0 bottom-4 bg-white/90 rounded-xl shadow-lg px-4 py-2">
            <span className="text-sm text-gray-600">UI/UX Specialist</span>
          </div>
        </div>
      </div>
    </section>
  );
}
