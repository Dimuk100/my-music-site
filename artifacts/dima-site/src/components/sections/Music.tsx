import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Heart, SkipBack, SkipForward, Repeat, Shuffle } from "lucide-react";

export function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);

  const songs = [
    { id: 1, title: "You Light My Days", duration: "3:20", active: true },
    { id: 2, title: "New Melody", duration: "2:54", active: false },
    { id: 3, title: "Midnight Echoes", duration: "4:15", active: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.2 }}
      id="music"
      className="glass-card p-4 sm:p-6 md:p-10 flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-4 sm:mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span className="font-display font-bold text-xl text-blue-300">M</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-white">Music</h2>
        </div>
        <button className="text-sm font-medium text-white/50 hover:text-white transition-colors">
          View All
        </button>
      </div>

      <div className="flex-grow flex flex-col gap-3 mb-8">
        {songs.map((song) => (
          <div
            key={song.id}
            className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
              song.active 
                ? "bg-white/10 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                : "bg-transparent hover:bg-white/5 border border-transparent"
            }`}
          >
            <div className="flex items-center gap-4">
              <button 
                onClick={() => song.active && setIsPlaying(!isPlaying)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  song.active ? "bg-white text-black" : "bg-white/10 text-white group-hover:bg-white group-hover:text-black"
                }`}
              >
                {song.active && isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-1" />
                )}
              </button>
              <div>
                <h4 className={`font-medium ${song.active ? "text-white" : "text-white/80"}`}>
                  {song.title}
                </h4>
                <p className="text-xs text-white/40 mt-1">Dima Vardzelashvili</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-white/50">{song.duration}</span>
              <button className="text-white/30 hover:text-red-400 transition-colors">
                <Heart className={`w-5 h-5 ${song.active ? "fill-white/10" : ""}`} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Music Player Bar */}
      <div className="mt-auto pt-6 border-t border-white/10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-white/50">0:58</span>
          <div className="flex items-center gap-3 sm:gap-6">
            <button className="hidden sm:block text-white/40 hover:text-white transition-colors">
              <Shuffle className="w-4 h-4" />
            </button>
            <button className="text-white/60 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5 fill-current" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/25 hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              ) : (
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
              )}
            </button>
            <button className="text-white/60 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5 fill-current" />
            </button>
            <button className="hidden sm:block text-white/40 hover:text-white transition-colors">
              <Repeat className="w-4 h-4" />
            </button>
          </div>
          <span className="text-xs font-mono text-white/50">3:20</span>
        </div>
        
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </motion.div>
  );
}
