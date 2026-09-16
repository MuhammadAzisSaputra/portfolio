import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import styles from './ContactSection.module.css';



export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Intentionally left non-functional until backend phase.
    console.log('Form submission intercepted. Backend not implemented yet.');
    alert('Form submission is currently disabled during frontend development.');
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
                  https://www.linkedin.com/in/azisputra
                </a>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>GitHub</span>
                <a href="https://github.com/MuhammadAzisSaputra" target="_blank" rel="noopener noreferrer" className={styles.detailValue}>
                  https://github.com/MuhammadAzisSaputra
                </a>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.formInput}
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.formInput}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={styles.formInput}
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                placeholder="Tell me a little about the opportunity, project, or idea."
                required
              />
            </div>

            <Button type="submit" variant="primary" className={styles.submitButton}>
              Send Message
            </Button>
            <span className={styles.devNotice} aria-live="polite">
              (Form submission is disabled in the current phase)
            </span>
          </form>

        </div>
      </Container>
    </section>
  );
}
