import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <p style={styles.text}>
            © 2025 GODNEWS.
          </p>
          <p style={styles.subtext}>
            Desarrollado por Anthony Agustin Jimenez Uscanga
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#fff',
    borderTop: '1px solid #e5e7eb',
    marginTop: '4rem'
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  content: {
    textAlign: 'center',
    color: '#6b7280'
  },
  text: {
    fontSize: '0.875rem',
    marginBottom: '0.5rem'
  },
  subtext: {
    fontSize: '0.75rem',
    color: '#9ca3af'
  }
};

export default Footer;