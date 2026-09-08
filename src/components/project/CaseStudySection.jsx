import styles from './CaseStudySection.module.css';

export default function CaseStudySection({ title, children }) {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}
