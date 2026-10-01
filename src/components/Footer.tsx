import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copyright}>
          © 2026 Canopi — Atlas da Biodiversidade Brasileira
        </p>
        <div className={styles.links}>
          <a href="https://github.com/sofiabbz/canopi" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="http://www.linkedin.com/in/sofia-bezerra-belem" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <Link to="/fontes">Fontes</Link>
        </div>
      </div>
    </footer>
  );
}
