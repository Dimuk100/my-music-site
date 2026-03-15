import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useContact } from "@/hooks/use-contact";
import { useLang } from "@/contexts/LanguageContext";

export function Contact() {
  const { sendMessage, isSubmitting } = useContact();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { t } = useLang();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    sendMessage(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.2 }}
      id="contact"
      className="glass-card p-4 sm:p-6 md:p-10 flex flex-col h-full"
    >
      <div className="flex items-center gap-4 mb-4 sm:mb-8">
        <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
          <span className="font-display font-bold text-xl text-pink-300">C</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">{t.contact.title}</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-grow">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-white/60 ml-1">{t.contact.name}</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t.contact.namePlaceholder}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 text-sm"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-white/60 ml-1">{t.contact.email}</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t.contact.emailPlaceholder}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 text-sm"
          />
        </div>

        <div className="space-y-1.5 flex-grow flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-white/60 ml-1">{t.contact.message}</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={t.contact.messagePlaceholder}
            required
            className="w-full flex-grow min-h-[100px] sm:min-h-[120px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 resize-none text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="button-primary mt-1 flex items-center justify-center gap-2 text-sm"
        >
          {isSubmitting ? (
            <span className="animate-pulse">{t.contact.send}...</span>
          ) : (
            <>
              {t.contact.send}
              <Send className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
