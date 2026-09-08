import Container from '../../components/ui/Container';
import FeaturedProject from './FeaturedProject';
import SecondaryProjectCard from './SecondaryProjectCard';
import { featuredProjects, secondaryProjects } from '../../content/projects';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projectsSection} aria-labelledby="projects-heading">
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Projects</p>
          <h2 id="projects-heading" className={styles.heading}>
            Selected work across Software, Data & AI.
          </h2>
          <p className={styles.supportingCopy}>
            A selection of projects that show how I approach technical problems, system design, data, machine learning, and product implementation.
          </p>
        </div>

        <div className={styles.featuredList}>
          {featuredProjects.map((project, index) => (
            <FeaturedProject 
              key={project.slug} 
              project={project} 
              reverse={index % 2 !== 0} 
            />
          ))}
        </div>

        {secondaryProjects && secondaryProjects.length > 0 && (
          <div className={styles.secondarySection}>
            <h3 className={styles.secondaryHeading}>Other Projects</h3>
            <div className={styles.secondaryGrid}>
              {secondaryProjects.map(project => (
                <SecondaryProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
