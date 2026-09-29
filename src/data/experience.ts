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
    role: 'Especialista en Ciencia de Datos',
    roleEn: 'Data Science Specialist',
    period: 'Oct 2025 – Presente',
    periodEn: 'Oct 2025 – Present',
    location: 'Medellín, Colombia · Híbrido',
    current: true,
    bullets: [
      'Diseño de la capa RAG de un clasificador de PQRS con más de 150 categorías: cobertura automática del 50 % al 75 % manteniendo la exactitud global (~80 %).',
      'Asesoría técnica en un sistema agéntico en Azure para detectar fraude en las interacciones de la mesa de dinero: cobertura del 50 % al 100 % de los canales.',
      'MLOps en GCP (Vertex AI, Cloud Run, BigQuery, Airflow, GKE) con Docker, Kubernetes, Jenkins y GitLab, y mentoría técnica a 3 científicos de datos.',
    ],
    bulletsEn: [
      'Designed the RAG layer of a customer requests and complaints (PQRS) classifier with 150+ categories: automatic coverage from 50% to 75% while maintaining overall accuracy (~80%).',
      'Technical advisory on an agentic system on Azure that detects fraud in trading desk interactions: coverage from 50% to 100% of channels.',
      'MLOps on GCP (Vertex AI, Cloud Run, BigQuery, Airflow, GKE) with Docker, Kubernetes, Jenkins and GitLab, and technical mentoring of 3 data scientists.',
    ],
    tags: ['GCP', 'Vertex AI', 'RAG', 'LLMs', 'Kubernetes', 'Airflow'],
  },
  {
    id: 'tuya',
    company: 'Tuya S.A.',
    role: 'Científico de Datos → Científico de Datos con énfasis en IA',
    roleEn: 'Data Scientist → Data Scientist, AI Focus',
    period: 'Oct 2023 – Oct 2025 · 2 años',
    periodEn: 'Oct 2023 – Oct 2025 · 2 years',
    location: 'Medellín, Colombia · Híbrido',
    current: false,
    bullets: [
      'Diseño e implementación de soluciones de IA Generativa (RAG, agentes, bases vectoriales, Speech2Text) para procesamiento de llamadas, extracción de información, chatbots y evaluación de LLMs.',
      'Scoring de riesgo crediticio para tarjetas de crédito (AUC-ROC ~0,80): mejora y migración desde una herramienta no-code a Python, con despliegue on-premise.',
      'Liderazgo en MLOps (MLflow, DVC, CI/CD, Databricks, PySpark) y construcción de la librería interna TuyaPy (POO) para el equipo de analítica.',
    ],
    bulletsEn: [
      'Designed and implemented Generative AI solutions (RAG, agents, vector DBs, Speech2Text) for call processing, information extraction, chatbots and LLM evaluation.',
      'Credit risk scoring for credit cards (AUC-ROC ~0.80): improved and migrated from a no-code tool to Python, with on-premise deployment.',
      'Led MLOps adoption (MLflow, DVC, CI/CD, Databricks, PySpark) and built the internal TuyaPy library (OOP) for the analytics team.',
    ],
    tags: ['LLMs', 'RAG', 'Credit Scoring', 'MLflow', 'Databricks', 'PySpark'],
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
      'Apoyo en la construcción del data warehouse en BigQuery, con migración de información mediante HEVO.',
      'Dashboards de KPIs financieros en Power BI y automatización de procesos en Python y KNIME.',
    ],
    bulletsEn: [
      'Predictive models for portfolio forecasting, fraud detection and time series analysis in production on GCP.',
      'Helped build the BigQuery data warehouse, migrating data with HEVO.',
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
