Relatório Completo do Frontend — Canopi

  1. Visão Geral do Projeto

  Canopi é um Atlas Interativo da Biodiversidade Brasileira. O aplicativo permite ao usuário navegar por um mapa SVG do Brasil, selecionar um dos 6 biomas (Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e
  Pantanal) e explorar sua fauna, flora e ecossistemas. Todo o frontend foi construído como uma SPA (Single Page Application) com dados estáticos, preparado para futura integração com API/backend.

  ---

  2. Stack Tecnológica

  ┌──────────────────┬──────────────────┬────────────────────────────────────────────────────────────────┐
  │    Tecnologia    │      Versão      │                           Finalidade                           │
  ├──────────────────┼──────────────────┼────────────────────────────────────────────────────────────────┤
  │ React            │ 19.2.8           │ Biblioteca principal de UI, com componentes funcionais e hooks │
  ├──────────────────┼──────────────────┼────────────────────────────────────────────────────────────────┤
  │ TypeScript       │ 6.0.2            │ Tipagem estática para segurança de tipos                       │
  ├──────────────────┼──────────────────┼────────────────────────────────────────────────────────────────┤
  │ Vite             │ 8.3.0            │ Build tool e dev server com HMR (Hot Module Replacement)       │
  ├──────────────────┼──────────────────┼────────────────────────────────────────────────────────────────┤
  │ React Router DOM │ 7.18.4           │ Roteamento client-side (SPA)                                   │
  ├──────────────────┼──────────────────┼────────────────────────────────────────────────────────────────┤
  │ CSS Modules      │ (nativo do Vite) │ Estilos com escopo local por componente                        │
  ├──────────────────┼──────────────────┼────────────────────────────────────────────────────────────────┤
  │ Google Fonts     │ —                │ Fraunces (títulos) + Inter (corpo/UI)                          │
  ├──────────────────┼──────────────────┼────────────────────────────────────────────────────────────────┤
  │ OxLint           │ 1.81.0           │ Linter rápido para validação de código                         │
  └──────────────────┴──────────────────┴────────────────────────────────────────────────────────────────┘

  Por que essas escolhas?
  - Vite ao invés de Webpack/CRA: build extremamente rápido (~1s) e HMR instantâneo durante desenvolvimento.
  - CSS Modules ao invés de styled-components/Tailwind: escopo local sem runtime, zero dependências extras, e controle total do design system via CSS custom properties.
  - React Router v7: roteamento declarativo com suporte a parâmetros dinâmicos (:biome, :id).

  ---

  3. Arquitetura de Arquivos

  src/
  ├── main.tsx                    # Ponto de entrada — monta BrowserRouter + App
  ├── App.tsx                     # Layout principal + definição de rotas
  ├── styles/
  │   └── global.css              # Design system completo (variáveis, reset, classes utilitárias)
  ├── components/
  │   ├── Navbar.tsx/.module.css   # Barra de navegação com logo e links
  │   ├── Footer.tsx/.module.css   # Rodapé com créditos e links externos
  │   ├── Breadcrumb.tsx/.module.css # Trilha de navegação hierárquica
  │   └── ScrollToTop.tsx          # Componente utilitário de scroll
  ├── pages/
  │   ├── Landing.tsx/.module.css  # Página inicial (6 seções)
  │   ├── Atlas.tsx/.module.css    # Mapa interativo SVG
  │   ├── Biome.tsx/.module.css    # Visão geral do bioma selecionado
  │   ├── Fauna.tsx                # Listagem de fauna do bioma
  │   ├── Flora.tsx                # Listagem de flora do bioma
  │   ├── Ecosystems.tsx           # Listagem de ecossistemas do bioma
  │   ├── SpeciesDetail.tsx/.module.css # Página de detalhe de espécie
  │   ├── About.tsx/.module.css    # Página Sobre
  │   └── Listing.module.css       # CSS compartilhado entre Fauna/Flora/Ecosystems
  ├── data/
  │   ├── biomes.ts               # Dados dos 6 biomas (cores, textos, categorias)
  │   ├── species.ts              # 48 espécies (fauna + flora) com funções de busca
  │   └── ecosystems.ts           # 23 ecossistemas com funções de busca
  └── assets/images/
      ├── brazil-map.svg          # Mapa SVG do Brasil (6 regiões)
      └── logo-canopi.svg         # Logo customizado

  ---

  4. Sistema de Rotas

  Definido em App.tsx com React Router v7:

  ┌──────────────────────┬───────────────┬────────────────────────────┐
  │         Rota         │  Componente   │         Descrição          │
  ├──────────────────────┼───────────────┼────────────────────────────┤
  │ /                    │ Landing       │ Página inicial             │
  ├──────────────────────┼───────────────┼────────────────────────────┤
  │ /atlas               │ Atlas         │ Mapa interativo            │
  ├──────────────────────┼───────────────┼────────────────────────────┤
  │ /sobre               │ About         │ Sobre o projeto            │
  ├──────────────────────┼───────────────┼────────────────────────────┤
  │ /:biome              │ Biome         │ Visão geral de um bioma    │
  ├──────────────────────┼───────────────┼────────────────────────────┤
  │ /:biome/fauna        │ Fauna         │ Lista de fauna             │
  ├──────────────────────┼───────────────┼────────────────────────────┤
  │ /:biome/fauna/:id    │ SpeciesDetail │ Detalhe de espécie (fauna) │
  ├──────────────────────┼───────────────┼────────────────────────────┤
  │ /:biome/flora        │ Flora         │ Lista de flora             │
  ├──────────────────────┼───────────────┼────────────────────────────┤
  │ /:biome/flora/:id    │ SpeciesDetail │ Detalhe de espécie (flora) │
  ├──────────────────────┼───────────────┼────────────────────────────┤
  │ /:biome/ecossistemas │ Ecosystems    │ Lista de ecossistemas      │
  └──────────────────────┴───────────────┴────────────────────────────┘

  Parâmetros dinâmicos: :biome é o slug do bioma (ex: amazonia, cerrado), :id é o identificador da espécie. O React Router extrai esses valores via useParams().

  Regra de navegação: Os biomas são acessíveis exclusivamente pelo mapa do Atlas. Os cards de biomas na Landing são demonstrativos (não são links).

  ---

  5. Design System (global.css)

  5.1 CSS Custom Properties (Variáveis)

  O design system é baseado em CSS custom properties definidas em :root:

  - Cores base (tema escuro com tons verdes): --bg-deep: #0f1a0f, --bg-main: #152415, --bg-card: #1c2e1c
  - Tipografia: --font-title: 'Fraunces' (serifada, para títulos), --font-body: 'Inter' (sans-serif, para corpo)
  - Espaçamentos: --radius: 12px, --padding-card: 24px, --gap-sections: 64px

  5.2 Tematização por Bioma

  Cada bioma possui uma cor de destaque aplicada via atributo data-biome no HTML:

  [data-biome="amazonia"]     { --accent: #52B788; }  /* Verde */
  [data-biome="cerrado"]      { --accent: #D4A373; }  /* Dourado */
  [data-biome="mata-atlantica"]{ --accent: #4ECDC4; } /* Turquesa */
  [data-biome="caatinga"]     { --accent: #E07B54; }  /* Laranja */
  [data-biome="pampa"]        { --accent: #A7C957; }  /* Verde-limão */
  [data-biome="pantanal"]     { --accent: #7EB8D0; }  /* Azul */

  Como funciona: Cada página de bioma renderiza <div data-biome={biome.slug}>, e todos os componentes filhos herdam automaticamente --accent com a cor correta. Pills, botões, eyebrows, badges — tudo se adapta
  ao bioma ativo sem lógica extra.

  5.3 Classes Utilitárias

  - .eyebrow — rótulo pequeno em maiúsculas com cor de destaque
  - .title-hero, .title-section, .title-card — hierarquia tipográfica
  - .text-body, .text-muted, .text-dim, .text-scientific — variações de corpo
  - .card — card com background, borda, border-radius e hover
  - .pill / .pill.active — botões de filtro arredondados
  - .btn-primary, .btn-outline — botões de ação
  - .container — container centralizado com max-width 1280px

  ---

  6. Componentes Compartilhados

  6.1 ScrollToTop

  export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
  }

  O que faz: Escuta mudanças na rota via useLocation() e rola a página para o topo. Sem isso, ao navegar entre páginas a posição de scroll seria mantida (comportamento padrão do SPA).

  Método useEffect: Executa o efeito colateral (window.scrollTo) toda vez que pathname muda. O array de dependências [pathname] garante que o efeito só roda quando a rota muda.

  6.2 Navbar

  Layout em grid 3 colunas (1fr auto 1fr): links à esquerda, logo centralizado, botão CTA à direita. Usa logo SVG customizado.

  6.3 Breadcrumb

  Recebe um array de items com label e to (opcional). Renderiza uma trilha tipo "Atlas > Amazônia > Fauna". Links são gerados com <Link> do React Router.

  6.4 Footer

  Créditos do projeto com links para GitHub, LinkedIn e fontes de dados.

  ---

  7. Páginas — Detalhamento

  7.1 Landing (Página Inicial)

  6 seções: Hero, Estatísticas, Biomas (cards demonstrativos), Mapa Interativo (SVG real do Brasil), Funcionalidades e Sobre.

  O mapa na seção "Mapa Interativo" usa o SVG inline com os 6 paths dos biomas, exibido como preview estático (sem interação — para interagir, o usuário deve ir ao Atlas).

  7.2 Atlas (Mapa Interativo)

  O coração da aplicação. Usa SVG inline com:
  - BIOME_MAP: mapeamento de slug → cor SVG de preenchimento
  - BIOME_PATHS: mapeamento de slug → path data (coordenadas SVG)

  Interação:
  - onMouseEnter → destaca o bioma (classe highlighted), escurece os outros (dimmed)
  - onMouseLeave → reseta para estado neutro
  - onClick → navega para a página do bioma via useNavigate()
  - Pills de filtro permitem pré-selecionar um bioma

  Correção de layout: O wrapper de informação do bioma (biomeInfoWrapper) tem altura fixa de 48px para evitar "saltos" de layout quando o texto aparece/desaparece ao passar o mouse.

  7.3 Biome (Visão Geral)

  Hero com 2 colunas (texto + placeholder de imagem), 3 cards de estatísticas e 3 cards grandes com Link para Fauna/Flora/Ecossistemas com overlay gradient.

  7.4 Fauna / Flora

  Estrutura idêntica, diferindo apenas no tipo de dados ('fauna' ou 'flora'). Ambas usam Listing.module.css compartilhado.

  Busca client-side:
  const filtered = allSpecies
    .filter((s) => activeFilter === 'Todas' || s.category === activeFilter)
    .filter((s) => {
      const q = search.toLowerCase();
      return s.name.toLowerCase().includes(q) || s.scientific.toLowerCase().includes(q);
    });

  Método filter(): Encadeamento de dois .filter(). O primeiro filtra por categoria (pill ativa). O segundo filtra por texto de busca, comparando tanto o nome comum quanto o nome científico em lowercase para
  busca case-insensitive.

  Método toLowerCase().includes(): Converte ambas as strings para minúsculas antes de verificar se a string de busca está contida no nome, garantindo busca sem distinção de maiúsculas/minúsculas.

  7.5 Ecosystems **(CORRIGIR!!!!!!!!!!!!!!!!!!)**

  Mesma estrutura de Fauna/Flora, mas os cards são <div> (não <Link>) pois não há página de detalhe para ecossistemas. A busca filtra por nome e descrição.

  7.6 SpeciesDetail

  Página de detalhe com layout 2 colunas (emoji como placeholder de imagem + informações). Mostra: nome, nome científico, status de conservação (badge colorido), descrição e grid de traits (3 colunas).

  Método getSpeciesById(): Busca uma espécie pelo id no array estático de dados.

  7.7 About

  Página institucional com hero, 2 cards (Missão + Autora), grid de tecnologias (6 itens) e CTA para o Atlas.

  ---

  8. Camada de Dados

  8.1 biomes.ts

  Define todos os 6 biomas com: slug, nome, cor, subtítulo, descrição, estatísticas, e metadados para fauna/flora/ecossistemas (título, descrição, categorias).

  8.2 species.ts

  48 espécies (4 fauna + 4 flora × 6 biomas). Interface:

  interface Species {
    id: string;        // Identificador único
    biome: string;     // Slug do bioma
    type: 'fauna' | 'flora';
    name: string;      // Nome popular
    scientific: string; // Nome científico
    category: string;  // Categoria (Mamíferos, Árvores, etc.)
    status: string;    // Status de conservação
    description: string;
    traits: { label: string; value: string }[];
    emoji: string;     // Placeholder visual
  }

  Funções exportadas:
  - getSpeciesByBiome(biome, type) — filtra espécies por bioma e tipo
  - getSpeciesById(id) — busca espécie por ID

  8.3 ecosystems.ts

  23 ecossistemas distribuídos nos 6 biomas. Função getEcosystemsByBiome(biome) filtra por bioma.

  ---

  9. Estilização

  - CSS Modules (.module.css): Cada componente/página tem seu módulo CSS. O Vite gera nomes de classe únicos em build (ex: _atlas_mapCard_a3x2f), evitando conflitos.
  - Listing.module.css: CSS compartilhado entre Fauna, Flora e Ecosystems, evitando duplicação de estilos para header, search bar, pills e grid.
  - Responsividade: Media queries em 768px ajustam paddings e gaps. O grid de cards usa repeat(auto-fill, minmax(240px, 1fr)) para adaptação automática.

  ---

  10. Métodos e Hooks do React Utilizados

  ┌─────────────┬────────────────────────────────────────────────┬────────────────────────────────────────────────────────────┐
  │ Hook/Método │                  Onde é usado                  │                         Finalidade                         │
  ├─────────────┼────────────────────────────────────────────────┼────────────────────────────────────────────────────────────┤
  │ useState    │ Atlas, Fauna, Flora, Ecosystems                │ Gerencia estado local (bioma ativo, filtro, busca)         │
  ├─────────────┼────────────────────────────────────────────────┼────────────────────────────────────────────────────────────┤
  │ useEffect   │ ScrollToTop                                    │ Efeito colateral no ciclo de vida (scroll no mount/update) │
  ├─────────────┼────────────────────────────────────────────────┼────────────────────────────────────────────────────────────┤
  │ useParams   │ Biome, Fauna, Flora, Ecosystems, SpeciesDetail │ Extrai parâmetros da URL (:biome, :id)                     │
  ├─────────────┼────────────────────────────────────────────────┼────────────────────────────────────────────────────────────┤
  │ useNavigate │ Atlas                                          │ Navegação programática ao clicar no mapa                   │
  ├─────────────┼────────────────────────────────────────────────┼────────────────────────────────────────────────────────────┤
  │ useLocation │ ScrollToTop                                    │ Acessa o pathname atual da rota                            │
  └─────────────┴────────────────────────────────────────────────┴────────────────────────────────────────────────────────────┘

  ---

  11. Build de Produção

  ✓ 49 módulos transformados
  dist/index.html           0.50 kB
  dist/assets/index.css    20.44 kB (gzip: 4.11 kB)
  dist/assets/index.js    390.05 kB (gzip: 132.11 kB)
  Built in ~1s

  O build passa por: verificação de tipos TypeScript (tsc -b) → bundling com Vite (tree-shaking, minificação, code-splitting).

  ---

  12. Preparação para Próximas Fases

  O frontend está preparado para integração futura com:
  - API/Backend: As funções de dados (getSpeciesByBiome, getSpeciesById, etc.) podem ser substituídas por chamadas fetch/axios sem alterar os componentes.
  - Banco de imagens: Os emojis servem como placeholders — basta substituir por <img> com URLs reais.
  - Autenticação/CMS: A estrutura de rotas e componentes é extensível.

  ---

  Frontend finalizado e documentado. O projeto compila sem erros, todas as 9 rotas estão funcionais, e o mapa SVG está integrado tanto no Atlas (interativo) quanto na Landing (preview estático).