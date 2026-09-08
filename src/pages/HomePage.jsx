import Container from '../components/ui/Container';

export default function HomePage() {
  return (
    <Container className="page-section" style={{ paddingTop: 'var(--space-12)' }}>
      <h1>Muhammad Azis Saputra</h1>
      <p style={{ marginTop: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
        Portfolio development environment is ready.
      </p>
    </Container>
  );
}
