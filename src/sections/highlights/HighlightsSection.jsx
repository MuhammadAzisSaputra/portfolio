import Container from '../../components/ui/Container';
import styles from './HighlightsSection.module.css';

export default function HighlightsSection() {
  const highlights = [
    {
      metric: '3.86 / 4.00',
      description: 'Bachelor of Computer Science GPA',
    },
    {
      metric: 'Scopus-Indexed Publication',
      description: 'Co-authored a peer-reviewed article in Data in Brief',
    },
    {
      metric: 'Top 50 Team',
      description: 'Bangkit Elevator Pitch Challenge',
    },
    {
      metric: '92.01% mAP@0.5:0.95',
      description: 'Best documented YOLO26s benchmark in soybean seed detection research',
    },
  ];

  return (
    <section className={styles.highlightsSection} aria-labelledby="highlights-heading">
      <Container>
        <h2 id="highlights-heading" className={styles.heading}>
          Selected Highlights
        </h2>
        <div className={styles.grid}>
          {highlights.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.metric}>{item.metric}</div>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
