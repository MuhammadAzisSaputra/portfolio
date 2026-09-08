import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  as = 'button', 
  to, 
  href, 
  className = '', 
  ...props 
}) {
  const combinedClassName = `${styles.button} ${styles[variant]} ${className}`;

  if (as === 'link' && to) {
    return (
      <Link to={to} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  if (as === 'a' && href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
