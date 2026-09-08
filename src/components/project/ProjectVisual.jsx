import styles from './ProjectVisual.module.css';

export default function ProjectVisual({ project }) {
  // Since we verified no real assets exist yet, we use the development placeholder.
  return (
    <div className={styles.visualContainer} aria-hidden="true">
      <div className={styles.placeholder}>
        <span className={styles.placeholderText}>
          [Image Pending: {project.assetDirectory}cover.webp]
          <br/>
          <br/>
          <small>{project.name}</small>
        </span>
      </div>
    </div>
  );
}
