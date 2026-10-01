import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copyright}>
          © 2024 Atlas da Flora Brasileira — Dados: Flora e Funga do Brasil, IUCN Red List, CNCFlora
        </p>
        <div className={styles.links}>
          <a href="https://github.com/sofiabbz/canopi.git" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="http://www.linkedin.com/in/sofia-bezerra-belem" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#">Fontes</a>
        </div>
      </div>
    </footer>
  );
}
