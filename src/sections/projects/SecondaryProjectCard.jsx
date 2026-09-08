import { Link } from 'react-router-dom';
import styles from './SecondaryProjectCard.module.css';

export default function SecondaryProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <Link to={project.route} className={styles.cardLink}>
        <div className={styles.content}>
          <p className={styles.category}>{project.category}</p>
          <h4 className={styles.name}>{project.name}</h4>
          <p className={styles.summary}>{project.summary}</p>
          <span className={styles.ctaText} aria-hidden="true">
            View Project &rarr;
          </span>
        </div>
      </Link>
    </article>
  );
}
