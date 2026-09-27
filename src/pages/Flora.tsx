import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBiome } from '../hooks/useBiomes';
import { useSpeciesByBiome } from '../hooks/useSpecies';
import Breadcrumb from '../components/Breadcrumb';
import RevealCard from '../components/RevealCard';
import styles from './Listing.module.css';

export default function Flora() {
  const { biome: slug } = useParams<{ biome: string }>();
  const { biome, loading: loadingBiome } = useBiome(slug);
  const { species: allSpecies, loading: loadingSpecies } = useSpeciesByBiome(slug, 'flora');
  const [activeFilter, setActiveFilter] = useState('Todas');
  const [search, setSearch] = useState('');

  if (loadingBiome || loadingSpecies) return null;
  if (!biome) return null;
  const filters = ['Todas', ...biome.flora.categories];
  const filtered = allSpecies
    .filter((s) => activeFilter === 'Todas' || s.category === activeFilter)
    .filter((s) => {
      if (!search) return true;
      const q = search.toLowerCase();
      return s.name.toLowerCase().includes(q) || s.scientific.toLowerCase().includes(q);
    });

  return (
    <div className={styles.page} data-biome={biome.slug}>
      <Breadcrumb items={[
        { label: 'Atlas', to: '/atlas' },
        { label: biome.name, to: `/${biome.slug}` },
        { label: 'Flora' },
      ]} />

      <div className="container">
        <div className={styles.headerCard}>
          <p className="eyebrow">FLORA DA {biome.name.toUpperCase()}</p>
          <h1 className={styles.headerTitle}>{biome.flora.title}</h1>
          <p className={styles.headerDesc}>{biome.flora.description}</p>
        </div>

        <div className={styles.controls}>
          <div className={styles.searchBar}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Pesquisar espécie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.pills}>
            {filters.map((f) => (
              <button
                key={f}
                className={`pill${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <p className={`eyebrow ${styles.gridLabel}`}>ESPÉCIES EM DESTAQUE</p>

        <div className={styles.grid}>
          {filtered.map((sp) => (
            <RevealCard
              key={sp.id}
              to={`/${biome.slug}/flora/${sp.id}`}
              emoji={sp.emoji}
              image={sp.image}
              category={sp.category}
              name={sp.name}
              scientific={sp.scientific}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
