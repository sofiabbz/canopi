import { useParams, Link } from 'react-router-dom';
import { getBiomeBySlug } from '../data/biomes';
import { getSpeciesById, getSpeciesByBiome } from '../data/species';
import Breadcrumb from '../components/Breadcrumb';
import useScrollReveal from '../hooks/useScrollReveal';
import styles from './SpeciesDetail.module.css';

const STATUS_LEVELS = [
  { label: 'Pouco preocupante', color: '#52B788' },
  { label: 'Quase amea√ßada', color: '#A7C957' },
  { label: 'Vulner√°vel', color: '#D4A373' },
  { label: 'Em perigo', color: '#E07B54' },
  { label: 'Criticamente em perigo', color: '#D94040' },
  { label: 'Extinta na natureza', color: '#8B5CF6' },
  { label: 'Extinta', color: '#6B7280' },
];

function getStatusIndex(status: string): number {
  return STATUS_LEVELS.findIndex(
    (s) => s.label.toLowerCase() === status.toLowerCase()
  );
}

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal(0.12);
  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.revealVisible : ''} ${className || ''}`}
    >
      {children}
    </div>
  );
}

export default function SpeciesDetail() {
  const { biome: biomeSlug, id } = useParams<{ biome: string; id: string }>();
  const biome = getBiomeBySlug(biomeSlug || '');
  const species = getSpeciesById(id || '');

  if (!biome || !species) {
    return (
      <div className="container" style={{ paddingTop: 64 }}>
        <h1 className="title-hero">Esp√©cie n√£o encontrada</h1>
        <Link to={`/${biomeSlug}`} className="btn-outline" style={{ marginTop: 16 }}>
          Voltar ao bioma
        </Link>
      </div>
    );
  }

  const sectionLabel = species.type === 'fauna' ? 'Fauna' : 'Flora';
  const sectionRoute = species.type === 'fauna' ? 'fauna' : 'flora';
  const typeLabel = species.type === 'fauna' ? 'FAUNA' : 'FLORA';

  const statusIdx = getStatusIndex(species.status);
  const statusColor = statusIdx >= 0 ? STATUS_LEVELS[statusIdx].color : '#8a9a82';
  const statusPercent = statusIdx >= 0 ? ((statusIdx + 1) / STATUS_LEVELS.length) * 100 : 0;

  const related = getSpeciesByBiome(biome.slug, species.type)
    .filter((s) => s.id !== species.id);

  return (
    <div className={styles.page} data-biome={biome.slug}>
      <Breadcrumb items={[
        { label: 'Atlas', to: '/atlas' },
        { label: biome.name, to: `/${biome.slug}` },
        { label: sectionLabel, to: `/${biome.slug}/${sectionRoute}` },
        { label: species.name },
      ]} />

      <div className="container">
        {/* hero */}
        <div className={styles.heroCard}>
          <div className={styles.heroText}>
            <p className="eyebrow">{typeLabel} DA {biome.name.toUpperCase()}</p>
            <h1 className={styles.heroName}>{species.name}</h1>
            <p className={styles.heroScientific}>{species.scientific}</p>
            <span className={styles.categoryBadge}>{species.category}</span>
            <p className={styles.heroDesc}>{species.description}</p>
          </div>
          <div className={styles.heroImage}>
            {species.heroImage ? (
              <img src={species.heroImage} alt={species.name} className={styles.heroPhoto} />
            ) : (
              <span className={styles.heroEmoji}>{species.emoji}</span>
            )}
          </div>
        </div>

        {/* status de conserva„á„Éo */}
        <Section className={styles.statusSection}>
          <p className={`eyebrow ${styles.centered}`}>STATUS DE CONSERVA√á√ÉO</p>
          <div className={styles.statusBar}>
            <div className={styles.statusTrack}>
              <div
                className={styles.statusFill}
                style={{
                  width: `${statusPercent}%`,
                  background: `linear-gradient(90deg, #52B788, ${statusColor})`,
                }}
              />
              <div
                className={styles.statusIndicator}
                style={{ left: `${statusPercent}%`, borderColor: statusColor }}
              />
            </div>
            <div className={styles.statusLabels}>
              <span>Pouco preocupante</span>
              <span>Extinta</span>
            </div>
          </div>
          <p className={styles.statusCurrent} style={{ color: statusColor }}>
            {species.status}
          </p>
        </Section>

        {/* informa„á„ïes */}
        <Section className={styles.infoSection}>
          <p className={`eyebrow ${styles.centered}`}>
            INFORMA√á√ïES DA ESP√âCIE
          </p>
          <div className={styles.infoGrid}>
            {species.traits.map((t, i) => (
              <div key={i} className={styles.infoCard}>
                <span className={styles.infoLabel}>{t.label}</span>
                <span className={styles.infoValue}>{t.value}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* sobre */}
        <Section className={styles.aboutSection}>
          <p className={`eyebrow ${styles.centered}`}>SOBRE A ESP√âCIE</p>
          <h2 className={styles.aboutTitle}>Conhe√ßa {species.name.toLowerCase()}</h2>
          <p className={styles.aboutText}>{species.description}</p>
        </Section>

        {/* import„Çncia ecol„ìgica */}
        <Section>
          <div className={styles.importanceCard}>
            <div className={styles.importanceImage}>
              {species.detailImage ? (
                <img src={species.detailImage} alt={species.name} className={styles.importancePhoto} />
              ) : (
                <span className={styles.importanceEmoji}>{species.emoji}</span>
              )}
            </div>
            <div className={styles.importanceText}>
              <p className="eyebrow">IMPORT√ÇNCIA ECOL√ìGICA</p>
              <h2 className={styles.importanceTitle}>{species.importance.title}</h2>
              <p className={styles.importanceDesc}>{species.importance.description}</p>
            </div>
          </div>
        </Section>

        {/* voc„ä sabia? */}
        <Section className={styles.funFactsSection}>
          <p className={`eyebrow ${styles.centered}`}>VOC√ä SABIA?</p>
          <h2 className={styles.funFactsTitle}>Curiosidades sobre a esp√©cie</h2>
          <div className={styles.funFactsGrid}>
            {species.funFacts.map((fact, i) => (
              <div key={i} className={styles.funFactCard}>
                <span className={styles.funFactNumber}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.funFactTitle}>{fact.title}</h3>
                <p className={styles.funFactDesc}>{fact.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* esp„âcies relacionadas */}
        {related.length > 0 && (
          <Section className={styles.relatedSection}>
            <p className={`eyebrow ${styles.centered}`}>CONTINUE EXPLORANDO</p>
            <h2 className={styles.relatedTitle}>
              Outras esp√©cies da {biome.name}
            </h2>
            <div className={styles.relatedScroll}>
              {related.map((sp) => (
                <Link
                  key={sp.id}
                  to={`/${biome.slug}/${sectionRoute}/${sp.id}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedEmoji}>{sp.emoji}</div>
                  <div className={styles.relatedInfo}>
                    <span className={styles.relatedCategory}>{sp.category}</span>
                    <h4 className={styles.relatedName}>{sp.name}</h4>
                    <p className={styles.relatedScientific}>{sp.scientific}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* navega„á„Éo */}
        <div className={styles.backSection}>
          <Link to={`/${biome.slug}/${sectionRoute}`} className="btn-outline">
            ‚Üê Voltar para {sectionLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
