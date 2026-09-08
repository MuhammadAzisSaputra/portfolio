import Button from '../../components/ui/Button';
import styles from './FeaturedProject.module.css';

export default function FeaturedProject({ project, reverse }) {
  // Collect a subset of technologies. Just flatten the first few keys and grab up to 4 items.
  let techTags = [];
  if (project.technologies) {
    const allTechs = Object.values(project.technologies).flat();
    techTags = allTechs.slice(0, 4);
  }

  return (
    <article className={`${styles.featuredProject} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.visualCol}>
        <div className={styles.imagePlaceholder} aria-hidden="true">
          <span className={styles.placeholderText}>
            [Image Pending: {project.assetDirectory}cover.webp]
          </span>
        </div>
      </div>
      <div className={styles.contentCol}>
        <p className={styles.category}>{project.category}</p>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.summary}>{project.summary}</p>
        
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>{project.role}</span>
          </div>
          {project.keyMetric && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Key Metric</span>
              <span className={styles.metaValue}>{project.keyMetric}</span>
            </div>
          )}
        </div>

        {techTags.length > 0 && (
          <div className={styles.tags}>
            {techTags.map((tech, i) => (
              <span key={i} className={styles.tag}>{tech}</span>
            ))}
          </div>
        )}

        <div className={styles.cta}>
          <Button as="link" to={project.route} variant="primary">
            View Case Study
          </Button>
        </div>
      </div>
    </article>
  );
}
