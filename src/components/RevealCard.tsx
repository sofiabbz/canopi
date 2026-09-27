import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './RevealCard.module.css';

interface RevealCardProps {
  to: string;
  emoji: string;
  image?: string;
  category: string;
  name: string;
  scientific: string;
}

export default function RevealCard({ to, emoji, image, category, name, scientific }: RevealCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={cardRef}
      to={to}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
    >
      <div className={styles.imageArea}>
        {image ? (
          <img src={image} alt={name} className={styles.photo} />
        ) : (
          <span className={styles.emoji}>{emoji}</span>
        )}
        {!image && <div className={styles.scanline} />}
        {!image && <div className={styles.revealLabel}>Descobrir</div>}
      </div>
      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.scientific}>{scientific}</p>
      </div>
    </Link>
  );
}
