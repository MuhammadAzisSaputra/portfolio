import HeroSection from '../sections/hero/HeroSection';
import HighlightsSection from '../sections/highlights/HighlightsSection';
import ProjectsSection from '../sections/projects/ProjectsSection';
import ExperienceSection from '../sections/experience/ExperienceSection';
import ResearchSection from '../sections/research/ResearchSection';
import AboutSection from '../sections/about/AboutSection';
import SkillsSection from '../sections/skills/SkillsSection';
import LeadershipSection from '../sections/leadership/LeadershipSection';
import ContactSection from '../sections/contact/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResearchSection />
      <AboutSection />
      <SkillsSection />
      <LeadershipSection />
      <ContactSection />
    </>
  );
}
