import { Link } from 'react-router-dom';
import styles from './ProjectNavigation.module.css';

export default function ProjectNavigation({ previous, next }) {
  return (
    <nav className={styles.nav} aria-label="Project navigation">
      <div className={styles.navInner}>
        {previous ? (
          <Link to={previous.route} className={`${styles.link} ${styles.prevLink}`}>
            <span className={styles.label}>Previous Project</span>
            <span className={styles.title}>{previous.name}</span>
          </Link>
        ) : (
          <div className={`${styles.link} ${styles.disabled}`}>
            <span className={styles.label}>Previous Project</span>
            <span className={styles.title}>None</span>
          </div>
        )}

        <div className={styles.centerLink}>
          <Link to="/#projects" className={styles.backLink}>
            Back to Projects
          </Link>
        </div>

        {next ? (
          <Link to={next.route} className={`${styles.link} ${styles.nextLink}`}>
            <span className={styles.label}>Next Project</span>
            <span className={styles.title}>{next.name}</span>
          </Link>
        ) : (
          <div className={`${styles.link} ${styles.disabled}`}>
            <span className={styles.label}>Next Project</span>
            <span className={styles.title}>None</span>
          </div>
        )}
      </div>
    </nav>
  );
}
