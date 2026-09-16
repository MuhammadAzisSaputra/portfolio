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
          <div className={styles.socialLinks}>
            <a href="https://github.com/MuhammadAzisSaputra" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className={styles.socialLink}>
              <img src="/assets/social/GitHub.svg" alt="" className={styles.socialIcon} />
            </a>
            <a href="https://www.linkedin.com/in/azisputra" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className={styles.socialLink}>
              <img src="/assets/social/LinkedIn.svg" alt="" className={styles.socialIcon} />
            </a>
            <a href="mailto:mhdazissaputra@gmail.com" aria-label="Email Muhammad Azis Saputra" className={styles.socialLink}>
              <img src="/assets/social/Gmail.svg" alt="" className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Muhammad Azis Saputra.</p>
        </div>
      </Container>
    </footer>
  );
}
