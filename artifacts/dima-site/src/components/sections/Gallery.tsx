import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export function Gallery() {
  const { t } = useLang();

  const images = [
    { id: 1, src: `${import.meta.env.BASE_URL}images/gallery-1.png`, alt: "Piano performance" },
    { id: 2, src: `${import.meta.env.BASE_URL}images/gallery-2.png`, alt: "Live guitar" },
    { id: 3, src: `${import.meta.env.BASE_URL}images/gallery-3.png`, alt: "Concert crowd" },
    { id: 4, src: `${import.meta.env.BASE_URL}images/gallery-4.png`, alt: "Recording studio" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      id="gallery"
      className="glass-card p-4 sm:p-6 md:p-10 flex flex-col h-full"
    >
      <div className="flex items-center gap-4 mb-4 sm:mb-8">
        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
          <span className="font-display font-bold text-xl text-indigo-300">G</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">{t.gallery.title}</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {images.map((img) => (
          <motion.div
            key={img.id}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden group bg-white/5 aspect-square"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
