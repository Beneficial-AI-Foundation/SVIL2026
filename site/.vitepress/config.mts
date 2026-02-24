import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Software Verification in Lean 2026",
  description: "Software Verification in Lean 2026, Paris",
  base: '/SVIL2026/',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Manrope:wght@400;500;600;700&display=swap',
      rel: 'stylesheet'
    }]
  ],
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Beneficial-AI-Foundation/SVIL2026' }
    ]
  }
})
