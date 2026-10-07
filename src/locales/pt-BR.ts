export default {
  header: {
    about: "Sobre",
    experience: "Experiências comerciais e de produção",
    education: "Educação",
    softSkills: "Soft skills",
    projects: "Projetos",
    languagePt: "Mudar para português",
    languageEn: "Mudar para inglês",
    downloadCv: "Download CV",
  },
  intro: {
    badge: "🚀 Disponível para novos projetos",
    title: "Sou Mateus Félix",
    bio: "Olá, sou desenvolvedor de software de Santos/SP com 10 anos de experiência e foco em Go, Angular, Flutter e React. Apaixonado por estudos e desenvolvimento de soluções em software.",
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
    description:
      "Por onde passei e o que construí ao longo da minha jornada profissional. Essa é a relação de projetos que atuei em fluxo contínuo de produção. Possuo também experiência atuando com desenvolvimento pontual em diversas stacks.",
    items: {
      bancoBv: {
        name: "Banco BV",
        role: "Desenvolvedor FrontEnd Sênior (Flutter/Angular)",
        time: "Ago/2024 - Atualmente",
        description:
          "Em um aplicativo com 10 milhões de usuários, liderei o desenvolvimento mobile (Flutter) e web (Angular) de produtos voltados a concessão de crédito e empréstimos, ajudando a melhoria continua do código legado e o desenvolvimento de novas features com arquitetura limpa e microapps.",
      },
      wowe: {
        name: "Wowe",
        role: "Engenheiro de Software (Go/Flutter/Angular)",
        time: "Nov/2023 - Ago/2024",
        description:
          "Desenvolvi 100% do backend (Go e GraphQL) e 100% do frontend (Angular e Flutter) de um app de rede social para compartilhar experiências e trendings, utilizando arquitetura limpa em ambas as frentes. Projeto baseado com o uso de ferramentas como GraphQL, Google Places, Elasticsearch, RabbitMQ, Kafka entre outros.",
      },
      viva: {
        name: "Viva Translate",
        role: "Engenheiro de Software (Flutter Desktop/React/Python)",
        time: "Nov/2023 - Fev/2024",
        description:
          "Atuei como especialista frontend (React e Flutter Desktop) e na integração com Python Django de um produto de tradução em tempo real de videochamadas baseado em inteligência artificial, disponível como extensão do Chrome ou aplicativo desktop, com integração ao Teams, Google Meet e Zoom.",
      },
      cerc: {
        name: "CERC",
        role: "Engenheiro Frontend (Angular)",
        time: "Dez/2022 - Nov/2023",
        description:
          "Atuei integralmente na construção de uma plataforma web de crédito de carbono construída com Angular 13 e o MVP mobile com Flutter, integrado com REST API.",
      },
      headson: {
        name: "HeadsOn",
        role: "Engenheiro de Software (Go/Angular/Flutter)",
        time: "Jan/2022 - Dez/2022",
        description:
          "Trabalhando com Go, Flutter, e Angular, atuei como desenvolvedor fullstack na construção de um aplicativo de uma instituição financeira, administrando a carteira digital dos usuários com foco em pagamentos e investimentos.",
      },
      linx: {
        name: "Linx",
        role: "Desenvolvedor Frontend (Flutter/Angular)",
        time: "Nov/2019 - Dez/2022",
        description:
          "Utilizando Angular e Flutter, trabalhei no desenvolvimento do banco digital Nova Conta Linx, em um projeto White Label com a integração via BFF e GraphQL, permitindo uma solução financeira completa em pagamentos.",
      },
    },
  },
  education: {
    title: "Educação",
    items: {
      ufabc: {
        degree: "Bacharelado em Ciência e Tecnologia",
        institution: "Universidade Federal do ABC",
        time: "2012-2017",
      },
      anhembi: {
        degree: "Análise e Desenvolvimento de Sistemas",
        institution: "Anhembi Morumbi",
        time: "2017-2020",
      },
    },
  },
  softSkills: {
    title: "Soft skills",
    items: {
      frontendCraft: {
        title: "Atenção ao detalhe no frontend",
        description:
          "Sou perfeccionista no desenvolvimento frontend. Tenho um senso crítico apurado para responsividade e para a reprodução fiel dos protótipos, buscando que cada tela esteja à altura do que foi desenhado e que a experiência se mantenha consistente em diferentes dispositivos.",
      },
      codeQuality: {
        title: "Qualidade e método no código",
        description:
          "Do backend ao frontend, ou metódico com a qualidade do código. Aplico de forma constante práticas de Clean Code e SOLID, e procuro alinhar o projeto a testes unitários para garantir a qualidade da entrega e reduzir regressões ao longo do desenvolvimento, além de sempre manter ativo a documentação do projeto, seja em documentação técnica, markdown ou em storybook de componentes para a reutilização na construção dos protótipos.",
      },
      userExperience: {
        title: "Participação na experiência do usuário",
        description:
          "Sou bastante participativo quando o alinhamento envolve a experiência do usuário e a regra do negócio, sobre como ela se traduz no desenvolvimento. Gosto de contribuir nessas discussões para que as decisões de produto se reflitam com clareza na interface, lógica de desenvolvimento e no fluxo de uso.",
      },
    },
  },
  projects: {
    title: "Portfólio GitHub",
    description: "Alguns dos meus projetos pessoais e open source de maior complexidade.",
    flightTracker: {
      tag: "Go, React",
      name: "flight-tracker",
      description:
        "Engine de eventos de alta performance e concorrência em Go e Angular que rastreia aeronaves da API do OpenSky Network e transmite atualizações em tempo real para clientes via GraphQL Subscriptions (WebSockets).",
    },
    arcadeVault: {
      tag: "Go, Angular",
      name: "arcade-vault",
      description:
        "Loja de arcades completa, construída com Angular, Go, microserviços gRPC + GraphQL, Clean Architecture, PostgreSQL (sqlc/pgx), RabbitMQ e OpenTelemetry -> Jaeger, integrado com gateway de Pagamentos Stripe.",
    },
  }, 
} as const;
