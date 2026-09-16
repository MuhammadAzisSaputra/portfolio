import Container from '../../components/ui/Container';
import FeaturedProject from './FeaturedProject';
import { projects } from '../../content/projects';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projectsSection} aria-labelledby="projects-heading">
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Projects</p>
          <h2 id="projects-heading" className={styles.heading}>
            Selected Projects.
          </h2>
          <p className={styles.supportingCopy}>
            An overview of important work across software engineering, data analysis, and machine learning.
          </p>
        </div>

        <div className={styles.featuredList}>
          {projects.map((project) => (
            <FeaturedProject
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
