import Container from '../../components/ui/Container';
import styles from './SkillsSection.module.css';

const skillCategories = [
  {
    title: 'Software Engineering',
    skills: [
      'JavaScript', 'React', 'Next.js', 'PHP', 'Laravel', 'Yii', 'Flask',
      'REST API', 'Object-Oriented Programming', 'MVC Architecture', 'Git', 'MySQL'
    ]
  },
  {
    title: 'Data & Analytics',
    skills: [
      'Python', 'SQL', 'Excel', 'Google Sheets', 'Data Cleaning',
      'Data Preprocessing', 'Exploratory Data Analysis', 'Data Visualization'
    ]
  },
  {
    title: 'Artificial Intelligence',
    skills: [
      'Machine Learning', 'TensorFlow', 'PyTorch', 'Computer Vision', 'YOLO', 'Model Evaluation'
    ]
  },
  {
    title: 'Research & Scientific Computing',
    skills: [
      'Experimental Design', 'Model Evaluation', 'Scientific Writing'
    ]
  },
  {
    title: 'Professional Skills',
    skills: [
      'Leadership', 'Analytical Thinking', 'Problem Solving',
      'Cross-functional Collaboration', 'Project Management',
      'Communication', 'Public Speaking'
    ]
  }
];

const exploringSkills = [
  'PostgreSQL', 'Node.js', 'Express.js', 'Modern React workflow', 'Production deployment with Vercel'
];

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <Container>
        <header className={styles.header}>
          <span className={styles.label}>Skills</span>
          <h2 className={styles.title}>
            Tools and capabilities I use to build, analyze, and collaborate.
          </h2>
        </header>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill, idx) => (
                  <span key={idx} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.exploringSection}>
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Currently Exploring</h3>
            <div className={styles.skillList}>
              {exploringSkills.map((skill, idx) => (
                <span key={idx} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
