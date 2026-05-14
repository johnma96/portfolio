export interface EducationEntry {
  degree: string
  degreeEn: string
  institution: string
  period: string
}

export const EDUCATION: EducationEntry[] = [
  {
    degree: 'Est. Maestría en Ingeniería — Analítica',
    degreeEn: "Master's in Engineering — Analytics (candidate)",
    institution: 'Universidad Nacional de Colombia',
    period: '2023 – 2025',
  },
  {
    degree: 'Especialización en Analítica',
    degreeEn: 'Specialization in Analytics',
    institution: 'Universidad Nacional de Colombia',
    period: '2022 – 2023',
  },
  {
    degree: 'Ingeniería Civil',
    degreeEn: 'Civil Engineering',
    institution: 'Universidad Nacional de Colombia',
    period: '2015 – 2020',
  },
]
