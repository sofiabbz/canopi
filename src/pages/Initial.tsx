import { useNavigate } from 'react-router-dom';
import logoCanopi from '../assets/images/logo-canopi.svg';
import styles from './Initial.module.css';

export default function Initial() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.background} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <img src={logoCanopi} alt="Canopi" className={styles.logo} />
        <p className={styles.subtitle}>Atlas da biodiversidade brasileira</p>
        <button className={styles.cta} onClick={() => navigate('/home')}>
          Clique e comece a explorar!
        </button>
      </div>
    </div>
  );
}
