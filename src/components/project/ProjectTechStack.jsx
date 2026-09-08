import CaseStudySection from './CaseStudySection';
import styles from './ProjectTechStack.module.css';

export default function ProjectTechStack({ technologies }) {
  if (!technologies) return null;

  return (
    <CaseStudySection title="Technology Stack">
      <div className={styles.groupContainer}>
        {Object.entries(technologies).map(([category, items]) => (
          <div key={category} className={styles.group}>
            <h3 className={styles.groupTitle}>{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <div className={styles.tags}>
              {items.map(tech => (
                <span key={tech} className={styles.tag}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CaseStudySection>
  );
}
