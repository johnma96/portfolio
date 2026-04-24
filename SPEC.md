# Portfolio Website — Spec completo
# Mario Montoya | AI Engineer Portfolio

## Visión general

Portafolio personal de un Data Scientist en transición a AI Engineer.
Dark theme, animaciones fluidas, partículas interactivas, blog técnico y formulario de contacto.
Diseñado para atraer clientes freelance y posiciones de AI Engineering.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Estilos | Tailwind CSS v3 |
| Animaciones | Framer Motion v11 |
| Blog | MDX + gray-matter |
| Rutas | React Router v6 |
| Formulario | React Hook Form + Formspree (o Resend) |
| Partículas | tsparticles (react-tsparticles) |
| Íconos | Lucide React |
| Hosting | Vercel |
| CI/CD | GitHub Actions → Vercel |

---

## Paleta de colores (design tokens en tailwind.config.ts)

```ts
colors: {
  background: {
    primary: '#0a0a0f',
    secondary: '#0f0f1a',
    card: 'rgba(255,255,255,0.03)',
  },
  accent: {
    purple: '#a78bfa',
    blue: '#38bdf8',
    green: '#34d399',
    purpleDark: '#7c3aed',
  },
  text: {
    primary: '#f1f5f9',
    secondary: '#94a3b8',
    muted: '#64748b',
    dim: '#475569',
  },
  border: {
    subtle: 'rgba(255,255,255,0.06)',
    default: 'rgba(255,255,255,0.10)',
    hover: 'rgba(167,139,250,0.30)',
  }
}
```

Fuente: `Inter` (Google Fonts), weights 400/500/600/700.

---

## Estructura de carpetas

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── og-image.png
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── BlogPreview.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/
│   │   │   ├── ParticleBackground.tsx
│   │   │   ├── TechOrbit.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── GitHubRepoCard.tsx
│   │   │   ├── RepoCardSkeleton.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   ├── SkillBar.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── GradientText.tsx
│   │   └── blog/
│   │       ├── BlogLayout.tsx
│   │       └── MDXComponents.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── Blog.tsx
│   ├── content/
│   │   └── posts/
│   │       ├── airflow-gke-produccion.mdx
│   │       ├── hiperspectral-estres-fosforo.mdx
│   │       └── ds-a-ai-engineer.mdx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── config.ts
│   │   └── posts-meta.ts
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   └── useGitHubRepos.ts
│   ├── lib/
│   │   └── mdx.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Secciones — detalle completo

### 1. Navbar
- Fija en el top, `position: fixed`
- Fondo: `rgba(10,10,15,0.8)` con `backdrop-filter: blur(12px)`
- Border bottom: sutil `rgba(255,255,255,0.06)`
- Logo: "jmario.dev" con gradiente purple → blue
- Links: Proyectos, Skills, Blog (scroll suave con `react-scroll` o `scrollIntoView`)
- CTA button: "Trabajemos juntos →" con borde accent purple
- Animación de entrada: `framer-motion` fade down al montar

### 2. Hero
- Full viewport height (`min-h-screen`)
- Badge superior: punto pulsante verde + "Disponible para proyectos freelance"
- H1 grande: "Data Scientist → **AI Engineer**" con gradient text en "AI Engineer"
  - Gradiente: purple (#a78bfa) → blue (#38bdf8) → green (#34d399) en 135deg
- Subtítulo: "Especialista en sistemas ML end-to-end · Medellín, Colombia"
- Párrafo descripción (máx 500px ancho)
- Dos botones: "Ver proyectos" (primario con gradiente) y "Descargar CV" (outline)
- Stats row: 3 métricas separadas por línea vertical sutil
- Componente `TechOrbit` a la derecha (solo desktop): 3 anillos concéntricos girando
  con nodos de tecnologías (Python, SQL, GCP, BigQuery, Airflow, K8s, MLflow, LLMs)
- Fondo: `ParticleBackground` con red de partículas que reacciona al mouse
- Animaciones: cada elemento entra con stagger usando `framer-motion` variants

### 3. Projects

#### Fuente de datos: GitHub API (solo repos públicos de johnma96)

La sección de proyectos tiene **dos capas**:

1. **Repos de GitHub** — cargados dinámicamente desde la API pública de `johnma96`
2. **Proyectos curados** — definidos manualmente en `src/data/projects.ts` para proyectos
   que no tienen repo público (trabajo de empresa, tesis en curso, etc.)

#### Hook `useGitHubRepos.ts`

Crear en `src/hooks/useGitHubRepos.ts`:

```ts
const GITHUB_USERNAME = 'johnma96'
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`

// Parámetros de la petición:
// - type=public        → SOLO repos públicos (nunca privados ni de org)
// - sort=updated       → los más recientes primero
// - per_page=100       → traer todos, filtrar en cliente
// - affiliation NO se usa (por defecto solo repos del owner, no de orgs)

export function useGitHubRepos() {
  // fetch a:
  // https://api.github.com/users/johnma96/repos?type=public&sort=updated&per_page=100
  // Retorna: { repos, loading, error }
  // Filtra localmente: excluir forks (fork: true) si se desea
}
```

**IMPORTANTE — restricciones del fetch:**
- URL exacta: `https://api.github.com/users/johnma96/repos?type=public&sort=updated&per_page=100`
- `type=public` garantiza que nunca se muestren repos privados ni de organización
- No usar `/user/repos` (requiere autenticación y devuelve repos privados)
- No usar `/orgs/:org/repos` (devuelve repos de empresa)
- Si un repo tiene `fork: true`, mostrarlo es opcional — agregar un toggle en `src/data/config.ts`
- Rate limit de GitHub API sin token: 60 requests/hora. Agregar caché en `sessionStorage`
  con TTL de 5 minutos para no agotar el límite en desarrollo.

#### Caché en sessionStorage

```ts
const CACHE_KEY = 'gh_repos_johnma96'
const CACHE_TTL = 5 * 60 * 1000 // 5 minutos

// Al hacer fetch: guardar { data, timestamp } en sessionStorage
// Al leer: si timestamp + TTL > Date.now(), usar caché; si no, refetch
```

#### Modelo de datos GitHub repo → ProjectCard

```ts
interface GitHubRepo {
  id: number
  name: string                    // nombre del repo
  description: string | null      // descripción del repo
  html_url: string                // link a GitHub
  homepage: string | null         // link al demo si existe
  topics: string[]                // tags del repo (configurar en GitHub)
  language: string | null         // lenguaje principal
  stargazers_count: number
  updated_at: string
  fork: boolean
}

// Mapeo a ProjectCard:
// name        → title (formatear: guiones → espacios, capitalize)
// description → description
// html_url    → github link
// homepage    → demo link (mostrar botón "Ver demo" si no es null/'')
// topics      → tags (chips)
// language    → tag adicional destacado
// stargazers_count → mostrar si > 0
```

#### Componente `GitHubRepoCard.tsx`

Separado de `ProjectCard.tsx`. Muestra:
- Nombre del repo formateado
- Descripción (o "Sin descripción" en muted si es null)
- Badge del lenguaje principal con color según lenguaje (Python=blue, JS=yellow, etc.)
- Topics como chips
- Stars si > 0
- Botones: "GitHub →" y "Demo →" (solo si homepage existe)
- Ícono de fork si `fork: true`

#### Layout de la sección Projects

```
┌─────────────────────────────────┐
│  // Portfolio                   │
│  Proyectos destacados           │  ← proyectos curados (projects.ts)
│  [Featured card × 2 cols] [card]│
│  [card]  [card]                 │
│                                 │
│  ── divider ──                  │
│                                 │
│  // Open Source                 │
│  Repos públicos en GitHub       │  ← repos dinámicos de la API
│  [GitHubRepoCard] [GitHubRepoCard] [GitHubRepoCard] ...
│  [Ver todos en GitHub →]        │
└─────────────────────────────────┘
```

El botón "Ver todos en GitHub →" apunta a `https://github.com/johnma96?tab=repositories`.

#### Config de proyectos curados (`src/data/projects.ts`)

```ts
export const CURATED_PROJECTS = [
  {
    id: 'nps-causa-raiz',
    title: 'Modelo causa-raíz de NPS',
    type: 'MLOps · NLP · GCP',
    description: 'Pipeline end-to-end para identificar drivers de satisfacción en comentarios de clientes. Orquestado con Airflow en GKE, modelos en Vertex AI, resultados en BigQuery.',
    tags: ['Python', 'BigQuery', 'Vertex AI', 'Airflow', 'Docker', 'Kubernetes'],
    metric: '↑ 23% en drivers de churn identificados',
    github: null,           // repo privado de empresa — no se muestra link
    demo: null,
    featured: true,
  },
  {
    id: 'hiperspectral-fosforo',
    title: 'Detección de estrés de fósforo',
    type: 'Computer Vision · Research',
    description: 'Clasificación multiclase con imágenes hiperespectrales en fríjol común. Pipeline con xarray/zarr, extracción de bandas red-edge/NIR, y optimización con Optuna.',
    tags: ['Hyperspectral', 'XGBoost', 'Zarr', 'Optuna', 'xarray', 'Python'],
    github: null,           // tesis en curso, repo privado
    demo: null,
    featured: false,
  },
  {
    id: 'nps-clasificador',
    title: 'Clasificador de comentarios NPS',
    type: 'NLP · Producción',
    description: 'Asignación automática de comentarios a journey/stage/moment usando TF-IDF y similitud coseno. MVP en producción con FastAPI.',
    tags: ['TF-IDF', 'spaCy', 'FastAPI', 'Python'],
    github: null,
    demo: null,
    featured: false,
  },
]
// github: null → no mostrar botón de GitHub (proyecto de empresa o privado)
// github: 'https://github.com/johnma96/repo' → mostrar botón
```

#### Config global (`src/data/config.ts`)

```ts
export const SITE_CONFIG = {
  github: {
    username: 'johnma96',
    apiUrl: 'https://api.github.com/users/johnma96/repos?type=public&sort=updated&per_page=100',
    profileUrl: 'https://github.com/johnma96',
    showForks: false,          // no mostrar repos que son forks
    maxReposDisplayed: 6,      // mostrar máximo 6 repos en homepage
  },
  contact: {
    linkedin: 'https://linkedin.com/in/', // completar
    twitter: '',                           // completar si existe
    email: '',                             // completar
  }
}
```

#### Estado de carga

- Mientras carga la API: mostrar skeleton cards animados (pulse animation con Tailwind `animate-pulse`)
- Si la API falla: mostrar mensaje "No se pudieron cargar los repos" con botón "Ver en GitHub →"
- Si no hay repos públicos: ocultar la subsección silenciosamente

### 4. Skills
- Label: `// Stack técnico`
- Grid de 3 columnas (ML/AI — MLOps — Data & Cloud)
- Cada grupo es una card con border sutil
- Cada skill: nombre + barra animada (anima al entrar en viewport con Framer Motion)
- La barra usa gradiente purple → blue

**Skills data (`src/data/skills.ts`):**
```ts
{
  'ML / AI': [
    { name: 'Scikit-learn', level: 92 },
    { name: 'XGBoost / LightGBM', level: 88 },
    { name: 'PyTorch', level: 70 },
    { name: 'LLMs / LangChain', level: 78 },
    { name: 'Optuna', level: 75 },
  ],
  'MLOps': [
    { name: 'Vertex AI', level: 82 },
    { name: 'Apache Airflow', level: 85 },
    { name: 'Docker / Kubernetes', level: 75 },
    { name: 'MLflow / DVC', level: 72 },
    { name: 'GitLab CI/CD', level: 78 },
  ],
  'Data & Cloud': [
    { name: 'BigQuery', level: 90 },
    { name: 'GCP', level: 80 },
    { name: 'Python', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'Spark / dbt', level: 65 },
  ],
}
```

### 5. Blog preview (Home)
- Muestra los 3 posts más recientes
- Cada `BlogCard`: fecha, título, excerpt, "Leer más →"
- Hover: border azul, elevación
- Botón "Ver todos los posts →" que navega a `/blog`

### 6. Blog page (`/blog`)
- Lista completa de posts
- Cada post en MDX con frontmatter:
  ```yaml
  ---
  title: ""
  date: "2025-04-01"
  excerpt: ""
  tags: []
  readTime: "8 min"
  ---
  ```
- Render de MDX con componentes custom (código con syntax highlight via `rehype-highlight`)
- Tabla de contenidos lateral (desktop)

### 7. Contact
- Centrado, max-width 600px
- Card con glow radial sutil en el top
- Form: nombre, email, textarea mensaje
- Submit con React Hook Form + validación
- Envío a Formspree (configurar con variable de entorno `VITE_FORMSPREE_ID`)
- Social links: GitHub, LinkedIn, Twitter/X
- Mensaje de éxito animado tras envío

---

## Animaciones — convenciones Framer Motion

```ts
// Variante de entrada estándar
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

// Stagger container
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

// Uso en secciones: motion.div con whileInView + viewport={{ once: true }}
```

Todas las animaciones de sección usan `whileInView` (se disparan al entrar en viewport, una sola vez).

Las cards usan `whileHover={{ y: -4 }}` de Framer Motion en vez de CSS transform.

---

## ParticleBackground (tsparticles)

```ts
config: {
  particles: {
    number: { value: 80 },
    color: { value: ['#a78bfa', '#38bdf8'] },
    links: { enable: true, color: '#a78bfa', opacity: 0.08, distance: 120 },
    move: { enable: true, speed: 0.4 },
    size: { value: { min: 0.5, max: 1.5 } },
    opacity: { value: { min: 0.1, max: 0.4 } },
  },
  interactivity: {
    events: { onHover: { enable: true, mode: 'repulse' } },
    modes: { repulse: { distance: 80, duration: 0.4 } }
  },
  background: { color: 'transparent' }
}
```

---

## Variables de entorno

```env
# .env.local
VITE_FORMSPREE_ID=tu_id_de_formspree
```

---

## Comandos de desarrollo

```bash
npm create vite@latest portfolio -- --template react-ts
cd portfolio
npm install tailwindcss @tailwindcss/typography framer-motion react-router-dom \
  @tsparticles/react @tsparticles/slim lucide-react react-hook-form \
  @mdx-js/rollup @mdx-js/react gray-matter rehype-highlight remark-gfm
npx tailwindcss init -p
```

---

## Deploy en Vercel

1. Push del repo a GitHub
2. Conectar repo en vercel.com → "New Project"
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output dir: `dist`
6. Agregar env var `VITE_FORMSPREE_ID` en Vercel dashboard
7. Dominio custom: agregar en Settings → Domains

---

## SEO y meta tags

Agregar en `index.html`:
- `<title>Mario Montoya | AI Engineer</title>`
- `<meta name="description" content="Data Scientist → AI Engineer especializado en MLOps, GCP y sistemas ML en producción. Medellín, Colombia.">`
- Open Graph tags para LinkedIn sharing
- `<link rel="canonical" href="https://jmariomontoya.dev">`

---

## Checklist de producción

- [ ] Lighthouse score > 90 en Performance, Accessibility, SEO
- [ ] Responsive en mobile (375px), tablet (768px), desktop (1280px+)
- [ ] Formulario de contacto funcionando con Formspree
- [ ] Blog con al menos 3 posts publicados
- [ ] GitHub links de proyectos apuntando a repos reales
- [ ] Dominio personalizado configurado en Vercel
- [ ] OG image para compartir en LinkedIn
- [ ] Google Analytics o Vercel Analytics activado