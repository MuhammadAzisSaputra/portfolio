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
            <img src="/assets/branding/logo/logo-light.svg" alt="Muhammad Azis Saputra Logo" className={styles.logoImage} />
          </Link>

          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <ul className={styles.navList}>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#projects">Projects</Link></li>
              <li><Link to="/#experience">Experience</Link></li>
              <li><Link to="/#leadership">Organization</Link></li>
              <li><Link to="/#skills">Skills</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
