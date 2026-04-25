# jmario.dev — AI Engineer Portfolio

Personal portfolio of **John Mario Montoya**, Data Scientist → AI Engineer. Built to showcase ML/MLOps projects, a technical blog and certifications, with full ES/EN support.

## Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 6 |
| Styles | Tailwind CSS v3 |
| Animations | Framer Motion v11 |
| Blog | MDX + rehype-highlight |
| Routing | React Router v6 |
| Contact | React Hook Form + Formspree |
| Particles | tsparticles v3 |
| Hosting | Vercel |

## Features

- **Dark theme** with purple/blue/green accent palette
- **Framer Motion** animations — stagger on scroll, hover effects, particle background
- **Bilingual (ES / EN)** — full i18n via React Context, persisted in localStorage
- **MDX blog** with syntax highlighting and lazy loading per post
- **GitHub API integration** — public repos loaded dynamically with 5-min cache
- **Certifications section** — verifiable credentials with external links
- **Smart CV download** — serves the language-matching PDF automatically
- **Contact form** — React Hook Form + Formspree, animated success state
- **Responsive** — mobile-first layout

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → /dist
npx tsc --noEmit  # type check
```

## Environment variables

Create `.env.local` at the project root:

```env
VITE_FORMSPREE_ID=your_formspree_form_id
```

## Project structure

```
src/
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Hero, Projects, Skills, Certifications, BlogPreview, Contact
│   ├── ui/          # Cards, badges, animations
│   └── blog/        # MDX layout and components
├── contexts/        # LanguageContext (i18n)
├── data/            # projects, skills, certifications, posts metadata
├── locales/         # es.ts, en.ts translation files
├── content/posts/   # MDX blog posts
├── hooks/           # useGitHubRepos
└── pages/           # Home, Blog, BlogPost
```

## Deploy

Hosted on Vercel. Any push to `main` triggers a new deployment.

1. Connect the repo in [vercel.com](https://vercel.com) → New Project
2. Framework preset: **Vite** · Output dir: `dist`
3. Add env var `VITE_FORMSPREE_ID` in Settings → Environment Variables
