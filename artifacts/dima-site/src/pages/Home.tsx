import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Profile } from "@/components/sections/Profile";
import { Music } from "@/components/sections/Music";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060612] text-white selection:bg-purple-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Left Column */}
            <div className="flex flex-col gap-8 md:gap-12">
              <Profile />
              <Gallery />
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col gap-8 md:gap-12">
              <Music />
              <Contact />
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
