import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { es } from '../locales/es'
import { en } from '../locales/en'
import type { Translations } from '../locales/types'

export type Lang = 'es' | 'en'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('portfolio_lang')
    return stored === 'en' ? 'en' : 'es'
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('portfolio_lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: lang === 'es' ? es : en }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
