import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import MobileMenu from './MobileMenu';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <div className={styles.navbar}>
          <Link to="/" className={styles.brand} aria-label="Muhammad Azis Saputra - Home">
            AZIS.
          </Link>
          
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <ul className={styles.navList}>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#experience">Experience</Link></li>
              <li><Link to="/#projects">Projects</Link></li>
              <li><Link to="/#skills">Skills</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
              <li><a href="/assets/documents/resume/muhammad-azis-saputra-resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeLink}>Resume</a></li>
            </ul>
          </nav>
          
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
