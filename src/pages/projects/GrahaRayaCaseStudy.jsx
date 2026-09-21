import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, User, Database, Workflow, Sparkles, CheckCircle, ArrowLeft, ArrowRight, UserShield, UsersRound, Folder, CreditCard, CalendarCheck, Megaphone, Expand } from 'lucide-react';
import ProjectDemoGallery from '../../components/project/ProjectDemoGallery';
import Container from '../../components/ui/Container';
import styles from './GrahaRayaCaseStudy.module.css';
import { projects } from '../../content/projects';

export default function GrahaRayaCaseStudy({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cs = project.caseStudy;

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

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

  // Helper for key feature icons
  const getKeyFeatureIcon = (i) => {
    const icons = [Shield, Database, Folder, CreditCard, CalendarCheck, CheckCircle, Megaphone];
    const Icon = icons[i % icons.length];
    return <Icon className={styles.cardIcon} />;
  };

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
                <div className={styles.cardIconWrapper}>
                  {i === 0 ? <UserShield className={styles.cardIcon} /> : i === 1 ? <User className={styles.cardIcon} /> : <UsersRound className={styles.cardIcon} />}
                </div>
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
                <div className={styles.cardIconWrapper}>
                  {getKeyFeatureIcon(i)}
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Workflow */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Application Workflow</h2>
          <p className={styles.prose}>End-to-end operational sequence from project initiation to final field approval.</p>
          <div className={styles.stage}>
            <img src={cs.workflow.image.src} alt={cs.workflow.image.alt} className={styles.stageImage} />
          </div>
        </section>

        {/* System Architecture */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>System Architecture</h2>
          <p className={styles.prose}>Custom MVC architecture separating concerns across Router, Controller, Model, and View layers.</p>
          <div className={styles.stage}>
            <img src={cs.architecture.image.src} alt={cs.architecture.image.alt} className={styles.stageImage} />
          </div>
        </section>

        {/* Database Design */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Database Design</h2>
          <p className={styles.prose}>Relational data model structuring employees, clients, projects, schedules, and payments.</p>
          <div className={styles.stage}>
            <img src={cs.databaseDesign.image.src} alt={cs.databaseDesign.image.alt} className={styles.stageImage} />
          </div>
        </section>

        {/* Demo App */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Demo App</h2>
          <p className={`${styles.prose} ${styles.demoAppDescription}`}>Explore the application interface and primary workflows.</p>
          <ProjectDemoGallery images={demoImages} title={null} description={null} minimal={true} />
        </section>

        {/* My Contribution */}
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
          <div className={`${styles.balancedGrid} ${styles['grid-len-3']}`}>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><Workflow className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Structured Workflow</h3>
              <p className={styles.cardDesc}>{cs.outcome[0]}</p>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><CheckCircle className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Improved Monitoring</h3>
              <p className={styles.cardDesc}>{cs.outcome[1]}</p>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><Sparkles className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Complete System</h3>
              <p className={styles.cardDesc}>{cs.outcome[2]}</p>
            </div>
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
