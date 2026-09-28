-- ==============================================
-- AMAZÔNIA — Imagens reais (hospedadas no Vercel)
-- Rode no SQL Editor do Supabase
-- ==============================================

-- ========== FAUNA ==========
UPDATE species SET
  image       = '/images/amazonia/fauna/onca-pintada.png',
  hero_image  = '/images/amazonia/fauna/onca-pintada-hero.png',
  detail_image = '/images/amazonia/fauna/onca-pintada-detail.png'
WHERE id = 'onca-pintada';

UPDATE species SET
  image       = '/images/amazonia/fauna/boto-cor-de-rosa.png',
  hero_image  = '/images/amazonia/fauna/boto-cor-de-rosa-hero.jpg',
  detail_image = '/images/amazonia/fauna/boto-cor-de-rosa-detail.jpg'
WHERE id = 'boto-cor-de-rosa';

UPDATE species SET
  image       = '/images/amazonia/fauna/preguica-real.png',
  hero_image  = '/images/amazonia/fauna/preguica-real-hero.jpg',
  detail_image = '/images/amazonia/fauna/preguica-real-detail.jpg'
WHERE id = 'preguica-real';

UPDATE species SET
  image       = '/images/amazonia/fauna/harpia.png',
  hero_image  = '/images/amazonia/fauna/harpia-hero.jpg',
  detail_image = '/images/amazonia/fauna/harpia-detail.jpg'
WHERE id = 'harpia';

-- ========== FLORA ==========
UPDATE species SET
  image       = '/images/amazonia/flora/acai.png',
  hero_image  = '/images/amazonia/flora/acai-hero.jpg',
  detail_image = '/images/amazonia/flora/acai-detail.jpg'
WHERE id = 'acai';

UPDATE species SET
  image       = '/images/amazonia/flora/castanheira.png',
  hero_image  = '/images/amazonia/flora/castanheira-hero.png',
  detail_image = '/images/amazonia/flora/castanheira-detail.png'
WHERE id = 'castanheira';

UPDATE species SET
  image       = '/images/amazonia/flora/seringueira.png',
  hero_image  = '/images/amazonia/flora/seringueira-hero.jpg',
  detail_image = '/images/amazonia/flora/seringueira-detail.jpg'
WHERE id = 'seringueira';

UPDATE species SET
  image       = '/images/amazonia/flora/vitoria-regia.png',
  hero_image  = '/images/amazonia/flora/vitoria-regia-hero.jpg',
  detail_image = '/images/amazonia/flora/vitoria-regia-detail.jpg'
WHERE id = 'vitoria-regia';

-- ========== ECOSSISTEMAS ==========
UPDATE ecosystems SET
  image       = '/images/amazonia/ecossistemas/terra-firme.png',
  hero_image  = '/images/amazonia/ecossistemas/terra-firme-hero.png',
  detail_image = '/images/amazonia/ecossistemas/terra-firme-detail.png'
WHERE id = 'terra-firme';

UPDATE ecosystems SET
  image       = '/images/amazonia/ecossistemas/rios-amazonicos.png',
  hero_image  = '/images/amazonia/ecossistemas/rios-amazonicos-hero.jpg',
  detail_image = '/images/amazonia/ecossistemas/rios-amazonicos-detail.jpg'
WHERE id = 'rios-amazonicos';

UPDATE ecosystems SET
  image       = '/images/amazonia/ecossistemas/varzeas.png',
  hero_image  = '/images/amazonia/ecossistemas/varzeas-hero.jpg',
  detail_image = '/images/amazonia/ecossistemas/varzeas-detail.jpg'
WHERE id = 'varzeas';

UPDATE ecosystems SET
  image       = '/images/amazonia/ecossistemas/igapos.png',
  hero_image  = '/images/amazonia/ecossistemas/igapos-hero.jpg',
  detail_image = '/images/amazonia/ecossistemas/igapos-detail.jpg'
WHERE id = 'igapos';
