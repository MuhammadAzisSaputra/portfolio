import CaseStudySection from './CaseStudySection';
import styles from './ProjectFeatureGrid.module.css';

export default function ProjectFeatureGrid({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <CaseStudySection title={title}>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.description}</p>
          </div>
        ))}
      </div>
    </CaseStudySection>
  );
}
