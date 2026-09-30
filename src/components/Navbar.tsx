import { Link } from 'react-router-dom';
import logoCanopi from '../assets/images/logo-canopi.svg';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link to="/home" className={styles.logo}>
          <img src={logoCanopi} alt="Canopi" className={styles.logoImg} />
        </Link>

        <ul className={styles.links}>
          <li><Link to="/home">início</Link></li>
          <li><Link to="/atlas">Atlas</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>

        <Link to="/atlas" className={styles.cta}>
          Explorar atlas →
        </Link>
      </div>
    </nav>
  );
}
