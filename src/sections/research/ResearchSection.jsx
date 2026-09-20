import styles from './ResearchSection.module.css';

const interests = [
  {
    title: 'Computer Vision',
    description: 'Applying image processing and object detection algorithms (like YOLO and DeepLabV3+) to automate visual analysis and solve real-world measurement problems.'
  },
  {
    title: 'Machine Learning',
    description: 'Training and benchmarking predictive models for practical applications, focusing on reliability, deployment constraints, and measurable performance.'
  },
  {
    title: 'Data Analysis',
    description: 'Transforming raw datasets into actionable insights using structured exploratory analysis, data visualization, and statistical evaluation.'
  }
];

export default function ResearchSection() {
  return (
    <div className={styles.researchSection}>
      <div className={styles.grid}>
        {interests.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
