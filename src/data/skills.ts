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
      { name: 'Scikit-learn', level: 92 },
      { name: 'XGBoost / LightGBM', level: 88 },
      { name: 'PyTorch', level: 70 },
      { name: 'LLMs / LangChain', level: 78 },
      { name: 'Optuna', level: 75 },
    ],
  },
  {
    label: 'MLOps',
    skills: [
      { name: 'Vertex AI', level: 82 },
      { name: 'Apache Airflow', level: 85 },
      { name: 'Docker / Kubernetes', level: 75 },
      { name: 'MLflow / DVC', level: 72 },
      { name: 'GitLab CI/CD', level: 78 },
    ],
  },
  {
    label: 'Data & Cloud',
    skills: [
      { name: 'BigQuery', level: 90 },
      { name: 'GCP', level: 80 },
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'Spark / dbt', level: 65 },
    ],
  },
]
