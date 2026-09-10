import HeroSection from '../sections/hero/HeroSection';
import HighlightsSection from '../sections/highlights/HighlightsSection';
import ProjectsSection from '../sections/projects/ProjectsSection';
import ExperienceSection from '../sections/experience/ExperienceSection';
import ResearchSection from '../sections/research/ResearchSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResearchSection />
    </>
  );
}
