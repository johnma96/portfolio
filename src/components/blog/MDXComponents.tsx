import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-text-primary mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-3 pb-2 border-b border-border-subtle">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-text-primary mt-6 mb-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-text-secondary leading-relaxed mb-4">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="text-accent-blue hover:underline"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="px-1.5 py-0.5 rounded text-sm font-mono bg-white/8 text-accent-purple">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre
      className="rounded-xl p-5 overflow-x-auto my-6 text-sm"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote
      className="border-l-4 border-accent-purple/50 pl-4 py-1 my-4 italic"
      style={{ background: 'rgba(167,139,250,0.05)' }}
    >
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-text-secondary space-y-1 mb-4 ml-4">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-text-secondary space-y-1 mb-4 ml-4">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="text-text-primary font-semibold">{children}</strong>
  ),
}
