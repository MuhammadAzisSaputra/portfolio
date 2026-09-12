import { useEffect } from 'react';
import ProjectDemoGallery from '../../components/project/ProjectDemoGallery';
import TechnicalStage from '../../components/project/TechnicalStage';
import ProjectNavigation from '../../components/project/ProjectNavigation';
import styles from './EtomacCaseStudy.module.css';
import { projects } from '../../content/projects';

export default function EtomacCaseStudy({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cs = project.caseStudy;

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const previous = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const demoImages = [
    { src: '/assets/projects/etomac/index-guest.png', alt: 'Homepage', isMobile: false },
    { src: '/assets/projects/etomac/login.png', alt: 'Login', isMobile: false },
    { src: '/assets/projects/etomac/register1.png', alt: 'Register Step 1', isMobile: false },
    { src: '/assets/projects/etomac/showcase-all-guest.png', alt: 'Product Showcase', isMobile: false },
    { src: '/assets/projects/etomac/showcase-traktorindustri-guest.png', alt: 'Industrial Tractor Showcase', isMobile: false },
    { src: '/assets/projects/etomac/dashboard-pelanggan.png', alt: 'Customer Dashboard', isMobile: false },
    { src: '/assets/projects/etomac/allproduct-pelanggan.png', alt: 'Customer Catalog', isMobile: false },
    { src: '/assets/projects/etomac/detailproduk-pelanggan.png', alt: 'Product Detail', isMobile: false },
    { src: '/assets/projects/etomac/keranjang-pelanggan.png', alt: 'Shopping Cart', isMobile: false },
    { src: '/assets/projects/etomac/checkout-pelanggan.png', alt: 'Checkout', isMobile: false },
    { src: '/assets/projects/etomac/konfirmasicheckout-pelanggan.png', alt: 'Checkout Confirmation', isMobile: false },
    { src: '/assets/projects/etomac/pembayaran-pelanggan.png', alt: 'Payment Form', isMobile: false },
    { src: '/assets/projects/etomac/konfirmasipembayaran-pelanggan.png', alt: 'Payment Confirmation', isMobile: false },
    { src: '/assets/projects/etomac/orderhistory-pelanggan.png', alt: 'Order History', isMobile: false },
    { src: '/assets/projects/etomac/profile-index-pelanggan.png', alt: 'Customer Profile', isMobile: false },
    { src: '/assets/projects/etomac/dashboard-admin.png', alt: 'Admin Dashboard', isMobile: false },
    { src: '/assets/projects/etomac/dataproduk-index-admin.png', alt: 'Admin Product Management', isMobile: false },
    { src: '/assets/projects/etomac/dataedisiproduk-index-admin.png', alt: 'Admin Product Editions', isMobile: false },
    { src: '/assets/projects/etomac/daftarorderan-index-admin.png', alt: 'Admin Order List', isMobile: false },
    { src: '/assets/projects/etomac/daftarorderan-view-admin.png', alt: 'Admin Order View', isMobile: false },
    { src: '/assets/projects/etomac/datauser-index-admin.png', alt: 'Admin User Data', isMobile: false }
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

        {/* System Architecture */}
        <TechnicalStage 
          title="System Architecture"
          description={cs.architecture.description}
          imageSrc={cs.architecture.image.src}
          imageAlt={cs.architecture.image.alt}
        />

        {/* Database Relationship */}
        <TechnicalStage 
          title="Database Relationship"
          description="Relational database structure linking users, products, categories, orders, and payments."
          imageSrc={cs.databaseDesign.image.src}
          imageAlt={cs.databaseDesign.image.alt}
        />

        {/* Demo App Gallery */}
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
