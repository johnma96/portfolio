export function RepoCardSkeleton() {
  return (
    <div
      className="animate-pulse rounded-xl p-5 border border-border-subtle"
      style={{ background: 'rgba(255,255,255,0.03)' }}
    >
      {/* Title bar */}
      <div className="h-4 w-3/4 rounded bg-white/5 mb-3" />

      {/* Description lines */}
      <div className="space-y-2 mb-4">
        <div className="h-3 w-full rounded bg-white/5" />
        <div className="h-3 w-2/3 rounded bg-white/5" />
      </div>

      {/* Topic chips */}
      <div className="flex gap-2 mb-4">
        <div className="h-5 w-16 rounded-full bg-white/5" />
        <div className="h-5 w-16 rounded-full bg-white/5" />
        <div className="h-5 w-16 rounded-full bg-white/5" />
      </div>

      {/* Footer row: language badge + stars */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <div className="h-5 w-20 rounded-full bg-white/5" />
        <div className="h-4 w-10 rounded bg-white/5" />
      </div>
    </div>
  )
}
