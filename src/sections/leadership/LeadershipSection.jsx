import Container from '../../components/ui/Container';
import styles from './LeadershipSection.module.css';

const leadershipRoles = [
  {
    organization: 'Startup Generation Community (SGC) USU',
    role: 'Head of Innovate Hub Division',
    period: 'Jan 2024 — Feb 2025',
    logo: '/assets/organizations/logo-sgcusu.png',
    summary: 'Led a 10-member division responsible for startup education, idea development, and solution experimentation programs.',
    evidence: [
      'Planned and coordinated annual work programs.',
      'Initiated and managed EduHub, InHub, and ExHub.',
      'Delegated responsibilities and monitored implementation progress.'
    ]
  },
  {
    organization: 'MPMF Fasilkom-TI USU',
    role: 'Chairperson',
    period: 'Aug 2023 — Dec 2023',
    logo: '/assets/organizations/logo-mpmfusu.png',
    summary: 'Led a 20-member student legislative council and coordinated governance, deliberation, oversight, and policy-development activities.',
    evidence: [
      'Coordinated council meetings and committee activities.',
      'Supported accountability across faculty student-government programs.',
      'Led drafting, review, and ratification of the Faculty Student Constitution.'
    ]
  },
  {
    organization: 'Mengajar di Desa',
    role: 'Secretary of Creative Media Division',
    period: 'Aug 2023 — Dec 2023',
    logo: '/assets/organizations/logo-mengajardidesa.png',
    summary: 'Supported the Creative Media Division by managing internal communications and producing visual content to drive public engagement.',
    evidence: [
      'Planned communication activities, documented meetings, and coordinated internal information flow.',
      'Designed a reusable visual template to introduce the program’s organizational structure and members.',
      'Developed and produced real-time Instagram Story content during on-site educational activities to document the program.'
    ]
  },
  {
    organization: 'Rumah Kepemimpinan Regional 6 Medan',
    role: 'Head of Communications & Informatics Division',
    period: 'Aug 2022 - Dec 2022',
    logo: '/assets/organizations/logo-rumahkepemimpinan.png',
    summary: 'Led a 3-member Communications Division, overseeing brand identity and social media engagement.',
    evidence: [
      'Directed design tasks and coordinated visual initiatives for a 3-member team.',
      'Created the official cabinet logo, visual guidelines, and promotional materials.',
      'Produced 50 Instagram posts using 10+ reusable templates at a three-post-per-week rate.',
      'Published 100 Instagram Stories for live event coverage and audience updates.'
    ]
  }
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className={styles.leadershipSection}>
      <Container>
        <header className={styles.header}>
          <span className={styles.label}>Organization</span>
          <h2 className={styles.title}>
            Experience leading teams, programs, and organizational initiatives.
          </h2>
        </header>

        <div className={styles.grid}>
          {leadershipRoles.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={`${item.organization} logo`}
                    className={styles.logo}
                    loading="lazy"
                  />
                )}
                <div className={styles.meta}>
                  <h3 className={styles.organization}>{item.organization}</h3>
                  <span className={styles.period}>{item.period}</span>
                </div>
              </div>

              <h4 className={styles.role}>{item.role}</h4>
              <p className={styles.summary}>{item.summary}</p>

              <ul className={styles.evidence}>
                {item.evidence.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
