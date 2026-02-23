// Custom theme extending VitePress default (without bundled fonts)
// Fonts loaded via Google Fonts CDN in config.mts head tags
import DefaultTheme from 'vitepress/theme-without-fonts'
import './custom.css'
import './hero.css'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout
}
