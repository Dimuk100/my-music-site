import { Instagram, Youtube, Music2, Video, ArrowRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLang();

  const socials = [
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "YouTube", icon: Youtube, url: "#" },
    { name: "Spotify", icon: Music2, url: "#" },
    { name: "TikTok", icon: Video, url: "#" },
  ];

  return (
    <footer className="border-t border-white/10 mt-8 sm:mt-16 pt-8 sm:pt-16 pb-8 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-display font-bold text-xl tracking-wide text-white">Dima Vardzelashvili</h3>
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Dima Vardzelashvili | {t.footer.copyright}
            </p>
          </div>

          <div className="w-full md:w-auto max-w-sm flex flex-col items-center md:items-start gap-2">
            <span className="text-sm font-medium text-white/70">{t.footer.newsletter}</span>
            <div className="relative w-full flex">
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-4 pr-28 py-2.5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-all text-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors flex items-center gap-1">
                {t.footer.subscribe}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
}
