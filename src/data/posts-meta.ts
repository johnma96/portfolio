export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readTime: string
}

export const POSTS_META: PostMeta[] = [
  {
    slug: 'airflow-gke-produccion',
    title: 'Airflow en GKE: lecciones de un año en producción',
    date: '2025-03-15',
    excerpt:
      'Cómo pasamos de un Airflow local inestable a un cluster GKE resiliente. Configuración, errores cometidos y las optimizaciones que realmente importaron.',
    tags: ['Airflow', 'GKE', 'Kubernetes', 'MLOps'],
    readTime: '10 min',
  },
  {
    slug: 'hiperspectral-estres-fosforo',
    title: 'Detección de estrés de fósforo con imágenes hiperespectrales',
    date: '2025-02-01',
    excerpt:
      'Clasificación multiclase en fríjol común usando bandas red-edge y NIR. Pipeline completo con xarray, zarr y optimización bayesiana con Optuna.',
    tags: ['Computer Vision', 'Hyperspectral', 'XGBoost', 'Research'],
    readTime: '12 min',
  },
  {
    slug: 'ds-a-ai-engineer',
    title: 'De Data Scientist a AI Engineer: qué cambió en mi forma de trabajar',
    date: '2025-01-10',
    excerpt:
      'El salto no es solo de título. Hablar de APIs, latencia, costos por token, RAG y evaluación de LLMs cambia completamente el mindset.',
    tags: ['Career', 'LLMs', 'AI Engineering'],
    readTime: '8 min',
  },
]
