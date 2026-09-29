import type { Lang } from '../contexts/LanguageContext'

export const SITE_CONFIG = {
  github: {
    username: 'johnma96',
    apiUrl: 'https://api.github.com/users/johnma96/repos?type=public&sort=updated&per_page=100',
    profileUrl: 'https://github.com/johnma96',
    showForks: false,
    maxReposDisplayed: 6,
    // Repos públicos que no se muestran en el portafolio (configuración personal)
    excludedRepos: ['dotfiles', 'johnma96'],
    // Descripciones bilingües de los repos. GitHub guarda una sola descripción por
    // repo; los que no estén aquí muestran la de GitHub en ambos idiomas.
    descriptionOverrides: {
      'study-tracker': {
        es: 'Sesiones de estudio\nCronometra, registra la evidencia y mide el avance de cada programa. El tiempo se calcula desde la marca de inicio guardada en la base: puedes cerrar la pestaña y al volver la sesión sigue corriendo con el tiempo correcto.',
        en: 'Study sessions\nTime your sessions, log evidence and track progress for each program. Elapsed time is computed from the start timestamp stored in the database: you can close the tab and, when you come back, the session keeps running with the correct time.',
      },
      'hard-pomodoro': {
        es: 'Temporizador Pomodoro minimalista y enfocado en la productividad, diseñado para obligarte a tomar descansos: bloquea el sistema y, opcionalmente, todas las pantallas en modo de pantalla completa.',
        en: 'Minimalist, productivity-focused Pomodoro timer designed to force you to take breaks by locking your system and optionally blocking all screens in fullscreen mode.',
      },
      'gcp-learning-vault': {
        es: 'Notas de estudio en Obsidian (técnica Feynman) de las rutas de Google Skills, rumbo a la certificación Google Cloud Professional ML Engineer.',
        en: 'Obsidian study notes (Feynman technique) from the Google Skills learning paths, working toward the Google Cloud Professional ML Engineer certification.',
      },
      'ai-data-skills': {
        es: 'Marketplace de plugins para Claude Code con skills de IA generativa, machine learning, deep learning, ciencia de datos y analítica.',
        en: 'Claude Code plugin marketplace with skills for generative AI, machine learning, deep learning, data science, and analytics.',
      },
      'claude-partner-path-notes': {
        es: 'Notas de estudio de la ruta de aprendizaje Claude Partner Network de Anthropic: apuntes en markdown con la técnica Feynman sobre la API de Claude, MCP y Claude Code.',
        en: 'Study notes from the Anthropic Claude Partner Network Learning Path — Feynman-technique markdown notes covering Claude API, MCP, and Claude Code.',
      },
      portfolio: {
        es: 'Sitio web de portafolio personal construido con React + TypeScript. Tema oscuro, animaciones y blog técnico.',
        en: 'Personal portfolio website built with React + TypeScript. Dark theme, animations & technical blog.',
      },
    } as Record<string, Record<Lang, string>>,
  },
  contact: {
    linkedin: 'https://www.linkedin.com/in/john-m-montoya-z-1a375a15b/',
    twitter: '',
    email: 'jmmontoyaz13@gmail.com',
  },
}
