import FixedBG from "@/components/fixed-bg";
import AboutSection from "@/components/sections/about";
import WorkExperienceSection from "@/components/sections/experience";
import FooterSection from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import ProjectSection from "@/components/sections/project";
import TechnologySection from "@/components/sections/techology-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <FixedBG />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <WorkExperienceSection />
      <TechnologySection />
      <FooterSection />
    </div>
  );
}
