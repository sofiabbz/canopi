# Canopi

Atlas interativo da biodiversidade brasileira. O projeto apresenta os 6 biomas do Brasil com suas espécies de fauna, flora e ecossistemas, trazendo dados reais de conservação, status IUCN e curiosidades sobre cada espécie.

**[canopi-atlas.vercel.app](https://canopi-atlas.vercel.app)**

<!-- Descomente e cole os links das imagens/GIFs aqui:
![Tela inicial](link-da-imagem)
![Mapa interativo](link-da-imagem)
![Detalhe de espécie](link-da-imagem)
-->

## Sobre

Projeto desenvolvido como estudo prático de desenvolvimento web fullstack. A ideia surgiu da vontade de tornar a biodiversidade brasileira mais acessível e visual, para assim transformar dados científicos em algo que qualquer pessoa consiga explorar.

O site funciona como uma SPA onde o usuário navega pelos biomas através de um mapa SVG interativo, filtra espécies por categoria, pesquisa por nome popular ou científico, e visualiza informações detalhadas de cada espécie com status de conservação.

## Funcionalidades

- Mapa SVG interativo do Brasil com tooltip por bioma
- Página dedicada para cada bioma com hero, estatísticas e cards de cobertura
- Listagem de fauna e flora com filtros por categoria e barra de pesquisa
- Página de detalhe com barra visual de status IUCN (7 níveis)
- Curiosidades e importância ecológica de cada espécie
- Espécies relacionadas com navegação lateral
- Animações de entrada com Intersection Observer
- Temas de cor por bioma usando `data-biome` no CSS

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React 19, TypeScript 6, React Router 7 |
| Build | Vite 8 |
| Backend | Supabase (PostgreSQL + API REST) |
| Deploy | Vercel (auto-deploy via GitHub) |

## Estrutura do banco

O backend usa 3 tabelas no Supabase com RLS habilitado (leitura pública):

- **biomes** — 6 registros, slug como PK, dados de fauna/flora/ecossistemas em JSONB
- **species** — fauna e flora de todos os biomas, com FK para `biomes.slug`
- **ecosystems** — ecossistemas de cada bioma, mesma estrutura

As imagens são servidas como arquivos estáticos em `public/images/`, organizadas por bioma e tipo.

## Rodando localmente

```bash
git clone https://github.com/sofiabbz/canopi.git
cd canopi
npm install
npm run dev
```

O projeto já aponta para o Supabase em produção, então os dados carregam normalmente no ambiente local.

## Autora

Desenvolvido por **Sofia Bezerra** — estudante de Análise e Desenvolvimento de Sistemas em Brasília.
