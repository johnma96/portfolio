export interface Certification {
  id: string
  name: string
  nameEn: string
  issuer: string
  date: string
  credentialUrl?: string
  pdfFile?: string
  color: string
  skills: string[]
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'anthropic-claude-api',
    name: 'Building with the Claude API',
    nameEn: 'Building with the Claude API',
    issuer: 'Anthropic',
    date: '2026-06-10',
    credentialUrl: 'https://verify.skilljar.com/c/xrmrv9zxqoak',
    color: '#D97757',
    skills: ['Claude API', 'Prompt engineering', 'Tool use', 'RAG', 'Agents'],
  },
  {
    id: 'anthropic-mcp',
    name: 'Introduction to Model Context Protocol',
    nameEn: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    date: '2026-06-10',
    credentialUrl: 'https://verify.skilljar.com/c/iwe5zxym4sko',
    color: '#D97757',
    skills: ['MCP', 'Tools', 'Resources', 'Prompts'],
  },
  {
    id: 'anthropic-claude-code',
    name: 'Claude Code in Action',
    nameEn: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: '2026-06-10',
    credentialUrl: 'https://verify.skilljar.com/c/68uhdj7rhijq',
    color: '#D97757',
    skills: ['Claude Code', 'AI-assisted development', 'MCP', 'Hooks'],
  },
  {
    id: 'datapath-genai',
    name: 'Especialización en IA Generativa con Google Cloud',
    nameEn: 'Generative AI with Google Cloud Specialization',
    issuer: 'Datapath',
    date: '2026-04-14',
    credentialUrl: 'https://datapath.iacerts.com/verify-certificate/validate/5b47dcf1-4da8-4023-b140-0bf3662b229f',
    color: '#FF6B35',
    skills: ['Vertex AI', 'Gemini', 'RAG', 'Agent Builder', 'Document AI', 'Speech-to-Text'],
  },
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Cloud Quest: Cloud Practitioner',
    nameEn: 'AWS Cloud Quest: Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2026-01-16',
    credentialUrl: 'https://www.credly.com/badges/27db2d32-98c1-4027-b09c-601e43b754e8',
    color: '#FF9900',
    skills: ['EC2', 'S3', 'IAM', 'Cloud Architecture', 'AWS Services'],
  },
  {
    id: 'databricks-spark',
    name: 'Databricks y Apache Spark para Big Data',
    nameEn: 'Databricks and Apache Spark for Big Data',
    issuer: 'Udemy',
    date: '2025-08-01',
    credentialUrl: 'https://www.udemy.com/certificate/UC-5c0f1b8b-543f-4c84-b931-fc4af8443ce0/',
    color: '#A435F0',
    skills: ['PySpark', 'Databricks', 'Delta Lake', 'Structured Streaming', 'MLflow'],
  },
  {
    id: 'mlops-bootcamp',
    name: 'Bootcamp Avanzado MLOps · Machine Learning Operations',
    nameEn: 'Advanced MLOps Bootcamp · Machine Learning Operations',
    issuer: 'Udemy',
    date: '2024-08-01',
    credentialUrl: 'https://www.udemy.com/certificate/UC-0bc813ac-b75f-43e8-b07c-973b43461042/',
    color: '#A435F0',
    skills: ['MLflow', 'DVC', 'CI/CD', 'Docker', 'Model Monitoring'],
  },
  {
    id: 'ds4a',
    name: 'DS4A / Colombia 5.0',
    nameEn: 'DS4A / Colombia 5.0',
    issuer: 'Correlation One',
    date: '2021-09-01',
    credentialUrl: 'https://www.credential.net/dc7a9c1c-0fb7-45f1-a816-e631dba912dd#acc.Moh6Hgd7',
    color: '#38bdf8',
    skills: ['Machine Learning', 'SQL', 'Python', 'Data Analysis', 'Statistics'],
  },
]
