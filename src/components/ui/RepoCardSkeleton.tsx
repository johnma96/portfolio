export function RepoCardSkeleton() {
  return (
    <div
      className="animate-pulse rounded-xl p-5 border"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
    >
      <div className="h-4 w-3/4 rounded mb-3" style={{ background: 'var(--skeleton-bg)' }} />
      <div className="space-y-2 mb-4">
        <div className="h-3 w-full rounded" style={{ background: 'var(--skeleton-bg)' }} />
        <div className="h-3 w-2/3 rounded"  style={{ background: 'var(--skeleton-bg)' }} />
      </div>
      <div className="flex gap-2 mb-4">
        {[0,1,2].map((i) => (
          <div key={i} className="h-5 w-16 rounded-full" style={{ background: 'var(--skeleton-bg)' }} />
        ))}
      </div>
      <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
        <div className="h-5 w-20 rounded-full" style={{ background: 'var(--skeleton-bg)' }} />
        <div className="h-4 w-10 rounded"     style={{ background: 'var(--skeleton-bg)' }} />
      </div>
    </div>
  )
}
