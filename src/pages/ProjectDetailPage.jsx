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

import SibukuCaseStudy from './projects/SibukuCaseStudy';
import SuperSoybeanCaseStudy from './projects/SuperSoybeanCaseStudy';
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

  if (slug === 'sibuku') {
    return <SibukuCaseStudy project={project} />;
  }

  if (slug === 'super-soybean') {
    return <SuperSoybeanCaseStudy project={project} />;
  }

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

          {cs.keyFeatures && (
            <ProjectFeatureGrid title="Key Features" items={cs.keyFeatures} />
          )}

          {cs.contribution && (
            <CaseStudySection title="My Contribution">
              <p><strong>Role:</strong> {cs.contribution.role}</p>
              {cs.contribution.focus && <p>{cs.contribution.focus}</p>}
              
              {cs.contribution.sections && cs.contribution.sections.map((section, idx) => (
                <div key={idx}>
                  <h3>{section.title}</h3>
                  {section.objective && <p><strong>Objective:</strong> {section.objective}</p>}
                  
                  {section.process && (
                    <>
                      <h4>{section.processTitle || 'Development Process'}</h4>
                      <ul>
                        {section.process.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {section.implementation && (
                    <>
                      {section.implementationTitle && <h4>{section.implementationTitle}</h4>}
                      {section.implementation.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </>
                  )}

                  {section.content && (
                    <>
                      {section.content.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </CaseStudySection>
          )}

          {cs.performance && (
            <CaseStudySection title="Model Performance">
              <ProjectMetrics metrics={cs.performance.metrics} />
            </CaseStudySection>
          )}

          {cs.performanceImage && (
            <ProjectImage 
              src={cs.performanceImage.src} 
              alt={cs.performanceImage.alt} 
              caption={cs.performanceImage.caption} 
            />
          )}

          {cs.architecture && (
            <CaseStudySection title="System Architecture">
              {cs.architecture.image && (
                <ProjectImage 
                  src={cs.architecture.image.src} 
                  alt={cs.architecture.image.alt} 
                />
              )}
              <p>{cs.architecture.description}</p>
            </CaseStudySection>
          )}

          {cs.analysis && (
            <CaseStudySection title="Data Analysis">
              {cs.analysis.description && <p>{cs.analysis.description}</p>}
              {cs.analysis.steps && (
                <ul>
                  {cs.analysis.steps.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </CaseStudySection>
          )}

          {cs.databaseDesign && (
            <CaseStudySection title="Database Design">
              {cs.databaseDesign.image && (
                <ProjectImage 
                  src={cs.databaseDesign.image.src} 
                  alt={cs.databaseDesign.image.alt} 
                />
              )}
              <p>{cs.databaseDesign.description}</p>
            </CaseStudySection>
          )}

          {cs.backend && (
            <CaseStudySection title="Backend Development">
              <p>{cs.backend.description}</p>
              <ul>
                {cs.backend.processing && cs.backend.processing.map((proc, i) => (
                  <li key={i}>{proc}</li>
                ))}
              </ul>
            </CaseStudySection>
          )}

          {cs.frontend && (
            <CaseStudySection title="Frontend & UI/UX Design">
              {cs.frontend.description && <p>{cs.frontend.description}</p>}
              {cs.frontend.considerations && (
                <ul>
                  {cs.frontend.considerations.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              
              {cs.frontend.images && cs.frontend.images.map((img, i) => (
                <ProjectImage 
                  key={i}
                  src={img.src} 
                  alt={img.alt} 
                />
              ))}
            </CaseStudySection>
          )}

          {cs.dashboard && (
            <CaseStudySection title="Interactive Dashboard">
              {cs.dashboard.description && <p>{cs.dashboard.description}</p>}
              {cs.dashboard.features && (
                <ul>
                  {cs.dashboard.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {cs.dashboard.images && cs.dashboard.images.map((img, i) => (
                <ProjectImage 
                  key={i}
                  src={img.src} 
                  alt={img.alt} 
                />
              ))}
            </CaseStudySection>
          )}

          {cs.workflow && (
            <CaseStudySection title="Application Workflow">
              {cs.workflow.image ? (
                <ProjectImage 
                  src={cs.workflow.image.src} 
                  alt={cs.workflow.image.alt} 
                />
              ) : (
                <ol>
                  {cs.workflow.flow && cs.workflow.flow.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              )}
              {cs.workflow.description && <p>{cs.workflow.description}</p>}
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
