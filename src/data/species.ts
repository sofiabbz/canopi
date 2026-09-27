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
  importance: { title: string; description: string };
  funFacts: { title: string; description: string }[];
}

export const species: Species[] = [
  // ===== AMAZÔNIA — FAUNA =====
  { id: 'onca-pintada', biome: 'amazonia', type: 'fauna', name: 'Onça-pintada', scientific: 'Panthera onca', category: 'Mamífero', status: 'Quase ameaçada', emoji: '🐆',
    description: 'O maior felino das Américas e predador de topo da cadeia alimentar na Amazônia. É um símbolo da fauna brasileira e essencial para o equilíbrio ecológico.',
    traits: [{ label: 'Peso', value: 'até 135 kg' }, { label: 'Dieta', value: 'Carnívoro' }, { label: 'Habitat', value: 'Florestas densas' }, { label: 'Distribuição', value: 'América Central e do Sul' }],
    importance: { title: 'Um predador essencial para o equilíbrio da floresta', description: 'Como predadora de topo, a onça-pintada ajuda a regular populações de herbívoros e mesopredadores, mantendo o equilíbrio das cadeias alimentares. Sua presença é indicadora de ecossistemas saudáveis e bem preservados.' },
    funFacts: [
      { title: 'Uma mordida poderosa', description: 'A onça-pintada possui a mordida mais forte entre todos os felinos em relação ao tamanho do corpo, capaz de perfurar cascos de tartarugas e crânios de jacarés.' },
      { title: 'Manchas únicas', description: 'As rosetas da pelagem são únicas em cada indivíduo, funcionando como uma impressão digital que permite identificar cada animal.' },
      { title: 'Boa nadadora', description: 'Diferente da maioria dos felinos, a onça-pintada é uma excelente nadadora e frequentemente caça presas na água, como peixes e jacarés.' },
    ] },

  { id: 'boto-cor-de-rosa', biome: 'amazonia', type: 'fauna', name: 'Boto-cor-de-rosa', scientific: 'Inia geoffrensis', category: 'Mamífero', status: 'Em perigo', emoji: '🐬',
    description: 'O maior golfinho de rio do mundo, famoso pela coloração rosada dos machos adultos. É cercado de lendas amazônicas e enfrenta ameaças crescentes.',
    traits: [{ label: 'Tamanho', value: 'até 2,5 m' }, { label: 'Dieta', value: 'Peixes' }, { label: 'Habitat', value: 'Rios e igarapés' }, { label: 'Distribuição', value: 'Bacia amazônica' }],
    importance: { title: 'Guardião da saúde dos rios amazônicos', description: 'O boto-cor-de-rosa é um predador de topo nos ecossistemas fluviais, ajudando a controlar as populações de peixes e a manter o equilíbrio das cadeias aquáticas. Sua presença indica rios saudáveis e pouco poluídos.' },
    funFacts: [
      { title: 'Fica mais rosa com a idade', description: 'Os machos adultos ficam progressivamente mais rosados ao longo da vida, especialmente durante a excitação ou esforço físico, devido ao aumento do fluxo sanguíneo sob a pele.' },
      { title: 'Pescoço flexível', description: 'Diferente de outros golfinhos, o boto possui vértebras cervicais não fundidas, permitindo que gire a cabeça em quase 90 graus para navegar entre troncos submersos.' },
      { title: 'Protagonista de lendas', description: 'Segundo o folclore amazônico, o boto se transforma em um jovem elegante durante as festas juninas para seduzir as moças das comunidades ribeirinhas.' },
    ] },

  { id: 'preguica-real', biome: 'amazonia', type: 'fauna', name: 'Preguiça-real', scientific: 'Choloepus didactylus', category: 'Mamífero', status: 'Pouco preocupante', emoji: '🦥',
    description: 'Mamífero arborícola de movimentos extremamente lentos. Passa a maior parte da vida pendurada nas árvores, descendo ao solo apenas uma vez por semana.',
    traits: [{ label: 'Peso', value: '4–8 kg' }, { label: 'Dieta', value: 'Herbívoro' }, { label: 'Habitat', value: 'Copa das árvores' }, { label: 'Distribuição', value: 'América Central e do Sul' }],
    importance: { title: 'Um ecossistema vivo nas copas da floresta', description: 'A pelagem da preguiça abriga algas, fungos, mariposas e besouros, formando um microecossistema único. Ao descer ao solo para defecar, ela fertiliza as árvores onde vive, contribuindo para o ciclo de nutrientes da floresta.' },
    funFacts: [
      { title: 'Mais rápida na água', description: 'Apesar da lentidão em terra, a preguiça é uma boa nadadora e pode se mover até três vezes mais rápido na água do que nas árvores.' },
      { title: 'Pelagem com algas', description: 'A coloração esverdeada de sua pelagem é causada por algas que crescem em seus pelos, ajudando na camuflagem entre as folhagens.' },
      { title: 'Digestão ultralenta', description: 'A preguiça pode levar até um mês para digerir completamente uma refeição, possuindo um dos metabolismos mais lentos entre os mamíferos.' },
    ] },

  { id: 'harpia', biome: 'amazonia', type: 'fauna', name: 'Harpia', scientific: 'Harpia harpyja', category: 'Ave', status: 'Quase ameaçada', emoji: '🦅',
    description: 'A mais poderosa ave de rapina das Américas, com garras maiores que as de um urso-pardo. Caça macacos e preguiças no dossel da floresta.',
    traits: [{ label: 'Envergadura', value: 'até 2 m' }, { label: 'Dieta', value: 'Carnívoro' }, { label: 'Habitat', value: 'Dossel florestal' }, { label: 'Distribuição', value: 'América Central e do Sul' }],
    importance: { title: 'A rainha dos céus da floresta', description: 'Como predadora de topo no dossel, a harpia controla populações de primatas e preguiças, evitando a superpopulação que poderia degradar a copa da floresta. Necessita de árvores muito altas para nidificar, sendo indicadora de florestas maduras.' },
    funFacts: [
      { title: 'Garras de urso', description: 'Suas garras traseiras podem medir até 13 cm — maiores que as de um urso-pardo — e exercem uma pressão de mais de 50 kg por centímetro quadrado.' },
      { title: 'Casal para a vida toda', description: 'A harpia forma casais monogâmicos que permanecem juntos por toda a vida, compartilhando o mesmo ninho por décadas.' },
      { title: 'Voo silencioso', description: 'Apesar do grande porte, suas penas especializadas permitem voo quase silencioso entre as árvores, surpreendendo as presas no dossel.' },
    ] },

  // ===== AMAZÔNIA — FLORA =====
  { id: 'castanheira', biome: 'amazonia', type: 'flora', name: 'Castanheira', scientific: 'Bertholletia excelsa', category: 'Árvore', status: 'Vulnerável', emoji: '🌳',
    description: 'Uma das maiores árvores da Amazônia, podendo atingir 50 metros. Produz a castanha-do-pará, essencial para a economia extrativista da região.',
    traits: [{ label: 'Altura', value: 'até 50 m' }, { label: 'Fruto', value: 'Castanha-do-pará' }, { label: 'Uso', value: 'Alimentício' }, { label: 'Distribuição', value: 'Amazônia' }],
    importance: { title: 'Uma árvore essencial para a floresta', description: 'A castanheira sustenta uma rede ecológica complexa: depende de abelhas específicas para polinização e de cutias para dispersão de sementes. Sua exploração extrativista gera renda para comunidades tradicionais, incentivando a conservação da floresta em pé.' },
    funFacts: [
      { title: 'Pode viver por muitos anos', description: 'A castanheira é uma árvore longeva que pode permanecer na floresta por séculos, com indivíduos estimados em mais de 500 anos de idade.' },
      { title: 'Seus frutos são enormes', description: 'O ouriço da castanheira pesa até 2 kg e contém entre 10 e 25 castanhas organizadas como gomos de laranja. Ele cai de alturas de até 50 metros.' },
      { title: 'Depende da floresta', description: 'A castanheira não se reproduz em áreas desmatadas, pois depende de polinizadores e dispersores que só existem em florestas preservadas.' },
    ] },

  { id: 'vitoria-regia', biome: 'amazonia', type: 'flora', name: 'Vitória-régia', scientific: 'Victoria amazonica', category: 'Aquática', status: 'Pouco preocupante', emoji: '🪷',
    description: 'A maior planta aquática do mundo, com folhas circulares de até 2,5 metros de diâmetro que podem suportar o peso de uma criança.',
    traits: [{ label: 'Folha', value: 'até 2,5 m' }, { label: 'Flor', value: 'Branca/rosa' }, { label: 'Habitat', value: 'Águas calmas' }, { label: 'Distribuição', value: 'Bacia amazônica' }],
    importance: { title: 'Um abrigo vital nos lagos amazônicos', description: 'As enormes folhas da vitória-régia criam sombra e refúgio para peixes, insetos e outros organismos aquáticos. Ela contribui para a oxigenação da água e serve como plataforma de repouso para aves e anfíbios.' },
    funFacts: [
      { title: 'Folha que suporta peso', description: 'A estrutura nervurada na parte inferior das folhas é tão resistente que inspirou a engenharia do Crystal Palace em Londres, projetado por Joseph Paxton em 1851.' },
      { title: 'Flor que muda de cor', description: 'A flor abre branca na primeira noite e se torna rosada na segunda, atraindo diferentes polinizadores a cada fase.' },
      { title: 'Flor aquecida', description: 'A flor pode elevar sua temperatura em até 11°C acima do ambiente para volatilizar aromas e atrair besouros polinizadores durante a noite.' },
    ] },

  { id: 'acai', biome: 'amazonia', type: 'flora', name: 'Açaí', scientific: 'Euterpe oleracea', category: 'Palmeira', status: 'Pouco preocupante', emoji: '🌴',
    description: 'Palmeira que produz o famoso fruto açaí, base alimentar das populações ribeirinhas e hoje consumido mundialmente por seu valor nutricional.',
    traits: [{ label: 'Altura', value: '15–25 m' }, { label: 'Fruto', value: 'Açaí' }, { label: 'Uso', value: 'Alimentício' }, { label: 'Distribuição', value: 'Amazônia e Mata Atlântica' }],
    importance: { title: 'O pilar alimentar da Amazônia', description: 'O açaí é a base da alimentação de milhões de ribeirinhos amazônicos e sustenta uma cadeia econômica que vai do extrativista ao mercado internacional. Seus frutos alimentam dezenas de espécies de aves e mamíferos na floresta.' },
    funFacts: [
      { title: 'Alimento milenar', description: 'Populações indígenas da Amazônia consomem o açaí há milhares de anos. O nome vem do tupi "yça-í", que significa "fruto que chora".' },
      { title: 'Uma palmeira generosa', description: 'Cada palmeira pode produzir entre 6 e 8 cachos por ano, com cada cacho pesando até 6 kg e contendo milhares de frutos.' },
      { title: 'Rico em antioxidantes', description: 'O açaí possui uma das maiores concentrações de antocianinas entre os alimentos, com poder antioxidante superior ao da uva e do mirtilo.' },
    ] },

  { id: 'seringueira', biome: 'amazonia', type: 'flora', name: 'Seringueira', scientific: 'Hevea brasiliensis', category: 'Árvore', status: 'Pouco preocupante', emoji: '🌲',
    description: 'Árvore da qual se extrai o látex para produção de borracha natural. Foi o centro do ciclo econômico da borracha no século XIX.',
    traits: [{ label: 'Altura', value: 'até 30 m' }, { label: 'Produto', value: 'Látex/borracha' }, { label: 'Uso', value: 'Industrial' }, { label: 'Distribuição', value: 'Amazônia' }],
    importance: { title: 'A árvore que transformou a economia mundial', description: 'A seringueira é a principal fonte de borracha natural do mundo, matéria-prima insubstituível para pneus de aviação e equipamentos médicos. Seu extrativismo sustentável motivou a criação de reservas extrativistas na Amazônia, protegendo milhões de hectares de floresta.' },
    funFacts: [
      { title: 'Ciclo da borracha', description: 'No auge do ciclo da borracha (1879–1912), Manaus tornou-se uma das cidades mais ricas do mundo, com ópera, bondes elétricos e iluminação pública antes de muitas capitais europeias.' },
      { title: 'Biopirataria histórica', description: 'Em 1876, o inglês Henry Wickham contrabandeou 70 mil sementes de seringueira para a Inglaterra, levando ao colapso do monopólio brasileiro da borracha.' },
      { title: 'Látex como defesa', description: 'O látex é na verdade uma defesa da árvore contra insetos e patógenos — ao ser cortada, a seiva leitosa veda a ferida e impede infecções.' },
    ] },

  // ===== CERRADO — FAUNA =====
  { id: 'lobo-guara', biome: 'cerrado', type: 'fauna', name: 'Lobo-guará', scientific: 'Chrysocyon brachyurus', category: 'Mamífero', status: 'Quase ameaçada', emoji: '🐺',
    description: 'O maior canídeo da América do Sul, com pernas longas adaptadas para caminhar pela vegetação alta do Cerrado. Alimenta-se de frutos e pequenos animais.',
    traits: [{ label: 'Altura', value: 'até 90 cm' }, { label: 'Dieta', value: 'Onívoro' }, { label: 'Habitat', value: 'Campos e cerrado' }, { label: 'Distribuição', value: 'Brasil central e países vizinhos' }],
    importance: { title: 'O jardineiro do Cerrado', description: 'O lobo-guará é um dos principais dispersores de sementes do Cerrado, especialmente da lobeira (fruta-do-lobo). Ao defecar em áreas abertas, ele promove a germinação de plantas e a regeneração da vegetação nativa.' },
    funFacts: [
      { title: 'Não é lobo nem raposa', description: 'Apesar do nome, o lobo-guará não é um lobo verdadeiro nem uma raposa. Ele é o único representante do gênero Chrysocyon, sem parentes próximos vivos.' },
      { title: 'Urina com cheiro de maconha', description: 'A urina do lobo-guará contém pirazinas, compostos que lhe conferem um cheiro forte e característico, muito semelhante ao de Cannabis, usado para marcar território.' },
      { title: 'Estampa da nota de R$200', description: 'O lobo-guará foi escolhido para estampar a cédula de R$ 200, lançada em 2020, reforçando seu papel como símbolo da fauna brasileira.' },
    ] },

  { id: 'tatu-canastra', biome: 'cerrado', type: 'fauna', name: 'Tatu-canastra', scientific: 'Priodontes maximus', category: 'Mamífero', status: 'Vulnerável', emoji: '🦔',
    description: 'O maior tatu do mundo, podendo pesar até 60 kg. Escava tocas enormes que servem de abrigo para dezenas de outras espécies.',
    traits: [{ label: 'Peso', value: 'até 60 kg' }, { label: 'Dieta', value: 'Insetívoro' }, { label: 'Habitat', value: 'Cerrado e florestas' }, { label: 'Distribuição', value: 'América do Sul' }],
    importance: { title: 'O engenheiro de ecossistemas do Cerrado', description: 'As tocas do tatu-canastra podem ter até 5 metros de profundidade e são reutilizadas por mais de 80 espécies, incluindo cobras, lagartos, raposas e corujas. Ele é considerado um engenheiro de ecossistemas por criar microhabitats essenciais.' },
    funFacts: [
      { title: 'Garras de escavação', description: 'Suas garras dianteiras podem medir até 20 cm, as maiores proporcionalmente de qualquer animal vivente, permitindo escavar o solo com incrível eficiência.' },
      { title: 'Fantasma do Cerrado', description: 'É um animal tão discreto e noturno que muitos pesquisadores passam anos sem conseguir avistá-lo, sendo mais estudado por armadilhas fotográficas do que por observação direta.' },
      { title: 'Consome milhares de insetos', description: 'Em uma única noite de forrageamento, o tatu-canastra pode consumir dezenas de milhares de formigas e cupins, controlando naturalmente essas populações.' },
    ] },

  { id: 'seriema', biome: 'cerrado', type: 'fauna', name: 'Seriema', scientific: 'Cariama cristata', category: 'Ave', status: 'Pouco preocupante', emoji: '🐦',
    description: 'Ave terrestre de pernas longas, conhecida pelo canto alto que pode ser ouvido a quilômetros. Caça cobras e lagartos no chão do cerrado.',
    traits: [{ label: 'Altura', value: 'até 90 cm' }, { label: 'Dieta', value: 'Carnívoro' }, { label: 'Habitat', value: 'Campos abertos' }, { label: 'Distribuição', value: 'Brasil central e meridional' }],
    importance: { title: 'A caçadora de serpentes do Cerrado', description: 'A seriema desempenha um papel importante no controle de populações de cobras, lagartos e roedores nos campos do Cerrado. Sua presença indica ambientes com vegetação nativa preservada e equilíbrio ecológico.' },
    funFacts: [
      { title: 'Parente dos dinossauros', description: 'A seriema é uma das aves viventes mais próximas dos extintos pássaros do terror (Phorusrhacidae), predadores gigantes que dominaram a América do Sul há milhões de anos.' },
      { title: 'Técnica de caça engenhosa', description: 'Para matar cobras e lagartos, a seriema os agarra com o bico e os arremessa violentamente contra pedras ou o chão, repetidas vezes, até que estejam mortos.' },
      { title: 'Canto de alerta', description: 'Seu canto estridente pode ser ouvido a mais de 3 km de distância e é frequentemente utilizado como alarme matinal por moradores de áreas rurais.' },
    ] },

  { id: 'tamanduá-bandeira', biome: 'cerrado', type: 'fauna', name: 'Tamanduá-bandeira', scientific: 'Myrmecophaga tridactyla', category: 'Mamífero', status: 'Vulnerável', emoji: '🐾',
    description: 'Mamífero com língua de até 60 cm que pode consumir 30 mil formigas por dia. Sua cauda funciona como cobertor durante o sono.',
    traits: [{ label: 'Peso', value: 'até 45 kg' }, { label: 'Dieta', value: 'Insetívoro' }, { label: 'Habitat', value: 'Campos e cerrado' }, { label: 'Distribuição', value: 'América Central e do Sul' }],
    importance: { title: 'O regulador natural de insetos', description: 'O tamanduá-bandeira é fundamental para o controle de populações de formigas e cupins no Cerrado. Ao abrir cupinzeiros e formigueiros, também facilita o acesso de outras espécies a esses recursos e promove a aeração do solo.' },
    funFacts: [
      { title: 'Língua de 60 cm', description: 'Sua língua pode se projetar e retrair até 150 vezes por minuto, coberta por uma saliva extremamente pegajosa que captura centenas de insetos a cada lambida.' },
      { title: 'Abraço mortal', description: 'Quando ameaçado, o tamanduá se ergue sobre as patas traseiras e abraça o predador com suas garras poderosas — há registros de tamanduás matando onças dessa forma.' },
      { title: 'Cauda-cobertor', description: 'Sua enorme cauda felpuda serve como cobertor durante o sono, protegendo o corpo do frio e de insetos, além de ajudar na camuflagem em meio à vegetação.' },
    ] },

  // ===== CERRADO — FLORA =====
  { id: 'ipê-amarelo', biome: 'cerrado', type: 'flora', name: 'Ipê-amarelo', scientific: 'Handroanthus albus', category: 'Árvore', status: 'Pouco preocupante', emoji: '🌼',
    description: 'Árvore-símbolo do Brasil, cujas flores amarelas cobrem completamente a copa durante o inverno, antes das novas folhas surgirem.',
    traits: [{ label: 'Altura', value: '6–14 m' }, { label: 'Floração', value: 'Jun–Set' }, { label: 'Uso', value: 'Ornamental' }, { label: 'Distribuição', value: 'Cerrado e Mata Atlântica' }],
    importance: { title: 'Um símbolo de resistência e beleza', description: 'O ipê-amarelo floresce justamente na estação seca, quando a maioria das plantas está sem folhas, fornecendo néctar e pólen essenciais para abelhas e beija-flores nesse período de escassez. É amplamente utilizado em arborização urbana e projetos de recuperação ambiental.' },
    funFacts: [
      { title: 'Flor nacional', description: 'O ipê-amarelo é considerado a flor nacional do Brasil, embora nunca tenha sido oficializado por lei federal. Foi declarado assim por decreto do presidente Jânio Quadros em 1961.' },
      { title: 'Madeira nobre', description: 'A madeira do ipê é uma das mais densas e resistentes do Brasil, sendo praticamente imune a cupins e amplamente usada em decks, pergolados e construção naval.' },
      { title: 'Floração sincronizada', description: 'Todos os ipês de uma região florescem quase ao mesmo tempo, criando um espetáculo visual que dura apenas 5 a 7 dias antes das pétalas caírem.' },
    ] },

  { id: 'pequi', biome: 'cerrado', type: 'flora', name: 'Pequi', scientific: 'Caryocar brasiliense', category: 'Árvore', status: 'Pouco preocupante', emoji: '🫒',
    description: 'Fruto emblemático da culinária do Cerrado. A árvore tem casca grossa resistente ao fogo, adaptação típica da vegetação do bioma.',
    traits: [{ label: 'Altura', value: 'até 10 m' }, { label: 'Fruto', value: 'Pequi' }, { label: 'Uso', value: 'Alimentício' }, { label: 'Distribuição', value: 'Cerrado brasileiro' }],
    importance: { title: 'O tesouro culinário do Cerrado', description: 'O pequi é uma espécie-chave para a cultura e economia das comunidades do Cerrado, gerando renda para milhares de famílias extrativistas. Seus frutos alimentam aves, mamíferos e insetos, e sua casca grossa permite sobreviver às queimadas naturais do bioma.' },
    funFacts: [
      { title: 'Nunca morda o pequi', description: 'O caroço do pequi é coberto por espinhos finíssimos que podem se cravar na língua e nos lábios. Por isso, o fruto é sempre raspado com os dentes, nunca mordido.' },
      { title: 'Aroma inconfundível', description: 'O cheiro forte do pequi é tão marcante que divide opiniões — é adorado no Cerrado e estranhado em outras regiões. O aroma vem de compostos voláteis que também atraem morcegos polinizadores.' },
      { title: 'Resistente ao fogo', description: 'A casca suberosa do pequizeiro pode ter mais de 5 cm de espessura, protegendo o câmbio vascular das queimadas que ciclicamente varrem o Cerrado.' },
    ] },

  { id: 'buriti', biome: 'cerrado', type: 'flora', name: 'Buriti', scientific: 'Mauritia flexuosa', category: 'Palmeira', status: 'Pouco preocupante', emoji: '🌴',
    description: 'A "árvore da vida" do Cerrado, encontrada nas veredas. Seus frutos alimentam dezenas de espécies, e do tronco se extrai fibra e palmito.',
    traits: [{ label: 'Altura', value: 'até 30 m' }, { label: 'Fruto', value: 'Buriti' }, { label: 'Habitat', value: 'Veredas' }, { label: 'Importância', value: 'Alimento e artesanato' }],
    importance: { title: 'A árvore da vida nas veredas do Cerrado', description: 'O buriti é uma espécie-chave das veredas, ambientes úmidos do Cerrado que funcionam como nascentes e corredores ecológicos. Seus frutos alimentam araras, emas, antas e dezenas de outras espécies. Praticamente todas as partes da planta são aproveitadas pelas comunidades locais.' },
    funFacts: [
      { title: 'Uso integral', description: 'Das folhas se extrai fibra para artesanato, do tronco vem palmito e farinha, dos frutos se faz doce, óleo e sorvete, e da medula se produz uma espécie de cortiça — nada se desperdiça.' },
      { title: 'Indicador de água', description: 'A presença de buritizais sempre indica lençol freático superficial ou cursos d\'água, sendo usada por viajantes do sertão como guia para encontrar fontes de água.' },
      { title: 'Maior palmeira do Cerrado', description: 'O buriti pode atingir 30 metros de altura e viver por mais de 200 anos, dominando a paisagem das veredas com suas copas em forma de leque.' },
    ] },

  { id: 'barbatimao', biome: 'cerrado', type: 'flora', name: 'Barbatimão', scientific: 'Stryphnodendron adstringens', category: 'Árvore', status: 'Pouco preocupante', emoji: '🌿',
    description: 'Árvore medicinal do Cerrado, com casca rica em taninos usada no tratamento de feridas e inflamações pela medicina popular.',
    traits: [{ label: 'Altura', value: '4–5 m' }, { label: 'Uso', value: 'Medicinal' }, { label: 'Habitat', value: 'Cerrado típico' }, { label: 'Importância', value: 'Fitoterapia' }],
    importance: { title: 'A farmácia natural do Cerrado', description: 'O barbatimão é uma das plantas medicinais mais estudadas do Brasil, com eficácia comprovada cientificamente no tratamento de feridas, inflamações e infecções. Sua casca é utilizada há séculos por comunidades tradicionais e hoje é incorporada em produtos fitoterápicos.' },
    funFacts: [
      { title: 'Comprovado pela ciência', description: 'Estudos científicos confirmaram que os taninos da casca do barbatimão possuem propriedades cicatrizantes, anti-inflamatórias e antimicrobianas, validando o conhecimento popular.' },
      { title: 'Curtimento natural', description: 'Os taninos do barbatimão eram utilizados para curtir couro de forma artesanal, substituindo produtos químicos industriais em comunidades rurais.' },
      { title: 'Resistente ao fogo', description: 'Como muitas plantas do Cerrado, o barbatimão possui casca espessa e raízes profundas que permitem rebrotar rapidamente após queimadas.' },
    ] },

  // ===== MATA ATLÂNTICA — FAUNA =====
  { id: 'mico-leao-dourado', biome: 'mata-atlantica', type: 'fauna', name: 'Mico-leão-dourado', scientific: 'Leontopithecus rosalia', category: 'Mamífero', status: 'Em perigo', emoji: '🐒',
    description: 'Primata endêmico da Mata Atlântica fluminense, símbolo da conservação no Brasil. Quase foi extinto nos anos 1970, com menos de 200 indivíduos restantes.',
    traits: [{ label: 'Peso', value: '500–700 g' }, { label: 'Dieta', value: 'Onívoro' }, { label: 'Habitat', value: 'Floresta de baixada' }, { label: 'Distribuição', value: 'Rio de Janeiro' }],
    importance: { title: 'O símbolo da conservação brasileira', description: 'O mico-leão-dourado é o maior caso de sucesso de conservação do Brasil. Programas de reprodução em cativeiro e reintrodução elevaram a população de menos de 200 para cerca de 3.700 indivíduos. Ele é um dispersor de sementes essencial para a regeneração da Mata Atlântica de baixada.' },
    funFacts: [
      { title: 'Quase desapareceu', description: 'Na década de 1970, restavam menos de 200 micos-leões-dourados na natureza. Graças a programas de conservação internacionais, a população se recuperou significativamente.' },
      { title: 'Crina de leão', description: 'A juba dourada que circunda seu rosto não é apenas ornamental — serve para parecer maior diante de predadores e rivais, dando ao primata uma aparência semelhante à de um pequeno leão.' },
      { title: 'Família unida', description: 'Os micos vivem em grupos familiares nos quais o pai carrega os filhotes nas costas durante as primeiras semanas, dividindo os cuidados parentais com a mãe.' },
    ] },

  { id: 'muriqui', biome: 'mata-atlantica', type: 'fauna', name: 'Muriqui-do-norte', scientific: 'Brachyteles hypoxanthus', category: 'Mamífero', status: 'Criticamente em perigo', emoji: '🦧',
    description: 'O maior primata das Américas, conhecido como "mono-carvoeiro". Restam menos de 1.000 indivíduos na natureza.',
    traits: [{ label: 'Peso', value: 'até 15 kg' }, { label: 'Dieta', value: 'Herbívoro' }, { label: 'Habitat', value: 'Floresta montana' }, { label: 'Distribuição', value: 'Minas Gerais e Espírito Santo' }],
    importance: { title: 'O gigante pacífico da Mata Atlântica', description: 'O muriqui é essencial para a dispersão de sementes de árvores de grande porte na Mata Atlântica. Sua sociedade pacífica e igualitária — sem hierarquia de dominância — é única entre os primatas e objeto de estudo da primatologia mundial.' },
    funFacts: [
      { title: 'Primata pacifista', description: 'Diferente de outros primatas, os muriquis não possuem hierarquia de dominância e raramente exibem agressão. Conflitos são resolvidos com abraços, não com brigas.' },
      { title: 'Abraços de grupo', description: 'Os muriquis se cumprimentam com longos abraços coletivos, entrelaçando braços e caudas em um comportamento social único entre os primatas.' },
      { title: 'Maior primata das Américas', description: 'Com até 15 kg e braços longos que permitem braquiação entre as árvores, o muriqui é o maior primata do continente americano.' },
    ] },

  { id: 'tucano-de-bico-preto', biome: 'mata-atlantica', type: 'fauna', name: 'Tucano-de-bico-preto', scientific: 'Ramphastos vitellinus', category: 'Ave', status: 'Vulnerável', emoji: '🦜',
    description: 'Ave icônica com bico colorido que pode chegar a 20 cm. Importante dispersor de sementes na Mata Atlântica.',
    traits: [{ label: 'Tamanho', value: '45–48 cm' }, { label: 'Dieta', value: 'Frugívoro' }, { label: 'Habitat', value: 'Dossel florestal' }, { label: 'Distribuição', value: 'Mata Atlântica costeira' }],
    importance: { title: 'O plantador de árvores da floresta', description: 'O tucano é um dos maiores dispersores de sementes da Mata Atlântica, engolindo frutos inteiros e depositando as sementes intactas longe da planta-mãe. Sem ele, muitas espécies de árvores de grande porte teriam dificuldade para se reproduzir.' },
    funFacts: [
      { title: 'Bico termorregulador', description: 'O grande bico do tucano é ricamente vascularizado e funciona como um radiador térmico, ajudando a regular a temperatura corporal em climas quentes.' },
      { title: 'Dorme de forma compacta', description: 'Para dormir, o tucano gira a cabeça para trás e encaixa o bico entre as penas das costas, dobrando a cauda sobre o corpo para caber em ocos de árvores.' },
      { title: 'Bico leve e resistente', description: 'Apesar de parecer pesado, o bico do tucano é oco e extremamente leve, composto por trabéculas de queratina que lhe dão resistência com pouco peso.' },
    ] },

  { id: 'jaguatirica', biome: 'mata-atlantica', type: 'fauna', name: 'Jaguatirica', scientific: 'Leopardus pardalis', category: 'Mamífero', status: 'Pouco preocupante', emoji: '🐱',
    description: 'Felino de porte médio com pelagem manchada. É o terceiro maior gato das Américas e excelente caçador noturno.',
    traits: [{ label: 'Peso', value: '8–16 kg' }, { label: 'Dieta', value: 'Carnívoro' }, { label: 'Habitat', value: 'Florestas densas' }, { label: 'Distribuição', value: 'Américas' }],
    importance: { title: 'A predadora silenciosa da Mata Atlântica', description: 'A jaguatirica é um mesopredador essencial para o equilíbrio da Mata Atlântica, controlando populações de roedores, aves e répteis. Sua presença indica fragmentos florestais com qualidade suficiente para manter cadeias tróficas complexas.' },
    funFacts: [
      { title: 'Visão noturna superior', description: 'Seus olhos são até 6 vezes mais sensíveis à luz do que os humanos, permitindo caçar com eficiência em noites sem luar na floresta densa.' },
      { title: 'Pelagem de alta-costura', description: 'A beleza de sua pelagem manchada a tornou alvo do comércio ilegal de peles no século XX, quando milhares de jaguatiricas eram caçadas anualmente para a indústria da moda.' },
      { title: 'Solitária por natureza', description: 'Cada jaguatirica mantém um território de até 15 km² que patrulha solitariamente, marcando-o com urina e arranhões em árvores.' },
    ] },

  // ===== MATA ATLÂNTICA — FLORA =====
  { id: 'pau-brasil', biome: 'mata-atlantica', type: 'flora', name: 'Pau-brasil', scientific: 'Paubrasilia echinata', category: 'Árvore', status: 'Em perigo', emoji: '🪵',
    description: 'A árvore que deu nome ao país. Sua madeira vermelha era explorada desde a colonização e hoje é protegida por lei.',
    traits: [{ label: 'Altura', value: 'até 15 m' }, { label: 'Uso', value: 'Histórico/madeira' }, { label: 'Floração', value: 'Set–Out' }, { label: 'Distribuição', value: 'Mata Atlântica costeira' }],
    importance: { title: 'A árvore que batizou uma nação', description: 'O pau-brasil é uma das espécies mais importantes da história do Brasil. Sua exploração predatória durante a colonização quase levou à extinção, mas hoje programas de reflorestamento e proteção legal buscam recuperar suas populações na Mata Atlântica.' },
    funFacts: [
      { title: 'Origem do nome Brasil', description: 'O país recebeu seu nome por causa desta árvore. "Brasil" vem de "brasa", referência à cor vermelha intensa da madeira, semelhante a brasas vivas.' },
      { title: 'Arcos de violino', description: 'A madeira do pau-brasil é considerada a melhor do mundo para fabricação de arcos de violino e outros instrumentos de corda, sendo altamente valorizada por luthiers.' },
      { title: 'Corante natural', description: 'Antes dos corantes sintéticos, o pau-brasil era a principal fonte do pigmento vermelho usado para tingir tecidos na Europa, sendo o motor econômico da colonização.' },
    ] },

  { id: 'jussara', biome: 'mata-atlantica', type: 'flora', name: 'Palmito-juçara', scientific: 'Euterpe edulis', category: 'Palmeira', status: 'Vulnerável', emoji: '🌴',
    description: 'Palmeira ameaçada pela extração predatória do palmito. Seus frutos são similares ao açaí e essenciais para aves como tucanos.',
    traits: [{ label: 'Altura', value: 'até 15 m' }, { label: 'Fruto', value: 'Juçara' }, { label: 'Uso', value: 'Alimentício' }, { label: 'Distribuição', value: 'Mata Atlântica' }],
    importance: { title: 'Uma palmeira vital para a floresta e para as comunidades', description: 'A juçara é uma espécie-chave da Mata Atlântica: seus frutos alimentam mais de 70 espécies de aves e mamíferos. A transição da extração de palmito (que mata a planta) para o uso sustentável dos frutos (similar ao açaí) oferece uma alternativa econômica que conserva a espécie.' },
    funFacts: [
      { title: 'Palmito que mata a planta', description: 'Diferente do açaí, a juçara não rebrota após a extração do palmito, pois possui apenas um estipe. Cada palmito consumido representa uma palmeira morta.' },
      { title: 'Açaí da Mata Atlântica', description: 'Os frutos da juçara são nutricionalmente idênticos ao açaí amazônico e cada vez mais usados na produção de polpa, gerando renda sem derrubar a palmeira.' },
      { title: 'Banquete para tucanos', description: 'Tucanos e jacutingas dependem dos frutos da juçara como fonte principal de alimento em determinadas épocas do ano. O declínio da palmeira ameaça diretamente essas aves.' },
    ] },

  { id: 'bromélia-imperial', biome: 'mata-atlantica', type: 'flora', name: 'Bromélia-imperial', scientific: 'Alcantarea imperialis', category: 'Bromélia', status: 'Vulnerável', emoji: '🌺',
    description: 'A maior bromélia do Brasil, endêmica das montanhas do Rio de Janeiro. Pode atingir 1,5 metro de diâmetro.',
    traits: [{ label: 'Tamanho', value: 'até 1,5 m' }, { label: 'Habitat', value: 'Afloramentos rochosos' }, { label: 'Uso', value: 'Ornamental' }, { label: 'Distribuição', value: 'Serra dos Órgãos (RJ)' }],
    importance: { title: 'Um reservatório de vida nas alturas', description: 'A bromélia-imperial acumula água entre suas folhas, formando pequenas piscinas que servem de habitat para girinos, larvas de insetos e microorganismos. Em afloramentos rochosos onde não há solo, ela é a principal fonte de vida e umidade.' },
    funFacts: [
      { title: 'Floresce uma única vez', description: 'Após décadas de crescimento, a bromélia-imperial produz uma haste floral de até 3 metros de altura. Depois da floração e frutificação, a planta morre, mas deixa brotos laterais.' },
      { title: 'Sobrevive sem solo', description: 'Cresce diretamente sobre rochas expostas em altitudes acima de 1.000 metros, obtendo nutrientes apenas da água da chuva e de detritos orgânicos que se acumulam entre suas folhas.' },
      { title: 'Jardim vertical natural', description: 'Um único exemplar pode abrigar centenas de organismos, desde algas e bactérias até rãs e salamandras, funcionando como um verdadeiro ecossistema miniatura.' },
    ] },

  { id: 'ipê-roxo', biome: 'mata-atlantica', type: 'flora', name: 'Ipê-roxo', scientific: 'Handroanthus impetiginosus', category: 'Árvore', status: 'Pouco preocupante', emoji: '💜',
    description: 'Árvore de grande porte com floração exuberante em tons de rosa e roxo. Sua madeira é uma das mais resistentes do Brasil.',
    traits: [{ label: 'Altura', value: 'até 20 m' }, { label: 'Floração', value: 'Jul–Set' }, { label: 'Uso', value: 'Ornamental/madeira' }, { label: 'Distribuição', value: 'Mata Atlântica e Cerrado' }],
    importance: { title: 'Beleza e recursos para a floresta', description: 'O ipê-roxo é um importante recurso para polinizadores durante a estação seca, quando poucas espécies florescem. Sua madeira extremamente densa e durável é uma das mais valorizadas da silvicultura brasileira, sendo usada em construções que precisam resistir por décadas.' },
    funFacts: [
      { title: 'Lapacho medicinal', description: 'A casca interna do ipê-roxo contém lapachol, uma substância com propriedades anti-inflamatórias e antimicrobianas estudada como potencial agente anticancerígeno.' },
      { title: 'Madeira quase eterna', description: 'A madeira do ipê é tão densa que afunda na água. Decks e estruturas feitas com essa madeira podem durar mais de 25 anos expostos ao tempo sem tratamento químico.' },
      { title: 'Floração sincronizada', description: 'Assim como o ipê-amarelo, o ipê-roxo perde todas as folhas antes de florescer, criando um espetáculo de cores que transforma paisagens urbanas e rurais por poucos dias.' },
    ] },

  // ===== CAATINGA — FAUNA =====
  { id: 'ararinha-azul', biome: 'caatinga', type: 'fauna', name: 'Ararinha-azul', scientific: 'Cyanopsitta spixii', category: 'Ave', status: 'Extinta na natureza', emoji: '🦜',
    description: 'Ave endêmica da Caatinga baiana, declarada extinta na natureza em 2000. Programas de reintrodução tentam trazê-la de volta ao habitat original.',
    traits: [{ label: 'Tamanho', value: '55 cm' }, { label: 'Dieta', value: 'Frugívoro' }, { label: 'Habitat', value: 'Caatinga arbórea' }, { label: 'Distribuição', value: 'Norte da Bahia (histórica)' }],
    importance: { title: 'Um símbolo da luta contra a extinção', description: 'A ararinha-azul tornou-se o símbolo mundial da conservação de aves ameaçadas. Programas internacionais de reprodução em cativeiro e reintrodução na Caatinga baiana representam um dos maiores esforços de conservação da história, buscando reverter a extinção na natureza.' },
    funFacts: [
      { title: 'Inspirou um filme', description: 'A ararinha-azul inspirou o filme de animação "Rio" (2011), da Blue Sky Studios, que conta a história de um macho criado em cativeiro que viaja ao Brasil.' },
      { title: 'Último indivíduo selvagem', description: 'O último exemplar selvagem conhecido era um macho que viveu sozinho na Caatinga baiana até desaparecer em outubro de 2000, marcando a extinção na natureza.' },
      { title: 'Reintrodução em andamento', description: 'Desde 2022, exemplares criados em cativeiro estão sendo soltos na região de Curaçá, Bahia, em um programa que busca restabelecer uma população viável na natureza.' },
    ] },

  { id: 'tatu-bola', biome: 'caatinga', type: 'fauna', name: 'Tatu-bola', scientific: 'Tolypeutes tricinctus', category: 'Mamífero', status: 'Em perigo', emoji: '⚽',
    description: 'Mascote da Copa do Mundo de 2014, este tatu é o único que se enrola completamente em uma bola como mecanismo de defesa.',
    traits: [{ label: 'Peso', value: '1–1,8 kg' }, { label: 'Dieta', value: 'Insetívoro' }, { label: 'Habitat', value: 'Caatinga' }, { label: 'Distribuição', value: 'Nordeste do Brasil' }],
    importance: { title: 'O pequeno guardião da Caatinga', description: 'O tatu-bola é endêmico do Brasil e sua conservação depende diretamente da preservação da Caatinga. Ele ajuda no controle de populações de formigas e cupins e na aeração do solo ao escavar em busca de alimento.' },
    funFacts: [
      { title: 'Mascote da Copa', description: 'O tatu-bola foi escolhido como mascote da Copa do Mundo FIFA 2014, recebendo o nome "Fuleco" (fusão de futebol e ecologia), para chamar atenção à conservação da espécie.' },
      { title: 'Defesa perfeita', description: 'É o único tatu capaz de se enrolar completamente em uma esfera, protegendo toda a parte mole do corpo com a carapaça. A forma esférica não deixa nenhuma fresta para predadores.' },
      { title: 'Não escava tocas', description: 'Diferente de outros tatus, o tatu-bola não cava suas próprias tocas, preferindo usar tocas abandonadas ou se abrigar sob arbustos e pedras.' },
    ] },

  { id: 'calango', biome: 'caatinga', type: 'fauna', name: 'Calango', scientific: 'Tropidurus hispidus', category: 'Réptil', status: 'Pouco preocupante', emoji: '🦎',
    description: 'Lagarto abundante na Caatinga, adaptado ao calor intenso. É um importante controlador de insetos no ecossistema.',
    traits: [{ label: 'Tamanho', value: '15–25 cm' }, { label: 'Dieta', value: 'Insetívoro' }, { label: 'Habitat', value: 'Áreas rochosas' }, { label: 'Distribuição', value: 'Nordeste e Centro-Oeste' }],
    importance: { title: 'O controlador de pragas do sertão', description: 'O calango é um dos mais eficientes controladores naturais de insetos na Caatinga, consumindo grandes quantidades de formigas, cupins, moscas e baratas diariamente. Também serve como presa para aves de rapina e serpentes, sendo um elo fundamental na cadeia alimentar.' },
    funFacts: [
      { title: 'Banho de sol obrigatório', description: 'Como réptil ectotérmico, o calango precisa se aquecer ao sol toda manhã antes de ter energia para caçar. Rochas expostas são seus pontos favoritos de termorregulação.' },
      { title: 'Flexões territoriais', description: 'Os machos fazem movimentos de flexão (push-ups) com as patas dianteiras para marcar território e atrair fêmeas — quanto mais vigorosas as flexões, mais dominante o macho.' },
      { title: 'Cauda regenerável', description: 'Quando capturado por um predador, o calango pode soltar a cauda, que continua se movendo e distraindo o atacante enquanto o lagarto foge. A cauda se regenera em algumas semanas.' },
    ] },

  { id: 'mocó', biome: 'caatinga', type: 'fauna', name: 'Mocó', scientific: 'Kerodon rupestris', category: 'Mamífero', status: 'Pouco preocupante', emoji: '🐹',
    description: 'Roedor que vive entre rochas na Caatinga. É ágil escalador e se alimenta de folhas e cascas de árvores.',
    traits: [{ label: 'Peso', value: 'até 1 kg' }, { label: 'Dieta', value: 'Herbívoro' }, { label: 'Habitat', value: 'Afloramentos rochosos' }, { label: 'Distribuição', value: 'Nordeste do Brasil' }],
    importance: { title: 'O escalador das rochas da Caatinga', description: 'O mocó desempenha um papel importante na dispersão de sementes entre afloramentos rochosos da Caatinga. Seus excrementos depositados nas frestas das rochas fertilizam o substrato e criam condições para o crescimento de plantas em ambientes que seriam estéreis.' },
    funFacts: [
      { title: 'Parente da capivara', description: 'Apesar do tamanho pequeno, o mocó é parente das capivaras e dos porquinhos-da-índia, pertencendo à família dos caviídeos (Caviidae).' },
      { title: 'Escalador nato', description: 'Suas patas possuem almofadas aderentes que permitem escalar rochas verticais e até superfícies lisas com agilidade surpreendente, escapando de predadores com facilidade.' },
      { title: 'Sobrevive sem beber água', description: 'O mocó obtém toda a água necessária das folhas e cascas que consome, sendo capaz de sobreviver longos períodos sem acesso direto à água — adaptação vital na Caatinga.' },
    ] },

  // ===== CAATINGA — FLORA =====
  { id: 'mandacaru', biome: 'caatinga', type: 'flora', name: 'Mandacaru', scientific: 'Cereus jamacaru', category: 'Cactácea', status: 'Pouco preocupante', emoji: '🌵',
    description: 'O cacto-símbolo da Caatinga, que pode atingir 6 metros de altura. Armazena água em seu caule e serve de alimento para animais na seca.',
    traits: [{ label: 'Altura', value: 'até 6 m' }, { label: 'Flor', value: 'Branca (noturna)' }, { label: 'Uso', value: 'Alimentação animal' }, { label: 'Distribuição', value: 'Semiárido nordestino' }],
    importance: { title: 'O reservatório de vida do semiárido', description: 'O mandacaru é uma espécie vital para a sobrevivência da fauna na Caatinga durante a seca. Seu caule suculento armazena grande quantidade de água, servindo de alimento e hidratação para aves, morcegos, lagartos e insetos quando outras fontes se esgotam.' },
    funFacts: [
      { title: 'Previsão do tempo sertaneja', description: 'Na cultura popular nordestina, quando o mandacaru floresce fora de época, é sinal de que a chuva está próxima — uma tradição imortalizada na música de Luiz Gonzaga.' },
      { title: 'Flor de uma noite', description: 'As grandes flores brancas do mandacaru se abrem apenas durante a noite e murcham ao nascer do sol, sendo polinizadas por morcegos e mariposas noturnas.' },
      { title: 'Cerca viva natural', description: 'No sertão, o mandacaru é plantado em fileiras para formar cercas vivas naturais, aproveitando seus espinhos como barreira contra animais.' },
    ] },

  { id: 'umbuzeiro', biome: 'caatinga', type: 'flora', name: 'Umbuzeiro', scientific: 'Spondias tuberosa', category: 'Árvore', status: 'Pouco preocupante', emoji: '🌳',
    description: 'Árvore sagrada do sertão, chamada de "árvore da vida" por armazenar água em raízes tuberosas, garantindo sobrevivência na seca.',
    traits: [{ label: 'Altura', value: '4–7 m' }, { label: 'Fruto', value: 'Umbu' }, { label: 'Uso', value: 'Alimentício' }, { label: 'Importância', value: 'Segurança hídrica e alimentar' }],
    importance: { title: 'A árvore sagrada do sertão', description: 'O umbuzeiro é considerado sagrado pelos sertanejos por garantir alimento e água nos períodos mais severos de seca. Suas raízes tuberosas armazenam até 3 mil litros de água, e seus frutos sustentam famílias inteiras. Euclides da Cunha o chamou de "árvore sagrada do sertão" em Os Sertões.' },
    funFacts: [
      { title: 'Raízes-reservatório', description: 'As raízes do umbuzeiro formam xilopódios — tubérculos que armazenam água e nutrientes. Uma árvore adulta pode ter até 3 mil litros de reserva hídrica subterrânea.' },
      { title: 'Citado por Euclides da Cunha', description: 'Em "Os Sertões" (1902), Euclides da Cunha dedica parágrafos ao umbuzeiro, chamando-o de "árvore sagrada" e descrevendo como sertanejos sobreviviam graças a ela.' },
      { title: 'Umbuzada nutritiva', description: 'A umbuzada — bebida feita com umbu, leite e açúcar — é um alimento tradicional do sertão que fornece energia e hidratação, sendo consumida há séculos pelos nordestinos.' },
    ] },

  { id: 'xique-xique', biome: 'caatinga', type: 'flora', name: 'Xique-xique', scientific: 'Pilosocereus gounellei', category: 'Cactácea', status: 'Pouco preocupante', emoji: '🌵',
    description: 'Cacto ramificado comum na Caatinga, é uma importante fonte de água e alimento para animais durante os períodos de seca.',
    traits: [{ label: 'Altura', value: 'até 3 m' }, { label: 'Habitat', value: 'Solo pedregoso' }, { label: 'Uso', value: 'Alimentação animal' }, { label: 'Distribuição', value: 'Semiárido nordestino' }],
    importance: { title: 'Fonte de vida no solo mais árido', description: 'O xique-xique é uma das poucas plantas que sobrevive nos solos mais secos e pedregosos da Caatinga. Serve como reservatório de água e alimento para o gado e fauna silvestre durante as secas prolongadas, e suas flores alimentam polinizadores essenciais.' },
    funFacts: [
      { title: 'Nome onomatopeico', description: 'O nome "xique-xique" imita o som que os espinhos fazem ao roçar uns nos outros quando o vento sopra, segundo a tradição popular nordestina.' },
      { title: 'Alimento de emergência', description: 'Em secas severas, os sertanejos queimam os espinhos do xique-xique e cortam o caule para alimentar o gado com a polpa suculenta — prática que já salvou rebanhos inteiros.' },
      { title: 'Abrigo de corujas', description: 'Espécies de corujas-buraqueiras frequentemente nidificam na base de xique-xiques densos, aproveitando a proteção dos espinhos contra predadores.' },
    ] },

  { id: 'catingueira', biome: 'caatinga', type: 'flora', name: 'Catingueira', scientific: 'Poincianella pyramidalis', category: 'Árvore', status: 'Pouco preocupante', emoji: '🌿',
    description: 'Uma das árvores mais comuns da Caatinga. Perde as folhas na seca e reverdece rapidamente com as primeiras chuvas.',
    traits: [{ label: 'Altura', value: '4–8 m' }, { label: 'Uso', value: 'Medicinal/lenha' }, { label: 'Adaptação', value: 'Caducifólia' }, { label: 'Distribuição', value: 'Caatinga nordestina' }],
    importance: { title: 'A pioneira na recuperação da Caatinga', description: 'A catingueira é uma das primeiras espécies a colonizar áreas degradadas da Caatinga, preparando o solo para outras plantas. Sua capacidade de perder folhas na seca (caducifolia) reduz a perda de água e deposita matéria orgânica no solo, enriquecendo-o.' },
    funFacts: [
      { title: 'Deu nome ao bioma', description: 'O nome "Caatinga" vem do tupi "caa" (mata) + "tinga" (branca), referência à aparência esbranquiçada da vegetação quando árvores como a catingueira perdem as folhas na seca.' },
      { title: 'Reverdece em horas', description: 'Após as primeiras chuvas, a catingueira pode emitir folhas novas em questão de horas, transformando a paisagem cinza do sertão em verde vibrante quase da noite para o dia.' },
      { title: 'Chá medicinal', description: 'Na medicina popular nordestina, o chá da casca da catingueira é utilizado para tratar inflamações, gripes e problemas digestivos, com eficácia reconhecida por comunidades há gerações.' },
    ] },

  // ===== PAMPA — FAUNA =====
  { id: 'veado-campeiro', biome: 'pampa', type: 'fauna', name: 'Veado-campeiro', scientific: 'Ozotoceros bezoarticus', category: 'Mamífero', status: 'Quase ameaçada', emoji: '🦌',
    description: 'O único cervídeo que vive exclusivamente em campos abertos no Brasil. Sua população diminuiu drasticamente com a conversão dos campos nativos.',
    traits: [{ label: 'Peso', value: '30–40 kg' }, { label: 'Dieta', value: 'Herbívoro' }, { label: 'Habitat', value: 'Campos nativos' }, { label: 'Distribuição', value: 'Sul e Centro-Oeste do Brasil' }],
    importance: { title: 'O símbolo dos campos nativos ameaçados', description: 'O veado-campeiro é um indicador da saúde dos campos nativos do Pampa. Sua presença sinaliza áreas com vegetação campestre preservada. O pastejo seletivo contribui para a manutenção da diversidade de gramíneas e a reciclagem de nutrientes no solo.' },
    funFacts: [
      { title: 'Glândula de cheiro', description: 'Os machos possuem uma glândula odorífera entre os cascos que libera um cheiro forte, usado para marcar território e atrair fêmeas durante o período reprodutivo.' },
      { title: 'Chifres ramificados', description: 'Os machos possuem chifres com até três ramificações que são trocados anualmente. Os chifres novos crescem cobertos por veludo vascularizado.' },
      { title: 'Corredor veloz', description: 'Em campos abertos, o veado-campeiro pode atingir velocidades de até 70 km/h em corridas curtas, sendo um dos mamíferos mais rápidos do Brasil.' },
    ] },

  { id: 'graxaim', biome: 'pampa', type: 'fauna', name: 'Graxaim-do-campo', scientific: 'Lycalopex gymnocercus', category: 'Mamífero', status: 'Pouco preocupante', emoji: '🦊',
    description: 'Canídeo típico dos campos do sul, com hábitos crepusculares. É um importante dispersor de sementes no Pampa.',
    traits: [{ label: 'Peso', value: '4–7 kg' }, { label: 'Dieta', value: 'Onívoro' }, { label: 'Habitat', value: 'Campos abertos' }, { label: 'Distribuição', value: 'Sul do Brasil e países vizinhos' }],
    importance: { title: 'O dispersor de sementes dos campos sulinos', description: 'O graxaim é um importante dispersor de sementes de frutas nativas nos campos do Pampa. Ao consumir frutos como pitanga, araçá e butiá e depositar as sementes em seus excrementos, ele contribui para a regeneração da vegetação nativa e a conectividade entre fragmentos de campo.' },
    funFacts: [
      { title: 'Raposa que não é raposa', description: 'Apesar de ser chamado popularmente de raposa, o graxaim não pertence ao gênero Vulpes das raposas verdadeiras. Ele faz parte do gênero Lycalopex, exclusivo da América do Sul.' },
      { title: 'Caçador oportunista', description: 'O graxaim come praticamente de tudo: frutas, insetos, roedores, aves, ovos, répteis e até carniça. Essa versatilidade alimentar explica sua ampla distribuição.' },
      { title: 'Parceiro do quero-quero', description: 'O quero-quero frequentemente dá o alarme quando o graxaim se aproxima, alertando outras aves e animais. Essa relação involuntária beneficia todo o ecossistema campestre.' },
    ] },

  { id: 'joao-de-barro', biome: 'pampa', type: 'fauna', name: 'João-de-barro', scientific: 'Furnarius rufus', category: 'Ave', status: 'Pouco preocupante', emoji: '🐦',
    description: 'Ave que constrói ninhos de barro em formato de forno. É uma das aves mais conhecidas do sul do Brasil.',
    traits: [{ label: 'Tamanho', value: '18–20 cm' }, { label: 'Dieta', value: 'Insetívoro' }, { label: 'Ninho', value: 'Barro/argila' }, { label: 'Distribuição', value: 'Sul e Sudeste do Brasil' }],
    importance: { title: 'O arquiteto que constrói para todos', description: 'Os ninhos abandonados do joão-de-barro são reutilizados por dezenas de espécies — corujas, periquitos, morcegos, vespas e até pequenas serpentes. Ele é um verdadeiro engenheiro de ecossistemas, criando abrigos que aumentam a biodiversidade local.' },
    funFacts: [
      { title: 'Ninho à prova de chuva', description: 'O ninho de barro tem formato de forno com entrada lateral e um anteparo interno que protege os ovos do vento e da chuva. Pode pesar até 5 kg quando seco.' },
      { title: 'Construção em casal', description: 'Macho e fêmea constroem o ninho juntos, carregando centenas de bolotas de barro misturado com esterco e fibras. A obra leva de 15 a 20 dias para ficar pronta.' },
      { title: 'Nunca repete o ninho', description: 'A cada estação reprodutiva, o casal constrói um ninho novo, geralmente no topo do antigo. Postes e árvores podem acumular vários ninhos empilhados ao longo dos anos.' },
    ] },

  { id: 'quero-quero', biome: 'pampa', type: 'fauna', name: 'Quero-quero', scientific: 'Vanellus chilensis', category: 'Ave', status: 'Pouco preocupante', emoji: '🐤',
    description: 'Ave territorial que avisa com gritos estridentes quando alguém se aproxima. É considerada a sentinela dos campos.',
    traits: [{ label: 'Tamanho', value: '35–40 cm' }, { label: 'Dieta', value: 'Onívoro' }, { label: 'Habitat', value: 'Campos e áreas abertas' }, { label: 'Distribuição', value: 'América do Sul' }],
    importance: { title: 'A sentinela alerta dos campos', description: 'O quero-quero funciona como um sistema de alarme natural nos campos do Pampa. Seus gritos de alerta avisam outras aves e mamíferos sobre a presença de predadores, beneficiando toda a comunidade animal. Também é um importante controlador de insetos e larvas nos pastos.' },
    funFacts: [
      { title: 'Nome que imita o canto', description: 'O nome "quero-quero" é uma onomatopeia do seu grito estridente. Em espanhol, é chamado de "tero-tero" pelo mesmo motivo.' },
      { title: 'Defensor feroz', description: 'Para proteger o ninho, o quero-quero finge estar machucado para atrair predadores para longe dos ovos. Se isso não funciona, ataca com esporões pontiagudos nas asas.' },
      { title: 'Ninho no chão', description: 'O quero-quero faz ninhos simples diretamente no solo, em campos abertos. Os filhotes são precoces — saem andando e se alimentando sozinhos poucas horas após nascerem.' },
    ] },

  // ===== PAMPA — FLORA =====
  { id: 'capim-barba-de-bode', biome: 'pampa', type: 'flora', name: 'Capim-barba-de-bode', scientific: 'Aristida jubata', category: 'Gramínea', status: 'Pouco preocupante', emoji: '🌾',
    description: 'Gramínea nativa que forma extensos tufos nos campos do Pampa. É indicadora de campos bem conservados.',
    traits: [{ label: 'Altura', value: '30–60 cm' }, { label: 'Habitat', value: 'Campos secos' }, { label: 'Tipo', value: 'Perene' }, { label: 'Importância', value: 'Indicadora ecológica' }],
    importance: { title: 'A guardiã dos campos nativos', description: 'O capim-barba-de-bode é uma espécie indicadora de campos nativos bem conservados no Pampa. Sua presença sinaliza que o solo não foi arado ou degradado, servindo como referência para avaliação da qualidade ambiental dos campos sulinos.' },
    funFacts: [
      { title: 'Resistente ao fogo', description: 'Como muitas gramíneas campestres, o capim-barba-de-bode é adaptado a queimadas periódicas — suas touceiras rebrotam rapidamente após o fogo, que elimina competidores.' },
      { title: 'Nome pela aparência', description: 'O nome popular vem das longas aristas (pelos) das sementes, que lembram a barba de um bode quando balançam ao vento.' },
      { title: 'Biodiversidade oculta', description: 'Os campos dominados por esta gramínea abrigam uma riqueza surpreendente: em um único metro quadrado de campo nativo podem ser encontradas até 40 espécies de plantas diferentes.' },
    ] },

  { id: 'algarrobo', biome: 'pampa', type: 'flora', name: 'Algarrobo', scientific: 'Prosopis affinis', category: 'Árvore', status: 'Vulnerável', emoji: '🌳',
    description: 'Árvore típica dos campos do extremo sul, produz vagens doces consumidas pelo gado e fauna silvestre.',
    traits: [{ label: 'Altura', value: '5–10 m' }, { label: 'Fruto', value: 'Vagem doce' }, { label: 'Habitat', value: 'Campos e espinilhos' }, { label: 'Distribuição', value: 'Pampa gaúcho e Uruguai' }],
    importance: { title: 'A árvore dos espinilhais ameaçados', description: 'O algarrobo é espécie-chave dos espinilhais — formação vegetal exclusiva do Pampa e uma das mais ameaçadas do Brasil. Suas vagens doces alimentam fauna silvestre e gado, e suas raízes profundas fixam nitrogênio no solo, enriquecendo campos degradados.' },
    funFacts: [
      { title: 'Farinha de algarroba', description: 'As vagens do algarrobo podem ser moídas para produzir uma farinha doce e nutritiva, consumida há séculos por povos indígenas e ainda utilizada como substituto do cacau.' },
      { title: 'Ecossistema exclusivo', description: 'Os espinilhais onde o algarrobo vive são encontrados apenas no extremo sul do Rio Grande do Sul e no Uruguai, sendo uma das formações vegetais mais raras e ameaçadas do Brasil.' },
      { title: 'Fixa nitrogênio', description: 'Como leguminosa, o algarrobo possui bactérias simbióticas nas raízes que capturam nitrogênio do ar e o fixam no solo, fertilizando naturalmente o terreno ao seu redor.' },
    ] },

  { id: 'pitanga', biome: 'pampa', type: 'flora', name: 'Pitangueira', scientific: 'Eugenia uniflora', category: 'Árvore', status: 'Pouco preocupante', emoji: '🍒',
    description: 'Árvore frutífera nativa, cujos frutos vermelhos são consumidos in natura e usados para geleias, sucos e licores.',
    traits: [{ label: 'Altura', value: '4–10 m' }, { label: 'Fruto', value: 'Pitanga' }, { label: 'Uso', value: 'Alimentício' }, { label: 'Distribuição', value: 'Sul e Sudeste do Brasil' }],
    importance: { title: 'Uma frutífera essencial para a fauna', description: 'A pitangueira é uma das frutíferas nativas mais importantes para a fauna do Pampa, alimentando dezenas de espécies de aves, incluindo sabiás, sanhaços e bem-te-vis. Sua presença em áreas urbanas e rurais ajuda a manter a conectividade ecológica entre fragmentos de vegetação nativa.' },
    funFacts: [
      { title: 'Conhecida mundialmente', description: 'A pitangueira foi levada para outros continentes pelos portugueses e hoje é cultivada na África, Ásia e Oceania, onde é conhecida como "Brazilian cherry" ou "Surinam cherry".' },
      { title: 'Repelente natural', description: 'As folhas da pitangueira contêm óleos essenciais com propriedades repelentes contra insetos, sendo usadas popularmente para espantar moscas e mosquitos.' },
      { title: 'Fruta em formato de abóbora', description: 'A pitanga tem formato achatado com gomos que lembram uma mini abóbora. Muda de cor conforme amadurece: de verde para amarelo, laranja e finalmente vermelho-escuro.' },
    ] },

  { id: 'marcela', biome: 'pampa', type: 'flora', name: 'Marcela', scientific: 'Achyrocline satureioides', category: 'Arbusto', status: 'Pouco preocupante', emoji: '🌼',
    description: 'Planta aromática e medicinal, usada como chá digestivo e anti-inflamatório na medicina popular gaúcha.',
    traits: [{ label: 'Altura', value: '30–50 cm' }, { label: 'Uso', value: 'Medicinal' }, { label: 'Floração', value: 'Mar–Abr' }, { label: 'Distribuição', value: 'Sul do Brasil e Uruguai' }],
    importance: { title: 'A planta medicinal dos pampas', description: 'A marcela é a planta medicinal mais utilizada na cultura gaúcha, com propriedades digestivas, anti-inflamatórias e calmantes comprovadas cientificamente. Sua colheita sustentável no campo gera renda para comunidades rurais e mantém a tradição da fitoterapia popular.' },
    funFacts: [
      { title: 'Colheita na Sexta-feira Santa', description: 'Na tradição gaúcha, a marcela colhida na manhã da Sexta-feira Santa é considerada mais potente, reunindo famílias nos campos em um ritual que mistura religião e medicina popular.' },
      { title: 'Travesseiro aromático', description: 'No interior do Rio Grande do Sul, flores secas de marcela são usadas para rechear travesseiros, que ajudam a aliviar dores de cabeça e promover um sono tranquilo.' },
      { title: 'Resistente e pioneira', description: 'A marcela é uma das primeiras plantas a colonizar terrenos abandonados e beiras de estrada, preparando o solo para espécies mais exigentes — uma verdadeira pioneira ecológica.' },
    ] },

  // ===== PANTANAL — FAUNA =====
  { id: 'tuiuiu', biome: 'pantanal', type: 'fauna', name: 'Tuiuiú', scientific: 'Jabiru mycteria', category: 'Ave', status: 'Pouco preocupante', emoji: '🦩',
    description: 'Ave-símbolo do Pantanal, é uma das maiores aves do Brasil com envergadura de até 2,8 metros. Constrói enormes ninhos em árvores.',
    traits: [{ label: 'Envergadura', value: 'até 2,8 m' }, { label: 'Dieta', value: 'Peixes' }, { label: 'Habitat', value: 'Áreas alagadas' }, { label: 'Distribuição', value: 'Pantanal e América Latina' }],
    importance: { title: 'O gigante guardião das águas', description: 'O tuiuiú é um importante indicador da saúde dos ecossistemas alagados do Pantanal. Como predador de topo no ambiente aquático, controla populações de peixes e regula cadeias alimentares. Seus enormes ninhos são reutilizados por outras aves e servem de plataforma para observação.' },
    funFacts: [
      { title: 'Ninho gigante', description: 'Os ninhos do tuiuiú podem medir até 2 metros de diâmetro e 1 metro de profundidade, pesando centenas de quilos. São reutilizados e ampliados a cada ano.' },
      { title: 'Papo vermelho', description: 'O tuiuiú possui um grande papo vermelho na base do pescoço que infla durante as interações sociais e no período de cortejo, sinalizando saúde e vigor.' },
      { title: 'Pescoço termômetro', description: 'A coloração do pescoço e do papo muda de intensidade conforme a temperatura corporal e o estado emocional da ave, ficando mais vermelho durante excitação.' },
    ] },

  { id: 'arara-azul', biome: 'pantanal', type: 'fauna', name: 'Arara-azul', scientific: 'Anodorhynchus hyacinthinus', category: 'Ave', status: 'Vulnerável', emoji: '🦜',
    description: 'A maior arara do mundo, com plumagem azul-cobalto vibrante. O Pantanal é seu principal refúgio, com cerca de 5.000 indivíduos.',
    traits: [{ label: 'Tamanho', value: 'até 1 m' }, { label: 'Dieta', value: 'Frugívoro' }, { label: 'Habitat', value: 'Palmeirais' }, { label: 'Distribuição', value: 'Pantanal e Cerrado' }],
    importance: { title: 'A jardineira azul do Pantanal', description: 'A arara-azul é essencial para a dispersão de sementes de palmeiras no Pantanal, especialmente do acuri e da bocaiuva. Ao quebrar os cocos com seu bico poderoso, ela disponibiliza alimento para outras espécies menores e promove a regeneração dos palmeirais.' },
    funFacts: [
      { title: 'Bico quebra-nozes', description: 'O bico da arara-azul exerce uma pressão de mais de 70 kg/cm², capaz de quebrar cocos de palmeiras que nenhuma outra ave consegue abrir.' },
      { title: 'Casal fiel', description: 'As araras-azuis formam casais que permanecem juntos por toda a vida, voando sempre lado a lado e compartilhando o cuidado com os filhotes.' },
      { title: 'Salva por uma bióloga', description: 'A bióloga Neiva Guedes dedicou mais de 30 anos à conservação da arara-azul no Pantanal. Graças ao seu trabalho, a população cresceu de 1.500 para mais de 5.000 indivíduos.' },
    ] },

  { id: 'jacare-do-pantanal', biome: 'pantanal', type: 'fauna', name: 'Jacaré-do-pantanal', scientific: 'Caiman yacare', category: 'Réptil', status: 'Pouco preocupante', emoji: '🐊',
    description: 'O crocodiliano mais abundante do Pantanal, com população estimada em milhões. É essencial para o controle de peixes piranha.',
    traits: [{ label: 'Tamanho', value: 'até 2,5 m' }, { label: 'Dieta', value: 'Carnívoro' }, { label: 'Habitat', value: 'Rios e lagoas' }, { label: 'Distribuição', value: 'Pantanal e bacia do Paraguai' }],
    importance: { title: 'O regulador dos ecossistemas aquáticos', description: 'O jacaré-do-pantanal é fundamental para o equilíbrio dos rios e lagoas, controlando populações de piranhas e outros peixes. Durante a seca, quando se concentram em poças, seus excrementos fertilizam a água e sustentam toda a cadeia alimentar aquática.' },
    funFacts: [
      { title: 'Milhões de indivíduos', description: 'Estima-se que existam cerca de 10 milhões de jacarés no Pantanal, tornando-o a maior concentração de crocodilianos do mundo.' },
      { title: 'Temperatura define o sexo', description: 'O sexo dos filhotes é determinado pela temperatura do ninho durante a incubação: temperaturas mais altas produzem machos, e mais baixas, fêmeas.' },
      { title: 'Quase caçado até a extinção', description: 'Nas décadas de 1970 e 80, milhões de jacarés eram abatidos anualmente no Pantanal para o comércio de couro. A proibição da caça em 1967 permitiu a recuperação da população.' },
    ] },

  { id: 'capivara', biome: 'pantanal', type: 'fauna', name: 'Capivara', scientific: 'Hydrochoerus hydrochaeris', category: 'Mamífero', status: 'Pouco preocupante', emoji: '🐹',
    description: 'O maior roedor do mundo, altamente social e semiaquático. É extremamente comum no Pantanal, vivendo em grupos de até 20 indivíduos.',
    traits: [{ label: 'Peso', value: 'até 80 kg' }, { label: 'Dieta', value: 'Herbívoro' }, { label: 'Habitat', value: 'Margens de rios' }, { label: 'Distribuição', value: 'América do Sul' }],
    importance: { title: 'A engenheira das margens dos rios', description: 'A capivara desempenha um papel ecológico importante ao manter a vegetação das margens de rios e lagos aparada, prevenindo o crescimento excessivo de plantas aquáticas. Também serve como presa para onças, jacarés e sucuris, sendo fundamental na cadeia alimentar do Pantanal.' },
    funFacts: [
      { title: 'Maior roedor do mundo', description: 'Com até 80 kg, a capivara é o maior roedor vivo do planeta. Seus ancestrais pré-históricos eram ainda maiores — do tamanho de um urso.' },
      { title: 'Peixe na Quaresma', description: 'No século XVIII, a Igreja Católica classificou a capivara como "peixe" para fins de jejum quaresmal, por ser semiaquática. A tradição de consumi-la na Quaresma persiste em algumas regiões.' },
      { title: 'Vida social intensa', description: 'As capivaras vivem em grupos hierarquizados de até 20 indivíduos, com um macho dominante. São altamente sociais e frequentemente vistas junto a aves que removem parasitas de sua pele.' },
    ] },

  // ===== PANTANAL — FLORA =====
  { id: 'piuva', biome: 'pantanal', type: 'flora', name: 'Piúva', scientific: 'Handroanthus impetiginosus', category: 'Árvore', status: 'Pouco preocupante', emoji: '🌸',
    description: 'Ipê-rosa do Pantanal que transforma a paisagem com floração exuberante entre julho e setembro.',
    traits: [{ label: 'Altura', value: '10–20 m' }, { label: 'Floração', value: 'Jul–Set' }, { label: 'Uso', value: 'Ornamental' }, { label: 'Distribuição', value: 'Pantanal e Cerrado' }],
    importance: { title: 'A pintora de paisagens do Pantanal', description: 'A piúva transforma a paisagem do Pantanal com suas flores rosadas durante a estação seca, fornecendo néctar essencial para beija-flores e abelhas em um período de escassez. Sua floração sincronizada atrai turistas e movimenta a economia local.' },
    funFacts: [
      { title: 'Espetáculo anual', description: 'Entre julho e setembro, campos inteiros do Pantanal se cobrem de rosa com a floração das piúvas, criando um espetáculo que rivaliza com a floração das cerejeiras no Japão.' },
      { title: 'Floresce sem folhas', description: 'A piúva perde todas as folhas antes de florescer, concentrando toda a energia na produção de flores. O contraste das flores rosas contra os galhos secos é visualmente impactante.' },
      { title: 'Madeira resistente à água', description: 'A madeira da piúva é naturalmente resistente à umidade e aos fungos, sendo utilizada em construções rurais do Pantanal que ficam parcialmente submersas durante as cheias.' },
    ] },

  { id: 'camalote', biome: 'pantanal', type: 'flora', name: 'Camalote', scientific: 'Eichhornia crassipes', category: 'Aquática', status: 'Pouco preocupante', emoji: '💧',
    description: 'Planta aquática flutuante que forma extensos tapetes verdes sobre a água. Importante abrigo para peixes jovens.',
    traits: [{ label: 'Habitat', value: 'Águas calmas' }, { label: 'Flor', value: 'Lilás' }, { label: 'Tipo', value: 'Flutuante' }, { label: 'Distribuição', value: 'Pantanal e bacias brasileiras' }],
    importance: { title: 'O berçário flutuante do Pantanal', description: 'Os tapetes de camalote funcionam como berçários naturais para peixes jovens, que se escondem entre as raízes submersas de predadores maiores. Também absorvem nutrientes em excesso da água, atuando como filtro biológico natural nos rios e lagoas.' },
    funFacts: [
      { title: 'Crescimento explosivo', description: 'O camalote pode dobrar sua biomassa em apenas duas semanas, sendo uma das plantas de crescimento mais rápido do mundo. Sem controle natural, pode cobrir lagos inteiros.' },
      { title: 'Invasora mundial', description: 'Levada como planta ornamental para outros continentes, a Eichhornia crassipes se tornou uma das espécies invasoras mais destrutivas do planeta, obstruindo rios e reservatórios na África e Ásia.' },
      { title: 'Flor de um dia', description: 'Cada flor lilás do camalote dura apenas um dia. Após a polinização, a haste floral se curva para baixo, submergindo o fruto na água para liberar as sementes.' },
    ] },

  { id: 'acuri', biome: 'pantanal', type: 'flora', name: 'Acuri', scientific: 'Attalea phalerata', category: 'Palmeira', status: 'Pouco preocupante', emoji: '🌴',
    description: 'Palmeira abundante no Pantanal, seus frutos são alimento essencial para araras-azuis, que dependem dela para sobreviver.',
    traits: [{ label: 'Altura', value: '10–15 m' }, { label: 'Fruto', value: 'Coco-de-acuri' }, { label: 'Relação', value: 'Arara-azul' }, { label: 'Distribuição', value: 'Pantanal e Cerrado' }],
    importance: { title: 'A palmeira que sustenta a arara-azul', description: 'O acuri é a principal fonte de alimento da arara-azul no Pantanal, formando uma relação de dependência ecológica fundamental. Sem os extensos acurizais, a sobrevivência da arara-azul estaria ameaçada. Seus frutos também alimentam antas, porcos-do-mato e dezenas de outras espécies.' },
    funFacts: [
      { title: 'Coco blindado', description: 'O coco-de-acuri possui uma casca tão dura que praticamente apenas a arara-azul, com sua mandíbula poderosíssima, consegue quebrá-lo. Após a arara, roedores aproveitam os pedaços.' },
      { title: 'Palmeira resistente ao fogo', description: 'O acuri é altamente resistente a queimadas, com a base do tronco protegida por bainhas foliares densas. Após o fogo, é uma das primeiras palmeiras a se recuperar.' },
      { title: 'Sombra para o gado', description: 'Os acurizais são os pontos preferidos de descanso do gado pantaneiro durante o calor do dia, criando um sistema silvipastoril natural que existe há séculos.' },
    ] },

  { id: 'cambara', biome: 'pantanal', type: 'flora', name: 'Cambará', scientific: 'Vochysia divergens', category: 'Árvore', status: 'Pouco preocupante', emoji: '🌳',
    description: 'Árvore invasora nativa que se expande nas áreas de campo do Pantanal. Sua presença indica mudanças no regime de inundação.',
    traits: [{ label: 'Altura', value: '7–18 m' }, { label: 'Flor', value: 'Amarela' }, { label: 'Habitat', value: 'Campos inundáveis' }, { label: 'Distribuição', value: 'Pantanal' }],
    importance: { title: 'A árvore que transforma paisagens', description: 'O cambará é uma espécie pioneira que coloniza campos abertos alagáveis do Pantanal, transformando-os gradualmente em áreas florestadas (cambarazais). Esse processo natural de sucessão ecológica cria novos habitats para espécies florestais, mas preocupa pecuaristas pela perda de pastagens.' },
    funFacts: [
      { title: 'Invasora nativa', description: 'O cambará é nativo do Pantanal, mas se comporta como invasora, expandindo-se agressivamente sobre campos nativos. O aumento das cheias e mudanças no uso do solo aceleram sua expansão.' },
      { title: 'Raízes aéreas', description: 'Para sobreviver em áreas alagadas durante meses, o cambará desenvolve raízes aéreas e lenticelas no tronco que permitem a troca de gases mesmo com a base submersa.' },
      { title: 'Mel de cambará', description: 'O mel produzido a partir das flores de cambará é muito valorizado no Pantanal por seu sabor suave e aroma floral característico, sendo um produto tradicional da região.' },
    ] },
];

export function getSpeciesByBiome(biome: string, type: 'fauna' | 'flora'): Species[] {
  return species.filter((s) => s.biome === biome && s.type === type);
}

export function getSpeciesById(id: string): Species | undefined {
  return species.find((s) => s.id === id);
}
