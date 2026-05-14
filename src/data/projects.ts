export interface CuratedProject {
  id: string
  title: string
  titleEn?: string
  type: string
  typeEn?: string
  description: string
  descriptionEn?: string
  tags: string[]
  metric?: string
  metricEn?: string
  github: string | null
  demo: string | null
  featured: boolean
}

export const CURATED_PROJECTS: CuratedProject[] = [
  {
    id: 'thesis-fosforo',
    title: 'Detección de estrés de fósforo en fríjol',
    titleEn: 'Phosphorus Stress Detection in Common Bean',
    type: 'Computer Vision · Research · UAV',
    typeEn: 'Computer Vision · Research · UAV',
    description:
      'Clasificación multiclase con imágenes hiperespectrales capturadas con drones en fríjol común. Pipeline con xarray/zarr, extracción de bandas red-edge y NIR, y optimización bayesiana con Optuna y PyTorch.',
    descriptionEn:
      'Multiclass classification with UAV-based hyperspectral images in common bean. Pipeline with xarray/zarr, red-edge and NIR band extraction, and Bayesian optimization with Optuna and PyTorch.',
    tags: ['Python', 'PyTorch', 'XGBoost', 'Optuna', 'MLflow', 'DVC', 'Hyperspectral'],
    metric: 'Tesis de Maestría · Universidad Nacional de Colombia',
    metricEn: "Master's Thesis · Universidad Nacional de Colombia",
    github: 'https://github.com/johnma96/thesis',
    demo: null,
    featured: true,
  },
  {
    id: 'tuyabot-llm',
    title: 'TuyaBot LLM',
    titleEn: 'TuyaBot LLM',
    type: 'LLM · RAG · Fintech',
    typeEn: 'LLM · RAG · Fintech',
    description:
      'Chatbot financiero que combina un LLM con datos en tiempo real de la web para responder preguntas sobre productos financieros. Arquitectura RAG con recuperación semántica sobre fuentes dinámicas.',
    descriptionEn:
      'Financial chatbot combining an LLM with real-time web data to answer questions about financial products. RAG architecture with semantic retrieval over dynamic sources.',
    tags: ['Python', 'LLM', 'RAG', 'LangChain', 'Jupyter'],
    github: 'https://github.com/johnma96/tuyabot-llm',
    demo: null,
    featured: true,
  },
  {
    id: 'clean-agents-template',
    title: 'Clean Agents Template',
    titleEn: 'Clean Agents Template',
    type: 'AI Agents · Clean Architecture · Open Source',
    typeEn: 'AI Agents · Clean Architecture · Open Source',
    description:
      'Template Cookiecutter production-ready para construir agentes de IA y aplicaciones LLM en Python. Arquitectura limpia, estructura escalable y mejores prácticas desde el primer commit.',
    descriptionEn:
      'Production-ready Cookiecutter template for building AI Agents and LLM applications in Python. Clean architecture, scalable structure and best practices from the first commit.',
    tags: ['Python', 'LLMs', 'Agents', 'Cookiecutter', 'Clean Architecture'],
    github: 'https://github.com/johnma96/clean-agents-template',
    demo: null,
    featured: false,
  },
  {
    id: 'researchos',
    title: 'ResearchOS',
    titleEn: 'ResearchOS',
    type: 'LLM · Automatización · Open Source',
    typeEn: 'LLM · Automation · Open Source',
    description:
      'Motor de investigación open source que monitorea fuentes científicas (arXiv, PubMed, RSS), responde preguntas en lenguaje natural y envía briefings matutinos personalizados.',
    descriptionEn:
      'Open-source research engine that monitors scientific sources (arXiv, PubMed, RSS), answers questions in natural language and sends personalized morning briefings.',
    tags: ['Python', 'LLM', 'arXiv', 'PubMed', 'RSS', 'Automation'],
    github: 'https://github.com/johnma96/researchos',
    demo: null,
    featured: false,
  },
]
