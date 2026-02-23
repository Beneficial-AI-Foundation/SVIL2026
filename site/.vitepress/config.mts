import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Software Verification in Lean 2026",
  description: "Software Verification in Lean 2026, Paris",
  base: '/SVIL2026/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Beneficial-AI-Foundation/SVIL2026' }
    ],

    editLink: {
      pattern: 'https://github.com/Beneficial-AI-Foundation/SVIL2026/edit/main/site/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
