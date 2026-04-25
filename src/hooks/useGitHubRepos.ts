import { useState, useEffect } from 'react'
import { SITE_CONFIG } from '../data/config'

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  language: string | null
  stargazers_count: number
  updated_at: string
  fork: boolean
}

interface CacheEntry {
  data: GitHubRepo[]
  timestamp: number
}

interface UseGitHubReposResult {
  repos: GitHubRepo[]
  loading: boolean
  error: string | null
}

const CACHE_KEY = 'gh_repos_johnma96'
const CACHE_TTL = 5 * 60 * 1000

function readCache(): CacheEntry | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as CacheEntry
  } catch {
    return null
  }
}

function writeCache(data: GitHubRepo[]): void {
  try {
    const entry: CacheEntry = { data, timestamp: Date.now() }
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(entry))
  } catch {
    // sessionStorage unavailable — ignore silently
  }
}

export function useGitHubRepos(): UseGitHubReposResult {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchRepos(): Promise<void> {
      // Check fresh cache first
      const cached = readCache()
      if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        const filtered = applyFilters(cached.data)
        if (!cancelled) {
          setRepos(filtered)
          setLoading(false)
        }
        return
      }

      try {
        const response = await fetch(SITE_CONFIG.github.apiUrl)
        if (!response.ok) {
          throw new Error(`GitHub API responded with status ${response.status}`)
        }
        const data: GitHubRepo[] = await response.json()
        writeCache(data)
        if (!cancelled) {
          setRepos(applyFilters(data))
          setLoading(false)
        }
      } catch (err) {
        // If fetch fails but we have stale cache, use it rather than showing an error
        if (cached) {
          if (!cancelled) {
            setRepos(applyFilters(cached.data))
            setLoading(false)
          }
          return
        }
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error al cargar los repositorios')
          setLoading(false)
        }
      }
    }

    void fetchRepos()

    return () => {
      cancelled = true
    }
  }, [])

  return { repos, loading, error }
}

function applyFilters(data: GitHubRepo[]): GitHubRepo[] {
  if (!SITE_CONFIG.github.showForks) {
    return data.filter((repo) => !repo.fork)
  }
  return data
}
