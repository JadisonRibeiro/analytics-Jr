export type Language = 'pt' | 'en' | 'es';

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export const translations = {
  pt: {
    nav: {
      services: 'Serviços',
      cases: 'Cases',
      process: 'Processo',
      investment: 'Investimento',
      faq: 'FAQ',
      contact: 'Entrar em contato',
      menu: 'Menu',
      openMenu: 'Abrir menu',
      close: 'Fechar',
    },
    hero: {
      eyebrow: 'Analisa Jr · Power BI',
      title1: 'Transformando',
      title2a: 'dados em ',
      title2b: 'decisões',
      description:
        'Dashboards estratégicos em Power BI que revelam insights ocultos e impulsionam o crescimento do seu negócio com precisão analítica.',
      ctaPrimary: 'Começar projeto',
      ctaSecondary: 'Ver dashboards',
      scroll: 'Role para explorar',
    },
    banner: {
      title1: 'A força dos dados',
      title2: 'ao seu alcance.',
      description:
        'Transformamos números em clareza estratégica — para que cada decisão seja sustentada por evidência, velocidade e visão de futuro.',
    },
    problem: {
      eyebrow: 'O problema',
      title1: 'Seus dados estão em todo lugar.',
      title2: 'Suas decisões em lugar nenhum.',
      description:
        'Três sintomas que silenciosamente corroem o crescimento de empresas que ainda tratam dados como um item do checklist.',
      pains: [
        {
          title: 'Decisões no achismo',
          desc: 'Você toma decisões baseado em intuição, não em evidências. Cada escolha vira um risco que poderia ser evitado.',
          impact: 'Risco invisível',
        },
        {
          title: 'Relatórios desatualizados',
          desc: 'Planilhas que levam horas para montar e chegam tarde demais. Quando os números ficam prontos, o momento já passou.',
          impact: 'Tempo perdido',
        },
        {
          title: 'Dados desconectados',
          desc: 'CRM, ERP e marketing falam línguas diferentes. A visão única do negócio simplesmente não existe.',
          impact: 'Visão fragmentada',
        },
      ],
    },
    services: {
      eyebrow: 'Serviços',
      title1: 'Análise completa,',
      title2: 'do dado bruto à decisão.',
      description: 'Seis frentes especializadas — combinadas sob medida para o momento da sua operação.',
      items: [
        {
          title: 'Dashboards interativos',
          desc: 'Painéis visuais e acionáveis que respondem às perguntas certas em tempo real.',
          tag: 'Visualização',
        },
        {
          title: 'Modelagem de dados',
          desc: 'Estruturas otimizadas em estrela, com relacionamentos robustos e performance alta.',
          tag: 'Arquitetura',
        },
        {
          title: 'ETL & integrações',
          desc: 'Pipelines que unificam ERP, CRM, planilhas e APIs em uma fonte única da verdade.',
          tag: 'Integração',
        },
        {
          title: 'Automação de relatórios',
          desc: 'Entregas automáticas para stakeholders no formato e horário certos, sem esforço manual.',
          tag: 'Operação',
        },
        {
          title: 'Governança & segurança',
          desc: 'RLS, versionamento e controle granular para proteger o ativo mais estratégico: seus dados.',
          tag: 'Segurança',
        },
        {
          title: 'Treinamento & consultoria',
          desc: 'Capacitamos seu time para operar, evoluir e extrair o máximo da sua stack de BI.',
          tag: 'Capacitação',
        },
      ],
    },
    vision: {
      eyebrow: 'Nossa visão',
      title1: 'O futuro',
      title2: 'é orientado',
      title3: 'por dados.',
      description:
        'Empresas que tomam decisão com evidência superam, em média, 5× as que operam por intuição. Nosso trabalho é encurtar a distância entre o que os seus dados já sabem e o que o seu time decide amanhã.',
      blocks: [
        { k: 'Evidência', v: 'Zero achismo na mesa de decisão.' },
        { k: 'Velocidade', v: 'Insight disponível em minutos.' },
        { k: 'Precisão', v: 'Modelagem validada ponta a ponta.' },
        { k: 'Escala', v: 'Pipelines que crescem com você.' },
      ],
      cta: 'Conversar com um especialista',
      stat1Label: 'Impacto',
      stat1Sub: 'receita destravada',
      stat2Label: 'Tempo médio',
      stat2Value: '6 semanas',
      stat2Sub: 'do go-live ao insight',
    },
    dashboards: {
      eyebrow: 'Dashboards ao vivo',
      title1: 'Painéis reais',
      title2: 'que você pode explorar.',
      description:
        'Cinco projetos entregues pela Analisa Jr — clique em qualquer um para abrir em tela cheia e navegar pelos filtros.',
      live: 'Ao vivo',
      clickToExplore: 'Clique para explorar',
      open: 'Abrir dashboard',
      bottomNote: 'Quer um painel como esses — mas pensado para o seu negócio?',
      bottomCta: 'Construir meu dashboard',
      items: [
        {
          title: 'Dashboard Comercial',
          category: 'Vendas & Receita',
          description:
            'Visão completa de pipeline, ticket médio, conversão por canal e desempenho comercial em tempo real.',
        },
        {
          title: 'Análise de Projetos',
          category: 'Gestão',
          description:
            'Acompanhamento de cronograma, status de entregas, alocação de recursos e saúde de cada projeto.',
        },
        {
          title: 'Análise de Pareto',
          category: 'Qualidade',
          description:
            'Priorização dos principais ofensores com base na regra 80/20 para foco em ações de maior impacto.',
        },
        {
          title: 'Análise Financeira',
          category: 'Controladoria',
          description:
            'DRE gerencial, fluxo de caixa, centros de custo e margem por unidade de negócio em um só painel.',
        },
        {
          title: 'Finanças Pessoais',
          category: 'Rastreamento Pessoal',
          description:
            'Controle de receitas, despesas e metas mensais com visão consolidada do patrimônio e do fluxo de caixa pessoal.',
        },
      ],
    },
    team: {
      eyebrow: 'Quem está por trás',
      title1: 'As pessoas que dão',
      title2: 'vida à Analisa.',
      description:
        'Por trás de cada dashboard existe gente obcecada por clareza. Somos a dupla que transforma dados em decisões — com técnica, cuidado e propósito.',
      members: [
        {
          name: 'Jadison Ribeiro',
          role: 'Fundador & Analista de Dados',
          bio: 'Especialista em Power BI e modelagem de dados. Lidera a estratégia analítica e a construção dos painéis que viram decisão.',
        },
        {
          name: 'Raiany',
          role: 'Co-fundadora & Analista de Negócios',
          bio: 'Conecta os dados ao negócio. Traduz necessidades reais em indicadores claros e garante que cada entrega gere impacto.',
        },
      ],
    },
    process: {
      eyebrow: 'Como funciona',
      title1: 'Um processo em três fases,',
      title2: 'desenhado para entregar impacto.',
      description: 'Da descoberta inicial à entrega contínua — sem ruído, sem retrabalho.',
      dividerLabel: 'Processo',
      steps: [
        {
          title: 'Diagnóstico',
          desc: 'Imersão no seu negócio: mapeamos fontes, KPIs prioritários e o cenário atual de tomada de decisão.',
          bullets: ['Workshop estratégico', 'Auditoria de dados', 'Priorização de KPIs'],
        },
        {
          title: 'Construção',
          desc: 'Modelagem, ETL e desenvolvimento dos dashboards em Power BI com sprints semanais e validação contínua.',
          bullets: ['Modelo estrela otimizado', 'Pipelines automatizados', 'UX refinado'],
        },
        {
          title: 'Evolução',
          desc: 'Treinamento do time, monitoria e ciclo de melhoria contínua para que os dashboards evoluam com a operação.',
          bullets: ['Onboarding dos usuários', 'Governança ativa', 'Suporte dedicado'],
        },
      ],
    },
    testimonials: {
      eyebrow: 'Depoimentos',
      title1: 'Quem convive com os dados,',
      title2: 'conta o que mudou.',
      dividerLabel: 'Clientes',
      previous: 'Anterior',
      next: 'Próximo',
      goTo: 'Ir para depoimento',
      items: [
        'Finalmente consigo olhar a operação inteira em um lugar só. A rotina ficou mais leve e as decisões, mais rápidas.',
        'A reunião semanal mudou de tom. Agora discutimos o que fazer — não mais se o número está certo.',
        'Antes era difícil confiar nos relatórios. Depois do projeto, o debate passou a ser o que fazer com os dados.',
        'O time entendeu o nosso negócio antes mesmo de abrir o Power BI. Isso fez toda a diferença no resultado.',
        'Não recebi só um painel bonito. Recebi clareza sobre quais métricas realmente importam no meu dia a dia.',
        'O suporte pós-entrega foi o que mais me surpreendeu. Continuam evoluindo o dashboard junto com a gente.',
        'Consigo abrir a visão da empresa no celular, no meio da rua. Isso mudou a forma como acompanho o negócio.',
      ],
    },
    pricing: {
      eyebrow: 'Conexões',
      title1: 'Conectamos seus dados',
      title2: 'onde quer que eles estejam.',
      description:
        'ERPs, bancos relacionais, planilhas e APIs — integramos as principais fontes do mercado em uma única base confiável, pronta para virar dashboard.',
      bottomNote: 'Não vê sua fonte aqui? Conectamos praticamente qualquer sistema com API ou banco acessível.',
      bottomCta: 'Conversar sobre integração',
      categories: {
        'ERP corporativo': 'ERP corporativo',
        'Banco em memória': 'Banco em memória',
        'Banco relacional': 'Banco relacional',
        'ERP nacional': 'ERP nacional',
        'Microsoft': 'Microsoft',
        'Open-source': 'Open-source',
        'Banco NoSQL': 'Banco NoSQL',
        'Microsoft 365': 'Microsoft 365',
        'Planilhas em nuvem': 'Planilhas em nuvem',
        'Planilhas locais': 'Planilhas locais',
        'Integrações sob demanda': 'Integrações sob demanda',
      },
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Dúvidas frequentes.',
      items: [
        {
          q: 'Quanto tempo leva para o primeiro dashboard ficar pronto?',
          a: 'Na maioria dos projetos, o primeiro dashboard funcional é entregue entre 2 e 4 semanas. Em paralelo executamos o diagnóstico e mapeamento, para que a partir do go-live as evoluções aconteçam em ciclos semanais.',
        },
        {
          q: 'Minha empresa é pequena. Faz sentido investir em BI agora?',
          a: 'Sim — justamente porque decidir no achismo custa mais caro em operações enxutas. Começamos com um escopo mínimo viável, focado em 1 ou 2 KPIs que destravam caixa ou receita, e evoluímos a partir do resultado.',
        },
        {
          q: 'Quais fontes de dados vocês integram?',
          a: 'Trabalhamos com ERPs (TOTVS, SAP, Oracle, Protheus), CRMs (Salesforce, HubSpot, Pipedrive), bancos relacionais (SQL Server, PostgreSQL, MySQL), planilhas, APIs REST e ferramentas de marketing (Google Ads, Meta, GA4).',
        },
        {
          q: 'Meus dados ficam seguros?',
          a: 'Sim. Adotamos RLS (row-level security), criptografia em trânsito e repouso, e toda a arquitetura é desenhada sob premissas de governança e LGPD. Acordos de confidencialidade fazem parte do onboarding.',
        },
        {
          q: 'Preciso ter time técnico interno para manter os dashboards?',
          a: 'Não. Entregamos soluções que funcionam "chave na mão" e treinamos o seu time para operar. Se desejar, temos planos de sustentação mensal em que cuidamos da evolução continuamente.',
        },
        {
          q: 'Como funciona a precificação na prática?',
          a: 'Os planos Starter e Pro são mensalidade fixa (com desconto no anual). O Enterprise é sob consulta, pois varia conforme volume, SLA e squad dedicado. Nunca cobramos por usuário.',
        },
        {
          q: 'Trabalham com empresas fora do Brasil?',
          a: 'Sim, atendemos clientes em toda a América Latina e em Portugal. Dashboards podem ser entregues em português, inglês ou espanhol, com suporte ao fuso local.',
        },
        {
          q: 'E se eu já tiver Power BI, mas estiver mal implementado?',
          a: 'Esse é um cenário comum. Iniciamos com uma auditoria técnica e estratégica, identificamos gargalos (modelo, performance, UX) e desenhamos um plano de reestruturação incremental — sem precisar recomeçar do zero.',
        },
      ],
    },
    cta: {
      eyebrow: 'Fale com a gente',
      title1: 'Pronto para decidir',
      title2: 'com dados?',
      description: 'Conte seu contexto em 1 minuto. Respondemos com uma leitura estratégica em até 24 horas úteis.',
      bullets: ['Diagnóstico gratuito', 'Resposta em 24h', 'Sem compromisso'],
      formBadge: 'Formulário rápido',
      successTitle: 'Mensagem recebida.',
      successDesc: 'Obrigado. Nosso time retorna em até 24 horas úteis com uma leitura do seu cenário.',
      sendAnother: 'Enviar outra mensagem',
      labels: {
        name: 'Nome',
        email: 'E-mail',
        company: 'Empresa',
        phone: 'WhatsApp com DDD',
        pain: 'Maior dor hoje',
        source: 'Onde estão seus dados hoje?',
        sourceOther: 'Qual fonte?',
        message: 'Contexto',
      },
      placeholders: {
        name: 'Seu nome',
        email: 'voce@empresa.com',
        company: 'Nome da empresa',
        phone: '(99) 99999-9999',
        select: 'Selecione…',
        sourceOther: 'Ex: sistema próprio, ClickUp, Notion, Airtable…',
        message: 'Conte em poucas linhas o desafio que você está enfrentando.',
      },
      errors: {
        name: 'Informe seu nome',
        email: 'E-mail inválido',
        company: 'Informe a empresa',
        phone: 'Informe o telefone com DDD (ex: 99 99999-9999)',
        select: 'Selecione uma opção',
        message: 'Conte um pouco do seu contexto',
        sourceOther: 'Descreva a fonte utilizada',
      },
      submit: 'Enviar mensagem',
      submitting: 'Enviando…',
      submitError: 'Não conseguimos enviar agora. Tente novamente ou fale pelo WhatsApp.',
      privacy: 'Ao enviar, você concorda com nossa política de privacidade.',
      painOptions: [
        'Decisões baseadas em achismo',
        'Relatórios demoram demais para ficar prontos',
        'Dados espalhados em múltiplas planilhas e sistemas',
        'Falta visão consolidada do negócio',
        'ERPs, CRMs e ferramentas não conversam entre si',
        'Não sei quais KPIs devo acompanhar',
        'Preciso apresentar dados para a diretoria',
        'Quero evoluir um BI que já existe',
        'Outro / Ainda não sei definir',
      ],
      sourceOptions: [
        'Planilhas (Excel / Google Sheets)',
        'ERP corporativo (TOTVS, SAP, Protheus, RM, Sankhya)',
        'ERP pequeno porte (Bling, Omie, Tiny, Conta Azul)',
        'CRM (HubSpot, RD Station, Salesforce, Pipedrive)',
        'Banco de dados (SQL Server, MySQL, PostgreSQL, Oracle)',
        'E-commerce (Shopify, VTEX, Nuvemshop, WooCommerce)',
        'Marketing digital (Google Analytics, Meta Ads, Google Ads)',
        'APIs ou sistema próprio',
        'Nuvem / Data Warehouse (AWS, BigQuery, Snowflake, Azure)',
        'Ainda não temos base estruturada',
        'Outro',
      ],
      sourceOtherValue: 'Outro',
    },
    verse: {
      quote:
        '"Olho nenhum viu, ouvido nenhum ouviu, mente nenhuma imaginou o que Deus preparou para aqueles que o amam."',
      reference: '1 Coríntios 2:9',
      tagline: 'Esta empresa ama Jesus',
    },
    footer: {
      tagline: 'Consultoria de analytics especializada em Power BI. Transformamos dados em decisão estratégica.',
      nav: 'Navegação',
      navItems: { home: 'Início', services: 'Serviços', cases: 'Cases', investment: 'Investimento' },
      company: 'Empresa',
      companyItems: { testimonials: 'Depoimentos', faq: 'FAQ', contact: 'Contato' },
      contact: 'Contato',
      country: 'Brasil',
      rights: 'Todos os direitos reservados.',
      privacy: 'Privacidade',
      terms: 'Termos',
      top: 'Topo',
    },
    whatsapp: 'Fale conosco no WhatsApp',
    scrollCta: {
      badge: 'Diagnóstico gratuito',
      title1: 'Cansado de decidir',
      title2: 'no escuro?',
      description:
        'Em 30 minutos, mapeamos onde seus dados estão travando o crescimento — e o caminho mais curto para virar esse jogo. Sem custo, sem compromisso.',
      bullets: ['Análise da sua operação atual', 'Plano de ação personalizado', 'Sem compromisso de contratação'],
      primary: 'Quero meu diagnóstico',
      dismiss: 'Agora não',
      footer: 'Resposta em até 24h • Atendimento humano',
    },
    loader: {
      name: 'ANALISA JR',
      tagline: 'Transformando dados em decisões',
      progressLabel: 'Inicializando',
    },
    languageSelector: {
      label: 'Idioma',
    },
  },

  en: {
    nav: {
      services: 'Services',
      cases: 'Cases',
      process: 'Process',
      investment: 'Pricing',
      faq: 'FAQ',
      contact: 'Get in touch',
      menu: 'Menu',
      openMenu: 'Open menu',
      close: 'Close',
    },
    hero: {
      eyebrow: 'Analisa Jr · Power BI',
      title1: 'Turning',
      title2a: 'data into ',
      title2b: 'decisions',
      description:
        'Strategic Power BI dashboards that reveal hidden insights and drive your business growth with analytical precision.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'See dashboards',
      scroll: 'Scroll to explore',
    },
    banner: {
      title1: 'The power of data',
      title2: 'at your fingertips.',
      description:
        'We turn numbers into strategic clarity — so every decision is backed by evidence, speed and foresight.',
    },
    problem: {
      eyebrow: 'The problem',
      title1: 'Your data is everywhere.',
      title2: 'Your decisions are nowhere.',
      description:
        'Three symptoms that silently erode the growth of companies still treating data as a checklist item.',
      pains: [
        {
          title: 'Decisions by guesswork',
          desc: 'You decide on intuition, not evidence. Every choice becomes a risk that could have been avoided.',
          impact: 'Invisible risk',
        },
        {
          title: 'Outdated reports',
          desc: 'Spreadsheets that take hours to build and arrive too late. When the numbers are ready, the moment is gone.',
          impact: 'Time lost',
        },
        {
          title: 'Disconnected data',
          desc: 'CRM, ERP and marketing speak different languages. A single view of the business simply does not exist.',
          impact: 'Fragmented view',
        },
      ],
    },
    services: {
      eyebrow: 'Services',
      title1: 'End-to-end analysis,',
      title2: 'from raw data to decision.',
      description: 'Six specialized fronts — combined to fit the moment of your operation.',
      items: [
        {
          title: 'Interactive dashboards',
          desc: 'Visual, actionable panels that answer the right questions in real time.',
          tag: 'Visualization',
        },
        {
          title: 'Data modeling',
          desc: 'Optimized star schemas with robust relationships and high performance.',
          tag: 'Architecture',
        },
        {
          title: 'ETL & integrations',
          desc: 'Pipelines that unify ERP, CRM, spreadsheets and APIs into a single source of truth.',
          tag: 'Integration',
        },
        {
          title: 'Report automation',
          desc: 'Automatic delivery to stakeholders in the right format and time — no manual effort.',
          tag: 'Operation',
        },
        {
          title: 'Governance & security',
          desc: 'RLS, versioning and granular control to protect your most strategic asset: your data.',
          tag: 'Security',
        },
        {
          title: 'Training & consulting',
          desc: 'We empower your team to operate, evolve and extract the most from your BI stack.',
          tag: 'Enablement',
        },
      ],
    },
    vision: {
      eyebrow: 'Our vision',
      title1: 'The future',
      title2: 'is data',
      title3: 'driven.',
      description:
        'Companies that decide with evidence outperform, on average, 5× those that operate on intuition. Our job is to shorten the gap between what your data already knows and what your team decides tomorrow.',
      blocks: [
        { k: 'Evidence', v: 'Zero guesswork at the decision table.' },
        { k: 'Speed', v: 'Insight available in minutes.' },
        { k: 'Accuracy', v: 'Modeling validated end-to-end.' },
        { k: 'Scale', v: 'Pipelines that grow with you.' },
      ],
      cta: 'Talk to a specialist',
      stat1Label: 'Impact',
      stat1Sub: 'revenue unlocked',
      stat2Label: 'Avg. time',
      stat2Value: '6 weeks',
      stat2Sub: 'from go-live to insight',
    },
    dashboards: {
      eyebrow: 'Live dashboards',
      title1: 'Real dashboards',
      title2: 'you can explore.',
      description:
        'Five projects delivered by Analisa Jr — click any one to open it full-screen and navigate the filters.',
      live: 'Live',
      clickToExplore: 'Click to explore',
      open: 'Open dashboard',
      bottomNote: 'Want a dashboard like these — built for your business?',
      bottomCta: 'Build my dashboard',
      items: [
        {
          title: 'Sales Dashboard',
          category: 'Sales & Revenue',
          description:
            'Full view of pipeline, average ticket, channel conversion and sales performance in real time.',
        },
        {
          title: 'Project Analysis',
          category: 'Management',
          description:
            'Tracking of schedules, delivery status, resource allocation and the health of each project.',
        },
        {
          title: 'Pareto Analysis',
          category: 'Quality',
          description:
            'Prioritization of the main offenders based on the 80/20 rule, focused on the actions with highest impact.',
        },
        {
          title: 'Financial Analysis',
          category: 'Controllership',
          description:
            'Managerial P&L, cash flow, cost centers and margin per business unit in a single panel.',
        },
        {
          title: 'Personal Finance',
          category: 'Personal Tracking',
          description:
            'Track income, expenses and monthly goals with a consolidated view of personal wealth and cash flow.',
        },
      ],
    },
    team: {
      eyebrow: 'Who is behind it',
      title1: 'The people who bring',
      title2: 'Analisa to life.',
      description:
        'Behind every dashboard there are people obsessed with clarity. We are the duo that turns data into decisions — with craft, care and purpose.',
      members: [
        {
          name: 'Jadison Ribeiro',
          role: 'Founder & Data Analyst',
          bio: 'Power BI and data modeling specialist. Leads the analytics strategy and builds the dashboards that turn into decisions.',
        },
        {
          name: 'Raiany',
          role: 'Co-founder & Business Analyst',
          bio: 'Connects data to the business. Translates real needs into clear metrics and makes sure every delivery drives impact.',
        },
      ],
    },
    process: {
      eyebrow: 'How it works',
      title1: 'A three-phase process,',
      title2: 'designed to deliver impact.',
      description: 'From the initial discovery to continuous delivery — no noise, no rework.',
      dividerLabel: 'Process',
      steps: [
        {
          title: 'Diagnosis',
          desc: 'Immersion in your business: we map sources, priority KPIs and the current decision-making scenario.',
          bullets: ['Strategic workshop', 'Data audit', 'KPI prioritization'],
        },
        {
          title: 'Build',
          desc: 'Modeling, ETL and Power BI dashboard development with weekly sprints and continuous validation.',
          bullets: ['Optimized star schema', 'Automated pipelines', 'Refined UX'],
        },
        {
          title: 'Evolution',
          desc: 'Team training, monitoring and a continuous improvement cycle so the dashboards evolve with operations.',
          bullets: ['User onboarding', 'Active governance', 'Dedicated support'],
        },
      ],
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title1: 'Those who live the data',
      title2: 'tell us what changed.',
      dividerLabel: 'Clients',
      previous: 'Previous',
      next: 'Next',
      goTo: 'Go to testimonial',
      items: [
        'I can finally look at the entire operation in one place. The routine became lighter and decisions, faster.',
        'The weekly meeting changed tone. Now we discuss what to do — not whether the number is right.',
        'It used to be hard to trust the reports. After the project, the debate became what to do with the data.',
        'The team understood our business even before opening Power BI. That made all the difference in the result.',
        'I did not just receive a pretty dashboard. I received clarity on which metrics really matter in my day-to-day.',
        'The post-delivery support is what surprised me most. They keep evolving the dashboard together with us.',
        'I can open the company view on my phone, in the middle of the street. That changed the way I track the business.',
      ],
    },
    pricing: {
      eyebrow: 'Connections',
      title1: 'We connect your data',
      title2: 'wherever it lives.',
      description:
        'ERPs, relational databases, spreadsheets and APIs — we integrate the main sources of the market into a single reliable base, ready to become a dashboard.',
      bottomNote: 'Do not see your source here? We connect virtually any system with an API or accessible database.',
      bottomCta: 'Talk about integration',
      categories: {
        'ERP corporativo': 'Enterprise ERP',
        'Banco em memória': 'In-memory database',
        'Banco relacional': 'Relational database',
        'ERP nacional': 'Local ERP',
        'Microsoft': 'Microsoft',
        'Open-source': 'Open-source',
        'Banco NoSQL': 'NoSQL database',
        'Microsoft 365': 'Microsoft 365',
        'Planilhas em nuvem': 'Cloud spreadsheets',
        'Planilhas locais': 'Local spreadsheets',
        'Integrações sob demanda': 'On-demand integrations',
      },
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions.',
      items: [
        {
          q: 'How long does it take to deliver the first dashboard?',
          a: 'In most projects, the first working dashboard is delivered in 2 to 4 weeks. In parallel we run the diagnosis and mapping so that, after go-live, evolutions happen in weekly cycles.',
        },
        {
          q: 'My company is small. Does it make sense to invest in BI now?',
          a: 'Yes — precisely because guesswork costs more in lean operations. We start with a minimum viable scope focused on 1 or 2 KPIs that unlock cash or revenue, and evolve from there.',
        },
        {
          q: 'Which data sources do you integrate?',
          a: 'We work with ERPs (TOTVS, SAP, Oracle, Protheus), CRMs (Salesforce, HubSpot, Pipedrive), relational databases (SQL Server, PostgreSQL, MySQL), spreadsheets, REST APIs and marketing tools (Google Ads, Meta, GA4).',
        },
        {
          q: 'Is my data safe?',
          a: 'Yes. We use RLS (row-level security), encryption in transit and at rest, and the whole architecture is designed around governance and LGPD/GDPR. NDAs are part of the onboarding.',
        },
        {
          q: 'Do I need an internal technical team to maintain the dashboards?',
          a: 'No. We deliver turnkey solutions and train your team to operate. If you want, we have monthly maintenance plans where we evolve everything continuously.',
        },
        {
          q: 'How does pricing actually work?',
          a: 'Starter and Pro plans are fixed monthly fees (with discount on the annual plan). Enterprise is by quote, since it depends on volume, SLA and dedicated squad. We never charge per user.',
        },
        {
          q: 'Do you work with companies outside Brazil?',
          a: 'Yes, we serve clients across Latin America and in Portugal. Dashboards can be delivered in Portuguese, English or Spanish, with support in the local time zone.',
        },
        {
          q: 'What if I already have Power BI, but it is poorly implemented?',
          a: 'That is a common scenario. We start with a technical and strategic audit, identify bottlenecks (model, performance, UX) and design an incremental restructuring plan — no need to start over.',
        },
      ],
    },
    cta: {
      eyebrow: 'Talk to us',
      title1: 'Ready to decide',
      title2: 'with data?',
      description:
        'Tell us your context in 1 minute. We respond with a strategic reading within 24 business hours.',
      bullets: ['Free diagnosis', 'Reply within 24h', 'No commitment'],
      formBadge: 'Quick form',
      successTitle: 'Message received.',
      successDesc: 'Thank you. Our team will reply within 24 business hours with a reading of your scenario.',
      sendAnother: 'Send another message',
      labels: {
        name: 'Name',
        email: 'E-mail',
        company: 'Company',
        phone: 'Phone (with area code)',
        pain: 'Biggest pain today',
        source: 'Where is your data today?',
        sourceOther: 'Which source?',
        message: 'Context',
      },
      placeholders: {
        name: 'Your name',
        email: 'you@company.com',
        company: 'Company name',
        phone: '+1 555 555 5555',
        select: 'Select…',
        sourceOther: 'E.g. proprietary system, ClickUp, Notion, Airtable…',
        message: 'In a few lines, describe the challenge you are facing.',
      },
      errors: {
        name: 'Please enter your name',
        email: 'Invalid e-mail',
        company: 'Please enter the company',
        phone: 'Please enter your phone (with area code)',
        select: 'Please select an option',
        message: 'Please share a bit of context',
        sourceOther: 'Describe the source you use',
      },
      submit: 'Send message',
      submitting: 'Sending…',
      submitError: 'We could not send right now. Please try again or reach us on WhatsApp.',
      privacy: 'By submitting, you agree to our privacy policy.',
      painOptions: [
        'Decisions based on guesswork',
        'Reports take too long to be ready',
        'Data scattered across many spreadsheets and systems',
        'Lack of a consolidated view of the business',
        'ERPs, CRMs and tools that do not talk to each other',
        'I do not know which KPIs to track',
        'I need to present data to the board',
        'I want to evolve an existing BI',
        'Other / Not sure yet',
      ],
      sourceOptions: [
        'Spreadsheets (Excel / Google Sheets)',
        'Enterprise ERP (TOTVS, SAP, Protheus, RM, Sankhya)',
        'Small business ERP (Bling, Omie, Tiny, Conta Azul)',
        'CRM (HubSpot, RD Station, Salesforce, Pipedrive)',
        'Database (SQL Server, MySQL, PostgreSQL, Oracle)',
        'E-commerce (Shopify, VTEX, Nuvemshop, WooCommerce)',
        'Digital marketing (Google Analytics, Meta Ads, Google Ads)',
        'APIs or proprietary system',
        'Cloud / Data Warehouse (AWS, BigQuery, Snowflake, Azure)',
        'We do not have a structured base yet',
        'Other',
      ],
      sourceOtherValue: 'Other',
    },
    verse: {
      quote:
        '"No eye has seen, no ear has heard, no mind has conceived what God has prepared for those who love him."',
      reference: '1 Corinthians 2:9',
      tagline: 'This company loves Jesus',
    },
    footer: {
      tagline:
        'Analytics consultancy specialized in Power BI. We turn data into strategic decisions.',
      nav: 'Navigation',
      navItems: { home: 'Home', services: 'Services', cases: 'Cases', investment: 'Pricing' },
      company: 'Company',
      companyItems: { testimonials: 'Testimonials', faq: 'FAQ', contact: 'Contact' },
      contact: 'Contact',
      country: 'Brazil',
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      top: 'Top',
    },
    whatsapp: 'Talk to us on WhatsApp',
    scrollCta: {
      badge: 'Free diagnosis',
      title1: 'Tired of deciding',
      title2: 'in the dark?',
      description:
        'In 30 minutes, we map where your data is blocking growth — and the shortest path to flip that. No cost, no commitment.',
      bullets: ['Analysis of your current operation', 'Personalized action plan', 'No contract commitment'],
      primary: 'I want my diagnosis',
      dismiss: 'Not now',
      footer: 'Reply within 24h • Human support',
    },
    loader: {
      name: 'ANALISA JR',
      tagline: 'Turning data into decisions',
      progressLabel: 'Initializing',
    },
    languageSelector: {
      label: 'Language',
    },
  },

  es: {
    nav: {
      services: 'Servicios',
      cases: 'Casos',
      process: 'Proceso',
      investment: 'Precios',
      faq: 'FAQ',
      contact: 'Contactar',
      menu: 'Menú',
      openMenu: 'Abrir menú',
      close: 'Cerrar',
    },
    hero: {
      eyebrow: 'Analisa Jr · Power BI',
      title1: 'Convirtiendo',
      title2a: 'datos en ',
      title2b: 'decisiones',
      description:
        'Dashboards estratégicos en Power BI que revelan insights ocultos e impulsan el crecimiento de tu negocio con precisión analítica.',
      ctaPrimary: 'Iniciar proyecto',
      ctaSecondary: 'Ver dashboards',
      scroll: 'Desplázate para explorar',
    },
    banner: {
      title1: 'La fuerza de los datos',
      title2: 'a tu alcance.',
      description:
        'Transformamos números en claridad estratégica — para que cada decisión esté sustentada por evidencia, velocidad y visión de futuro.',
    },
    problem: {
      eyebrow: 'El problema',
      title1: 'Tus datos están en todas partes.',
      title2: 'Tus decisiones en ninguna.',
      description:
        'Tres síntomas que erosionan silenciosamente el crecimiento de empresas que aún tratan los datos como un ítem de checklist.',
      pains: [
        {
          title: 'Decisiones por intuición',
          desc: 'Tomas decisiones por intuición, no por evidencia. Cada elección se vuelve un riesgo que se podría haber evitado.',
          impact: 'Riesgo invisible',
        },
        {
          title: 'Reportes desactualizados',
          desc: 'Planillas que tardan horas en armarse y llegan tarde. Cuando los números están listos, el momento ya pasó.',
          impact: 'Tiempo perdido',
        },
        {
          title: 'Datos desconectados',
          desc: 'CRM, ERP y marketing hablan idiomas distintos. La visión única del negocio simplemente no existe.',
          impact: 'Visión fragmentada',
        },
      ],
    },
    services: {
      eyebrow: 'Servicios',
      title1: 'Análisis completo,',
      title2: 'del dato bruto a la decisión.',
      description: 'Seis frentes especializados — combinados a medida del momento de tu operación.',
      items: [
        {
          title: 'Dashboards interactivos',
          desc: 'Paneles visuales y accionables que responden a las preguntas correctas en tiempo real.',
          tag: 'Visualización',
        },
        {
          title: 'Modelado de datos',
          desc: 'Estructuras optimizadas en estrella, con relaciones robustas y alto rendimiento.',
          tag: 'Arquitectura',
        },
        {
          title: 'ETL & integraciones',
          desc: 'Pipelines que unifican ERP, CRM, planillas y APIs en una única fuente de verdad.',
          tag: 'Integración',
        },
        {
          title: 'Automatización de reportes',
          desc: 'Entregas automáticas a los stakeholders en el formato y horario correctos, sin esfuerzo manual.',
          tag: 'Operación',
        },
        {
          title: 'Gobernanza & seguridad',
          desc: 'RLS, versionado y control granular para proteger el activo más estratégico: tus datos.',
          tag: 'Seguridad',
        },
        {
          title: 'Capacitación & consultoría',
          desc: 'Empoderamos a tu equipo para operar, evolucionar y extraer el máximo de tu stack de BI.',
          tag: 'Capacitación',
        },
      ],
    },
    vision: {
      eyebrow: 'Nuestra visión',
      title1: 'El futuro',
      title2: 'es orientado',
      title3: 'por datos.',
      description:
        'Las empresas que deciden con evidencia superan, en promedio, 5× a las que operan por intuición. Nuestro trabajo es acortar la distancia entre lo que tus datos ya saben y lo que tu equipo decide mañana.',
      blocks: [
        { k: 'Evidencia', v: 'Cero intuición en la mesa de decisión.' },
        { k: 'Velocidad', v: 'Insight disponible en minutos.' },
        { k: 'Precisión', v: 'Modelado validado de punta a punta.' },
        { k: 'Escala', v: 'Pipelines que crecen contigo.' },
      ],
      cta: 'Hablar con un especialista',
      stat1Label: 'Impacto',
      stat1Sub: 'ingresos desbloqueados',
      stat2Label: 'Tiempo promedio',
      stat2Value: '6 semanas',
      stat2Sub: 'del go-live al insight',
    },
    dashboards: {
      eyebrow: 'Dashboards en vivo',
      title1: 'Paneles reales',
      title2: 'que puedes explorar.',
      description:
        'Cinco proyectos entregados por Analisa Jr — haz clic en cualquiera para abrir en pantalla completa y navegar por los filtros.',
      live: 'En vivo',
      clickToExplore: 'Haz clic para explorar',
      open: 'Abrir dashboard',
      bottomNote: '¿Quieres un panel como estos — pensado para tu negocio?',
      bottomCta: 'Construir mi dashboard',
      items: [
        {
          title: 'Dashboard Comercial',
          category: 'Ventas & Ingresos',
          description:
            'Visión completa de pipeline, ticket promedio, conversión por canal y desempeño comercial en tiempo real.',
        },
        {
          title: 'Análisis de Proyectos',
          category: 'Gestión',
          description:
            'Seguimiento de cronograma, estado de entregas, asignación de recursos y salud de cada proyecto.',
        },
        {
          title: 'Análisis de Pareto',
          category: 'Calidad',
          description:
            'Priorización de los principales ofensores según la regla 80/20 para enfocarse en las acciones de mayor impacto.',
        },
        {
          title: 'Análisis Financiero',
          category: 'Controladuría',
          description:
            'Estado de resultados, flujo de caja, centros de costo y margen por unidad de negocio en un solo panel.',
        },
        {
          title: 'Finanzas Personales',
          category: 'Seguimiento Personal',
          description:
            'Control de ingresos, gastos y metas mensuales con visión consolidada del patrimonio y del flujo de caja personal.',
        },
      ],
    },
    team: {
      eyebrow: 'Quién está detrás',
      title1: 'Las personas que dan',
      title2: 'vida a Analisa.',
      description:
        'Detrás de cada dashboard hay gente obsesionada con la claridad. Somos el dúo que convierte datos en decisiones — con técnica, cuidado y propósito.',
      members: [
        {
          name: 'Jadison Ribeiro',
          role: 'Fundador & Analista de Datos',
          bio: 'Especialista en Power BI y modelado de datos. Lidera la estrategia analítica y construye los paneles que se vuelven decisión.',
        },
        {
          name: 'Raiany',
          role: 'Cofundadora & Analista de Negocios',
          bio: 'Conecta los datos con el negocio. Traduce necesidades reales en indicadores claros y asegura que cada entrega genere impacto.',
        },
      ],
    },
    process: {
      eyebrow: 'Cómo funciona',
      title1: 'Un proceso en tres fases,',
      title2: 'diseñado para generar impacto.',
      description: 'Del descubrimiento inicial a la entrega continua — sin ruido, sin retrabajo.',
      dividerLabel: 'Proceso',
      steps: [
        {
          title: 'Diagnóstico',
          desc: 'Inmersión en tu negocio: mapeamos fuentes, KPIs prioritarios y el escenario actual de toma de decisión.',
          bullets: ['Workshop estratégico', 'Auditoría de datos', 'Priorización de KPIs'],
        },
        {
          title: 'Construcción',
          desc: 'Modelado, ETL y desarrollo de los dashboards en Power BI con sprints semanales y validación continua.',
          bullets: ['Modelo estrella optimizado', 'Pipelines automatizados', 'UX refinada'],
        },
        {
          title: 'Evolución',
          desc: 'Capacitación del equipo, monitoreo y ciclo de mejora continua para que los dashboards evolucionen con la operación.',
          bullets: ['Onboarding de los usuarios', 'Gobernanza activa', 'Soporte dedicado'],
        },
      ],
    },
    testimonials: {
      eyebrow: 'Testimonios',
      title1: 'Quienes conviven con los datos,',
      title2: 'cuentan lo que cambió.',
      dividerLabel: 'Clientes',
      previous: 'Anterior',
      next: 'Siguiente',
      goTo: 'Ir al testimonio',
      items: [
        'Por fin puedo ver toda la operación en un solo lugar. La rutina se volvió más liviana y las decisiones, más rápidas.',
        'La reunión semanal cambió de tono. Ahora discutimos qué hacer — no si el número está bien.',
        'Antes era difícil confiar en los reportes. Después del proyecto, el debate pasó a ser qué hacer con los datos.',
        'El equipo entendió nuestro negocio antes incluso de abrir Power BI. Eso marcó la diferencia en el resultado.',
        'No recibí solo un panel bonito. Recibí claridad sobre qué métricas realmente importan en mi día a día.',
        'El soporte post-entrega fue lo que más me sorprendió. Siguen evolucionando el dashboard junto a nosotros.',
        'Puedo abrir la visión de la empresa en el móvil, en medio de la calle. Eso cambió cómo sigo el negocio.',
      ],
    },
    pricing: {
      eyebrow: 'Conexiones',
      title1: 'Conectamos tus datos',
      title2: 'donde sea que estén.',
      description:
        'ERPs, bases de datos relacionales, planillas y APIs — integramos las principales fuentes del mercado en una sola base confiable, lista para volverse dashboard.',
      bottomNote: '¿No ves tu fuente aquí? Conectamos prácticamente cualquier sistema con API o base accesible.',
      bottomCta: 'Hablar sobre integración',
      categories: {
        'ERP corporativo': 'ERP corporativo',
        'Banco em memória': 'Base en memoria',
        'Banco relacional': 'Base relacional',
        'ERP nacional': 'ERP local',
        'Microsoft': 'Microsoft',
        'Open-source': 'Open-source',
        'Banco NoSQL': 'Base NoSQL',
        'Microsoft 365': 'Microsoft 365',
        'Planilhas em nuvem': 'Planillas en la nube',
        'Planilhas locais': 'Planillas locales',
        'Integrações sob demanda': 'Integraciones bajo demanda',
      },
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Preguntas frecuentes.',
      items: [
        {
          q: '¿Cuánto tarda en estar listo el primer dashboard?',
          a: 'En la mayoría de los proyectos, el primer dashboard funcional se entrega entre 2 y 4 semanas. En paralelo ejecutamos el diagnóstico y mapeo, para que a partir del go-live las evoluciones ocurran en ciclos semanales.',
        },
        {
          q: 'Mi empresa es pequeña. ¿Tiene sentido invertir en BI ahora?',
          a: 'Sí — justamente porque decidir por intuición cuesta más caro en operaciones pequeñas. Empezamos con un alcance mínimo viable, enfocado en 1 o 2 KPIs que destraban caja o ingreso, y evolucionamos desde el resultado.',
        },
        {
          q: '¿Qué fuentes de datos integran?',
          a: 'Trabajamos con ERPs (TOTVS, SAP, Oracle, Protheus), CRMs (Salesforce, HubSpot, Pipedrive), bases relacionales (SQL Server, PostgreSQL, MySQL), planillas, APIs REST y herramientas de marketing (Google Ads, Meta, GA4).',
        },
        {
          q: '¿Mis datos están seguros?',
          a: 'Sí. Usamos RLS (row-level security), cifrado en tránsito y reposo, y toda la arquitectura está diseñada bajo premisas de gobernanza y LGPD/GDPR. Los acuerdos de confidencialidad son parte del onboarding.',
        },
        {
          q: '¿Necesito un equipo técnico interno para mantener los dashboards?',
          a: 'No. Entregamos soluciones llave en mano y capacitamos a tu equipo para operar. Si lo deseas, tenemos planes de mantenimiento mensual donde nos encargamos de la evolución continuamente.',
        },
        {
          q: '¿Cómo funciona el precio en la práctica?',
          a: 'Los planes Starter y Pro son mensualidad fija (con descuento en el anual). El Enterprise es bajo consulta, ya que varía según volumen, SLA y squad dedicado. Nunca cobramos por usuario.',
        },
        {
          q: '¿Trabajan con empresas fuera de Brasil?',
          a: 'Sí, atendemos clientes en toda América Latina y en Portugal. Los dashboards se pueden entregar en portugués, inglés o español, con soporte en el huso local.',
        },
        {
          q: '¿Y si ya tengo Power BI, pero está mal implementado?',
          a: 'Es un escenario común. Iniciamos con una auditoría técnica y estratégica, identificamos cuellos de botella (modelo, performance, UX) y diseñamos un plan de reestructuración incremental — sin necesidad de empezar de cero.',
        },
      ],
    },
    cta: {
      eyebrow: 'Habla con nosotros',
      title1: '¿Listo para decidir',
      title2: 'con datos?',
      description: 'Cuéntanos tu contexto en 1 minuto. Respondemos con una lectura estratégica en hasta 24 horas hábiles.',
      bullets: ['Diagnóstico gratuito', 'Respuesta en 24h', 'Sin compromiso'],
      formBadge: 'Formulario rápido',
      successTitle: 'Mensaje recibido.',
      successDesc: 'Gracias. Nuestro equipo te responde en hasta 24 horas hábiles con una lectura de tu escenario.',
      sendAnother: 'Enviar otro mensaje',
      labels: {
        name: 'Nombre',
        email: 'E-mail',
        company: 'Empresa',
        phone: 'WhatsApp con código',
        pain: 'Mayor dolor hoy',
        source: '¿Dónde están tus datos hoy?',
        sourceOther: '¿Qué fuente?',
        message: 'Contexto',
      },
      placeholders: {
        name: 'Tu nombre',
        email: 'tu@empresa.com',
        company: 'Nombre de la empresa',
        phone: '(99) 99999-9999',
        select: 'Selecciona…',
        sourceOther: 'Ej: sistema propio, ClickUp, Notion, Airtable…',
        message: 'Cuéntanos en pocas líneas el desafío que estás enfrentando.',
      },
      errors: {
        name: 'Ingresa tu nombre',
        email: 'E-mail inválido',
        company: 'Ingresa la empresa',
        phone: 'Ingresa el teléfono con código',
        select: 'Selecciona una opción',
        message: 'Cuéntanos un poco de tu contexto',
        sourceOther: 'Describe la fuente que usas',
      },
      submit: 'Enviar mensaje',
      submitting: 'Enviando…',
      submitError: 'No pudimos enviar ahora. Intenta nuevamente o háblanos por WhatsApp.',
      privacy: 'Al enviar, aceptas nuestra política de privacidad.',
      painOptions: [
        'Decisiones basadas en intuición',
        'Los reportes tardan demasiado en estar listos',
        'Datos dispersos en múltiples planillas y sistemas',
        'Falta visión consolidada del negocio',
        'ERPs, CRMs y herramientas no se hablan entre sí',
        'No sé qué KPIs debo seguir',
        'Necesito presentar datos a la dirección',
        'Quiero evolucionar un BI ya existente',
        'Otro / Aún no lo defino',
      ],
      sourceOptions: [
        'Planillas (Excel / Google Sheets)',
        'ERP corporativo (TOTVS, SAP, Protheus, RM, Sankhya)',
        'ERP pequeño (Bling, Omie, Tiny, Conta Azul)',
        'CRM (HubSpot, RD Station, Salesforce, Pipedrive)',
        'Base de datos (SQL Server, MySQL, PostgreSQL, Oracle)',
        'E-commerce (Shopify, VTEX, Nuvemshop, WooCommerce)',
        'Marketing digital (Google Analytics, Meta Ads, Google Ads)',
        'APIs o sistema propio',
        'Nube / Data Warehouse (AWS, BigQuery, Snowflake, Azure)',
        'Aún no tenemos base estructurada',
        'Otro',
      ],
      sourceOtherValue: 'Otro',
    },
    verse: {
      quote:
        '"Ningún ojo ha visto, ningún oído ha oído, ninguna mente ha imaginado lo que Dios ha preparado para los que le aman."',
      reference: '1 Corintios 2:9',
      tagline: 'Esta empresa ama a Jesús',
    },
    footer: {
      tagline:
        'Consultoría de analytics especializada en Power BI. Transformamos datos en decisión estratégica.',
      nav: 'Navegación',
      navItems: { home: 'Inicio', services: 'Servicios', cases: 'Casos', investment: 'Precios' },
      company: 'Empresa',
      companyItems: { testimonials: 'Testimonios', faq: 'FAQ', contact: 'Contacto' },
      contact: 'Contacto',
      country: 'Brasil',
      rights: 'Todos los derechos reservados.',
      privacy: 'Privacidad',
      terms: 'Términos',
      top: 'Arriba',
    },
    whatsapp: 'Habla con nosotros por WhatsApp',
    scrollCta: {
      badge: 'Diagnóstico gratuito',
      title1: '¿Cansado de decidir',
      title2: 'a oscuras?',
      description:
        'En 30 minutos mapeamos dónde tus datos están frenando el crecimiento — y el camino más corto para revertirlo. Sin costo, sin compromiso.',
      bullets: ['Análisis de tu operación actual', 'Plan de acción personalizado', 'Sin compromiso de contratación'],
      primary: 'Quiero mi diagnóstico',
      dismiss: 'Ahora no',
      footer: 'Respuesta en hasta 24h • Atención humana',
    },
    loader: {
      name: 'ANALISA JR',
      tagline: 'Convirtiendo datos en decisiones',
      progressLabel: 'Inicializando',
    },
    languageSelector: {
      label: 'Idioma',
    },
  },
} as const;

export type Translations = typeof translations.pt;
