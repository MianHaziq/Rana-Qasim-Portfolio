import profile from "@/data/profile";
import projects from "@/data/projects";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import EducationSection from "@/sections/EducationSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection profile={profile} />
        <AboutSection about={profile.about} />
        <SkillsSection skills={profile.skills} />
        <ExperienceSection experience={profile.experience} />
        <EducationSection education={profile.education} />
        <ProjectsSection projects={projects} />
        <ContactSection contact={profile.contact} />
      </main>
      <Footer />
    </>
  );
}
