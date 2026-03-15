import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, lang, toggleLang } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.profile, href: "#profile" },
    { name: t.nav.music, href: "#music" },
    { name: t.nav.gallery, href: "#gallery" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${
          scrolled ? "glass-panel" : "bg-transparent"
        }`}>

          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Music className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-wide text-white">Dima</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white text-xs font-semibold tracking-widest transition-all"
            >
              {lang === "en" ? "KA" : "EN"}
            </button>
            <a href="#music" className="px-5 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all">
              {t.nav.listen}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold tracking-widest"
            >
              {lang === "en" ? "KA" : "EN"}
            </button>
            <button
              className="p-2 text-white/80 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-[#0d0d1f] border-l border-white/10 flex flex-col p-6 md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-bold text-white text-lg">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-white/60 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl bg-white/5 text-white/80 hover:text-white hover:bg-white/10 font-medium transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="mt-6">
                <a
                  href="#music"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm"
                >
                  {t.nav.listen}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
