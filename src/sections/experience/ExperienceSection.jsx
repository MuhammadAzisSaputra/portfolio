import Container from '../../components/ui/Container';
import styles from './ExperienceSection.module.css';

const experiences = [
  {
    organization: 'Plant Biotechnology Laboratory',
    role: 'Research Assistant',
    period: '2025',
    logo: '/assets/organizations/logo-usu.webp',
    summary: 'Developed and benchmarked deep-learning models for soybean phenotypic analysis, integrating a YOLO model into a Flask-based web application.'
  },
  {
    organization: 'Self-Employed',
    role: 'Freelance Web Developer',
    period: '2025',
    logo: '/assets/organizations/logo-selfemployed.png',
    summary: 'Delivered two custom web applications: a project-management information system and a heavy-equipment e-commerce platform.'
  },
  {
    organization: 'Bangkit Academy',
    role: 'Machine Learning Cohort',
    period: '2024 — 2025',
    logo: '/assets/organizations/logo-bangkit.jpg',
    summary: 'Contributed to the machine-learning development of Brofin, a financial-planning application built by a cross-functional Agile team.'
  },
  {
    organization: 'Indonesian Oil Palm Research Institute (IOPRI)',
    role: 'Web Developer',
    period: '2024',
    logo: '/assets/organizations/logo-ppks.png',
    summary: 'Developed web-based information systems to digitalize internship administration and library operational workflows.'
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <Container>
        <header className={styles.header}>
          <span className={styles.label}>Experience</span>
          <h2 className={styles.title}>
            Professional timeline.
          </h2>
        </header>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceItem}>
              <div className={styles.meta}>
                {exp.logo && (
                  <div className={styles.logoContainer}>
                    <img src={exp.logo} alt={`${exp.organization} logo`} className={styles.logoImage} loading="lazy" />
                  </div>
                )}
                <div className={styles.period}>{exp.period}</div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.role}>{exp.role}</h3>
                <div className={styles.organization}>{exp.organization}</div>
                <p className={styles.summary}>{exp.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
