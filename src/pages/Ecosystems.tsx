import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBiomeBySlug } from '../data/biomes';
import { getEcosystemsByBiome } from '../data/ecosystems';
import Breadcrumb from '../components/Breadcrumb';
import styles from './Listing.module.css';

export default function Ecosystems() {
  const { biome: slug } = useParams<{ biome: string }>();
  const biome = getBiomeBySlug(slug || '');
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [search, setSearch] = useState('');

  if (!biome) return null;

  const allEcos = getEcosystemsByBiome(biome.slug);
  const filters = ['Todos', ...biome.ecosystems.categories];
  const filtered = allEcos
    .filter((e) => activeFilter === 'Todos' || e.category === activeFilter)
    .filter((e) => {
      if (!search) return true;
      const q = search.toLowerCase();
      return e.name.toLowerCase().includes(q) || e.description.toLowerCase().includes(q);
    });

  return (
    <div className={styles.page} data-biome={biome.slug}>
      <Breadcrumb items={[
        { label: 'Atlas', to: '/atlas' },
        { label: biome.name, to: `/${biome.slug}` },
        { label: 'Ecossistemas' },
      ]} />

      <div className="container">
        <div className={styles.headerCard}>
          <p className="eyebrow">ECOSSISTEMAS DA {biome.name.toUpperCase()}</p>
          <h1 className={styles.headerTitle}>{biome.ecosystems.title}</h1>
          <p className={styles.headerDesc}>{biome.ecosystems.description}</p>
        </div>

        <div className={styles.controls}>
          <div className={styles.searchBar}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Pesquisar ecossistema..."
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

        <p className={`eyebrow ${styles.gridLabel}`}>AMBIENTES EM DESTAQUE</p>

        <div className={styles.grid}>
          {filtered.map((eco) => (
            <Link key={eco.id} to={`/${biome.slug}/ecossistemas/${eco.id}`} className={styles.ecoCard}>
              <div className={styles.ecoImage}>{eco.emoji}</div>
              <div className={styles.ecoInfo}>
                <h3 className={styles.ecoName}>{eco.name}</h3>
                <p className={styles.ecoDesc}>{eco.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
