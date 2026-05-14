import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary:   'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card:      'var(--bg-card)',
        },
        accent: {
          purple:     'rgb(var(--accent-purple-rgb) / <alpha-value>)',
          blue:       'rgb(var(--accent-blue-rgb) / <alpha-value>)',
          green:      'rgb(var(--accent-green-rgb) / <alpha-value>)',
          purpleDark: '#7c3aed',
        },
        text: {
          primary:   'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted:     'var(--text-muted)',
          dim:       'var(--text-dim)',
        },
        border: {
          subtle:  'var(--border-subtle)',
          default: 'var(--border-default)',
          hover:   'var(--border-hover)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}

export default config
