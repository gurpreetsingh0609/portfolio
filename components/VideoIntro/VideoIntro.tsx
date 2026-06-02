"use client";
import { useState, useRef } from "react";

export default function VideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="h-screen w-full overflow-hidden bg-[#050505] grid grid-cols-1 lg:grid-cols-12 relative">
      
      {/* LEFT SIDE: Typography & Details */}
      <div className="lg:col-span-7 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 relative z-20 bg-[#050505]">
        
        {/* Open to Work Badge */}
        <div className="flex items-center gap-2 border border-green-500/30 bg-green-500/10 px-3 py-1.5 rounded-full mb-6 w-fit backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-green-400 text-xs font-bold tracking-widest uppercase">Open to work</span>
        </div>

        {/* Main Name */}
        <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-2">
          GURPREET SINGH
        </h1>

        {/* Subtitle */}
        <h2 className="text-[#d4884f] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-8">
          Data Analyst · Power BI Developer
        </h2>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10 max-w-xl">
          {['POWER BI', 'TABLEAU', 'SQL', 'EXCEL', 'PYTHON', 'ALTERYX'].map((tech) => (
            <span key={tech} className="px-3.5 py-1.5 border border-white/10 rounded-full text-[11px] font-medium text-gray-400 bg-white/5 backdrop-blur-sm transition-colors hover:border-white/30 cursor-default">
              {tech}
            </span>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex items-center gap-8">
          <a href="#projects" className="px-6 py-3 border border-white/30 rounded-full text-xs font-semibold hover:bg-white hover:text-black hover:border-white transition-all tracking-wider uppercase">
            VIEW PROJECTS
          </a>
          <a href="https://github.com/gurpreetsingh0609" target="_blank" rel="noreferrer" className="text-xs font-bold text-[#d4884f] hover:text-white flex items-center gap-2 transition-colors tracking-wider uppercase">
            GitHub <span className="text-lg leading-none">›</span>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE: Video Column with multi-layered seamless blending */}
      <div className="lg:col-span-5 relative h-[50vh] lg:h-full w-full overflow-hidden bg-[#050505]">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted={isMuted}
          className="w-full h-full object-cover object-top"
        >
          <source src="/Videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* LAYER 1: Smooth BOTTOM blend (Melts the video base into the dark canvas below) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent z-10 pointer-events-none"></div>

        {/* LAYER 2: Desktop LEFT-TO-RIGHT blend (Seamless transition to the text layout) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/10 to-transparent z-10 pointer-events-none"></div>

        {/* LAYER 3: Mobile TOP blend (Smooth transition if content stacks vertically) */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-transparent z-10 pointer-events-none"></div>

        {/* Audio Floating Controller Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-30 p-3.5 bg-black/60 border border-white/10 hover:border-white/40 text-white rounded-full backdrop-blur-md transition-all flex items-center justify-center cursor-pointer group shadow-xl"
          title={isMuted ? "Unmute Audio" : "Mute Audio"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#d4884f] animate-pulse">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}

