import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.card}>
          <span className={styles.emoji}>🌿</span>
          <h1 className={styles.code}>404</h1>
          <h2 className={styles.title}>Bioma não encontrado</h2>
          <p className={styles.text}>
            Parece que essa espécie ainda não foi catalogada no nosso atlas.
            Explore os biomas brasileiros e descubra a biodiversidade do Brasil.
          </p>
          <div className={styles.actions}>
            <Link to="/" className="btn-primary">Voltar ao início</Link>
            <Link to="/atlas" className="btn-outline">Explorar o Atlas</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
