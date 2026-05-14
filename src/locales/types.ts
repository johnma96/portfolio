export interface Translations {
  nav: {
    about: string
    projects: string
    experience: string
    skills: string
    certifications: string
    blog: string
    cta: string
  }
  hero: {
    badge: string
    subtitle: string
    description: string
    viewProjects: string
    downloadCV: string
    stats: Array<{ value: string; label: string }>
  }
  projects: {
    label: string
    heading: string
    openSourceLabel: string
    openSourceHeading: string
    errorMsg: string
    viewOnGitHub: string
    viewAllGitHub: string
    noDescription: string
  }
  skills: {
    label: string
    heading: string
    subtitle: string
  }
  blog: {
    label: string
    heading: string
    subtitle: string
    viewAll: string
    readMore: string
    articlesPublished: string
    locale: string
  }
  contact: {
    label: string
    headingPre: string
    headingGradient: string
    subtitle: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    nameRequired: string
    emailRequired: string
    emailInvalid: string
    messageRequired: string
    messageMinLength: string
    sendButton: string
    sending: string
    successTitle: string
    successBody: string
    findMeOn: string
    sendError: string
  }
  about: {
    label: string
    heading: string
    bio1: string
    bio2: string
    educationHeading: string
  }
  experience: {
    label: string
    heading: string
    subtitle: string
    present: string
  }
  certifications: {
    label: string
    heading: string
    subtitle: string
    viewCredential: string
    viewCertificate: string
  }
  footer: {
    madeWith: string
  }
}
