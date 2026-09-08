import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';

export default function ProjectDetailPage() {
  const { slug } = useParams();

  return (
    <Container className="page-section" style={{ paddingTop: 'var(--space-12)' }}>
      <h1>Project</h1>
      <p style={{ marginTop: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
        Current project slug: {slug}
      </p>
    </Container>
  );
}
