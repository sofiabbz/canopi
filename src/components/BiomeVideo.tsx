import { useEffect, useRef, useState } from 'react';
import styles from './BiomeVideo.module.css';

interface BiomeVideoProps {
  slug: string;
  color: string;
}

function getVideoUrl(slug: string): string {
  return `/videos/${slug}.mp4`;
}

export default function BiomeVideo({ slug, color }: BiomeVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      containerRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, [loaded]);

  const src = getVideoUrl(slug);

  if (!src) return null;

  return (
    <div className={styles.videoWrapper}>
      <div className={styles.videoParallax} ref={containerRef}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0 }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>

      <div className={styles.overlayGradient} />

      <div
        className={styles.overlayColor}
        style={{ background: color }}
      />

      <div className={styles.overlayDark} />
    </div>
  );
}
