import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import styles from './FeaturedProject.module.css';

export default function FeaturedProject({ project }) {
  return (
    <article className={styles.featuredProject}>
      <div className={styles.visualCol}>
        <Link to={project.route} className={styles.imageLink} aria-hidden="true" tabIndex="-1">
          {project.coverImage ? (
            <img src={project.coverImage} alt={`${project.name} preview`} className={styles.image} loading="lazy" />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span className={styles.placeholderText}>[Image Pending]</span>
            </div>
          )}
        </Link>
      </div>
      <div className={styles.contentCol}>
        <p className={styles.category}>{project.category}</p>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.summary}>{project.cardDescription || project.summary}</p>
        
        <div className={styles.cta}>
          <Button as="link" to={project.route} variant="primary">
            View Case Study
          </Button>
        </div>
      </div>
    </article>
  );
}
