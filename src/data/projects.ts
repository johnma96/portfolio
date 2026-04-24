export interface CuratedProject {
  id: string
  title: string
  type: string
  description: string
  tags: string[]
  metric?: string
  github: string | null
  demo: string | null
  featured: boolean
}

export const CURATED_PROJECTS: CuratedProject[] = [
  {
    id: 'nps-causa-raiz',
    title: 'Modelo causa-raíz de NPS',
    type: 'MLOps · NLP · GCP',
    description:
      'Pipeline end-to-end para identificar drivers de satisfacción en comentarios de clientes. Orquestado con Airflow en GKE, modelos en Vertex AI, resultados en BigQuery.',
    tags: ['Python', 'BigQuery', 'Vertex AI', 'Airflow', 'Docker', 'Kubernetes'],
    metric: '↑ 23% en drivers de churn identificados',
    github: null,
    demo: null,
    featured: true,
  },
  {
    id: 'hiperspectral-fosforo',
    title: 'Detección de estrés de fósforo',
    type: 'Computer Vision · Research',
    description:
      'Clasificación multiclase con imágenes hiperespectrales en fríjol común. Pipeline con xarray/zarr, extracción de bandas red-edge/NIR, y optimización con Optuna.',
    tags: ['Hyperspectral', 'XGBoost', 'Zarr', 'Optuna', 'xarray', 'Python'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    id: 'nps-clasificador',
    title: 'Clasificador de comentarios NPS',
    type: 'NLP · Producción',
    description:
      'Asignación automática de comentarios a journey/stage/moment usando TF-IDF y similitud coseno. MVP en producción con FastAPI.',
    tags: ['TF-IDF', 'spaCy', 'FastAPI', 'Python'],
    github: null,
    demo: null,
    featured: false,
  },
]
