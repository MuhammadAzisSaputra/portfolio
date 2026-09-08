import Container from '../ui/Container';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.info}>
            <p className={styles.name}>Muhammad Azis Saputra</p>
            <p className={styles.tagline}>Software &bull; Data &bull; AI</p>
          </div>
          <div className={styles.links}>
            <a href="https://www.linkedin.com/in/azisputra" target="_blank" rel="noopener noreferrer" aria-label="Open Muhammad Azis Saputra on LinkedIn">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Open Muhammad Azis Saputra on GitHub">GitHub</a>
            <a href="mailto:mhdazissaputra@gmail.com" aria-label="Email Muhammad Azis Saputra">Email</a>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Muhammad Azis Saputra.</p>
        </div>
      </Container>
    </footer>
  );
}
