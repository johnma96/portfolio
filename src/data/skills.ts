export interface Skill {
  name: string
  level: number
}

export interface SkillGroup {
  label: string
  skills: Skill[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'ML / AI',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Scikit-learn / XGBoost', level: 88 },
      { name: 'LLMs / LangChain / Agents', level: 87 },
      { name: 'RAG / Vector DBs', level: 82 },
      { name: 'PyTorch', level: 72 },
    ],
  },
  {
    label: 'MLOps',
    skills: [
      { name: 'Apache Airflow', level: 85 },
      { name: 'MLflow / DVC', level: 83 },
      { name: 'Databricks / PySpark', level: 80 },
      { name: 'Docker / Kubernetes', level: 75 },
      { name: 'CI/CD (GitLab · Jenkins)', level: 73 },
    ],
  },
  {
    label: 'Data & Cloud',
    skills: [
      { name: 'SQL', level: 90 },
      { name: 'GCP / BigQuery', level: 88 },
      { name: 'Vertex AI', level: 80 },
      { name: 'Power BI', level: 75 },
      { name: 'AWS', level: 68 },
    ],
  },
]
