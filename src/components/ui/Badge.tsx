interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'purple' | 'blue' | 'green' | 'yellow'
  className?: string
}

const variantStyles = {
  default: 'bg-white/5 text-text-secondary border border-border-default',
  purple: 'bg-accent-purple/10 text-accent-purple border border-accent-purple/20',
  blue: 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20',
  green: 'bg-accent-green/10 text-accent-green border border-accent-green/20',
  yellow: 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20',
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
