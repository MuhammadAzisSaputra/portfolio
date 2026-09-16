import Container from '../../components/ui/Container';
import styles from './SkillsSection.module.css';

const skillCategories = [
  {
    title: 'Software Engineering',
    skills: [
      { name: 'JavaScript', icon: '/assets/tech/backend/JavaScript.svg' },
      { name: 'React', icon: '/assets/tech/backend/React.svg' },
      { name: 'Next.js', icon: null },
      { name: 'PHP', icon: '/assets/tech/backend/PHP.svg' },
      { name: 'Laravel', icon: '/assets/tech/backend/Laravel.svg' },
      { name: 'Yii', icon: '/assets/tech/backend/Yii Framework.svg' },
      { name: 'Flask', icon: '/assets/tech/backend/Flask.svg' },
      { name: 'REST API', icon: null },
      { name: 'Object-Oriented Programming', icon: null },
      { name: 'MVC Architecture', icon: null },
      { name: 'Git', icon: '/assets/tech/tools/Git.svg' },
      { name: 'MySQL', icon: '/assets/tech/databases/MySQL.svg' }
    ]
  },
  {
    title: 'Data & Analytics',
    skills: [
      { name: 'Python', icon: '/assets/tech/backend/Python.svg' },
      { name: 'SQL', icon: null },
      { name: 'Excel', icon: null },
      { name: 'Google Sheets', icon: null },
      { name: 'Data Cleaning', icon: null },
      { name: 'Data Preprocessing', icon: null },
      { name: 'Exploratory Data Analysis', icon: null },
      { name: 'Data Visualization', icon: null }
    ]
  },
  {
    title: 'Artificial Intelligence',
    skills: [
      { name: 'Machine Learning', icon: null },
      { name: 'TensorFlow', icon: null },
      { name: 'PyTorch', icon: null },
      { name: 'Computer Vision', icon: null },
      { name: 'YOLO', icon: null },
      { name: 'Model Evaluation', icon: null }
    ]
  },
  {
    title: 'Research & Scientific Computing',
    skills: [
      { name: 'Experimental Design', icon: null },
      { name: 'Model Evaluation', icon: null },
      { name: 'Scientific Writing', icon: null }
    ]
  },
  {
    title: 'Professional Skills',
    skills: [
      { name: 'Leadership', icon: null },
      { name: 'Analytical Thinking', icon: null },
      { name: 'Problem Solving', icon: null },
      { name: 'Cross-functional Collaboration', icon: null },
      { name: 'Project Management', icon: null },
      { name: 'Communication', icon: null },
      { name: 'Public Speaking', icon: null }
    ]
  }
];

const exploringSkills = [
  { name: 'PostgreSQL', icon: '/assets/tech/databases/PostgresSQL.svg' },
  { name: 'Node.js', icon: null },
  { name: 'Express.js', icon: null },
  { name: 'Modern React workflow', icon: null },
  { name: 'Production deployment with Vercel', icon: null }
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
                    {skill.icon && <img src={skill.icon} alt={`${skill.name} icon`} className={styles.skillIcon} loading="lazy" />}
                    {skill.name}
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
                  {skill.icon && <img src={skill.icon} alt={`${skill.name} icon`} className={styles.skillIcon} loading="lazy" />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
