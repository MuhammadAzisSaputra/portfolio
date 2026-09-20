import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Target, LineChart, ShoppingBag, Database, BrainCircuit, CloudCog, Users, Cloud, Smartphone, ArrowLeft, ArrowRight, CheckCircle, Award, Lightbulb, Expand } from 'lucide-react';
import ProjectDemoGallery from '../../components/project/ProjectDemoGallery';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/Container';
import styles from './BrofinCaseStudy.module.css';
import { projects } from '../../content/projects';

export default function BrofinCaseStudy({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cs = project.caseStudy;

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

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
                <div className={styles.cardIconWrapper}>
                  {i === 0 ? <Wallet className={styles.cardIcon} /> :
                    i === 1 ? <Target className={styles.cardIcon} /> :
                      i === 2 ? <LineChart className={styles.cardIcon} /> :
                        <ShoppingBag className={styles.cardIcon} />}
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-Functional Team Context */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cross-Functional Team Context</h2>
          <p className={styles.prose}>Brofin was developed by a multidisciplinary 7-member team, focusing on seamless collaboration across Machine Learning, Cloud, and Mobile development.</p>
          <div className={`${styles.balancedGrid} ${styles['grid-len-3']}`}>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><BrainCircuit className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Machine Learning</h3>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><Cloud className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Cloud Computing</h3>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><Smartphone className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Mobile Development</h3>
            </div>
          </div>
        </section>

        {/* ML Contribution */}
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
                <div className={styles.cardIconWrapper} style={{ marginBottom: 'var(--space-2)' }}>
                  {i === 0 ? <Database className={styles.cardIcon} /> :
                    i === 1 ? <BrainCircuit className={styles.cardIcon} /> :
                      i === 2 ? <CloudCog className={styles.cardIcon} /> :
                        <Users className={styles.cardIcon} />}
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

        {/* Machine Learning Architecture & Workflow */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Machine Learning Architecture & Workflow</h2>
          <p className={styles.prose}>End-to-end data preparation, model training, evaluation, and deployment workflow integrated within the broader application.</p>
          <div className={styles.stageGrid}>
            <div className={styles.stageItem}>
              <h3 className={styles.stageItemTitle}>ML Architecture</h3>
              <img src="/assets/projects/brofin/Machine Learning Architecture.png" alt="Machine Learning Architecture" className={styles.stageImage} />
            </div>
            <div className={styles.stageItem}>
              <h3 className={styles.stageItemTitle}>ML Workflow</h3>
              <img src="/assets/projects/brofin/Machine Learning Workflow.png" alt="Machine Learning Workflow" className={styles.stageImage} />
            </div>
          </div>
        </section>

        {/* Conceptual Models */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Conceptual Model Flows</h2>
          <p className={styles.prose}>Detailed mapping of the predictive workflows for housing estimates and product recommendations.</p>
          <div className={styles.stageGrid}>
            <div className={styles.stageItem}>
              <h3 className={styles.stageItemTitle}>House Planning Model</h3>
              <img src="/assets/projects/brofin/Conceptual Flow House Planning Model.png" alt="House Planning Model Flow" className={styles.stageImage} />
            </div>
            <div className={styles.stageItem}>
              <h3 className={styles.stageItemTitle}>Product Recommendation Model</h3>
              <img src="/assets/projects/brofin/Conceptual Flow Product Recommendation Model.png" alt="Product Recommendation Model Flow" className={styles.stageImage} />
            </div>
          </div>
        </section>

        {/* System & Cloud Architecture */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>System & Cloud Architecture</h2>
          <p className={styles.prose}>{cs.architecture.description}</p>
          <div className={styles.stageGrid}>
            <div className={styles.stageItem}>
              <h3 className={styles.stageItemTitle}>System Architecture</h3>
              <img src={cs.architecture.image.src} alt={cs.architecture.image.alt} className={styles.stageImage} />
            </div>
            <div className={styles.stageItem}>
              <h3 className={styles.stageItemTitle}>Cloud Architecture Design</h3>
              <img src="/assets/projects/brofin/Cloud Architecture Design.png" alt="Cloud Architecture Design" className={styles.stageImage} />
            </div>
          </div>
        </section>

        {/* Cloud SQL to Firestore Decision */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cloud SQL to Firestore Decision</h2>
          <p className={styles.prose}>During development, the team needed to manage Google Cloud resource consumption and available credits to ensure long-term stability.</p>

          <div className={styles.tradeoffContainer}>
            <div className={styles.tradeoffItem}>
              <span className={styles.tradeoffLabel}>Initial Approach</span>
              <span className={styles.tradeoffTitle}>Cloud SQL</span>
            </div>
            <ArrowRight className={styles.tradeoffArrow} size={24} />
            <div className={styles.tradeoffItem}>
              <span className={styles.tradeoffLabel}>Final Approach</span>
              <span className={styles.tradeoffTitle}>Firestore</span>
            </div>
          </div>

          <p className={styles.prose}>This architectural change preserved cloud credits while still fully supporting the application's backend requirements and data structures.</p>
        </section>

        {/* Development Process & Deployment */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Development Process & Deployment</h2>
          <p className={styles.prose}>A structured workflow ensuring smooth integration between machine learning development and production deployment.</p>
          <div className={styles.stageGrid}>
            <div className={styles.stageItem}>
              <h3 className={styles.stageItemTitle}>Development Process</h3>
              <img src="/assets/projects/brofin/Development Process.png" alt="Development Process" className={styles.stageImage} />
            </div>
            <div className={styles.stageItem}>
              <h3 className={styles.stageItemTitle}>Deployment</h3>
              <img src="/assets/projects/brofin/Deployment.png" alt="Deployment" className={styles.stageImage} />
            </div>
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

        {/* Demo App */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Interactive Demo App</h2>
          <p className={styles.prose}>Explore the complete flow from authentication and budgeting to machine learning predictions.</p>
          <ProjectDemoGallery images={demoImages} title={null} description={null} />
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
              <div className={styles.cardIconWrapper}><CheckCircle className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>100% Completed</h3>
              <p className={styles.cardDesc}>{cs.outcome[0]}</p>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><Award className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Hybrid Experience</h3>
              <p className={styles.cardDesc}>{cs.outcome[1]}</p>
            </div>
            <div className={`${styles.card} ${styles.balancedCard}`}>
              <div className={styles.cardIconWrapper}><CloudCog className={styles.cardIcon} /></div>
              <h3 className={styles.cardTitle}>Successful Deployment</h3>
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
                <div className={styles.cardIconWrapper} style={{ marginBottom: 'var(--space-2)' }}>
                  <Lightbulb className={styles.cardIcon} size={20} />
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

