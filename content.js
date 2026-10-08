/* ==========================================================================
   CONTEÚDO DO SITE — CT Ibiraquera
   Edite SOMENTE este arquivo para atualizar preços, horários, textos e contatos.
   Mantenha as aspas e as vírgulas. Veja o README.md para detalhes.
   ========================================================================== */
window.CONTENT = {
  nome: "CT Ibiraquera",
  nomeCompleto: "Centro de Treinamento Ibiraquera",
  lema: "Investir em você é investir na sua saúde!",

  contato: {
    whatsappNumero: "5551992561608", // só números, com 55 + DDD
    whatsappExibicao: "(51) 99256-1608",
    mensagemPadrao: "Olá! Vim pelo site do CT Ibiraquera e quero saber mais sobre os treinos.",
    instagramUser: "@ctibiraquera",
    instagramUrl: "https://www.instagram.com/ctibiraquera/",
    mapsUrl: "https://maps.app.goo.gl/JQrrHKUksh9DG8rT9",
    endereco: "Rua Roberto Teixeira de Souza, s/n",
    bairroCidade: "Ibiraquera, Imbituba/SC",
    cep: "88780-000",
    referencia: "Ibiraquera | Praia do Rosa"
  },

  // ---------- HERO ----------
  hero: {
    selo: "Matrículas abertas!",
    titulo: "Treine no ritmo de Ibiraquera.",
    subtitulo: "Funcional & Cross na Praia do Rosa. Treino para todos, de segunda a sábado."
  },

  diferenciais: ["Treino para todos", "De segunda a sábado", "Ambiente motivacional", "Profissionais qualificados"],

  // ---------- MODALIDADES ----------
  // cor: preto | coral | petroleo | creme. mensagem: texto do WhatsApp (opcional; se vazio não mostra botão).
  modalidades: [
    { regular: "", forte: "Funcional & Cross", frase: "Treino para todos, com kettlebells, TRX e barras no salão do CT.", cor: "preto", foto: "kettlebells", fotoAlt: "Kettlebells coloridos no salão do CT Ibiraquera" },
    { regular: "Aulão todos", forte: "SÁBADOS", frase: "Todo sábado às 8h, incluso em todos os planos.", cor: "coral", foto: "treino-amplo", fotoAlt: "Salão amplo do CT com rigs, TRX e piso de grama sintética" },
    { regular: "Plano ideal para suas", forte: "Férias", frase: "Aula avulsa, três aulas ou semanal para quem está de passagem.", cor: "petroleo", link: "#ferias", linkTexto: "Ver Plano Férias" },
    { regular: "", forte: "Personal", frase: "Valores e agenda pelo WhatsApp.", cor: "creme", mensagem: "Olá! Vim pelo site do CT Ibiraquera e quero saber sobre Personal.", linkTexto: "Falar sobre Personal" },
    { regular: "", forte: "Massagem & Liberação Miofascial", frase: "Valores e agenda pelo WhatsApp.", cor: "preto", mensagem: "Olá! Vim pelo site do CT Ibiraquera e quero saber sobre Massagem e Liberação Miofascial.", linkTexto: "Falar sobre Massagem" }
  ],

  // ---------- PLANOS (valores MENSAIS em R$) ----------
  planos: {
    nota: "Valores mensais. Aulão de sábado incluso.",
    frequencias: ["2x", "3x", "5x"], // vezes por semana
    destaque: "Anual", // recebe o selo "Menor mensalidade"
    lista: [
      { nome: "Anual",      valores: [200, 240, 280] },
      { nome: "Semestral",  valores: [225, 270, 315] },
      { nome: "Trimestral", valores: [235, 285, 330] },
      { nome: "Mensal",     valores: [250, 300, 350] }
    ],
    ferias: {
      titulo: "Plano Férias",
      subtitulo: "Para quem está de passagem pela Praia do Rosa.",
      itens: [
        { nome: "Aula avulsa", valor: 40 },
        { nome: "Três aulas",  valor: 100 },
        { nome: "Semanal",     valor: 140 }
      ],
      mensagem: "Olá! Vim pelo site do CT Ibiraquera e quero saber sobre o Plano Férias."
    }
  },

  // ---------- HORÁRIOS ----------
  // Rótulo muda por estação (ex.: "Horários outono-inverno"). Cada horário = um treino (~1h).
  horarios: {
    rotulo: "Horários primavera-verão",
    dias: [
      { dia: "Segunda", horas: ["06h", "07h", "08h", "09h", "18h", "19h"] },
      { dia: "Terça",   horas: ["07h", "08h", "09h", "18h"] },
      { dia: "Quarta",  horas: ["06h", "07h", "08h", "09h", "18h", "19h"] },
      { dia: "Quinta",  horas: ["07h", "08h", "09h", "18h"] },
      { dia: "Sexta",   horas: ["06h", "07h", "08h", "09h", "18h", "19h"] },
      { dia: "Sábado",  horas: ["08h"], especial: { "08h": "AULÃO" } }
    ]
  },

  // ---------- O ESPAÇO ----------
  espaco: {
    titulo: "O espaço",
    frases: ["Seja a melhor versão", "Coloca a desculpa nas costas e agacha"] // pintadas nas paredes do CT
  },

  // ---------- PROFESSORES ----------
  // TODO: o dono ainda não enviou foto nem bio. Quando tiver, preencha "foto" (ex.: "assets/lorenzo.webp")
  // e "bio". Se ficarem vazios, o site mostra as iniciais e esconde a bio. Não invente formação/CREF.
  // Foto dos dois juntos (arquivos assets/<arquivo>-480.webp e -640.webp). Deixe "" para esconder.
  professoresFoto: { arquivo: "professores", alt: "Lorenzo Perna e Bruna Hoffmann, professores do CT Ibiraquera, de braços cruzados e sorrindo no salão" },
  professores: [
    { nome: "Lorenzo Perna", instagram: "lorenzoperna", foto: "", bio: "" },
    { nome: "Bruna Hoffmann", instagram: "bruhoffmann", foto: "", bio: "" }
  ],

  ctaFinal: { botao: "Chamar no WhatsApp" }
};
