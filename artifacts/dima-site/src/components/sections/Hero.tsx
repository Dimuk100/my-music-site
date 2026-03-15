import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative flex items-center justify-center pt-20 sm:pt-28 pb-8 sm:pb-16 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-white/80 uppercase tracking-wider">{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient leading-[1.15] mb-3 sm:mb-6"
        >
          Dima Vardzelashvili
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-sm sm:text-xl md:text-2xl text-white/60 mb-5 sm:mb-10 max-w-2xl font-light"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a href="#music" className="button-primary w-full sm:w-auto text-center text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3.5">
            {t.hero.listenBtn}
          </a>
          <a href="#contact" className="button-outline w-full sm:w-auto text-center text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3.5">
            {t.hero.followBtn}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
