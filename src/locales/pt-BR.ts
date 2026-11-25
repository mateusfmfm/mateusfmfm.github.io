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
    downloadAts: "Download for ATS",
    downloadAtsWithoutContacts: "Download without contacts",
  },
  cv: {
    summary: "Resumo profissional",
    summaryBody:
      "Engenheiro de software com 10 anos de experiência construindo soluções de software para mobile, web e desktop. Apaixonado por aprender e por arquitetura limpa. Atualmente curso pós-graduação em Inteligência Artificial para Desenvolvedores na FIAP. Especializado em Flutter, Angular, Go, React e sistemas em tempo real, com experiência liderando o desenvolvimento de aplicações de alto tráfego que atendem milhões de usuários.",
    skills: "Habilidades técnicas",
    skillCategories: {
      languages: "Linguagens de programação",
      frontend: "Front-end",
      backend: "Back-end",
      protocols: "Protocolos de comunicação",
      databases: "Bancos de dados",
      cloud: "Cloud",
      devops: "DevOps e ferramentas",
      ai: "Inteligência artificial",
      practices: "Práticas",
    },
    experience: "Experiência profissional",
    experienceBullets: {
      bancoBv: [
        "Liderei o desenvolvimento mobile (Flutter) e web (Angular) de crédito e empréstimos em um app com 10 milhões de usuários.",
        "Melhorei o código legado e entreguei novas features com arquitetura limpa em mais de 200 microapps interligados.",
        "Usei BLoC, Riverpod, testes unitários e de widgets, e integrações REST, WebSockets, DeepLink e Push Notifications.",
        "Tomei decisões de arquitetura Angular nos microfrontends, separando as features em componentes independentes e reutilizáveis.",
        "Cobri as aplicações Angular com testes unitários em Jasmine para proteger o comportamento dos componentes entre os microfrontends.",
        "Apoiei a integração com IA: agentes com LLM e RAG no pipeline de DevOps e nos produtos, via Cursor, GitHub Actions e Gemini.",
      ],
      cerc: [
        "Construí a plataforma web de crédito de carbono em Angular 14 e o MVP mobile em Flutter.",
        "Integrei os produtos a uma REST API em Go, em arquitetura de microserviços.",
        "Defini a arquitetura de microfrontends e a componentização no Angular para manter as features isoladas e reutilizáveis.",
        "Escrevi testes unitários com Jasmine nos componentes Angular para garantir o comportamento da plataforma ao longo da evolução.",
        "Usei RabbitMQ, gRPC, GORM e Postgresql.",
      ],
      headson: [
        "Construí o app de uma fintech para carteira digital, pagamentos e investimentos, com Go, Flutter e React.",
        "Entreguei o produto com NextJS, Zustand, BLoC, TailwindCSS, GIN, GORM e OpenTelemetry.",
        "Fiz o deploy na Azure.",
      ],
    },
    projects: "GitHub Projetos",
    education: "Educação",
    softSkills: "Soft skills",
    softSkillBullets: {
      frontendCraft:
        "Atenção ao detalhe no frontend: Senso crítico apurado para responsividade e para a reprodução fiel de protótipos, garantindo uma experiência consistente entre dispositivos.",
      codeQuality:
        "Qualidade metódica de código: Aplico de forma constante os princípios de Clean Code e SOLID, mantenho testes unitários para proteger a qualidade e mantenho a documentação técnica e os Storybooks atualizados.",
      userExperience:
        "Participação na experiência do usuário: Contribuo ativamente nas discussões que alinham experiência do usuário e regras de negócio às decisões de desenvolvimento, para que isso se reflita com clareza na interface e no fluxo de uso.",
    },
  },
  intro: {
    badge: "🚀 Disponível para novos projetos",
    title: "Sou Mateus Félix",
    bio: "Olá, sou engenheiro de software de Santos/SP com 10 anos de experiência. Apaixonado por estudos e desenvolvimento de soluções em software, atualmente curso Pós-graduação em Inteligência Artificial para Desenvolvedores na FIAP.",
  },
  contacts: {
    location: "Localização",
    locationValue: "Santos, Brasil",
    email: "E-mail",
    telegram: "Telegram",
    linkedin: "LinkedIn",
    github: "GitHub",
    whatsapp: "Celular/WhatsApp",
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
        name: "Banco BV (via 200DEV)",
        role: "Desenvolvedor Sênior (Flutter/Angular)",
        time: "Ago/2024 - Atualmente",
        description:
          "Em um aplicativo com 10 milhões de usuários, liderei o desenvolvimento mobile (Flutter) e web (Angular) de produtos voltados a concessão de crédito e empréstimos, ajudando a melhoria continua do código legado e o desenvolvimento de novas features com o uso de arquitetura limpa em mais de 200 microapps interligados, utilizando BLoC e Riverpod em gerencia de estado, testes unitários e de widgets, integração REST, WebSockets, DeepLink e Push Notifications. No Angular, tomei decisões de arquitetura nos microfrontends, separando as features em componentes independentes e reutilizáveis, e cobri as aplicações com testes unitários em Jasmine para proteger o comportamento dos componentes entre os microfrontends. Apoiei a integração com IA, com agentes de LLM e RAG no pipeline de DevOps e nos produtos, via Cursor, GitHub Actions e Gemini.",
      },
      wowe: {
        name: "Wowe",
        role: "Engenheiro de Software (Go/Flutter/Angular)",
        time: "Nov/2023 - Ago/2024",
        description:
          "Desenvolvi 100% do backend (Go e GraphQL) e 100% do frontend (Angular e Flutter) de um app de rede social para compartilhar experiências e trendings, utilizando arquitetura limpa em ambas as frentes. Projeto baseado com o uso de ferramentas como GraphQL, Google Places, Elasticsearch, entre outros, integração completa com GraphQL e WebSocket e uso de Google Cloud Run para deploy e consumo de serviços.",
      },
      viva: {
        name: "Viva Translate",
        role: "Engenheiro de Software (Flutter Desktop/React/Python)",
        time: "Nov/2023 - Fev/2024",
        description:
          "Em um produto baseado em IA, atuei como especialista frontend (Flutter Desktop e React) e na integração com Python e FastAPI de um produto de tradução em tempo real de videochamadas com inteligência artificial, disponível como extensão do Chrome ou aplicativo desktop, com integração ao Teams, Google Meet e Zoom. A integração foi feita direta com código nativo através de Platform e Mathod Channels em C e Swift. A captação do áudio do usuário foi construída e enviada, via proxy, para o Whisper transcrever e para um modelo GPT traduzir em tempo real.",
      },
      cerc: {
        name: "CERC (via 200DEV)",
        role: "Engenheiro Frontend (Angular/Flutter/Go)",
        time: "Dez/2022 - Nov/2023",
        description:
          "Atuei integralmente na construção de uma plataforma web de crédito de carbono construída com Angular 14 e o MVP mobile com Flutter, integrado com REST API feito em Go, com ferramentas como RabbitMQ, gRPC, GORM, Postgresql em uma arquitetura de Microserviços. Defini a arquitetura de microfrontends e a componentização no Angular para manter as features isoladas e reutilizáveis, e escrevi testes unitários com Jasmine nos componentes Angular para garantir o comportamento da plataforma ao longo da evolução.",
      },
      headson: {
        name: "HeadsOn",
        role: "Engenheiro de Software (Flutter/Go/React)",
        time: "Jan/2022 - Dez/2022",
        description:
          "Trabalhando com Go, Flutter, e React, atuei como desenvolvedor fullstack na construção de um aplicativo de uma fintech, administrando a carteira digital dos usuários com foco em pagamentos e investimentos, com ferramentas como NextJS, Zustand, BLoC, TailwindCSS, GIN, GORM, OpenTelemetry, com o deploy em Azure.",
      },
      linx: {
        name: "Linx",
        role: "Desenvolvedor Frontend (Flutter/Angular)",
        time: "Nov/2019 - Dez/2022",
        description:
          "Utilizando Angular e Flutter, trabalhei no desenvolvimento do banco digital Nova Conta Linx, em um projeto White Label com a integração via BFF e GraphQL, permitindo uma solução financeira completa em pagamentos e o uso do mesmo sistema para diferente clientes.",
      },
      expor: {
        name: "Expor Manequins",
        role: "Desenvolvedor Fullstack (Go/Python/Node.js/React)",
        time: "Jan/2017 - Out/2019",
        description:
          "Trabalhei como desenvolvedor fullstack no suporte ao desenvolvimento do sistema interno da empresa, voltado a logística, cadeia de suprimentos, transporte e gestão de estoque, montado em Go e Python, além da plataforma web em Node.js e React.",
      },
    },
  },
  education: {
    title: "Educação",
    items: {
      fiap: {
        degree: "Pós-graduação em Inteligência Artificial para Desenvolvedores",
        institution: "FIAP",
        time: "Cursando - Out/2026 a Jul/2027",
        description:
          "Pós-graduação focada em desenvolvimento de software aplicado a Inteligência Artificial, Machine Learning e Processamento de Linguagem Natural. O curso cobre LLMs, IA generativa, fine-tuning e RAG, análise de texto, áudio e vídeo, e a implementação de modelos em nuvem com AWS e Azure.",
      },
      ufabc: {
        degree: "Bacharelado em Ciência e Tecnologia",
        institution: "Universidade Federal do ABC",
        time: "2012-2017",
      },
      anhembi: {
        degree: "Graduado em Análise e Desenvolvimento de Sistemas",
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
    description:
      "Alguns dos meus projetos pessoais e open source de maior complexidade.",
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
    setTheTheme: {
      tag: "Flutter",
      name: "flutter-set-the-theme",
      description:
        "Projeto white-label em Flutter, pronto para rodar com a flag --flavor, adaptando cores e assets para cada tema configurado.",
    },
  },
} as const;
