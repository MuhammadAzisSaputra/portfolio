import Container from '../../components/ui/Container';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <Container>
        <header className={styles.header}>
          <span className={styles.label}>About</span>
          <h2 className={styles.title}>
            I enjoy working where software, data, and real-world problems meet.
          </h2>
        </header>

        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p>
              I'm an Information Technology graduate from Universitas Sumatera Utara with experience spanning web development, data analysis, machine learning, and computer vision research. I enjoy understanding how a problem works before deciding what technology should be used to solve it.
            </p>
            <p>
              My work has included building web-based information systems, developing and deploying AI models, analyzing data, and collaborating with cross-functional teams. I am especially interested in projects where technical implementation needs to connect with real users, operational workflows, or measurable outcomes.
            </p>
            <p>
              I continue to strengthen my software engineering, data, and AI foundations while learning new tools through hands-on projects rather than treating technology as an end in itself.
            </p>
          </div>

          <aside className={styles.facts}>
            <div className={styles.factItem}>
              <span className={styles.factLabel}>Location</span>
              <span className={styles.factValue}>Based in Medan, Indonesia</span>
            </div>
            <div className={styles.factItem}>
              <span className={styles.factLabel}>Education</span>
              <span className={styles.factValue}>Bachelor of Computer Science</span>
              <span className={styles.factValue}>Universitas Sumatera Utara</span>
            </div>
            <div className={styles.factItem}>
              <span className={styles.factLabel}>Academic</span>
              <span className={styles.factValue}>GPA 3.86 / 4.00</span>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
