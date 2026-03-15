import { createContext, useContext, useState, ReactNode } from "react";

const translations = {
  en: {
    nav: { profile: "Profile", music: "Music", gallery: "Gallery", contact: "Contact", listen: "Listen Now" },
    hero: { badge: "New Single Available Now", subtitle: "Musician • Composer • Creator", listenBtn: "Listen Music", followBtn: "Follow" },
    profile: { title: "Artist Profile", bio: "Dima Vardzelashvili is an accomplished musician, singer, songwriter and creator!" },
    music: { title: "Music", viewAll: "View All" },
    gallery: { title: "Gallery" },
    contact: { title: "Contact Me", name: "Your Name", email: "Your Email", message: "Your Message", send: "Send Message", namePlaceholder: "John Doe", emailPlaceholder: "john@example.com", messagePlaceholder: "Let's create something together..." },
    footer: { newsletter: "Share your Newsletter", subscribe: "Subscribe", copyright: "All Rights Reserved" },
  },
  ka: {
    nav: { profile: "პროფილი", music: "მუსიკა", gallery: "გალერეა", contact: "კონტაქტი", listen: "მოუსმინე" },
    hero: { badge: "ახალი სინგლი ხელმისაწვდომია", subtitle: "მუსიკოსი • კომპოზიტორი • შემქმნელი", listenBtn: "მოუსმინე", followBtn: "გამოწერა" },
    profile: { title: "არტისტის პროფილი", bio: "დიმა ვარძელაშვილი არის გამოჩენილი მუსიკოსი, მომღერალი, სიმღერების ავტორი და შემქმნელი!" },
    music: { title: "მუსიკა", viewAll: "ყველა" },
    gallery: { title: "გალერეა" },
    contact: { title: "დამიკავშირდი", name: "თქვენი სახელი", email: "თქვენი Email", message: "თქვენი შეტყობინება", send: "გაგზავნა", namePlaceholder: "სახელი გვარი", emailPlaceholder: "email@example.com", messagePlaceholder: "მოგვწერეთ..." },
    footer: { newsletter: "გამოიწერეთ სიახლეები", subscribe: "გამოწერა", copyright: "ყველა უფლება დაცულია" },
  },
};

type Lang = "en" | "ka";
type Translations = typeof translations.en;

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  t: translations.en,
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "ka" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
