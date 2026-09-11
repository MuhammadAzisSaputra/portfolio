import { useEffect } from 'react';
import ProjectDemoGallery from '../../components/project/ProjectDemoGallery';
import TechnicalStage from '../../components/project/TechnicalStage';
import ProjectNavigation from '../../components/project/ProjectNavigation';
import ProjectMetrics from '../../components/project/ProjectMetrics';
import styles from './SuperSoybeanCaseStudy.module.css';
import { projects } from '../../content/projects';

export default function SuperSoybeanCaseStudy({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cs = project.caseStudy;

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const previous = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const demoImages = [
    { src: '/assets/projects/super-soybean/dashboard-deploy-web-light.png', alt: 'Dashboard', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelai-deploy-web-light.png', alt: 'Seed Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelairealtime-deploy-web-light.png', alt: 'Real-time Seed Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelaiupload-deploy-web-light.png', alt: 'Upload Seed Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijiuploadhasil-deploy-web-light.png', alt: 'Seed Counting Result', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungpolong-deploy-web-light.png', alt: 'Pod Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/identifikasi-deploy-web-light.png', alt: 'Identification', isMobile: false },
    { src: '/assets/projects/super-soybean/klasifikasi-deploy-web-light.png', alt: 'Classification', isMobile: false },
    { src: '/assets/projects/super-soybean/prediksi-deploy-web-light.png', alt: 'Chlorophyll Prediction', isMobile: false },
    { src: '/assets/projects/super-soybean/about-deploy-web-light.png', alt: 'About', isMobile: false },
    { src: '/assets/projects/super-soybean/dashboard-local-web-light.png', alt: 'Local Dashboard', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelai-local-web-light.png', alt: 'Local Seed Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelairealtime-local-web-light.png', alt: 'Local Real-time Seed Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelaiupload-local-web-light.png', alt: 'Local Upload Seed Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelaiuploadhasil-local-web-light.png', alt: 'Local Seed Counting Result', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungpolong-local-web-light.png', alt: 'Local Pod Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/identifikasi-local-web-light.png', alt: 'Local Identification', isMobile: false },
    { src: '/assets/projects/super-soybean/klasifikasi-local-web-light.png', alt: 'Local Classification', isMobile: false },
    { src: '/assets/projects/super-soybean/prediksi-local-web-light.png', alt: 'Local Prediction', isMobile: false },
    { src: '/assets/projects/super-soybean/about-local-web-light.png', alt: 'Local About', isMobile: false }
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

        {/* Problem & Solution */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Problem & Solution</h2>
          <div className={styles.prose}>
            {cs.problem.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.solution.length}`]}`}>
            {cs.solution.map((item, i) => (
              <div key={i} className={`${styles.card} ${styles.balancedCard}`}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* My Contribution (AI Development) */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>AI Contribution</h2>
          <div className={styles.prose}>
            <p><strong>Role:</strong> {cs.contribution.role}</p>
            <p>{cs.contribution.focus}</p>
          </div>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.contribution.sections.length}`]}`}>
            {cs.contribution.sections.map((section, i) => (
              <div key={i} className={`${styles.card} ${styles.balancedCard}`}>
                <h3 className={styles.cardTitle}>{section.title}</h3>
                <div className={styles.cardDesc}>
                  <p><strong>Objective:</strong> {section.objective}</p>
                  <p style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}><strong>Development Process:</strong></p>
                  <ul style={{ paddingLeft: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                    {section.process.map((step, idx) => (
                      <li key={idx} style={{ marginBottom: 'var(--space-1)' }}>{step}</li>
                    ))}
                  </ul>
                  <p style={{ marginBottom: 'var(--space-2)' }}><strong>Implementation:</strong></p>
                  {section.implementation.map((para, idx) => (
                    <p key={idx} style={{marginBottom: idx === section.implementation.length - 1 ? 0 : 'var(--space-2)'}}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Model Performance */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Model Performance</h2>
          <ProjectMetrics metrics={cs.performance.metrics} />
        </section>

        {/* Inference Evidence */}
        <TechnicalStage 
          title="Inference Evidence"
          description={cs.performanceImage.caption}
          imageSrc={cs.performanceImage.src}
          imageAlt={cs.performanceImage.alt}
        />

        {/* System Architecture */}
        <TechnicalStage 
          title="System Architecture"
          description={cs.architecture.description}
          imageSrc={cs.architecture.image.src}
          imageAlt={cs.architecture.image.alt}
        />

        {/* Application Workflow */}
        <TechnicalStage 
          title="Application Workflow"
          description="End-to-end digital workflow from user selection to real-time object detection processing."
          imageSrc={cs.workflow.image.src}
          imageAlt={cs.workflow.image.alt}
        />

        {/* Backend & Frontend Workflow */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Web Development</h2>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-2`]}`}>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <h3 className={styles.cardTitle}>Backend (Flask)</h3>
              <p className={styles.cardDesc} style={{ marginBottom: 'var(--space-4)' }}>{cs.backend.description}</p>
              <ul className={styles.cardDesc} style={{ paddingLeft: 'var(--space-4)' }}>
                {cs.backend.processing.map((proc, i) => (
                  <li key={i} style={{ marginBottom: 'var(--space-1)' }}>{proc}</li>
                ))}
              </ul>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <h3 className={styles.cardTitle}>Frontend & UI/UX</h3>
              <p className={styles.cardDesc} style={{ marginBottom: 'var(--space-4)' }}>{cs.frontend.description}</p>
              <ul className={styles.cardDesc} style={{ paddingLeft: 'var(--space-4)' }}>
                {cs.frontend.considerations.map((item, i) => (
                  <li key={i} style={{ marginBottom: 'var(--space-1)' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

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
          <h2 className={styles.sectionTitle}>Key Learning</h2>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.learnings.length}`]}`}>
            {cs.learnings.map((item, i) => (
              <div key={i} className={`${styles.card} ${styles.balancedCard}`}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <ProjectNavigation previous={previous} next={next} />

      </div>
    </main>
  );
}
