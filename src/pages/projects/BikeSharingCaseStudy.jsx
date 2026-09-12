import { useEffect } from 'react';
import TechnicalStage from '../../components/project/TechnicalStage';
import ProjectNavigation from '../../components/project/ProjectNavigation';
import styles from './BikeSharingCaseStudy.module.css';
import { projects } from '../../content/projects';

export default function BikeSharingCaseStudy({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cs = project.caseStudy;

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const previous = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

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
            <span className={styles.metaLabel}>Project Type</span>
            <span className={styles.metaValue}>{project.projectType}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Platform</span>
            <span className={styles.metaValue}>{project.platform}</span>
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

        {/* Analytical Objective / Problem */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Analytical Objective</h2>
          <div className={styles.prose}>
            {cs.problem.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </section>

        {/* Solution Approach */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Approach</h2>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.solution.length}`]}`}>
            {cs.solution.map((item, i) => (
              <div key={i} className={`${styles.card} ${styles.balancedCard}`}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Analysis Workflow */}
        <TechnicalStage 
          title="Data Analysis Workflow"
          description={cs.workflow.description}
          imageSrc={cs.workflow.image.src}
          imageAlt={cs.workflow.image.alt}
        />

        {/* Analytical Approach */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Analytical Approach</h2>
          <div className={styles.prose}>
            <p>{cs.analysis.description}</p>
            <ul style={{ paddingLeft: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
              {cs.analysis.steps.map((step, i) => (
                <li key={i} style={{ marginBottom: 'var(--space-1)' }}>{step}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Dashboard Architecture */}
        <TechnicalStage 
          title="Dashboard Architecture"
          description={cs.architecture.description}
          imageSrc={cs.architecture.image.src}
          imageAlt={cs.architecture.image.alt}
        />

        {/* Dashboard Implementation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Dashboard Implementation</h2>
          <div className={styles.prose}>
            <p>{cs.dashboard.description}</p>
            <ul style={{ paddingLeft: 'var(--space-4)', marginTop: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
              {cs.dashboard.features.map((feature, i) => (
                <li key={i} style={{ marginBottom: 'var(--space-1)' }}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Dashboard Screenshot (Single Image, No Carousel) */}
        <TechnicalStage 
          title="Interactive Dashboard"
          description="The final interactive dashboard providing summary metrics, seasonal comparisons, and hourly activity charts."
          imageSrc={cs.dashboard.images[0].src}
          imageAlt={cs.dashboard.images[0].alt}
        />

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
          <h2 className={styles.sectionTitle}>Tools & Technologies</h2>
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

        {/* Project Outcome */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Findings & Outcome</h2>
          <div className={styles.prose}>
            {cs.outcome.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </section>

        {/* Key Learning */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills Demonstrated</h2>
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
