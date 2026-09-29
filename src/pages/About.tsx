import { Link } from 'react-router-dom';
import styles from './About.module.css';

const techStack = [
  { name: 'React 19', desc: 'Biblioteca para interfaces de usuário' },
  { name: 'TypeScript', desc: 'Tipagem estática para mais segurança' },
  { name: 'Vite', desc: 'Build tool rápido para desenvolvimento' },
  { name: 'React Router', desc: 'Navegação SPA entre as telas' },
  { name: 'CSS Modules', desc: 'Estilos com escopo por componente' },
  { name: 'Dados estáticos', desc: 'Informações científicas reais' },
];

export default function About() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className="eyebrow">SOBRE O PROJETO</p>
          <h1 className={styles.heroTitle}>
            Feito com propósito
          </h1>
          <p className={styles.heroDesc}>
            O Canopi é um Atlas Interativo da Biodiversidade Brasileira, é um projeto
            independente que combina tecnologia e ciência para tornar a biodiversidade
            do Brasil acessível, visual e educativa.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <p className="eyebrow">MISSÃO</p>
            <h2 className={styles.cardTitle}>Por que esse projeto existe?</h2>
            <p className={styles.cardText}>
              O Brasil é o país com a maior biodiversidade do planeta, mas a maior parte desse conhecimento é de difícil acesso, 
              pois se encontra em artigos científicos e bases de dados que são inacessíveis ao público geral. O Canopi foi criado para mudar isso, reunindo
              informações sobre fauna, flora e ecossistemas dos 6 biomas brasileiros em
              uma experiência interativa e visualmente atrativa.
            </p>
          </div>

          <div className={styles.card}>
            <p className="eyebrow">AUTORA</p>
            <h2 className={styles.cardTitle}>Quem está por trás?</h2>
            <p className={styles.cardText}>
              Desenvolvido por Sofia, estudante de Análise e Desenvolvimento de Sistemas
              em Brasília. Este projeto foi criado como uma forma de unir tecnologia,
              design e ciência em algo que realmente faça a diferença na forma como as
              pessoas enxergam a biodiversidade brasileira.
            </p>
          </div>
        </div>

        <section className={styles.techSection}>
          <p className="eyebrow">TECNOLOGIAS</p>
          <h2 className={styles.sectionTitle}>Stack do projeto</h2>
          <div className={styles.techGrid}>
            {techStack.map((tech) => (
              <div key={tech.name} className={styles.techCard}>
                <h3 className={styles.techName}>{tech.name}</h3>
                <p className={styles.techDesc}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.ctaSection}>
          <h2 className={styles.sectionTitle}>Pronto para explorar?</h2>
          <p className={styles.ctaText}>
            Navegue pelo mapa interativo e descubra a biodiversidade de cada bioma brasileiro.
          </p>
          <Link to="/atlas" className="btn-primary">
            Explorar o Atlas →
          </Link>
        </div>
      </div>
    </div>
  );
}
