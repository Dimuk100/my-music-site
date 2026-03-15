import { motion } from "framer-motion";
import { Instagram, Youtube, Music2, Video } from "lucide-react";

export function Profile() {
  const socials = [
    { name: "Instagram", icon: Instagram, url: "#", color: "hover:text-pink-500" },
    { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-red-500" },
    { name: "Spotify", icon: Music2, url: "#", color: "hover:text-green-500" },
    { name: "TikTok", icon: Video, url: "#", color: "hover:text-cyan-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      id="profile"
      className="glass-card p-8 md:p-10 flex flex-col h-full"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
          <span className="font-display font-bold text-xl text-purple-300">P</span>
        </div>
        <h2 className="text-3xl font-display font-bold text-white">Artist Profile</h2>
      </div>

      <div className="flex-grow flex flex-col items-center text-center">
        <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
          <img
            src={`${import.meta.env.BASE_URL}artist-hero.png`}
            alt="Dima Vardzelashvili"
            className="relative w-full h-full object-cover rounded-full border-2 border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-sm">
          Dima Vardzelashvili is an accomplished <span className="text-white font-medium">musician, singer, songwriter</span> and creator!
        </p>

        <div className="mt-auto pt-6 border-t border-white/10 w-full flex justify-center gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-full bg-white/5 border border-white/10 text-white/60 transition-all duration-300 hover:bg-white/10 hover:scale-110 ${social.color}`}
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
