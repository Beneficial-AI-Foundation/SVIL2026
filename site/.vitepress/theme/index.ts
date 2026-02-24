// Custom theme extending VitePress default (without bundled fonts)
// Fonts loaded via Google Fonts CDN in config.mts head tags
import DefaultTheme from 'vitepress/theme-without-fonts'
import './custom.css'
import './hero.css'
import './sections.css'
import Layout from './Layout.vue'
import PartnerLogos from './components/PartnerLogos.vue'
import EmailLink from './components/EmailLink.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('PartnerLogos', PartnerLogos)
    app.component('EmailLink', EmailLink)
  }
}
