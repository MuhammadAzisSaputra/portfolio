import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle, AlertCircle, X } from 'lucide-react';
import styles from './Toast.module.css';

export default function Toast({ type = 'success', message, onClose, duration = 4000 }) {
  const [isClosing, setIsClosing] = useState(false);
  const [prevMessage, setPrevMessage] = useState(message);

  if (message !== prevMessage) {
    setPrevMessage(message);
    setIsClosing(false);
  }

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Wait for exit animation
  }, [onClose]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration, handleClose]);

  if (!message && !isClosing) return null;

  const Icon = type === 'success' ? CheckCircle : AlertCircle;

  const content = (
    <div className={styles.toastContainer}>
      <div 
        className={`${styles.toast} ${styles[type]} ${isClosing ? styles.toastExit : styles.toastEnter}`}
        role="status"
        aria-live="polite"
      >
        <Icon className={styles.icon} size={20} />
        <span className={styles.message}>{message}</span>
        <button onClick={handleClose} className={styles.closeButton} aria-label="Close notification">
          <X size={16} />
        </button>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
