import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.css';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Trap focus or just rely on DOM order for now, keeping it simple as required

  return (
    <div className={styles.mobileMenuWrapper} ref={menuRef}>
      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {isOpen && (
        <nav id="mobile-nav" className={styles.mobileNav}>
          <ul className={styles.navList}>
            <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/#projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/#experience" onClick={closeMenu}>Experience</Link></li>
            <li><Link to="/#leadership" onClick={closeMenu}>Organization</Link></li>
            <li><Link to="/#skills" onClick={closeMenu}>Skills</Link></li>
            <li><Link to="/#contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
}
