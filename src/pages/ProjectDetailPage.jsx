import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ProjectHero from '../components/project/ProjectHero';
import ProjectVisual from '../components/project/ProjectVisual';
import CaseStudySection from '../components/project/CaseStudySection';
import ProjectTechStack from '../components/project/ProjectTechStack';
import ProjectNavigation from '../components/project/ProjectNavigation';
import { getProjectBySlug, projects } from '../content/projects';
import styles from './ProjectDetailPage.module.css';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className={styles.notFoundPage}>
        <Container>
          <div className={styles.notFoundContent}>
            <h1 className={styles.notFoundTitle}>Project not found.</h1>
            <p className={styles.notFoundCopy}>
              This project page is unavailable or the link may be incorrect.
            </p>
            <Button as="link" to="/#projects" variant="primary">
              View All Projects
            </Button>
          </div>
        </Container>
      </main>
    );
  }

  // Determine previous and next projects
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const previous = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className={styles.page}>
      <Container>
        <article>
          <ProjectHero project={project} />
          <ProjectVisual project={project} />
          
          <CaseStudySection title="Overview">
            <p>{project.summary}</p>
            {project.cardDescription && <p>{project.cardDescription}</p>}
          </CaseStudySection>

          <ProjectTechStack technologies={project.technologies} />

          <ProjectNavigation previous={previous} next={next} />
        </article>
      </Container>
    </main>
  );
}
