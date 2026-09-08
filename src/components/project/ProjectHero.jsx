import styles from './ProjectHero.module.css';

export default function ProjectHero({ project }) {
  const metaItems = [
    { label: 'Role', value: project.role },
    { label: 'Timeline', value: project.timeline },
    { label: 'Team', value: project.teamSize },
    { label: 'Status', value: project.status },
  ].filter(item => item.value);

  return (
    <header className={styles.hero}>
      <p className={styles.category}>{project.category}</p>
      <h1 className={styles.title}>{project.name}</h1>
      <p className={styles.summary}>{project.summary}</p>
      
      {metaItems.length > 0 && (
        <div className={styles.metaGrid}>
          {metaItems.map((item, index) => (
            <div key={index} className={styles.metaItem}>
              <span className={styles.metaLabel}>{item.label}</span>
              <span className={styles.metaValue}>{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
