import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] bg-white flex flex-col md:flex-row items-center justify-between px-8 pt-16 overflow-hidden">
      {/* Abstract Orange and Black Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-48 bg-orange-100 rounded-b-full blur-2xl opacity-60 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-black rounded-full blur-3xl opacity-10 pointer-events-none z-0" />

      {/* Left: Text */}
      <div className="flex-1 z-10 flex flex-col items-start ml-8 md:ml-16">
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-black leading-tight tracking-tight drop-shadow-lg">
          Hi, I'm <span className="text-orange-500">Ainesh Sridhar</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-900 max-w-lg font-medium">
          I build{" "}
          <span className="text-orange-500 font-bold">
            seamless digital experiences
          </span>{" "}
          that engage and convert.
        </p>
        <a
          href="#contact"
          className="inline-block bg-orange-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-black hover:text-orange-400 transition-all duration-200 text-lg"
        >
          Get in Touch
        </a>
      </div>

      {/* Right: Profile Image with Head Pop-Out Effect and Floating Badges */}
      <div className="flex-1 flex items-center justify-center relative mt-12 md:mt-0 z-10">
        <div className="relative w-150 h-150 md:w-100 md:h-100 flex items-center justify-center">
          {/* Decorative Circle Border */}
          {/* <div className="absolute w-full h-full rounded-full border-4 border-orange-500 z-150" /> */}

          {/* Pop-Out Image: head above the circle, shoulders inside */}
          <img
            src="/Ainesh Sridhar OLD.png"
            alt="Profile"
            className="w-[110%] h-[110%] object-contain z-20"
            style={{
              position: "absolute",
              left: "50%",
              top: "54%",
              transform: "translate(-50%, -60%) scale(1.5)",
              // ✨ FIX: Using a larger, centered ellipse to properly frame the body inside the circle.
              // clipPath: "ellipse(46% 46% at 50% 58%)",
              pointerEvents: "none",
            }}
          />

          {/* Floating Badges */}
          <div className="absolute -left-40 top-10 bg-white/95 border-2 border-orange-300 rounded-2xl shadow-xl px-5 py-3 flex items-center gap-2 animate-float z-30">
            <span className="font-bold text-orange-500 text-lg">
              Full-stack Developer
            </span>
          </div>
          <div className="absolute -right-15 bottom-10 bg-black/95 border-2 border-white rounded-2xl shadow-xl px-5 py-2 flex items-center gap-2 animate-float-slow z-30">
            <span className="text-sm text-orange-400 font-semibold">
              Backend Specialist
            </span>
          </div>
        </div>
      </div>

      {/* ... (The style block is unchanged) ... */}
    </section>
  );
}