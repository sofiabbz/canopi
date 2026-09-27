-- Canopi — Schema do banco de dados
-- Execute este arquivo no SQL Editor do Supabase

-- tabela de biomas
create table biomes (
  slug text primary key,
  name text not null,
  color text not null,
  subtitle text not null,
  description text not null,
  biodiversity_subtitle text not null,
  stats jsonb not null default '[]',
  fauna jsonb not null default '{}',
  flora jsonb not null default '{}',
  ecosystems jsonb not null default '{}'
);

-- tabela de espécies (fauna e flora)
create table species (
  id text primary key,
  biome text not null references biomes(slug),
  type text not null check (type in ('fauna', 'flora')),
  name text not null,
  scientific text not null,
  category text not null,
  status text not null,
  description text not null,
  traits jsonb not null default '[]',
  emoji text not null,
  image text,
  hero_image text,
  detail_image text,
  importance jsonb not null default '{}',
  fun_facts jsonb not null default '[]'
);

-- tabela de ecossistemas
create table ecosystems (
  id text primary key,
  biome text not null references biomes(slug),
  name text not null,
  category text not null,
  description text not null,
  emoji text not null,
  image text,
  hero_image text,
  detail_image text,
  subtitle text not null,
  traits jsonb not null default '[]',
  about text not null,
  importance jsonb not null default '{}',
  fun_facts jsonb not null default '[]'
);

-- índices para buscas frequentes
create index idx_species_biome on species(biome);
create index idx_species_biome_type on species(biome, type);
create index idx_ecosystems_biome on ecosystems(biome);

-- habilitar RLS (Row Level Security)
alter table biomes enable row level security;
alter table species enable row level security;
alter table ecosystems enable row level security;

-- políticas de leitura pública (qualquer pessoa pode ler)
create policy "Leitura pública de biomas"
  on biomes for select
  to anon, authenticated
  using (true);

create policy "Leitura pública de espécies"
  on species for select
  to anon, authenticated
  using (true);

create policy "Leitura pública de ecossistemas"
  on ecosystems for select
  to anon, authenticated
  using (true);
