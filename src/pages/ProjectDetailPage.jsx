import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ProjectHero from '../components/project/ProjectHero';
import ProjectVisual from '../components/project/ProjectVisual';
import CaseStudySection from '../components/project/CaseStudySection';
import ProjectTechStack from '../components/project/ProjectTechStack';
import ProjectNavigation from '../components/project/ProjectNavigation';
import ProjectMetrics from '../components/project/ProjectMetrics';
import ProjectImage from '../components/project/ProjectImage';
import ProjectChallenges from '../components/project/ProjectChallenges';
import ProjectFeatureGrid from '../components/project/ProjectFeatureGrid';
import { getProjectBySlug, projects } from '../content/projects';
import styles from './ProjectDetailPage.module.css';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className={styles.notFoundPage}>
        <Container>
          <div className={styles.notFoundContent}>
            <h1 className={styles.notFoundTitle}>Project not found.</h1>
            <p className={styles.notFoundCopy}>
              This project page is unavailable or the link may be incorrect.
            </p>
            <Button as="link" to="/#projects" variant="primary">
              View All Projects
            </Button>
          </div>
        </Container>
      </main>
    );
  }

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const previous = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Fallback for projects without the full caseStudy object yet
  const cs = project.caseStudy || {
    overview: [project.summary, project.cardDescription].filter(Boolean)
  };

  return (
    <main className={styles.page}>
      <Container>
        <article>
          <ProjectHero project={project} />
          
          <CaseStudySection>
            {cs.overview && cs.overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </CaseStudySection>

          <ProjectVisual project={project} />

          {cs.problem && (
            <CaseStudySection title="Problem Statement">
              {cs.problem.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </CaseStudySection>
          )}

          {cs.solution && (
            <ProjectFeatureGrid title="The Solution" items={cs.solution} />
          )}

          {cs.contribution && (
            <CaseStudySection title="My Contribution">
              <p><strong>Role:</strong> {cs.contribution.role}</p>
              <p>{cs.contribution.focus}</p>
              
              <h3>AI Development — YOLO26 Seed Counting</h3>
              <p><strong>Objective:</strong> {cs.contribution.objective}</p>
              
              <h4>Development Process</h4>
              <ul>
                {cs.contribution.process.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>

              <h4>Model Implementation</h4>
              {cs.contribution.implementation.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </CaseStudySection>
          )}

          {cs.performance && (
            <CaseStudySection title="Model Performance">
              <ProjectMetrics metrics={cs.performance.metrics} />
            </CaseStudySection>
          )}

          {/* Model Result Image */}
          {project.slug === 'super-soybean' && (
            <ProjectImage 
              src="/assets/projects/super-soybean/hitungbijiuploadhasil-deploy-web-dark.png" 
              alt="Seed Counting Inference Result" 
              caption="Seed Counting Inference Result using YOLO26" 
            />
          )}

          {cs.architecture && (
            <CaseStudySection title="System Architecture">
              {project.slug === 'super-soybean' ? (
                <ProjectImage 
                  src="/assets/projects/super-soybean/System Architecture.png" 
                  alt="Super Soybean System Architecture" 
                />
              ) : null}
              <p>{cs.architecture.description}</p>
            </CaseStudySection>
          )}

          {cs.backend && (
            <CaseStudySection title="Backend Development">
              <p>{cs.backend.description}</p>
              <ul>
                {cs.backend.processing.map((proc, i) => (
                  <li key={i}>{proc}</li>
                ))}
              </ul>
            </CaseStudySection>
          )}

          {cs.frontend && (
            <CaseStudySection title="Frontend & UI/UX Design">
              <p>{cs.frontend.description}</p>
              <ul>
                {cs.frontend.considerations.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              {/* UI Screenshots for Super Soybean */}
              {project.slug === 'super-soybean' && (
                <>
                  <ProjectImage 
                    src="/assets/projects/super-soybean/about-deploy-web-dark.png" 
                    alt="Super Soybean About Interface" 
                  />
                  <ProjectImage 
                    src="/assets/projects/super-soybean/klasifikasi-deploy-web-dark.png" 
                    alt="Super Soybean Classification Interface" 
                  />
                  <ProjectImage 
                    src="/assets/projects/super-soybean/prediksi-deploy-web-dark.png" 
                    alt="Super Soybean Chlorophyll Prediction Interface" 
                  />
                </>
              )}
            </CaseStudySection>
          )}

          {cs.workflow && (
            <CaseStudySection title="Application Workflow">
              {project.slug === 'super-soybean' ? (
                <ProjectImage 
                  src="/assets/projects/super-soybean/Workflow.png" 
                  alt="Super Soybean Application Workflow" 
                />
              ) : (
                <ol>
                  {cs.workflow.flow.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              )}
            </CaseStudySection>
          )}

          <ProjectTechStack technologies={project.technologies} />

          {cs.challenges && (
            <ProjectChallenges challenges={cs.challenges} />
          )}

          {cs.outcome && (
            <CaseStudySection title="Project Outcome">
              {cs.outcome.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </CaseStudySection>
          )}

          {cs.learnings && (
            <ProjectFeatureGrid title="Key Learning" items={cs.learnings} />
          )}

          {cs.credits && (
            <CaseStudySection title="Credits">
              <p>{cs.credits}</p>
            </CaseStudySection>
          )}

          <ProjectNavigation previous={previous} next={next} />
        </article>
      </Container>
    </main>
  );
}
