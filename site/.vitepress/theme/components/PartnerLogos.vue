<script setup>
import { withBase } from 'vitepress'

const partners = [
  { name: 'BAIF', logo: '/images/BAIF_Logo.png', url: 'https://beneficialaifoundation.org', invert: true },
  { name: 'Lean FRO', logo: '/images/lean_fro_logo.svg', url: 'https://lean-fro.org' },
  { name: 'INRIA', logo: '/images/inria_logo.svg', url: 'https://www.inria.fr' },
]
</script>

<template>
  <div class="partner-logos">
    <a v-for="p in partners" :key="p.name" :href="p.url" target="_blank" rel="noopener"
       :class="{ 'logo-invert': p.invert }">
      <img :src="withBase(p.logo)" :alt="p.name" class="partner-logo" />
    </a>
  </div>
</template>

<style scoped>
.partner-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 2rem 0;
}
.partner-logo {
  height: 50px;
  width: auto;
  opacity: 0.85;
  transition: opacity 0.2s;
}
.partner-logo:hover {
  opacity: 1;
}
/* White logos get a dark pill background in light mode */
.logo-invert {
  background: #1e3a5f;
  border-radius: 8px;
  padding: 6px 14px;
}
.dark .logo-invert {
  background: transparent;
  padding: 0;
}
</style>
