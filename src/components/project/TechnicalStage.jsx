import styles from './TechnicalStage.module.css';

export default function TechnicalStage({ title, description, imageSrc, imageAlt, imageStyle }) {
  if (!imageSrc) return null;

  return (
    <div className={styles.container}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.stage}>
        <img 
          src={imageSrc} 
          alt={imageAlt || title || "Technical Diagram"} 
          className={styles.image}
          style={imageStyle}
          loading="lazy"
        />
      </div>
    </div>
  );
}
