import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Database, Package, CreditCard, FileText, CheckCircle, Server, Workflow, ArrowLeft, ArrowRight, Expand } from 'lucide-react';
import ProjectDemoGallery from '../../components/project/ProjectDemoGallery';
import Container from '../../components/ui/Container';
import styles from './SibukuCaseStudy.module.css';
import { projects } from '../../content/projects';

export default function SibukuCaseStudy({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cs = project.caseStudy;

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  const demoImages = [
    { src: '/assets/projects/sibuku/login-admin-light.png', alt: 'Login', isMobile: false },
    { src: '/assets/projects/sibuku/dashboard-admin-light.png', alt: 'Admin Dashboard', isMobile: false },
    { src: '/assets/projects/sibuku/dashboard-pengarang-light.png', alt: 'Author Dashboard', isMobile: false },
    { src: '/assets/projects/sibuku/dashboardpenjualan-pegawai-light.png', alt: 'Sales Dashboard', isMobile: false },
    { src: '/assets/projects/sibuku/dashboardstok-pegawai-light.png', alt: 'Stock Dashboard', isMobile: false },
    { src: '/assets/projects/sibuku/databuku-admin-light.png', alt: 'Book Data Management', isMobile: false },
    { src: '/assets/projects/sibuku/viewbuku-admin-light.png', alt: 'Book Details View', isMobile: false },
    { src: '/assets/projects/sibuku/catatbuku-pengarang-light.png', alt: 'Record Book (Author)', isMobile: false },
    { src: '/assets/projects/sibuku/datatransaksi-admin-light.png', alt: 'Transaction Processing', isMobile: false },
    { src: '/assets/projects/sibuku/catatpenjualan-pegawai-light.png', alt: 'Record Sales (Employee)', isMobile: false },
    { src: '/assets/projects/sibuku/datastok-admin-light.png', alt: 'Stock Management', isMobile: false },
    { src: '/assets/projects/sibuku/catatstok-pegawai-light.png', alt: 'Record Stock (Employee)', isMobile: false },
    { src: '/assets/projects/sibuku/viewstok-admin-light.png', alt: 'Stock Details View', isMobile: false },
    { src: '/assets/projects/sibuku/datalaporan-admin-light.png', alt: 'Automated Reporting', isMobile: false },
    { src: '/assets/projects/sibuku/unggahlaporan-admin-light.png', alt: 'Upload Report', isMobile: false },
    { src: '/assets/projects/sibuku/eksporlaporanexcel-admin-light.png', alt: 'Export Excel Report', isMobile: false },
    { src: '/assets/projects/sibuku/eksporlaporanpdf-admin-light.png', alt: 'Export PDF Report', isMobile: false },
    { src: '/assets/projects/sibuku/dataadministrator-admin-light.png', alt: 'Administrator Data', isMobile: false },
    { src: '/assets/projects/sibuku/databank-admin-light.png', alt: 'Bank Data', isMobile: false },
    { src: '/assets/projects/sibuku/datagudang-admin-light.png', alt: 'Warehouse Data', isMobile: false },
    { src: '/assets/projects/sibuku/datakonsumen-admin-light.png', alt: 'Customer Data', isMobile: false },
    { src: '/assets/projects/sibuku/datakurir-admin-light.png', alt: 'Courier Data', isMobile: false },
    { src: '/assets/projects/sibuku/datapegawai-admin-light.png', alt: 'Employee Data', isMobile: false },
    { src: '/assets/projects/sibuku/datapembayaran-admin-light.png', alt: 'Payment Data', isMobile: false },
    { src: '/assets/projects/sibuku/datapengarang-admin-light.png', alt: 'Author Data', isMobile: false },
    { src: '/assets/projects/sibuku/editprofile-admin-light.png', alt: 'Edit Profile', isMobile: false },
    { src: '/assets/projects/sibuku/pencatatanaktifitas-admin-light.png', alt: 'Activity Log', isMobile: false }
  ];

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
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.solution.length}`]}`}>
            {cs.solution.map((item, i) => (
              <div key={i} className={`${styles.card} ${styles.balancedCard}`}>
                <div className={styles.cardIconWrapper}>
                  {i === 0 ? <Server className={styles.cardIcon} /> : i === 1 ? <Workflow className={styles.cardIcon} /> : <FileText className={styles.cardIcon} />}
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
                  {i === 0 ? <Users className={styles.cardIcon} /> :
                    i === 1 ? <Database className={styles.cardIcon} /> :
                      i === 2 ? <Package className={styles.cardIcon} /> :
                        i === 3 ? <CreditCard className={styles.cardIcon} /> :
                          <FileText className={styles.cardIcon} />}
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
          <p className={styles.prose}>End-to-end digital workflow from master data management to transaction processing and automated report generation.</p>
          <div className={styles.stage}>
            <img src={cs.workflow.image.src} alt={cs.workflow.image.alt} className={styles.stageImage} />
          </div>
        </section>

        {/* System Architecture */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>System Architecture</h2>
          <p className={styles.prose}>The system uses the Yii2 MVC framework with an architecture that strictly separates views, business logic (models), and incoming requests (controllers).</p>
          <div className={styles.stage}>
            <img src={cs.architecture.image.src} alt={cs.architecture.image.alt} className={styles.stageImage} />
          </div>
        </section>

        {/* Database Design */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Database Design</h2>
          <p className={styles.prose}>Relational database schema managing books, warehouse stock, customers, transactions, and payments with foreign key relationships for consistency.</p>
          <div className={styles.stage}>
            <img src={cs.databaseDesign.image.src} alt={cs.databaseDesign.image.alt} className={styles.stageImage} />
          </div>
        </section>

        {/* Demo App */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Demo App</h2>
          <p className={styles.prose}>Explore the application interface and primary workflows.</p>
          <ProjectDemoGallery images={demoImages} title={null} description={null} />
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
                  <h3 className={styles.techGroupTitle}>{category}</h3>
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
              <h3 className={styles.cardTitle}>Operational Digitalization</h3>
              <p className={styles.cardDesc}>{cs.outcome[0]}</p>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><Database className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Integrated Capabilities</h3>
              <p className={styles.cardDesc}>{cs.outcome[1]}</p>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><CheckCircle className={styles.cardIcon} /></div>
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
