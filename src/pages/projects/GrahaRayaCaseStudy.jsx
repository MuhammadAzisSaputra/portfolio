import { useEffect } from 'react';
import ProjectDemoGallery from '../../components/project/ProjectDemoGallery';
import TechnicalStage from '../../components/project/TechnicalStage';
import ProjectNavigation from '../../components/project/ProjectNavigation';
import styles from './GrahaRayaCaseStudy.module.css';
import { projects } from '../../content/projects';

export default function GrahaRayaCaseStudy({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cs = project.caseStudy;

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const previous = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const demoImages = [
    { src: '/assets/projects/graha-raya/login-light.png', alt: 'Login', isMobile: false },
    { src: '/assets/projects/graha-raya/dashboard-admin-light.png', alt: 'Dashboard Admin', isMobile: false },
    { src: '/assets/projects/graha-raya/datakaryawan-admin-light.png', alt: 'Employee Data Admin', isMobile: false },
    { src: '/assets/projects/graha-raya/dataklien-admin-light.png', alt: 'Client Data Admin', isMobile: false },
    { src: '/assets/projects/graha-raya/manajemenproyek-admin-light.png', alt: 'Project Management Admin', isMobile: false },
    { src: '/assets/projects/graha-raya/pembayaran-admin-light.png', alt: 'Payment Management Admin', isMobile: false },
    { src: '/assets/projects/graha-raya/daftartahapanproyek-admin-light.png', alt: 'Project Stages Admin', isMobile: false },
    { src: '/assets/projects/graha-raya/progresproyek-admin-light.png', alt: 'Project Progress Admin', isMobile: false },
    { src: '/assets/projects/graha-raya/penjadwalan-pm-light.png', alt: 'Scheduling PM', isMobile: false },
    { src: '/assets/projects/graha-raya/persetujuantahapan-pm-light.png', alt: 'Stage Approval PM', isMobile: false },
    { src: '/assets/projects/graha-raya/tahapanaktif-mandor-light.png', alt: 'Active Stages Mandor', isMobile: false }
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

        {/* Business Problem */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Business Problem</h2>
          <div className={styles.prose}>
            {cs.problem.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </section>

        {/* Solution & Roles */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Role-Based Solution</h2>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.solution.length}`]}`}>
            {cs.solution.map((item, i) => (
              <div key={i} className={`${styles.card} ${styles.balancedCard}`}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.keyFeatures.length}`]}`}>
            {cs.keyFeatures.map((item, i) => (
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
          description="End-to-end operational sequence from project initiation to final field approval."
          imageSrc={cs.workflow.image.src}
          imageAlt={cs.workflow.image.alt}
        />

        {/* System Architecture */}
        <TechnicalStage 
          title="System Architecture"
          description="Custom MVC architecture separating concerns across Router, Controller, Model, and View layers."
          imageSrc={cs.architecture.image.src}
          imageAlt={cs.architecture.image.alt}
        />

        {/* Database Design */}
        <TechnicalStage 
          title="Database Design"
          description="Relational data model structuring employees, clients, projects, schedules, and payments."
          imageSrc={cs.databaseDesign.image.src}
          imageAlt={cs.databaseDesign.image.alt}
        />

        {/* Demo App */}
        <ProjectDemoGallery images={demoImages} />

        {/* My Contribution */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>My Contribution</h2>
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

        <ProjectNavigation previous={previous} next={next} />

      </div>
    </main>
  );
}
