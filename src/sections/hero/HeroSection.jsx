import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <Container className={styles.heroContainer}>
        <div className={styles.contentCol}>
          <p className={styles.eyebrow}>Hello, I'm</p>
          <h1 className={styles.headline}>
            <span className={styles.name}>Muhammad Azis Saputra</span>
            <span className={styles.title}>Building practical solutions across Software, Data &amp; AI.</span>
          </h1>
          <p className={styles.supportingCopy}>
            An Information Technology graduate building web applications, data-driven solutions, and AI-powered systems — with a focus on solving practical problems, understanding real workflows, and turning technical ideas into usable products.
          </p>
          <div className={styles.ctaGroup}>
            <Button as="link" to="/#projects" variant="primary">
              View My Work
            </Button>
            <Button
              as="a"
              href="/assets/documents/resume/muhammad-azis-saputra-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Download Resume
            </Button>
          </div>
        </div>

        <div className={styles.portraitCol}>
          <div className={styles.portraitStage}>
            <img
              src="/assets/personal/portrait/profile-semi-formal-no-background.png"
              alt="Muhammad Azis Saputra portrait"
              className={styles.portraitImage}
            />
            <div className={styles.badge}>
              Software &bull; Data &bull; AI
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
