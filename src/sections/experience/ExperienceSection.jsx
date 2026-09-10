import Container from '../../components/ui/Container';
import styles from './ExperienceSection.module.css';

const experiences = [
  {
    organization: 'Plant Biotechnology Laboratory',
    role: 'Research Assistant',
    location: 'Medan, North Sumatra',
    period: 'May 2025 — Dec 2025',
    summary: 'Worked on computer-vision research for soybean phenotypic analysis, developing and benchmarking deep-learning models and integrating selected models into a Flask-based web application for research use.',
    highlights: [
      'Developed a DeepLabV3+ semantic-segmentation model using a MobileNetV2 pretrained backbone.',
      'Benchmarked YOLO11s, YOLO12s, and YOLO26s using 1,176 images.',
      'Selected YOLO26s after it achieved the best documented mAP@0.5:0.95 result of approximately 92.01%.',
      'Integrated the selected model into a Flask-based web application for batch and real-time seed detection and counting.',
      'Co-authored a peer-reviewed Data in Brief article.'
    ],
    relatedProjects: ['Super Soybean']
  },
  {
    organization: 'Self-Employed',
    role: 'Freelance Web Developer',
    location: 'Medan, North Sumatra',
    period: 'Jan 2025 — Apr 2025',
    summary: 'Delivered two custom web applications from requirements gathering through implementation, testing, and delivery.',
    highlights: [
      'Gathered and translated client requirements into functional web-system requirements.',
      'Developed a project-management information system.',
      'Developed an agricultural and industrial heavy-equipment e-commerce platform.',
      'Managed project scope, client communication, and implementation independently.'
    ],
    relatedProjects: ['Manajemen Proyek CV Graha Raya Consultant', 'Etomac']
  },
  {
    organization: 'Bangkit Academy',
    role: 'Machine Learning Cohort',
    location: '',
    period: 'Sep 2024 — Jan 2025',
    summary: 'Participated in Bangkit Academy as a Machine Learning cohort member and contributed to Brofin, a financial-planning application developed by a seven-member cross-functional team.',
    highlights: [
      'Selected as one of 4,636 participants from more than 45,000 applicants.',
      'Contributed to machine-learning development for Brofin.',
      'Collaborated across Machine Learning, Cloud Computing, and Mobile Development.',
      'Worked in a seven-member team using an Agile-style collaborative workflow.',
      'Reached the Top 50 teams in the Bangkit Elevator Pitch Challenge.'
    ],
    relatedProjects: ['Brofin']
  },
  {
    organization: 'Indonesian Oil Palm Research Institute (IOPRI)',
    role: 'Web Developer',
    location: 'Medan, North Sumatra',
    period: 'Mar 2024 — Jun 2024',
    summary: 'Developed web-based information systems to digitalize internship administration and bookstore/library operational workflows.',
    highlights: [
      'Developed SIMAGANG for internship administration, monitoring, and assessment.',
      'Developed SIBUKU for book inventory, transactions, payments, and reporting.',
      'Worked on database schema design and backend application logic.'
    ],
    relatedProjects: ['SIBUKU']
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <Container>
        <header className={styles.header}>
          <span className={styles.label}>Experience</span>
          <h2 className={styles.title}>
            Experience across research, software development, and product collaboration.
          </h2>
        </header>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceItem}>
              <div className={styles.meta}>
                <div className={styles.period}>{exp.period}</div>
                <div className={styles.organization}>{exp.organization}</div>
                {exp.location && <div className={styles.location}>{exp.location}</div>}
              </div>

              <div className={styles.content}>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.summary}>{exp.summary}</p>
                <ul className={styles.highlights}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                {exp.relatedProjects && exp.relatedProjects.length > 0 && (
                  <div className={styles.relatedProject}>
                    <span>Related Projects:</span> {exp.relatedProjects.join(', ')}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
