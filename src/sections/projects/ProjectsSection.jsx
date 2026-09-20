import Container from '../../components/ui/Container';
import FeaturedProject from './FeaturedProject';
import { projects } from '../../content/projects';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projectsSection} aria-labelledby="projects-heading">
      <Container>
        <header className={styles.header}>
          <span className={styles.label}>Projects</span>
        </header>

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
