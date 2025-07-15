import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-stretch overflow-hidden px-8 pt-4">

      {/* Left: Image with Fade Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/PresPhoto-Picsart-AiImageEnhancer.jpg"
          alt="Profile"
          className="w-full h-full object-cover grayscale-100  select-none object-left"
          style={{ objectPosition: "left 30%" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, transparent 65%, rgba(0,0,0,0.9) 85%, #000 95%, #000 100%)"
          }}
        />
      </div>

      {/* Right Side: Text container (centered) */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center ml-auto">
        <div className="text-center md:text-right">
          <h1 className="text-4xl md:text-6xl text-yellow-400 mb-6 font-black leading-tight tracking-tight drop-shadow-lg">
            Ainesh Sridhar
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-lime-300 font-medium">
            A Full stack software engineer
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-lime-500 transition-all duration-200 text-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
