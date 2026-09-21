import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, LayoutDashboard, Database, BarChart3, LineChart, Lightbulb, CheckCircle, TrendingUp, Presentation, ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/Container';
import styles from './BikeSharingCaseStudy.module.css';
import { projects } from '../../content/projects';

export default function BikeSharingCaseStudy({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cs = project.caseStudy;

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

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
            <span className={styles.metaValue}>{project.timeline || '2 Weeks'}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Team</span>
            <span className={styles.metaValue}>{project.teamSize || 'Solo Project'}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Status</span>
            <span className={styles.metaValue}>{project.status}</span>
          </div>
        </section>

        {/* Project Overview */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <div className={styles.prose}>
            {cs.overview.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Challenge & Solution</h2>
          <div className={styles.prose}>
            {cs.problem.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.solution.length}`]}`}>
            {cs.solution.map((item, i) => (
              <div key={i} className={`${styles.card} ${styles.balancedCard}`}>
                <div className={styles.cardIconWrapper}>
                  {i === 0 ? <Search className={styles.cardIcon} /> : <LayoutDashboard className={styles.cardIcon} />}
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Analysis Workflow */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Analysis Workflow</h2>
          <p className={styles.prose}>{cs.workflow.description}</p>
          <div className={styles.stage}>
            <img src={cs.workflow.image.src} alt={cs.workflow.image.alt} className={styles.stageImage} />
          </div>
        </section>

        {/* Dashboard Architecture */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Dashboard Architecture</h2>
          <p className={styles.prose}>{cs.architecture.description}</p>
          <div className={styles.stage}>
            <img src={cs.architecture.image.src} alt={cs.architecture.image.alt} className={styles.stageImage} />
          </div>
        </section>

        {/* Key Features (Mapped from Dashboard Implementation) */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={styles.prose}>
            <p>{cs.dashboard.description}</p>
          </div>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.dashboard.features.length}`]}`}>
            {cs.dashboard.features.map((feature, i) => (
              <div key={i} className={`${styles.card} ${styles.balancedCard}`}>
                <div className={styles.cardIconWrapper} style={{ marginBottom: 'var(--space-2)' }}>
                  {i === 0 ? <BarChart3 className={styles.cardIcon} /> :
                   i === 1 ? <TrendingUp className={styles.cardIcon} /> :
                   i === 2 ? <LineChart className={styles.cardIcon} /> :
                             <Search className={styles.cardIcon} />}
                </div>
                <h3 className={styles.cardTitle}>{feature.split(':')[0]}</h3>
                <p className={styles.cardDesc}>{feature.split(':')[1]?.trim() || feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Dashboard Presentation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Interactive Dashboard Presentation</h2>
          <p className={styles.prose}>The final output visualizes summary metrics, seasonal comparisons, and hourly activity charts.</p>
          <div className={styles.stage}>
            <img src={cs.dashboard.images[0].src} alt={cs.dashboard.images[0].alt} className={styles.stageImage} />
          </div>
        </section>

        {/* Contribution */}
        <section className={`${styles.section} ${styles.fullWidthPanel}`}>
          <div className={styles.panelHeader}>
            <LineChart className={styles.panelIcon} size={32} />
            <h2 className={styles.panelTitle}>Contribution</h2>
            <div className={styles.panelRoleBadge}>{cs.contribution.role}</div>
          </div>
          <p className={styles.panelSummary}>{cs.contribution.focus}</p>

          <div className={styles.panelGrid}>
            {cs.contribution.sections.map((section, i) => (
              <div key={i} className={styles.panelCard}>
                <div className={styles.cardIconWrapper} style={{ marginBottom: 'var(--space-2)' }}>
                  {i === 0 ? <Database className={styles.cardIcon} /> : 
                   i === 1 ? <Search className={styles.cardIcon} /> :
                   i === 2 ? <BarChart3 className={styles.cardIcon} /> :
                             <Presentation className={styles.cardIcon} />}
                </div>
                <h3 className={styles.panelCardTitle}>{section.title}</h3>
                <div className={styles.panelCardBody}>
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
          <div className={`${styles.balancedGrid} ${styles['grid-len-3']}`}>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><Presentation className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Accessible Interface</h3>
              <p className={styles.cardDesc}>{cs.outcome[0]}</p>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><TrendingUp className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Operational Insight</h3>
              <p className={styles.cardDesc}>{cs.outcome[1]}</p>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><CheckCircle className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>End-to-End Analytics</h3>
              <p className={styles.cardDesc}>{cs.outcome[2]}</p>
            </div>
          </div>
        </section>

        {/* Key Learning */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Learning</h2>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.learnings.length}`]}`}>
            {cs.learnings.map((item, i) => (
              <div key={i} className={`${styles.card} ${styles.balancedCard}`}>
                <div className={styles.cardIconWrapper} style={{ marginBottom: 'var(--space-2)' }}>
                  {i === 0 ? <Database className={styles.cardIcon} size={20} /> :
                   i === 1 ? <BarChart3 className={styles.cardIcon} size={20} /> :
                             <Lightbulb className={styles.cardIcon} size={20} />}
                </div>
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
