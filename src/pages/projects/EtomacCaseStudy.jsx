import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, LayoutDashboard, Rocket, CheckCircle, ArrowLeft, ArrowRight, Expand } from 'lucide-react';
import ProjectDemoGallery from '../../components/project/ProjectDemoGallery';
import Container from '../../components/ui/Container';
import styles from './EtomacCaseStudy.module.css';
import { projects } from '../../content/projects';

export default function EtomacCaseStudy({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cs = project.caseStudy;

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  const demoImages = [
    { src: '/assets/projects/etomac/index-guest.webp', alt: 'Homepage', isMobile: false },
    { src: '/assets/projects/etomac/login.webp', alt: 'Login', isMobile: false },
    { src: '/assets/projects/etomac/register1.webp', alt: 'Register Step 1', isMobile: false },
    { src: '/assets/projects/etomac/showcase-all-guest.webp', alt: 'Product Showcase', isMobile: false },
    { src: '/assets/projects/etomac/showcase-traktorindustri-guest.webp', alt: 'Industrial Tractor Showcase', isMobile: false },
    { src: '/assets/projects/etomac/dashboard-pelanggan.webp', alt: 'Customer Dashboard', isMobile: false },
    { src: '/assets/projects/etomac/allproduct-pelanggan.webp', alt: 'Customer Catalog', isMobile: false },
    { src: '/assets/projects/etomac/detailproduk-pelanggan.webp', alt: 'Product Detail', isMobile: false },
    { src: '/assets/projects/etomac/keranjang-pelanggan.webp', alt: 'Shopping Cart', isMobile: false },
    { src: '/assets/projects/etomac/checkout-pelanggan.webp', alt: 'Checkout', isMobile: false },
    { src: '/assets/projects/etomac/konfirmasicheckout-pelanggan.webp', alt: 'Checkout Confirmation', isMobile: false },
    { src: '/assets/projects/etomac/pembayaran-pelanggan.webp', alt: 'Payment Form', isMobile: false },
    { src: '/assets/projects/etomac/konfirmasipembayaran-pelanggan.webp', alt: 'Payment Confirmation', isMobile: false },
    { src: '/assets/projects/etomac/orderhistory-pelanggan.webp', alt: 'Order History', isMobile: false },
    { src: '/assets/projects/etomac/profile-index-pelanggan.webp', alt: 'Customer Profile', isMobile: false },
    { src: '/assets/projects/etomac/dashboard-admin.webp', alt: 'Admin Dashboard', isMobile: false },
    { src: '/assets/projects/etomac/dataproduk-index-admin.webp', alt: 'Admin Product Management', isMobile: false },
    { src: '/assets/projects/etomac/dataedisiproduk-index-admin.webp', alt: 'Admin Product Editions', isMobile: false },
    { src: '/assets/projects/etomac/daftarorderan-index-admin.webp', alt: 'Admin Order List', isMobile: false },
    { src: '/assets/projects/etomac/daftarorderan-view-admin.webp', alt: 'Admin Order View', isMobile: false },
    { src: '/assets/projects/etomac/datauser-index-admin.webp', alt: 'Admin User Data', isMobile: false }
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
            <span className={styles.metaLabel}>Duration</span>
            <span className={styles.metaValue}>{project.duration}</span>
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

        {/* Problem Statement */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Problem Statement</h2>
          <div className={styles.prose}>
            {cs.problem.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </section>

        {/* Solution */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution</h2>
          <div className={`${styles.balancedGrid} ${styles[`grid-len-${cs.solution.length}`]}`}>
            {cs.solution.map((item, i) => (
              <div key={i} className={`${styles.card} ${styles.balancedCard}`}>
                <div className={styles.cardIconWrapper}>
                  {i === 0 ? <Search className={styles.cardIcon} /> : i === 1 ? <ShoppingCart className={styles.cardIcon} /> : <LayoutDashboard className={styles.cardIcon} />}
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
          <p className={styles.prose}>{cs.workflow.description}</p>
          <div className={styles.stage}>
            <img src={cs.workflow.image.src} alt={cs.workflow.image.alt} className={styles.stageImage} />
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

        {/* Database Relationship */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Database Relationship</h2>
          <p className={styles.prose}>Relational database structure linking users, products, categories, orders, and payments.</p>
          <div className={styles.stage}>
            <img src={cs.databaseDesign.image.src} alt={cs.databaseDesign.image.alt} className={styles.stageImage} />
          </div>
        </section>

        {/* Demo App Gallery */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Demo App Gallery</h2>
          <p className={`${styles.prose} ${styles.demoAppDescription}`}>Explore the complete customer e-commerce journey and the administrative management dashboard.</p>
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
          <div className={`${styles.balancedGrid} ${styles['grid-len-2']}`}>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><Rocket className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Rapid Delivery</h3>
              <p className={styles.cardDesc}>{cs.outcome[0]}</p>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><CheckCircle className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Complete Workflow</h3>
              <p className={styles.cardDesc}>{cs.outcome[1]}</p>
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
