import CaseStudySection from './CaseStudySection';
import styles from './ProjectChallenges.module.css';

export default function ProjectChallenges({ challenges }) {
  if (!challenges || challenges.length === 0) return null;

  return (
    <CaseStudySection title="Challenges & Solutions">
      <div className={styles.grid}>
        {challenges.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <div className={styles.block}>
              <h4 className={styles.blockLabel}>Challenge</h4>
              <p className={styles.blockText}>{item.challenge}</p>
            </div>
            <div className={styles.block}>
              <h4 className={styles.blockLabel}>Solution</h4>
              <p className={styles.blockText}>{item.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </CaseStudySection>
  );
}
