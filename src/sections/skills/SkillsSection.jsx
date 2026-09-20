import Container from '../../components/ui/Container';
import styles from './SkillsSection.module.css';

const skillCategories = [
  {
    title: 'Back End',
    skills: [
      { name: 'JavaScript', icon: '/assets/tech/backend/JavaScript.svg' },
      { name: 'React', icon: '/assets/tech/backend/React.svg' },
      { name: 'Next.js', icon: '/assets/tech/backend/Next.js.svg' },
      { name: 'PHP', icon: '/assets/tech/backend/PHP.svg' },
      { name: 'Laravel', icon: '/assets/tech/backend/Laravel.svg' },
      { name: 'Yii', icon: '/assets/tech/backend/Yii Framework.svg' },
      { name: 'Flask', icon: '/assets/tech/backend/Flask.svg' },
      { name: 'MySQL', icon: '/assets/tech/databases/MySQL.svg' },
      { name: 'PostgreSQL', icon: '/assets/tech/databases/PostgresSQL.svg' },
      { name: 'Express', icon: '/assets/tech/frontend/Express.svg' },
      { name: 'REST API', icon: null },
      { name: 'Object-Oriented Programming', icon: null },
      { name: 'MVC Architecture', icon: null }
    ]
  },
  {
    title: 'Front End',
    skills: [
      { name: 'CSS', icon: '/assets/tech/frontend/CSS3.svg' },
      { name: 'Bootstrap', icon: '/assets/tech/frontend/Bootstrap.svg' },
      { name: 'Tailwind', icon: '/assets/tech/frontend/Tailwind CSS.svg' },
      { name: 'Vite', icon: '/assets/tech/frontend/Vite.js.svg' },
      { name: 'Canva', icon: '/assets/tech/frontend/Canva.svg' },
      { name: 'Figma', icon: '/assets/tech/frontend/Figma.svg' }
    ]
  },
  {
    title: 'Data Analytics & AI',
    skills: [
      { name: 'Python', icon: '/assets/tech/backend/Python.svg' },
      { name: 'TensorFlow', icon: '/assets/tech/backend/TensorFlow.svg' },
      { name: 'PyTorch', icon: '/assets/tech/backend/PyTorch.svg' },
      { name: 'YOLO', icon: null },
      { name: 'SQL', icon: null },
      { name: 'Excel', icon: null },
      { name: 'Google Sheets', icon: null },
      { name: 'Data Cleaning', icon: null },
      { name: 'Data Preprocessing', icon: null },
      { name: 'Exploratory Data Analysis', icon: null },
      { name: 'Data Visualization', icon: null },
      { name: 'Computer Vision', icon: null }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Visual Studio Code', icon: '/assets/tech/tools/Visual Studio Code (VS Code).svg' },
      { name: 'Git', icon: '/assets/tech/tools/Git.svg' },
      { name: 'GitHub', icon: '/assets/tech/tools/GitHub.svg' },
      { name: 'Anaconda', icon: '/assets/tech/tools/Anaconda.svg' },
      { name: 'Jupyter', icon: '/assets/tech/tools/Jupyter.svg' }
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
      </Container>
    </section>
  );
}
