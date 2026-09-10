import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import styles from './ResearchSection.module.css';

export default function ResearchSection() {
  return (
    <section id="research" className={styles.researchSection}>
      <Container>
        <header className={styles.header}>
          <span className={styles.label}>Research</span>
          <h2 className={styles.title}>
            Applying computer vision to agricultural research.
          </h2>
        </header>

        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p>
              My research experience has focused on image-based soybean analysis, where computer-vision models were developed, evaluated, and integrated into tools intended to support agricultural research workflows.
            </p>
            <p>
              This work also contributed to a peer-reviewed article published in Data in Brief, a Scopus-indexed international journal.
            </p>
          </div>

          <div className={styles.publicationBlock}>
            <div className={styles.publicationCard}>
              <span className={styles.pubLabel}>Peer-Reviewed Publication</span>
              <h3 className={styles.pubVenue}>Data in Brief</h3>
              <p className={styles.pubText}>
                Co-author of a research article related to the soybean computer-vision work.
              </p>
              <div className={styles.pubAction}>
                <Button 
                  as="a" 
                  href="/assets/research/1-s2.0-S2352340926000776-main.pdf" 
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Publication
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
