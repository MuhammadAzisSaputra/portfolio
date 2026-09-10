import styles from './ProjectMetrics.module.css';

export default function ProjectMetrics({ metrics }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className={styles.grid}>
      {metrics.map((item, index) => (
        <div key={index} className={styles.metricCard}>
          <span className={styles.value}>{item.value}</span>
          <span className={styles.label}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
