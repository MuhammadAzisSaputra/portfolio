import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Lightbulb, Rocket, Brain, Layers, LayoutTemplate, ArrowLeft, ArrowRight, Shield, Zap, Tally5, Shapes, Expand } from 'lucide-react';
import ProjectDemoGallery from '../../components/project/ProjectDemoGallery';
import ProjectMetrics from '../../components/project/ProjectMetrics';
import Container from '../../components/ui/Container';
import styles from './SuperSoybeanCaseStudy.module.css';
import { projects } from '../../content/projects';

export default function SuperSoybeanCaseStudy({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cs = project.caseStudy;

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  const demoImages = [
    { src: '/assets/projects/super-soybean/dashboard-deploy-web-light.webp', alt: 'Dashboard', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelai-deploy-web-light.webp', alt: 'Seed Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelairealtime-deploy-web-light.webp', alt: 'Real-time Seed Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelaiupload-deploy-web-light.webp', alt: 'Upload Seed Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijiuploadhasil-deploy-web-light.webp', alt: 'Seed Counting Result', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungpolong-deploy-web-light.webp', alt: 'Pod Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/identifikasi-deploy-web-light.webp', alt: 'Identification', isMobile: false },
    { src: '/assets/projects/super-soybean/klasifikasi-deploy-web-light.webp', alt: 'Classification', isMobile: false },
    { src: '/assets/projects/super-soybean/prediksi-deploy-web-light.webp', alt: 'Chlorophyll Prediction', isMobile: false },
    { src: '/assets/projects/super-soybean/about-deploy-web-light.webp', alt: 'About', isMobile: false },
    { src: '/assets/projects/super-soybean/dashboard-local-web-light.webp', alt: 'Local Dashboard', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelai-local-web-light.webp', alt: 'Local Seed Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelairealtime-local-web-light.webp', alt: 'Local Real-time Seed Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelaiupload-local-web-light.webp', alt: 'Local Upload Seed Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungbijikedelaiuploadhasil-local-web-light.webp', alt: 'Local Seed Counting Result', isMobile: false },
    { src: '/assets/projects/super-soybean/hitungpolong-local-web-light.webp', alt: 'Local Pod Counting', isMobile: false },
    { src: '/assets/projects/super-soybean/identifikasi-local-web-light.webp', alt: 'Local Identification', isMobile: false },
    { src: '/assets/projects/super-soybean/klasifikasi-local-web-light.webp', alt: 'Local Classification', isMobile: false },
    { src: '/assets/projects/super-soybean/prediksi-local-web-light.webp', alt: 'Local Prediction', isMobile: false },
    { src: '/assets/projects/super-soybean/about-local-web-light.webp', alt: 'Local About', isMobile: false }
  ];

  const cardIcons = [Target, Tally5, Shapes, Shield, Zap];

  return (
    <main className={styles.page}>
      <Container>

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

          <div className={`${styles.balancedGrid} ${styles['grid-len-5']}`}>
            {cs.solution.map((item, i) => {
              const IconComponent = cardIcons[i] || Lightbulb;
              return (
                <div key={i} className={`${styles.solutionCard} ${styles.balancedCard}`}>
                  <div className={styles.cardIconWrapper}>
                    <IconComponent className={styles.cardIcon} />
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* My Contribution (AI Development) */}
        <section className={`${styles.section} ${styles.fullWidthPanel}`}>
          <div className={styles.panelHeader}>
            <Expand className={styles.panelIcon} size={32} />
            <h2 className={styles.panelTitle}>Contribution</h2>
            <div className={styles.panelRoleBadge}>{cs.contribution.role}</div>
          </div>
          <p className={styles.panelSummary}>{cs.contribution.focus}</p>

          <div className={styles.panelGrid}>
            {cs.contribution.sections.map((section, i) => (
              <div key={i} className={styles.panelCard}>
                <h3 className={styles.panelCardTitle}>{section.title}</h3>
                <p className={styles.panelCardObjective}><strong>Objective:</strong> {section.objective}</p>
                <div className={styles.panelCardBody}>
                  <div className={styles.panelCardCol}>
                    <h4 className={styles.panelCardSubtitle}>Development Process</h4>
                    <ul className={styles.panelList}>
                      {section.process.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.panelCardCol}>
                    <h4 className={styles.panelCardSubtitle}>Implementation</h4>
                    {section.implementation.map((para, idx) => (
                      <p key={idx} className={styles.panelText}>{para}</p>
                    ))}
                  </div>
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
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Inference Evidence</h2>
          <p className={styles.prose}>{cs.performanceImage.caption}</p>
          <div className={styles.stage}>
            <img src={cs.performanceImage.src} alt={cs.performanceImage.alt} className={styles.stageImage} />
          </div>
        </section>

        {/* System Architecture */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>System Architecture</h2>
          <p className={styles.prose}>{cs.architecture.description}</p>
          <div className={styles.stage}>
            <img src={cs.architecture.image.src} alt={cs.architecture.image.alt} className={styles.stageImage} />
          </div>
        </section>

        {/* Application Workflow */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Application Workflow</h2>
          <p className={styles.prose}>End-to-end digital workflow from user selection to real-time object detection processing.</p>
          <div className={styles.stage}>
            <img src={cs.workflow.image.src} alt={cs.workflow.image.alt} className={styles.stageImage} />
          </div>
        </section>

        {/* Backend & Frontend Workflow */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Web Development</h2>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-2`]}`}>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}>
                <Layers className={styles.cardIcon} />
              </div>
              <h3 className={styles.cardTitle}>Backend (Flask)</h3>
              <p className={styles.cardDesc} style={{ marginBottom: 'var(--space-4)' }}>{cs.backend.description}</p>
              <ul className={styles.cardDesc} style={{ paddingLeft: 'var(--space-4)' }}>
                {cs.backend.processing.map((proc, i) => (
                  <li key={i} style={{ marginBottom: 'var(--space-1)' }}>{proc}</li>
                ))}
              </ul>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}>
                <LayoutTemplate className={styles.cardIcon} />
              </div>
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
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Demo App</h2>
          <p className={`${styles.prose} ${styles.demoAppDescription}`}>Explore the application interface and primary workflows.</p>
          <ProjectDemoGallery images={demoImages} title={null} description={null} minimal={true} />
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
                  <div className={styles.challengeLabelSuccess}>Solution</div>
                  <p className={styles.challengeText}>{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Outcome */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Project Outcome</h2>
          <p className={styles.prose}>{cs.outcome[0]}</p>
          <div className={`${styles.balancedGrid} ${styles['grid-len-3']}`}>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><Brain className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Agricultural AI Features</h3>
              <p className={styles.cardDesc}>Delivered AI-based soybean seed detection and multi-feature agricultural analysis workflows.</p>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><Layers className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Web Application Platform</h3>
              <p className={styles.cardDesc}>Built a responsive web interface integrated with a robust Flask-based backend system.</p>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><Rocket className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Real-time Capabilities</h3>
              <p className={styles.cardDesc}>Enabled real-time Computer Vision capability for continuous monitoring and immediate inference results.</p>
            </div>
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

        {/* Circular Project Navigation */}
        <nav className={styles.compactNav}>
          <Link to={previous.route} className={styles.compactNavLink}>
            <ArrowLeft size={20} />
            <div className={styles.compactNavGroup}>
              <span className={styles.compactNavLabel}>Previous Project</span>
              <span className={styles.compactNavTitle}>{previous.name}</span>
            </div>
          </Link>

          <Link to={next.route} className={`${styles.compactNavLink} ${styles.compactNavLinkRight}`}>
            <ArrowRight size={20} />
            <div className={styles.compactNavGroup}>
              <span className={styles.compactNavLabel}>Next Project</span>
              <span className={styles.compactNavTitle}>{next.name}</span>
            </div>
          </Link>
        </nav>

      </Container>
    </main>
  );
}



