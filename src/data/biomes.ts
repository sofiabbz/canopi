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
  biodiversitySubtitle: string;
  stats: BiomeStat[];
  fauna: BiomeSection;
  flora: BiomeSection;
  ecosystems: BiomeSection;
}

export const biomes: Biome[] = [
  {
    name: "Amazônia",
    slug: "amazonia",
    color: "#52B788",
    subtitle: "A maior floresta tropical do planeta.",
    description: "Um dos ambientes mais ricos em biodiversidade do mundo, a Amazônia abriga uma enorme variedade de espécies e desempenha um papel fundamental no equilíbrio ambiental.",
    biodiversitySubtitle: "Uma floresta repleta de vida.",
    stats: [
      { value: "49,3%", label: "do território brasileiro" },
      { value: "30.000+", label: "espécies de plantas" },
      { value: "20%", label: "da água doce do planeta" },
    ],
    fauna: {
      title: "Conheça os habitantes da floresta",
      description: "A Amazônia abriga uma das maiores diversidades de espécies do planeta. Explore os animais que fazem parte desse ecossistema.",
      stats: ["3.000+ espécies de peixes", "950+ espécies de aves"],
      categories: ["Mamíferos", "Aves", "Répteis", "Anfíbios", "Peixes"],
    },
    flora: {
      title: "Conheça as plantas da floresta",
      description: "A Amazônia reúne uma enorme diversidade de plantas, árvores e espécies aquáticas que sustentam a vida na floresta.",
      stats: ["30.000+ espécies de plantas", "2.500+ espécies de árvores"],
      categories: ["Árvores", "Palmeiras", "Flores", "Aquáticas"],
    },
    ecosystems: {
      title: "Explore os ambientes da floresta",
      description: "Descubra os diferentes ambientes que formam a Amazônia e sustentam uma incrível diversidade de vida.",
      stats: ["4 ambientes principais", "Terra firme · Rios · Várzeas · Igapós"],
      categories: ["Terra firme", "Rios", "Várzeas", "Igapós"],
    },
  },
  {
    name: "Cerrado",
    slug: "cerrado",
    color: "#D4A373",
    subtitle: "A savana mais biodiversa do mundo.",
    description: "Segundo maior bioma do Brasil, o Cerrado abrange o Planalto Central com uma enorme diversidade de espécies adaptadas ao fogo e à seca.",
    biodiversitySubtitle: "Uma savana repleta de vida.",
    stats: [
      { value: "24%", label: "do território brasileiro" },
      { value: "12.000+", label: "espécies de plantas" },
      { value: "~50%", label: "da área original já desmatada" },
    ],
    fauna: {
      title: "Conheça os habitantes do cerrado",
      description: "O Cerrado abriga uma rica fauna adaptada ao clima seco e às queimadas naturais.",
      stats: ["837+ espécies de aves", "120+ espécies de répteis"],
      categories: ["Mamíferos", "Aves", "Répteis", "Anfíbios", "Insetos"],
    },
    flora: {
      title: "Conheça as plantas do cerrado",
      description: "A vegetação do Cerrado é adaptada ao fogo e à seca, com raízes profundas e cascas grossas.",
      stats: ["12.000+ espécies de plantas", "4.400+ endêmicas"],
      categories: ["Árvores", "Arbustos", "Gramíneas", "Flores"],
    },
    ecosystems: {
      title: "Explore os ambientes do cerrado",
      description: "Do campo limpo às matas de galeria, o Cerrado possui uma diversidade de fitofisionomias.",
      stats: ["11 fitofisionomias", "Cerradão · Campo · Veredas · Matas"],
      categories: ["Cerradão", "Campo limpo", "Veredas", "Matas de galeria"],
    },
  },
  {
    name: "Mata Atlântica",
    slug: "mata-atlantica",
    color: "#4ECDC4",
    subtitle: "A floresta mais ameaçada do Brasil.",
    description: "Presente ao longo do litoral, a Mata Atlântica já perdeu mais de 70% de sua cobertura original, mas ainda abriga uma das maiores biodiversidades do planeta.",
    biodiversitySubtitle: "Uma floresta repleta de vida.",
    stats: [
      { value: "13%", label: "do território brasileiro" },
      { value: "20.000+", label: "espécies de plantas" },
      { value: "72%", label: "da população brasileira vive neste bioma" },
    ],
    fauna: {
      title: "Conheça os habitantes da Mata Atlântica",
      description: "Mesmo reduzida, a Mata Atlântica ainda abriga milhares de espécies, muitas delas endêmicas.",
      stats: ["850+ espécies de aves", "370+ espécies de anfíbios"],
      categories: ["Mamíferos", "Aves", "Répteis", "Anfíbios", "Peixes"],
    },
    flora: {
      title: "Conheça as plantas da Mata Atlântica",
      description: "Uma das floras mais diversas do mundo, com altíssimo grau de endemismo.",
      stats: ["20.000+ espécies de plantas", "8.000+ endêmicas"],
      categories: ["Árvores", "Bromélias", "Orquídeas", "Samambaias"],
    },
    ecosystems: {
      title: "Explore os ambientes da Mata Atlântica",
      description: "Da floresta ombrófila aos manguezais, descubra os ambientes desse bioma.",
      stats: ["5 ambientes principais", "Floresta · Restinga · Manguezal · Campos"],
      categories: ["Floresta ombrófila", "Restinga", "Manguezal", "Campos de altitude"],
    },
  },
  {
    name: "Caatinga",
    slug: "caatinga",
    color: "#E07B54",
    subtitle: "A floresta branca do semiárido.",
    description: "Exclusivamente brasileiro, a Caatinga é o principal bioma do Nordeste. Suas espécies são altamente adaptadas à seca e ao calor intenso.",
    biodiversitySubtitle: "Um semiárido repleto de vida.",
    stats: [
      { value: "11%", label: "do território brasileiro" },
      { value: "5.300+", label: "espécies de plantas" },
      { value: "318", label: "espécies endêmicas" },
    ],
    fauna: {
      title: "Conheça os habitantes da Caatinga",
      description: "A fauna da Caatinga é surpreendente, com espécies adaptadas à escassez de água.",
      stats: ["548+ espécies de aves", "178+ espécies de répteis"],
      categories: ["Mamíferos", "Aves", "Répteis", "Anfíbios", "Aracnídeos"],
    },
    flora: {
      title: "Conheça as plantas da Caatinga",
      description: "Plantas xerófilas, cactáceas e espécies que armazenam água dominam a paisagem.",
      stats: ["5.300+ espécies de plantas", "318 endêmicas"],
      categories: ["Cactáceas", "Árvores", "Arbustos", "Bromélias"],
    },
    ecosystems: {
      title: "Explore os ambientes da Caatinga",
      description: "Da caatinga arbórea aos campos rupestres, o semiárido tem mais diversidade do que parece.",
      stats: ["4 ambientes principais", "Caatinga arbórea · Carrasco · Campos · Brejos"],
      categories: ["Caatinga arbórea", "Carrasco", "Campos rupestres", "Brejos de altitude"],
    },
  },
  {
    name: "Pampa",
    slug: "pampa",
    color: "#A7C957",
    subtitle: "Os campos do sul do Brasil.",
    description: "Presente apenas no Rio Grande do Sul, o Pampa é um bioma de campos nativos com uma biodiversidade surpreendente e ameaçada pela expansão agrícola.",
    biodiversitySubtitle: "Campos repletos de vida.",
    stats: [
      { value: "2%", label: "do território brasileiro" },
      { value: "3.000+", label: "espécies de plantas" },
      { value: "54%", label: "da área original já convertida" },
    ],
    fauna: {
      title: "Conheça os habitantes do Pampa",
      description: "Os campos abrigam espécies únicas, desde aves migratórias até mamíferos ameaçados.",
      stats: ["480+ espécies de aves", "100+ espécies de mamíferos"],
      categories: ["Mamíferos", "Aves", "Répteis", "Anfíbios", "Peixes"],
    },
    flora: {
      title: "Conheça as plantas do Pampa",
      description: "Gramíneas nativas, flores campestres e ervas formam um tapete natural único.",
      stats: ["3.000+ espécies de plantas", "450+ espécies de gramíneas"],
      categories: ["Gramíneas", "Flores", "Arbustos", "Leguminosas"],
    },
    ecosystems: {
      title: "Explore os ambientes do Pampa",
      description: "Dos campos limpos às áreas úmidas, o Pampa tem paisagens variadas.",
      stats: ["3 ambientes principais", "Campos · Banhados · Matas ciliares"],
      categories: ["Campos nativos", "Banhados", "Matas ciliares"],
    },
  },
  {
    name: "Pantanal",
    slug: "pantanal",
    color: "#7EB8D0",
    subtitle: "A maior planície alagável do mundo.",
    description: "O Pantanal é um santuário de vida selvagem no coração da América do Sul, com ciclos de cheia e seca que transformam a paisagem ao longo do ano.",
    biodiversitySubtitle: "Águas repletas de vida.",
    stats: [
      { value: "1,8%", label: "do território brasileiro" },
      { value: "2.000+", label: "espécies de plantas" },
      { value: "650+", label: "espécies de aves" },
    ],
    fauna: {
      title: "Conheça os habitantes do Pantanal",
      description: "O Pantanal concentra uma das maiores densidades de fauna das Américas.",
      stats: ["650+ espécies de aves", "260+ espécies de peixes"],
      categories: ["Mamíferos", "Aves", "Répteis", "Anfíbios", "Peixes"],
    },
    flora: {
      title: "Conheça as plantas do Pantanal",
      description: "A vegetação do Pantanal é uma mistura de espécies de biomas vizinhos, adaptadas às cheias.",
      stats: ["2.000+ espécies de plantas", "Vegetação aquática abundante"],
      categories: ["Árvores", "Aquáticas", "Gramíneas", "Palmeiras"],
    },
    ecosystems: {
      title: "Explore os ambientes do Pantanal",
      description: "Campos inundáveis, corixos e baías formam um mosaico de ambientes.",
      stats: ["4 ambientes principais", "Campos · Corixos · Baías · Capões"],
      categories: ["Campos inundáveis", "Corixos", "Baías", "Capões"],
    },
  },
];

export function getBiomeBySlug(slug: string): Biome | undefined {
  return biomes.find((b) => b.slug === slug);
}
