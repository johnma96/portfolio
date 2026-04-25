# Portfolio — Estado del desarrollo

## Stack
React 18 + TypeScript + Vite 6 + Tailwind CSS v3 + Framer Motion v11 + MDX

## Rama activa
`develop` — nunca commitear directamente en `main`

## Comandos
```bash
npm run dev       # servidor local en http://localhost:5173
npm run build     # build de producción (output en /dist)
npx tsc --noEmit  # verificar TypeScript sin compilar
```

---

## ✅ Completado

### Infraestructura
- [x] Git inicializado con rama `main` + estructura `develop` / `feature/*`
- [x] `.gitignore` para Node/Vite
- [x] `postcss.config.cjs` para Tailwind v3
- [x] Tailwind config con design tokens completos (colores, fuentes)
- [x] `src/styles/globals.css` con Inter font, scrollbar custom, utilidades gradient
- [x] `vite.config.ts` con plugin MDX (remark-gfm + rehype-highlight)

### Componentes implementados
- [x] `Navbar` — fixed, blur, scroll-to-section, funciona desde `/blog` también
- [x] `Footer` — logo, copyright, links sociales
- [x] `Hero` — full-viewport, badge pulsante, H1 con gradient, TechOrbit, ParticleBackground, stats
- [x] `ParticleBackground` — tsparticles v3 con `initParticlesEngine` + `loadSlim`
- [x] `TechOrbit` — 3 anillos concéntricos con Framer Motion, nodos contra-rotantes
- [x] `Projects` — proyectos curados + repos GitHub API con caché sessionStorage 5min
- [x] `GitHubRepoCard` + `ProjectCard` + `RepoCardSkeleton`
- [x] `Skills` — grid 3 columnas, `SkillBar` con animación whileInView
- [x] `BlogPreview` — últimos 3 posts con `BlogCard`
- [x] `BlogCard` — fecha, excerpt, tags, link a post individual
- [x] `BlogLayout` — prose-invert con header de metadatos del post
- [x] `MDXComponents` — h1-h3, p, a, code, pre, blockquote, ul/ol con estilos dark
- [x] `Contact` — React Hook Form, validación, estado de éxito animado
- [x] `SocialIcons` — SVGs inline de GitHub y LinkedIn (lucide-react los eliminó)

### Páginas y rutas
- [x] `/` — Home con todas las secciones
- [x] `/blog` — lista completa de posts
- [x] `/blog/:slug` — post individual con lazy MDX + Suspense spinner

### Contenido
- [x] 3 posts MDX completos:
  - `airflow-gke-produccion` — Airflow en GKE, KubernetesExecutor, Secret Manager
  - `hiperspectral-estres-fosforo` — clasificación multiclase con xarray/zarr/Optuna
  - `ds-a-ai-engineer` — transición de DS a AI Engineer, RAG, evaluación de LLMs

### Datos
- [x] `src/data/config.ts` — GitHub username `johnma96`, LinkedIn URL real
- [x] `src/data/projects.ts` — 3 proyectos curados (NPS, hiperspectral, clasificador)
- [x] `src/data/skills.ts` — 3 grupos: ML/AI, MLOps, Data & Cloud
- [x] `src/data/posts-meta.ts` — metadatos de los 3 posts

---

## 🔲 Pendiente

### Configuración (antes del deploy)
- [ ] **Formspree** — crear cuenta en formspree.io, obtener ID, crear `.env.local`:
  ```
  VITE_FORMSPREE_ID=xxxxxxxx
  ```
- [ ] **CV PDF** — colocar archivo en `public/cv.pdf` (el botón "Descargar CV" ya apunta ahí)
- [ ] **LinkedIn** — ya configurado ✓
- [ ] **Email de contacto** — ya configurado con `jmmontoyaz13@gmail.com` ✓

### Mejoras opcionales
- [ ] Mobile menu (hamburger) — el navbar en mobile no tiene menú desplegable
- [ ] Verificar responsive en 375px (mobile) y 768px (tablet)
- [ ] Página 404 custom
- [ ] Google Analytics o Vercel Analytics
- [ ] OG image (`public/og-image.png`) para compartir en LinkedIn

### Internacionalización (i18n) — para una sesión futura
- [ ] **Selector de idioma ES / EN** en el Navbar
- Opciones de implementación a evaluar:
  - `react-i18next` (más completo, ideal si el blog también se traduce)
  - `i18n-ally` + archivos JSON por idioma en `src/locales/es.json` y `src/locales/en.json`
- Alcance: UI completa (Navbar, Hero, secciones, formulario) + metadatos de posts
- Los posts MDX pueden vivir en `src/content/posts/es/` y `src/content/posts/en/`
- El blog en inglés abre alcance a audiencia internacional (relevante para posiciones de AI Engineering)
- [ ] `favicon.ico` en `public/`

### Deploy en Vercel
1. Subir repo a GitHub: `git remote add origin <url>` → `git push -u origin main`
2. Hacer merge de `develop` a `main` antes del deploy
3. En vercel.com → "New Project" → importar el repo
4. Framework preset: **Vite**
5. Build command: `npm run build`
6. Output dir: `dist`
7. Agregar env var `VITE_FORMSPREE_ID` en Settings → Environment Variables
8. Dominio custom: Settings → Domains → agregar `jmariomontoya.dev` o el que tengas

### Contenido pendiente (nice to have)
- [ ] Foto de perfil en Hero (el SPEC no la incluye pero queda bien)
- [ ] Más posts en el blog
- [ ] Completar demos/links reales en proyectos curados si aplica

---

## Bugs conocidos / resueltos en esta sesión
| Bug | Causa | Fix |
|---|---|---|
| Página en blanco | `loadSlimAsync` eliminado en tsparticles v3 | → `loadSlim` |
| Página en blanco | `Github`/`Linkedin` eliminados de lucide-react | → SVGs inline en `SocialIcons.tsx` |
| `@/lib/motion` no resuelto | Alias `@/` no configurado en Vite | → rutas relativas en `Skills.tsx` |
| Export mismatch | `Skills` y `Hero` usaban `export default` | → `export function` |
| Navbar no navega desde `/blog` | `scrollIntoView` solo funciona en `/` | → `useNavigate` + `location.state` |
