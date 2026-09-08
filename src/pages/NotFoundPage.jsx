import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';

export default function NotFoundPage() {
  return (
    <Container className="page-section" style={{ paddingTop: 'var(--space-12)' }}>
      <h1>Page not found.</h1>
      <p style={{ marginTop: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
        The page you're looking for may have moved, changed, or no longer exists.
      </p>
      <Link 
        to="/" 
        style={{ 
          display: 'inline-block', 
          marginTop: 'var(--space-6)',
          backgroundColor: '#111111',
          color: '#FFFFFF',
          padding: 'var(--space-4) var(--space-6)',
          borderRadius: 'var(--radius-pill)',
          fontWeight: 500
        }}
      >
        Back to Home
      </Link>
    </Container>
  );
}
