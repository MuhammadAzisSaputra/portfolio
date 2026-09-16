import styles from './ProjectVisual.module.css';

export default function ProjectVisual({ project }) {
  if (project.coverImage) {
    return (
      <div className={styles.visualContainer}>
        <img 
          src={project.coverImage} 
          alt={`${project.name} project cover`} 
          className={styles.image} 
          loading="lazy"
        />
      </div>
    );
  }

  // Development placeholder
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
