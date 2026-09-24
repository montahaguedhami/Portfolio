export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Blog', href: '#blog' },
  { label: 'GitHub', href: '#github' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export const projectFilters = ['All', 'AI', 'Commerce', 'Analytics', 'Platform', 'UX/UI'] as const

export const projects = [
  {
    title: "Cov'act",
    category: 'UX/UI',
    year: '2026',
    description:
      'A co-ride application designed for ESPRIT students to find, offer, and coordinate shared rides with fellow students traveling along similar routes.',
    decision:
      'I focused the experience around quick ride discovery, clear trip details, and simple coordination so students can make reliable arrangements with less friction.',
    challenge:
      'Students need to compare routes, schedules, and available seats quickly while feeling confident about who they are sharing a ride with.',
    impact: 'A clickable Figma prototype that presents the main co-ride discovery and coordination flows.',
    image: '/covact.png',
    technologies: ['Figma', 'UX Research', 'User Flows', 'UI Design', 'Prototyping'],
    tags: ['All', 'UX/UI'],
    links: {
      code: 'https://www.figma.com/design/X56bcTGjn2gUnA4cj2cSxn/Figma-basics?node-id=1669-162202&t=Rb2vrpM026isHg7K-1',
      live: 'https://www.figma.com/design/X56bcTGjn2gUnA4cj2cSxn/Figma-basics?node-id=1669-162202&t=Rb2vrpM026isHg7K-1',
      caseStudy: '#projects',
    },
    metrics: [
      { label: 'Design tool', value: 'Figma' },
      { label: 'Audience', value: 'ESPRIT students' },
      { label: 'Core flow', value: 'Find a ride' },
    ],
    decisions: [
      'Structured the main flow around searching for a ride, reviewing trip details, and contacting the driver or passengers.',
      'Made route, time, available seats, and ride information easy to scan before a student commits to a trip.',
      'Used reusable components and a clickable prototype to keep the interface consistent and communicate the experience clearly.',
    ],
  },
  {
    title: 'E-Commerce Platform',
    category: 'Commerce',
    year: '2025',
    description:
      'A headless storefront with real-time inventory, optimized checkout flows, and operational dashboards for product and support teams.',
    decision:
      'I split the storefront from the commerce API so the UX could stay fast while checkout, promotions, and inventory stayed independently deployable.',
    challenge:
      'Complex inventory and payment flows needed to stay consistent across high-traffic launch days without slowing down the browsing experience.',
    impact: 'Reduced checkout latency and cut order sync mismatches during peak traffic.',
    image: '/project-1.png',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind'],
    tags: ['All', 'Commerce', 'Platform'],
    links: {
      code: '#',
      live: '#',
      caseStudy: '/case-studies/ecommerce-platform',
    },
    metrics: [
      { label: 'Checkout latency', value: '320 ms' },
      { label: 'Conversion lift', value: '+18%' },
      { label: 'Deploy cadence', value: 'Daily' },
    ],
    decisions: [
      'Used server actions for the low-risk mutation path and cached read-only catalog data at the edge.',
      'Modeled inventory as an append-only ledger to simplify reconciliation during partial failures.',
      'Kept payment orchestration isolated so compliance and retry policy could evolve separately.',
    ],
  },
  {
    title: 'SkillMatch — HR Activity Recommender',
    category: 'AI',
    year: '2026',
    description:
      'An AI-powered employee recommendation system built for Magharebia Assurance, a leading Tunisian insurance company, to help HR teams match employees with suitable job opportunities.',
    decision:
      'As part of TechBuilders @ ESPRIT, I worked on automating the matching process so HR teams can evaluate talent more consistently and discover relevant internal candidates faster.',
    challenge:
      'The HR team matched employees to jobs manually, creating a slow process with a risk of biased decisions and overlooked talent.',
    impact: 'A web-based recommendation platform that supports faster, more structured employee-to-job matching.',
    image: '/skillhr.png',
    technologies: ['React', 'NestJS', 'MongoDB', 'FastAPI', 'Python', 'Random Forest'],
    tags: ['All', 'AI', 'Platform'],
    links: {
      code: 'https://github.com/montahaguedhami/Esprit-PIFullstackJS-4TWIN4-2026-IntelligentEmployeeRecommendationSystem',
      live: 'https://skillhr.netlify.app/login',
      caseStudy: '#projects',
    },
    metrics: [
      { label: 'Client', value: 'Magharebia Assurance' },
      { label: 'Team', value: 'TechBuilders @ ESPRIT' },
      { label: 'Core goal', value: 'Match talent to roles' },
    ],
    decisions: [
      'Combined a web platform with a Python-based recommendation service to support intelligent matching workflows.',
      'Used employee and job information to surface relevant recommendations for HR review.',
      'Focused the experience on structured, explainable recommendations that keep HR teams involved in the decision process.',
    ],
  },
  {
    title: 'AI Chat Application',
    category: 'AI',
    year: '2025',
    description:
      'A collaborative chat product with streaming responses, conversation memory, and moderation controls for enterprise teams.',
    decision:
      'The architecture treats the model as a replaceable service so prompt logic, moderation, and retrieval can evolve without a UI rewrite.',
    challenge:
      'Streaming tokens, conversation history, and moderation all needed to feel instant while still being observable and debuggable.',
    impact: 'Cut average time-to-first-token and made support escalation easier through traceable conversations.',
    image: '/conceptmedia.png',
    technologies: ['React', 'Node.js', 'WebSockets', 'OpenAI API', 'MongoDB'],
    tags: ['All', 'AI', 'Platform'],
    links: {
      code: '#',
      live: '#',
      caseStudy: '/case-studies/ai-chat',
    },
    metrics: [
      { label: 'TTFT', value: '0.8 s' },
      { label: 'Retention', value: '+24%' },
      { label: 'Uptime', value: '99.95%' },
    ],
    decisions: [
      'Used WebSockets for stream delivery and a queue-backed worker for slower enrichment tasks.',
      'Stored prompt versions explicitly so experiments could be compared against the same baseline.',
      'Added lightweight moderation before persistence to keep unsafe content out of analytics and search.',
    ],
  },
  {
    title: 'GLPI Ticket Management Dashboard',
    category: 'Platform',
    year: '2025',
    description:
      'A home interface for managing GLPI support tickets through an API, built during my summer internship to centralize incident handling and improve service responsiveness.',
    decision:
      'I focused on creating an ergonomic, functional dashboard that gives IT teams a clearer view of ticket status and helps them respond to incidents more efficiently.',
    challenge:
      'The IT team needed a practical way to centralize ticket management while keeping incident information easy to understand and act on.',
    impact: 'A functional interface that improves visibility across support tickets and strengthens the service team workflow.',
    image: '/glpi.png',
    technologies: ['React', 'Vite', 'REST API', 'GLPI'],
    tags: ['All', 'Platform'],
    links: {
      code: '#',
      live: '#',
      caseStudy: '#projects',
    },
    metrics: [
      { label: 'Project context', value: 'Summer internship' },
      { label: 'Core integration', value: 'GLPI API' },
      { label: 'Focus', value: 'Incident management' },
    ],
    decisions: [
      'Learned how IT management tools and REST APIs support real operational workflows.',
      'Built the interface with React and Vite for a responsive and maintainable experience.',
      'Collaborated with the IT team to understand user needs and translate them into practical features.',
    ],
  },
] as const

export const githubRepos = [
  {
    name: 'CHATBOT-Internship',
    description: 'Internship project exploring a self-hosted RAG chatbot with Python and local AI tooling.',
    language: 'Python',
    stars: '0',
    forks: '0',
    href: 'https://github.com/montahaguedhami/CHATBOT-Internship',
  },
  {
    name: 'Portfolio',
    description: 'This portfolio, built to bring together software engineering work, experience, and interests.',
    language: 'TypeScript',
    stars: '0',
    forks: '0',
    href: 'https://github.com/montahaguedhami/Portfolio',
  },
  {
    name: 'Employee Recommendation System',
    description: 'An AI-powered HR platform built with NestJS, React, MongoDB, FastAPI, and Random Forest.',
    language: 'JavaScript',
    stars: '0',
    forks: '0',
    href: 'https://github.com/montahaguedhami/Esprit-PIFullstackJS-4TWIN4-2026-IntelligentEmployeeRecommendationSystem',
  },
] as const

export const githubStats = [
  { label: 'Public repos', value: '17' },
  { label: 'Followers', value: '0' },
  { label: 'Profile', value: 'Open' },
] as const

export const blogPosts = [
  {
    slug: 'designing-command-palettes',
    title: 'Designing a command palette that stays fast and discoverable',
    excerpt: 'A practical breakdown of keyboard-first navigation, filtering behavior, and accessibility details.',
    date: 'July 2026',
    readingTime: '6 min',
  },
  {
    slug: 'shipping-lighthouse-95',
    title: 'How I keep portfolio sites above a 95 Lighthouse score',
    excerpt: 'A concise performance checklist covering rendering strategy, image usage, and motion budgets.',
    date: 'June 2026',
    readingTime: '5 min',
  },
] as const

export const caseStudies = [
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    summary: 'How I kept checkout reliable while making the storefront feel instant.',
  },
  {
    slug: 'ai-chat',
    title: 'AI Chat Application',
    summary: 'How I balanced low-latency streaming with moderation, memory, and prompt versioning.',
  },
] as const