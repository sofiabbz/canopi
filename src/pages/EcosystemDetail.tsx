import { useParams, Link } from 'react-router-dom';
import { getBiomeBySlug } from '../data/biomes';
import { getEcosystemById, getEcosystemsByBiome } from '../data/ecosystems';
import Breadcrumb from '../components/Breadcrumb';
import useScrollReveal from '../hooks/useScrollReveal';
import styles from './EcosystemDetail.module.css';

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

export default function EcosystemDetail() {
  const { biome: biomeSlug, id } = useParams<{ biome: string; id: string }>();
  const biome = getBiomeBySlug(biomeSlug || '');
  const ecosystem = getEcosystemById(id || '');

  if (!biome || !ecosystem) {
    return (
      <div className="container" style={{ paddingTop: 64 }}>
        <h1 className="title-hero">Ecossistema não encontrado</h1>
        <Link to={`/${biomeSlug}/ecossistemas`} className="btn-outline" style={{ marginTop: 16 }}>
          Voltar aos ecossistemas
        </Link>
      </div>
    );
  }

  const related = getEcosystemsByBiome(biome.slug)
    .filter((e) => e.id !== ecosystem.id);

  return (
    <div className={styles.page} data-biome={biome.slug}>
      <Breadcrumb items={[
        { label: 'Atlas', to: '/atlas' },
        { label: biome.name, to: `/${biome.slug}` },
        { label: 'Ecossistemas', to: `/${biome.slug}/ecossistemas` },
        { label: ecosystem.name },
      ]} />

      <div className="container">
        {/* ===== HERO ===== */}
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <p className="eyebrow">ECOSSISTEMA {biome.name === 'Mata Atlântica' ? 'DA' : 'DO'} {biome.name.toUpperCase()}</p>
            <h1 className={styles.heroName}>{ecosystem.name}</h1>
            <p className={styles.heroSubtitle}>{ecosystem.subtitle}</p>
            <span className={styles.categoryBadge}>{ecosystem.category}</span>
            <p className={styles.heroDesc}>{ecosystem.description}</p>
          </div>
          <div className={styles.heroImage}>{ecosystem.emoji}</div>
        </div>

        {/* ===== INFORMAÇÕES ===== */}
        <Section className={styles.infoSection}>
          <p className="eyebrow" style={{ textAlign: 'center' }}>INFORMAÇÕES DO ECOSSISTEMA</p>
          <div className={styles.infoGrid}>
            {ecosystem.traits.map((trait, i) => (
              <div key={i} className={styles.infoCard}>
                <span className={styles.infoLabel}>{trait.label}</span>
                <span className={styles.infoValue}>{trait.value}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ===== SOBRE ===== */}
        <Section className={styles.aboutSection}>
          <p className="eyebrow">SOBRE O ECOSSISTEMA</p>
          <h2 className={styles.aboutTitle}>Conheça {ecosystem.name.toLowerCase().match(/^[aeiou]/) ? 'o' : 'a'} {ecosystem.name.toLowerCase()}</h2>
          <p className={styles.aboutText}>{ecosystem.about}</p>
        </Section>

        {/* ===== IMPORTÂNCIA ECOLÓGICA ===== */}
        <Section>
          <div className={styles.importanceCard}>
            <div className={styles.importanceImage}>{ecosystem.emoji}</div>
            <div className={styles.importanceText}>
              <p className="eyebrow">IMPORTÂNCIA ECOLÓGICA</p>
              <h2 className={styles.importanceTitle}>{ecosystem.importance.title}</h2>
              <p className={styles.importanceDesc}>{ecosystem.importance.description}</p>
            </div>
          </div>
        </Section>

        {/* ===== VOCÊ SABIA? ===== */}
        <Section className={styles.factsSection}>
          <p className="eyebrow">VOCÊ SABIA?</p>
          <h2 className={styles.factsTitle}>Curiosidades sobre o ecossistema</h2>
          <div className={styles.factsGrid}>
            {ecosystem.funFacts.map((fact, i) => (
              <div key={i} className={styles.factCard}>
                <span className={styles.factNumber}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.factTitle}>{fact.title}</h3>
                <p className={styles.factDesc}>{fact.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ===== ECOSSISTEMAS RELACIONADOS ===== */}
        {related.length > 0 && (
          <Section className={styles.relatedSection}>
            <p className="eyebrow" style={{ textAlign: 'center' }}>CONTINUE EXPLORANDO</p>
            <h2 className={styles.relatedTitle}>
              Outros ecossistemas da {biome.name}
            </h2>
            <div className={styles.relatedScroll}>
              {related.map((eco) => (
                <Link
                  key={eco.id}
                  to={`/${biome.slug}/ecossistemas/${eco.id}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedEmoji}>{eco.emoji}</div>
                  <div className={styles.relatedInfo}>
                    <span className={styles.relatedCategory}>{eco.category}</span>
                    <h4 className={styles.relatedName}>{eco.name}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* ===== NAVEGAÇÃO ===== */}
        <div className={styles.backSection}>
          <Link to={`/${biome.slug}/ecossistemas`} className="btn-outline">
            ← Voltar para Ecossistemas
          </Link>
        </div>
      </div>
    </div>
  );
}
