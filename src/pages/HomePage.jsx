import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../sections/hero/HeroSection';
import AboutSection from '../sections/about/AboutSection';
import ProjectsSection from '../sections/projects/ProjectsSection';
import ExperienceSection from '../sections/experience/ExperienceSection';
import LeadershipSection from '../sections/leadership/LeadershipSection';
import SkillsSection from '../sections/skills/SkillsSection';
import ContactSection from '../sections/contact/ContactSection';

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <LeadershipSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
