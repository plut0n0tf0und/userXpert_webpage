"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function Showcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e?: React.SyntheticEvent) => {
    if (e && (e.target as HTMLElement).closest('.mute-toggle')) return;
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="showcase" className="relative z-20 pb-24 px-6 md:px-12 -mt-24 md:-mt-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-black w-full aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 group cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          role="button"
          tabIndex={0}
          onClick={togglePlay}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              togglePlay();
            }
          }}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <video
            ref={videoRef}
            src="/BayBreeze_Ad.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            preload="metadata"
            muted={isMuted}
            loop
            playsInline
            suppressHydrationWarning
          />

          {/* Subtle Bottom Gradient for Text Readability */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-80'}`} />

          {/* Informational Text Overlay */}
          <div className={`absolute bottom-0 left-0 p-6 md:p-10 pointer-events-none flex flex-col items-start text-left z-10 w-full max-w-3xl transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
            <span className="inline-block px-3 py-1 mb-3 text-sm font-bold uppercase tracking-widest text-white/90 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              IN THE SPOTLIGHT
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
              Designed to Inspire Better Guest Experiences
            </h3>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-xl text-balance">
              A cinematic website concept exploring how premium design can help hospitality brands create memorable first impressions.
            </p>
          </div>
          
          {/* Glassmorphism Play/Pause Button */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 bg-black/20'}`}>
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl transform transition-transform hover:scale-105 active:scale-95">
              {isPlaying ? (
                <Pause className="w-10 h-10 md:w-12 md:h-12 fill-current" />
              ) : (
                <Play className="w-10 h-10 md:w-12 md:h-12 fill-current ml-1.5" />
              )}
            </div>
          </div>

          {/* Mute Toggle Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            className="mute-toggle absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg transition-all hover:bg-white/30 hover:scale-105 active:scale-95 z-10 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
