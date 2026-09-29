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
    // Descripción propia para repos que no tienen una en GitHub
    descriptionOverrides: {
      'study-tracker': {
        es: 'Sesiones de estudio\nCronometra, registra la evidencia y mide el avance de cada programa. El tiempo se calcula desde la marca de inicio guardada en la base: puedes cerrar la pestaña y al volver la sesión sigue corriendo con el tiempo correcto.',
        en: 'Study sessions\nTime your sessions, log evidence and track progress for each program. Elapsed time is computed from the start timestamp stored in the database: you can close the tab and, when you come back, the session keeps running with the correct time.',
      },
    } as Record<string, Record<Lang, string>>,
  },
  contact: {
    linkedin: 'https://www.linkedin.com/in/john-m-montoya-z-1a375a15b/',
    twitter: '',
    email: 'jmmontoyaz13@gmail.com',
  },
}
