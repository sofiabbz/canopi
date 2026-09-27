/* tipos que espelham as tabelas do Supabase */

export interface BiomeStat {
  value: string;
  label: string;
}

export interface BiomeSection {
  title: string;
  description: string;
  stats: string[];
  categories: string[];
}

export interface Biome {
  name: string;
  slug: string;
  color: string;
  subtitle: string;
  description: string;
  biodiversity_subtitle: string;
  stats: BiomeStat[];
  fauna: BiomeSection;
  flora: BiomeSection;
  ecosystems: BiomeSection;
}

export interface Species {
  id: string;
  biome: string;
  type: 'fauna' | 'flora';
  name: string;
  scientific: string;
  category: string;
  status: string;
  description: string;
  traits: { label: string; value: string }[];
  emoji: string;
  image: string | null;
  hero_image: string | null;
  detail_image: string | null;
  importance: { title: string; description: string };
  fun_facts: { title: string; description: string }[];
}

export interface Ecosystem {
  id: string;
  biome: string;
  name: string;
  category: string;
  description: string;
  emoji: string;
  image: string | null;
  hero_image: string | null;
  detail_image: string | null;
  subtitle: string;
  traits: { label: string; value: string }[];
  about: string;
  importance: { title: string; description: string };
  fun_facts: { title: string; description: string }[];
}
