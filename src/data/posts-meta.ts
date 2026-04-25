export interface PostMeta {
  slug: string
  title: string
  titleEn?: string
  date: string
  excerpt: string
  excerptEn?: string
  tags: string[]
  readTime: string
}

export const POSTS_META: PostMeta[] = [
  {
    slug: 'airflow-gke-produccion',
    title: 'Airflow en GKE: lecciones de un año en producción',
    titleEn: 'Airflow on GKE: lessons from a year in production',
    date: '2025-03-15',
    excerpt:
      'Cómo pasamos de un Airflow local inestable a un cluster GKE resiliente. Configuración, errores cometidos y las optimizaciones que realmente importaron.',
    excerptEn:
      'How we moved from an unstable local Airflow to a resilient GKE cluster. Configuration, mistakes made, and the optimizations that actually mattered.',
    tags: ['Airflow', 'GKE', 'Kubernetes', 'MLOps'],
    readTime: '10 min',
  },
  {
    slug: 'hiperspectral-estres-fosforo',
    title: 'Detección de estrés de fósforo con imágenes hiperespectrales',
    titleEn: 'Phosphorus stress detection with hyperspectral images',
    date: '2025-02-01',
    excerpt:
      'Clasificación multiclase en fríjol común usando bandas red-edge y NIR. Pipeline completo con xarray, zarr y optimización bayesiana con Optuna.',
    excerptEn:
      'Multiclass classification in common bean using red-edge and NIR bands. Full pipeline with xarray, zarr and Bayesian optimization with Optuna.',
    tags: ['Computer Vision', 'Hyperspectral', 'XGBoost', 'Research'],
    readTime: '12 min',
  },
  {
    slug: 'ds-a-ai-engineer',
    title: 'De Data Scientist a AI Engineer: qué cambió en mi forma de trabajar',
    titleEn: 'From Data Scientist to AI Engineer: what changed in how I work',
    date: '2025-01-10',
    excerpt:
      'El salto no es solo de título. Hablar de APIs, latencia, costos por token, RAG y evaluación de LLMs cambia completamente el mindset.',
    excerptEn:
      "The jump is not just a title change. Talking about APIs, latency, cost per token, RAG and LLM evaluation completely shifts the mindset.",
    tags: ['Career', 'LLMs', 'AI Engineering'],
    readTime: '8 min',
  },
]
