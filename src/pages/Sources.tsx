import { Link } from 'react-router-dom';
import styles from './Sources.module.css';

const sources = [
  {
    category: 'Conservacao e Especies',
    items: [
      {
        name: 'IUCN Red List',
        url: 'https://www.iucnredlist.org',
        description: 'Lista vermelha de especies ameacadas — classificacao oficial de status de conservacao mundial.',
      },
      {
        name: 'ICMBio',
        url: 'https://www.icmbio.gov.br',
        description: 'Instituto Chico Mendes de Conservacao da Biodiversidade — gestao de unidades de conservacao federais.',
      },
      {
        name: 'CNCFlora',
        url: 'https://cncflora.jbrj.gov.br',
        description: 'Centro Nacional de Conservacao da Flora — avaliacao de risco de extincao da flora brasileira.',
      },
    ],
  },
  {
    category: 'Flora',
    items: [
      {
        name: 'Flora e Funga do Brasil',
        url: 'https://floradobrasil.jbrj.gov.br',
        description: 'Base de dados oficial da flora brasileira mantida pelo Jardim Botanico do Rio de Janeiro.',
      },
      {
        name: 'Jardim Botanico do Rio de Janeiro',
        url: 'https://www.gov.br/jbrj',
        description: 'Instituicao de pesquisa vinculada ao MMA, referencia em taxonomia vegetal no Brasil.',
      },
    ],
  },
  {
    category: 'Biomas e Territorio',
    items: [
      {
        name: 'IBGE — Biomas',
        url: 'https://www.ibge.gov.br/geociencias/informacoes-ambientais/vegetacao.html',
        description: 'Mapeamento oficial dos biomas brasileiros com dados de cobertura e uso do solo.',
      },
      {
        name: 'MapBiomas',
        url: 'https://mapbiomas.org',
        description: 'Plataforma colaborativa de mapeamento anual da cobertura e uso da terra no Brasil.',
      },
    ],
  },
  {
    category: 'Fauna',
    items: [
      {
        name: 'Wiki Aves',
        url: 'https://www.wikiaves.com.br',
        description: 'Enciclopedia colaborativa das aves do Brasil com fotos, sons e dados de distribuicao.',
      },
      {
        name: 'Sistema de Informacao sobre a Biodiversidade Brasileira (SiBBr)',
        url: 'https://sibbr.gov.br',
        description: 'Plataforma nacional que integra dados de biodiversidade de diversas fontes.',
      },
    ],
  },
];

export default function Sources() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className="eyebrow">REFERENCIAS</p>
          <h1 className={styles.heroTitle}>Fontes</h1>
          <p className={styles.heroDesc}>
            Os dados apresentados no Canopi foram compilados a partir de fontes
            cientificas e institucionais reconhecidas. Abaixo estao as principais
            referencias utilizadas.
          </p>
        </div>

        {sources.map((group) => (
          <section key={group.category} className={styles.section}>
            <h2 className={styles.sectionTitle}>{group.category}</h2>
            <div className={styles.grid}>
              {group.items.map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <h3 className={styles.cardName}>{source.name}</h3>
                  <p className={styles.cardDesc}>{source.description}</p>
                  <span className={styles.cardLink}>{source.url.replace('https://', '').replace('www.', '')} ↗</span>
                </a>
              ))}
            </div>
          </section>
        ))}

        <div className={styles.back}>
          <Link to="/home" className="btn-outline">← Voltar ao inicio</Link>
        </div>
      </div>
    </div>
  );
}
