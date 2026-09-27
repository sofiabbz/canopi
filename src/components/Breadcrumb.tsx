import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb}>
      <div className="container">
        <ol className={styles.list}>
          {items.map((item, i) => (
            <li key={i} className={styles.item}>
              {i > 0 && <span className={styles.separator}>›</span>}
              {item.to ? (
                <Link to={item.to} className={styles.link}>{item.label}</Link>
              ) : (
                <span className={styles.current}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
