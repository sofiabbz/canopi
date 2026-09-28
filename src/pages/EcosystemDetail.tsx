import { useParams, Link } from 'react-router-dom';
import { useBiome } from '../hooks/useBiomes';
import { useEcosystemById, useEcosystemsByBiome } from '../hooks/useEcosystems';
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
  const { biome, loading: loadingBiome } = useBiome(biomeSlug);
  const { ecosystem, loading: loadingEco } = useEcosystemById(id);
  const { ecosystems: relatedAll, loading: loadingRelated } = useEcosystemsByBiome(biomeSlug);

  if (loadingBiome || loadingEco || loadingRelated) return null;

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

  const related = relatedAll.filter((e) => e.id !== ecosystem.id);

  return (
    <div className={styles.page} data-biome={biome.slug}>
      <Breadcrumb items={[
        { label: 'Atlas', to: '/atlas' },
        { label: biome.name, to: `/${biome.slug}` },
        { label: 'Ecossistemas', to: `/${biome.slug}/ecossistemas` },
        { label: ecosystem.name },
      ]} />

      <div className="container">
        {/* hero */}
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <p className="eyebrow">ECOSSISTEMA {biome.name === 'Mata Atlântica' ? 'DA' : 'DO'} {biome.name.toUpperCase()}</p>
            <h1 className={styles.heroName}>{ecosystem.name}</h1>
            <p className={styles.heroSubtitle}>{ecosystem.subtitle}</p>
            <span className={styles.categoryBadge}>{ecosystem.category}</span>
            <p className={styles.heroDesc}>{ecosystem.description}</p>
          </div>
          <div className={styles.heroImage}>
            {ecosystem.hero_image ? (
              <img src={ecosystem.hero_image} alt={ecosystem.name} className={styles.heroPhoto} />
            ) : (
              ecosystem.emoji
            )}
          </div>
        </div>

        {/* info */}
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

        {/* sobre */}
        <Section className={styles.aboutSection}>
          <p className="eyebrow">SOBRE O ECOSSISTEMA</p>
          <h2 className={styles.aboutTitle}>Conheça {ecosystem.name.toLowerCase().match(/^[aeiou]/) ? 'o' : 'a'} {ecosystem.name.toLowerCase()}</h2>
          <p className={styles.aboutText}>{ecosystem.about}</p>
        </Section>

        {/* importancia */}
        <Section>
          <div className={styles.importanceCard}>
            <div className={styles.importanceImage}>
              {ecosystem.detail_image ? (
                <img src={ecosystem.detail_image} alt={ecosystem.name} className={styles.importancePhoto} />
              ) : (
                ecosystem.emoji
              )}
            </div>
            <div className={styles.importanceText}>
              <p className="eyebrow">IMPORTÂNCIA ECOLÓGICA</p>
              <h2 className={styles.importanceTitle}>{ecosystem.importance.title}</h2>
              <p className={styles.importanceDesc}>{ecosystem.importance.description}</p>
            </div>
          </div>
        </Section>

        {/* curiosidades */}
        <Section className={styles.factsSection}>
          <p className="eyebrow">VOCÊ SABIA?</p>
          <h2 className={styles.factsTitle}>Curiosidades sobre o ecossistema</h2>
          <div className={styles.factsGrid}>
            {ecosystem.fun_facts.map((fact, i) => (
              <div key={i} className={styles.factCard}>
                <span className={styles.factNumber}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.factTitle}>{fact.title}</h3>
                <p className={styles.factDesc}>{fact.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* relacionados */}
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
                  <div className={styles.relatedImageArea}>
                    {eco.image ? (
                      <img src={eco.image} alt={eco.name} className={styles.relatedPhoto} />
                    ) : (
                      <span className={styles.relatedEmoji}>{eco.emoji}</span>
                    )}
                  </div>
                  <div className={styles.relatedInfo}>
                    <span className={styles.relatedCategory}>{eco.category}</span>
                    <h4 className={styles.relatedName}>{eco.name}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* nav */}
        <div className={styles.backSection}>
          <Link to={`/${biome.slug}/ecossistemas`} className="btn-outline">
            ← Voltar para Ecossistemas
          </Link>
        </div>
      </div>
    </div>
  );
}
