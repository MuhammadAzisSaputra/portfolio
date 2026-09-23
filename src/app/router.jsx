/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';

const HomePage = lazy(() => import('../pages/HomePage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const PageLoader = () => (
  <div style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <span style={{ color: 'var(--color-text-secondary, #666)' }}>Loading...</span>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageShell>
        <Suspense fallback={<PageLoader />}>
          <HomePage />
        </Suspense>
      </PageShell>
    ),
  },
  {
    path: '/projects',
    element: (
      <PageShell>
        <Suspense fallback={<PageLoader />}>
          <ProjectsPage />
        </Suspense>
      </PageShell>
    ),
  },
  {
    path: '/projects/:slug',
    element: (
      <PageShell>
        <Suspense fallback={<PageLoader />}>
          <ProjectDetailPage />
        </Suspense>
      </PageShell>
    ),
  },
  {
    path: '*',
    element: (
      <PageShell>
        <Suspense fallback={<PageLoader />}>
          <NotFoundPage />
        </Suspense>
      </PageShell>
    ),
  },
]);
