import SiteHeader from '../navigation/SiteHeader';
import SiteFooter from './SiteFooter';
import styles from './PageShell.module.css';

export default function PageShell({ children }) {
  return (
    <div className={styles.pageShell}>
      <SiteHeader />
      <main className={styles.mainContent}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
