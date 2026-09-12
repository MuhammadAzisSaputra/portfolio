import { useEffect } from 'react';
import ProjectDemoGallery from '../../components/project/ProjectDemoGallery';
import TechnicalStage from '../../components/project/TechnicalStage';
import ProjectNavigation from '../../components/project/ProjectNavigation';
import Button from '../../components/ui/Button';
import styles from './BrofinCaseStudy.module.css';
import { projects } from '../../content/projects';

export default function BrofinCaseStudy({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cs = project.caseStudy;

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const previous = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const demoImages = [
    { src: '/assets/projects/brofin/Spalash Screen.jpg', alt: 'Splash Screen', isMobile: true },
    { src: '/assets/projects/brofin/Login.jpg', alt: 'Login', isMobile: true },
    { src: '/assets/projects/brofin/Register.jpeg', alt: 'Register', isMobile: true },
    { src: '/assets/projects/brofin/Homepage.jpg', alt: 'Homepage', isMobile: true },
    { src: '/assets/projects/brofin/Budgeting.jpg', alt: 'Budgeting', isMobile: true },
    { src: '/assets/projects/brofin/View Budgeting Kebutuhan Pokok.jpg', alt: 'Budgeting Needs', isMobile: true },
    { src: '/assets/projects/brofin/View Budgeting Keinginan.jpg', alt: 'Budgeting Wants', isMobile: true },
    { src: '/assets/projects/brofin/List Pengeluaran.jpg', alt: 'Expense List', isMobile: true },
    { src: '/assets/projects/brofin/Tambah Pengeluaran - Empty.jpg', alt: 'Add Expense', isMobile: true },
    { src: '/assets/projects/brofin/Prediksi Rumah - Empty.jpg', alt: 'House Prediction Empty', isMobile: true },
    { src: '/assets/projects/brofin/Prediksi Rumah - Fill1.jpg', alt: 'House Prediction Result', isMobile: true },
    { src: '/assets/projects/brofin/Prediksi Rekomendasi Item - Empty.jpg', alt: 'Item Recommendation', isMobile: true },
    { src: '/assets/projects/brofin/Prediksi Mobil - Fill.jpg', alt: 'Car Prediction', isMobile: true },
    { src: '/assets/projects/brofin/Prediksi Motor - Fill.jpg', alt: 'Motorcycle Prediction', isMobile: true },
    { src: '/assets/projects/brofin/Prediksi Gadget - Fill.jpg', alt: 'Gadget Prediction', isMobile: true },
    { src: '/assets/projects/brofin/Prediksi Game - Fill.jpg', alt: 'Game Prediction', isMobile: true },
    { src: '/assets/projects/brofin/Prediksi Barang Mewah - Fill.jpg', alt: 'Luxury Item Prediction', isMobile: true },
    { src: '/assets/projects/brofin/Prediksi Favorit - View.jpg', alt: 'Favorite Predictions', isMobile: true },
    { src: '/assets/projects/brofin/Setting.jpg', alt: 'Settings', isMobile: true }
  ];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        
        {/* Project Hero */}
        <header className={styles.hero}>
          <div className={styles.category}>{project.category}</div>
          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.summary}>{project.summary}</p>
        </header>

        {/* Quick Metadata */}
        <section className={styles.metadataGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>{project.role}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Timeline</span>
            <span className={styles.metaValue}>{project.timeline}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Team</span>
            <span className={styles.metaValue}>{project.teamSize}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Status</span>
            <span className={styles.metaValue}>{project.status}</span>
          </div>
        </section>

        {/* Project Overview */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Project Overview</h2>
          <div className={styles.prose}>
            {cs.overview.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </section>

        {/* The Problem */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <div className={styles.prose}>
            {cs.problem.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </section>

        {/* The Solution */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution</h2>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.solution.length}`]}`}>
            {cs.solution.map((item, i) => (
              <div key={i} className={`${styles.card} ${styles.balancedCard}`}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Workflow */}
        <TechnicalStage 
          title="Application Workflow"
          description={cs.workflow.description}
          imageSrc={cs.workflow.image.src}
          imageAlt={cs.workflow.image.alt}
        />

        {/* ML Contribution & Process */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Machine Learning Contribution</h2>
          <div className={styles.prose}>
            <p><strong>Role:</strong> {cs.contribution.role}</p>
            <p>{cs.contribution.focus}</p>
          </div>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.contribution.sections.length}`]}`}>
            {cs.contribution.sections.map((section, i) => (
              <div key={i} className={`${styles.card} ${styles.balancedCard}`}>
                <h3 className={styles.cardTitle}>{section.title}</h3>
                <div className={styles.cardDesc}>
                  {section.implementation.map((para, idx) => (
                    <p key={idx} style={{marginBottom: idx === section.implementation.length - 1 ? 0 : 'var(--space-2)'}}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ML Architecture */}
        <TechnicalStage 
          title="Machine Learning Workflow"
          description="End-to-end data preparation, model training, evaluation, and deployment."
          imageSrc="/assets/projects/brofin/Machine Learning Workflow.png"
          imageAlt="Machine Learning Workflow"
        />

        {/* Cloud Architecture Decision */}
        <TechnicalStage 
          title="Architecture Trade-off"
          description="Cloud SQL to Firestore migration decision to manage cost constraints and preserve cloud credits."
          imageSrc="/assets/projects/brofin/Cloud to Firestore.png"
          imageAlt="Cloud to Firestore Architecture Decision"
        />

        {/* System Architecture */}
        <TechnicalStage 
          title="System Architecture"
          description={cs.architecture.description}
          imageSrc={cs.architecture.image.src}
          imageAlt={cs.architecture.image.alt}
        />

        {/* Demo App */}
        <ProjectDemoGallery images={demoImages} />

        {/* Technology Stack */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <div className={styles.techStack}>
            <div className={`${styles.balancedGrid} ${styles[`grid-len-${Object.keys(project.technologies).length}`]}`}>
              {Object.entries(project.technologies).map(([category, tags]) => (
                <div key={category} className={`${styles.techGroup} ${styles.balancedCard}`}>
                  <h3 className={styles.techGroupTitle}>{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                  <div className={styles.techTags}>
                    {tags.map((tag, i) => (
                      <span key={i} className={styles.techTag}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Challenges & Solutions</h2>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.challenges.length}`]}`}>
            {cs.challenges.map((item, i) => (
              <div key={i} className={`${styles.challengeCard} ${styles.balancedCard}`}>
                <h3 className={styles.challengeTitle}>{item.title}</h3>
                <div className={styles.challengeBlock}>
                  <div className={styles.challengeLabel}>Challenge</div>
                  <p className={styles.challengeText}>{item.challenge}</p>
                </div>
                <div className={styles.challengeBlock}>
                  <div className={styles.challengeLabel}>Solution</div>
                  <p className={styles.challengeText}>{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Outcome */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Project Outcome</h2>
          <div className={styles.prose}>
            {cs.outcome.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </section>

        {/* Key Learning */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Learned</h2>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.learnings.length}`]}`}>
            {cs.learnings.map((item, i) => (
              <div key={i} className={`${styles.card} ${styles.balancedCard}`}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {project.links && project.links.repository && (
           <section className={styles.section}>
             <h2 className={styles.sectionTitle}>Project Repository</h2>
             <div className={styles.prose}>
                <Button as="a" href={project.links.repository} target="_blank" rel="noreferrer" variant="outline">
                  View Repository on GitHub
                </Button>
             </div>
           </section>
        )}

        <ProjectNavigation previous={previous} next={next} />

      </div>
    </main>
  );
}
