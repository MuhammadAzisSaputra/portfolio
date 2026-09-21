import { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { sendContactMessage } from '../../services/contactApi';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Toast from '../../components/ui/Toast';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';

    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) errors.subject = 'Subject is required.';
    if (!formData.message.trim()) errors.message = 'Message is required.';

    return errors;
  };

  const isValid = (fieldName) => {
    if (fieldErrors[fieldName]) return false;

    const value = formData[fieldName].trim();
    if (!value) return false;

    if (fieldName === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus('submitting');
    setToast({ show: false, type: 'success', message: '' });
    setFieldErrors({});

    try {
      const response = await sendContactMessage(formData);
      setStatus('success');
      setToast({ show: true, type: 'success', message: response?.message || 'Your message has been sent successfully.' });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
      setToast({ show: true, type: 'error', message: error.message || 'Unable to send your message. Please try again.' });
      if (error.fields) {
        setFieldErrors(error.fields);
      }
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <Container>
        <div className={styles.panel}>

          <div className={styles.info}>
            <header className={styles.header}>
              <span className={styles.label}>Contact</span>
              <h2 className={styles.title}>
                Let's build something useful.
              </h2>
            </header>

            <p className={styles.summary}>
              I'm open to professional opportunities, collaborations, and conversations around software, data, AI, and technology-driven projects.
            </p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Email</span>
                <a href="mailto:mhdazissaputra@gmail.com" className={styles.detailValue}>
                  mhdazissaputra@gmail.com
                </a>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/azisputra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.detailValue}
                >
                  linkedin.com/in/azisputra
                </a>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>GitHub</span>
                <a href="https://github.com/MuhammadAzisSaputra" target="_blank" rel="noopener noreferrer" className={styles.detailValue}>
                  github.com/MuhammadAzisSaputra
                </a>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Name</label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.formInput} ${fieldErrors.name ? styles.inputError : ''} ${isValid('name') ? styles.inputSuccess : ''}`}
                  placeholder="Your name"
                  required
                  maxLength={100}
                  aria-invalid={!!fieldErrors.name}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                />
                {fieldErrors.name && <AlertCircle className={styles.inputIcon} size={18} />}
                {isValid('name') && <CheckCircle className={`${styles.inputIcon} ${styles.successIcon}`} size={18} />}
              </div>
              {fieldErrors.name && (
                <span id="name-error" className={styles.fieldError} role="alert">
                  {fieldErrors.name}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.formInput} ${fieldErrors.email ? styles.inputError : ''} ${isValid('email') ? styles.inputSuccess : ''}`}
                  placeholder="you@example.com"
                  required
                  maxLength={254}
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? "email-error" : undefined}
                />
                {fieldErrors.email && <AlertCircle className={styles.inputIcon} size={18} />}
                {isValid('email') && <CheckCircle className={`${styles.inputIcon} ${styles.successIcon}`} size={18} />}
              </div>
              {fieldErrors.email && (
                <span id="email-error" className={styles.fieldError} role="alert">
                  {fieldErrors.email}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>Subject</label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`${styles.formInput} ${fieldErrors.subject ? styles.inputError : ''} ${isValid('subject') ? styles.inputSuccess : ''}`}
                  placeholder="What would you like to discuss?"
                  required
                  maxLength={150}
                  aria-invalid={!!fieldErrors.subject}
                  aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
                />
                {fieldErrors.subject && <AlertCircle className={styles.inputIcon} size={18} />}
                {isValid('subject') && <CheckCircle className={`${styles.inputIcon} ${styles.successIcon}`} size={18} />}
              </div>
              {fieldErrors.subject && (
                <span id="subject-error" className={styles.fieldError} role="alert">
                  {fieldErrors.subject}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <div className={styles.textareaWrapper}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles.formTextarea} ${fieldErrors.message ? styles.inputError : ''} ${isValid('message') ? styles.inputSuccess : ''}`}
                  placeholder="Tell me a little about the opportunity, project, or idea."
                  required
                  maxLength={5000}
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? "message-error" : undefined}
                />
                {fieldErrors.message && <AlertCircle className={styles.textareaIcon} size={18} />}
                {isValid('message') && <CheckCircle className={`${styles.textareaIcon} ${styles.successIcon}`} size={18} />}
              </div>
              {fieldErrors.message && (
                <span id="message-error" className={styles.fieldError} role="alert">
                  {fieldErrors.message}
                </span>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              className={styles.submitButton}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

        </div>
      </Container>
      <Toast
        type={toast.type}
        message={toast.show ? toast.message : ''}
        onClose={() => setToast(prev => ({ ...prev, show: false }))}
      />
    </section>
  );
}
