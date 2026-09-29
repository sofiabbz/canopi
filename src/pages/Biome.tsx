import { useParams, Link } from 'react-router-dom';
import { useBiome } from '../hooks/useBiomes';
import Breadcrumb from '../components/Breadcrumb';
import BiomeVideo from '../components/BiomeVideo';
import styles from './Biome.module.css';

export default function Biome() {
  const { biome: slug } = useParams<{ biome: string }>();
  const { biome, loading } = useBiome(slug);

  if (loading) return null;

  if (!biome) {
    return (
      <div className="container" style={{ paddingTop: 64 }}>
        <h1 className="title-hero">Bioma não encontrado</h1>
      </div>
    );
  }

  const coverImages: Record<string, string> = {
    fauna: `/images/${biome.slug}/biome/fauna-cover.jpg`,
    flora: `/images/${biome.slug}/biome/flora-cover.jpg`,
    ecosystems: `/images/${biome.slug}/biome/ecossistemas-cover.jpg`,
  };

  const sections = [
    { key: 'fauna', label: 'Fauna', route: 'fauna', data: biome.fauna },
    { key: 'flora', label: 'Flora', route: 'flora', data: biome.flora },
    { key: 'ecosystems', label: 'Ecossistemas', route: 'ecossistemas', data: biome.ecosystems },
  ] as const;

  return (
    <>
      <BiomeVideo slug={biome.slug} color={biome.color} />
      <div className={styles.page} data-biome={biome.slug}>
        <Breadcrumb items={[
        { label: 'Atlas', to: '/atlas' },
        { label: biome.name },
      ]} />

      <div className="container">
        <div className={styles.heroCard}>
          <div>
            <p className="eyebrow">BIOMA BRASILEIRO</p>
            <h1 className={styles.heroTitle}>{biome.name}</h1>
            <p className={styles.heroSubtitle}>{biome.subtitle}</p>
            <p className={styles.heroDesc}>{biome.description}</p>
          </div>
          <div className={styles.heroImage}>
            <img
              src={`/images/${biome.slug}/biome/hero.jpg`}
              alt={biome.name}
              className={styles.heroPhoto}
            />
          </div>
        </div>

        <div className={styles.statsGrid}>
          {biome.stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>

        <section className={styles.bioSection}>
          <h2 className={styles.bioTitle}>Biodiversidade</h2>
          <p className={styles.bioSubtitle}>{biome.biodiversity_subtitle}</p>

          <div className={styles.bioGrid}>
            {sections.map((section) => (
              <Link
                key={section.key}
                to={`/${biome.slug}/${section.route}`}
                className={styles.bioCard}
                style={{ backgroundImage: `url(${coverImages[section.key]})`, backgroundSize: 'cover', backgroundPosition: 'center 30%' }}
              >
                <div className={styles.bioCardOverlay} />
                <div className={styles.bioCardContent}>
                  <h3 className={styles.bioCardTitle}>{section.label}</h3>
                  <p className={styles.bioCardDesc}>{section.data.description}</p>
                  <div className={styles.bioCardStats}>
                    {section.data.stats.map((s, i) => (
                      <span key={i} className="data-inline">● {s}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
