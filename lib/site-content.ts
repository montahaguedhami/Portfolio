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

export const projectFilters = ['All', 'AI', 'Commerce', 'Analytics', 'Platform'] as const

export const projects = [
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
    image: '/project-2.png',
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
    title: 'Analytics Dashboard',
    category: 'Analytics',
    year: '2024',
    description:
      'An observability-heavy dashboard with custom reporting, drill-down analysis, and shareable KPI snapshots for operations teams.',
    decision:
      'I pushed expensive aggregations into background jobs and served precomputed slices to keep the UI interactive under load.',
    challenge:
      'Users needed real-time insight without waiting on large analytical queries or overfetching from the backend.',
    impact: 'Reached a Lighthouse score above 95 while supporting a much higher daily active user baseline.',
    image: '/project-3.png',
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'AWS'],
    tags: ['All', 'Analytics', 'Platform'],
    links: {
      code: '#',
      live: '#',
      caseStudy: '/case-studies/analytics-dashboard',
    },
    metrics: [
      { label: 'Daily users', value: '10k+' },
      { label: 'Lighthouse', value: '96' },
      { label: 'Report load', value: '< 1 s' },
    ],
    decisions: [
      'Pre-aggregated the core metrics with incremental jobs instead of on-demand SQL fan-out.',
      'Used small reusable chart primitives so the dashboard stayed extensible and easy to theme.',
      'Separated presentation from export generation so CSV and PDF jobs could run independently.',
    ],
  },
] as const

export const githubRepos = [
  {
    name: 'design-system',
    description: 'Reusable component system with tokens, accessibility contracts, and visual regression coverage.',
    language: 'TypeScript',
    stars: '412',
    forks: '58',
    href: '#',
  },
  {
    name: 'commerce-core',
    description: 'Commerce orchestration services for checkout, promotions, and inventory synchronization.',
    language: 'Go',
    stars: '278',
    forks: '31',
    href: '#',
  },
  {
    name: 'observability-hub',
    description: 'Internal analytics pipelines and dashboards for product telemetry and release health.',
    language: 'Python',
    stars: '186',
    forks: '22',
    href: '#',
  },
] as const

export const githubStats = [
  { label: 'Contributions', value: '1.2k+' },
  { label: 'Pinned repos', value: '6' },
  { label: 'Open source', value: '14' },
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
  {
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    summary: 'How I served complex analytics without turning the UI into a bottleneck.',
  },
] as const