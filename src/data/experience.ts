export interface ExperienceEntry {
  id: string
  company: string
  role: string
  roleEn: string
  period: string
  periodEn: string
  location: string
  current: boolean
  bullets: string[]
  bulletsEn: string[]
  tags: string[]
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'proteccion',
    company: 'Protección S.A.',
    role: 'Data Science Specialist',
    roleEn: 'Data Science Specialist',
    period: 'Oct 2025 – Presente',
    periodEn: 'Oct 2025 – Present',
    location: 'Medellín, Colombia · Híbrido',
    current: true,
    bullets: [
      'Desarrollo y despliegue de modelos de ML e IA para generación de valor en el negocio financiero.',
      'Aplicación de MLOps en plataformas cloud (GCP, AWS) con Docker, Kubernetes, Jenkins y Airflow.',
      'Soporte técnico al equipo de datos y evangelización de nuevas tecnologías de IA.',
    ],
    bulletsEn: [
      'Develop and deploy ML and AI models to generate business value in the financial sector.',
      'Apply MLOps practices on cloud platforms (GCP, AWS) with Docker, Kubernetes, Jenkins and Airflow.',
      'Provide technical support to the data team and drive adoption of new AI technologies.',
    ],
    tags: ['GCP', 'AWS', 'MLOps', 'Docker', 'Kubernetes', 'Airflow'],
  },
  {
    id: 'tuya',
    company: 'Tuya S.A.',
    role: 'Data Scientist → Data Scientist con énfasis en IA',
    roleEn: 'Data Scientist → Data Scientist with AI Focus',
    period: 'Oct 2023 – Oct 2025 · 2 años',
    periodEn: 'Oct 2023 – Oct 2025 · 2 years',
    location: 'Medellín, Colombia · Híbrido',
    current: false,
    bullets: [
      'Diseño e implementación de soluciones de IA Generativa (RAG, agentes, bases vectoriales, Speech2Text) para automatización de procesos internos.',
      'Liderazgo en metodología MLOps (MLflow, DVC, CI/CD, Databricks, PySpark) y desarrollo de modelos de riesgo crediticio.',
      'Construcción y mantenimiento de la librería interna TuyaPy (POO) para distribución de código en el equipo de analítica.',
    ],
    bulletsEn: [
      'Design and implementation of Generative AI solutions (RAG, agents, vector DBs, Speech2Text) for internal process automation.',
      'Led MLOps methodology (MLflow, DVC, CI/CD, Databricks, PySpark) and credit risk model development.',
      'Built and maintained the internal TuyaPy library (OOP) for code distribution across the analytics team.',
    ],
    tags: ['LLMs', 'RAG', 'MLflow', 'Databricks', 'PySpark', 'Vertex AI'],
  },
  {
    id: 'comercial-card',
    company: 'Comercial Card S.A.S. · PTM',
    role: 'Científico de Datos',
    roleEn: 'Data Scientist',
    period: 'Mar 2022 – Sep 2023 · 1 año 6 meses',
    periodEn: 'Mar 2022 – Sep 2023 · 1 year 6 months',
    location: 'Medellín, Colombia · Híbrido',
    current: false,
    bullets: [
      'Modelos predictivos para forecasting de cartera, detección de fraude y análisis de series temporales en producción con GCP.',
      'Construcción del Data Warehouse en BigQuery con flujos ETL y herramienta HEVO.',
      'Dashboards de KPIs financieros en Power BI y automatización de procesos en Python y KNIME.',
    ],
    bulletsEn: [
      'Predictive models for portfolio forecasting, fraud detection and time series analysis in production on GCP.',
      'Built the Data Warehouse in BigQuery with ETL flows using HEVO.',
      'Financial KPI dashboards in Power BI and process automation in Python and KNIME.',
    ],
    tags: ['BigQuery', 'GCP', 'Python', 'Power BI', 'ETL', 'KNIME'],
  },
  {
    id: 'siata',
    company: 'SIATA',
    role: 'Analista de Datos',
    roleEn: 'Data Analyst',
    period: 'Jul 2020 – Mar 2022 · 1 año 8 meses',
    periodEn: 'Jul 2020 – Mar 2022 · 1 year 8 months',
    location: 'Medellín, Colombia',
    current: false,
    bullets: [
      'Análisis de datos ambientales geoespaciales y temporales para sistemas de alerta temprana y gestión de riesgos.',
      'Desarrollo de paquetes Python distribuibles (POO) para análisis de series temporales de alta frecuencia (20 Hz).',
    ],
    bulletsEn: [
      'Analysis of geospatial and temporal environmental data for early warning systems and risk management.',
      'Developed distributable Python packages (OOP) for high-frequency time series analysis (20 Hz).',
    ],
    tags: ['Python', 'Series temporales', 'Geoespacial', 'POO'],
  },
]
