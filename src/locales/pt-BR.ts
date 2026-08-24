export default {
  header: {
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    languagePt: "Mudar para português",
    languageEn: "Mudar para inglês",
    downloadCv: "Download CV",
  },
  intro: {
    badge: "🚀 Disponível para novos projetos",
    title: "Sou Mateus Félix",
    bio: "Olá, sou desenvolvedor de software com 10 anos de experiência, localizado em Santos/SP. Apaixonado por estudos e desenvolvimento de soluções em software.",
  },
  contacts: {
    location: "Localização",
    locationValue: "Santos, Brasil",
    email: "E-mail",
    telegram: "Telegram",
    linkedin: "LinkedIn",
    github: "GitHub",
    whatsapp: "WhatsApp",
  },
  skills: {
    title: "Principais skills",
    description:
      "Tive a oportunidade de trabalhar com uma variedade de tecnologias ao longo da minha carreira, além ser apaixonado por estudos. Portanto, essa lista está sempre sendo atualizada.",
    tabsPlaceholder: "[ Aqui vai entrar nosso componente de abas interativas ]",
    categories: {
      ai: "Inteligência Artificial",
      languages: "Linguagens de programação / markup / stylesheet",
      frontend: "Front-end — frameworks e bibliotecas",
      backend: "Back-end — frameworks e bibliotecas",
      protocols: "Protocolos de comunicação (construção e consumo)",
      databases: "Bancos de dados",
      cloud: "Cloud",
      deployment: "Ambiente de trabalho / deploy",
      others: "Outros",
    },
  },
  experiences: {
    title: "Experiências",
    description: "Por onde passei e o que construí ao longo da minha jornada profissional. Essa é a relação de projetos que atuei em fluxo contínuo de produção. Possuo também experiência atuando com desenvolvimento pontual em diversas stacks.",
    items: {
      bancoBv: {
        name: "Banco BV",
        role: "Engenheiro de Software",
        time: "Ago/2024 - Atualmente",
        description:
          "Em um aplicativo com 10 milhões de usuários, liderei o desenvolvimento mobile (Flutter) e web (Angular) de produtos voltados a concessão de crédito e empréstimos, ajudando a melhoria continua do código legado e o desenvolvimento de novas features com arquitetura limpa e microapps.",
      },
      wowe: {
        name: "Wowe",
        role: "Desenvolvedor Fullstack",
        time: "Nov/2023 - Ago/2024",
        description:
          "Desenvolvi 100% do frontend (Flutter e React) e 100% do backend (Go e GraphQL) de um aplicativo de rede social para compartilhamento de experiências e trendings, utilizando arquitetura limpa em ambas as frentes. Projeto baseado com o uso de ferramentas como Google Places, Elasticsearch, RabbitMQ, Kafka entre outros.",
      },
      viva: {
        name: "Viva Translate",
        role: "Desenvolvedor FrontEnd",
        time: "Nov/2023 - Fev/2024",
        description:
          "Nesse projeto, atuei como desenvolvedor Front End (React e Flutter Desktop) de um produto de tradução em tempo real de video-chamadas baseado em inteligencia artificial, com uso via Chrome extension ou o aplicativo desktop, podendo ser integrado ao Teams, Google Meet e Zoom.",
      },
      cerc: {
        name: "CERC",
        role: "Desenvolvedor FrontEnd",
        time: "Dez/2022 - Nov/2023",
        description:
          "Atuei integralmente na construção de uma plataforma web de crédito de carbono construída com Angular e o MVP mobile com Flutter, integrado com REST API.",
      },
      headson: {
        name: "HeadsOn",
        role: "Desenvolvedor Fullstack",
        time: "Jan/2022 - Dez/2022",
        description:"Trabalhando com Flutter, React e Go, atuei como desenvolvedor fullstack na construção de um aplicativo de uma instituição financeira, administrando a carteira digital dos usuários com foco em pagamentos e investimentos."
      },
      linx: {
        name: "Linx",
        role: "Desenvolvedor Fullstack",
        time: "Nov/2019 - Dez/2022",
        description:
          "Utilizando Flutter e Angular, trabalhei no desenvolvimento do banco digital Nova Conta Linx, em um projeto White Label com a integração via BFF e GraphQL, permitindo uma solução financeira completa em pagamentos. ",
      },
    },
  },
  projects: {
    title: "Portfólio GitHub",
    description: "Alguns dos meus projetos pessoais e open source.",
    bancoBv: {
      tag: "Go",
      name: "go-flight-tracker",
      description:
        "Engine de eventos de alta performance e concorrência em Go que rastreia aeronaves da API do OpenSky Network e transmite atualizações em tempo real para clientes via GraphQL Subscriptions (WebSockets).",
    },
    wowe: {
      tag: "Fullstack (Go, Flutter)",
      name: "wowe",
      description:
        "Liderei o desenvolvimento integral do projeto, baseado em uma rede social para compartilhamento de experiências e trendings.",
    },
  },
} as const;
