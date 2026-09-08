import { createBrowserRouter } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageShell>
        <HomePage />
      </PageShell>
    ),
  },
  {
    path: '/projects',
    element: (
      <PageShell>
        <ProjectsPage />
      </PageShell>
    ),
  },
  {
    path: '/projects/:slug',
    element: (
      <PageShell>
        <ProjectDetailPage />
      </PageShell>
    ),
  },
  {
    path: '*',
    element: (
      <PageShell>
        <NotFoundPage />
      </PageShell>
    ),
  },
]);
