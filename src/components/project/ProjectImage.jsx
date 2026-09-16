import styles from './ProjectImage.module.css';

export default function ProjectImage({ src, alt, caption }) {
  if (!src) return null;

  return (
    <figure className={styles.figure}>
      <div className={styles.imageWrapper}>
        <img src={src} alt={alt} className={styles.image} loading="lazy" />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
