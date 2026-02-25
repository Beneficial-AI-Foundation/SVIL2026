<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  group: { type: String, default: 'all' },
  size: { type: Number, default: 48 },
})

const all = [
  { name: 'BAIF', logo: '/images/BAIF_Logo.png', url: 'https://beneficialaifoundation.org', invert: true, group: 'organizer' },
  { name: 'Lean FRO', logo: '/images/lean_fro_logo.svg', url: 'https://lean-fro.org', group: 'organizer' },
  { name: 'Cryspen', logo: '/images/Cryspen_logo.png', url: 'https://cryspen.com', group: 'partner' },
  { name: 'INRIA', logo: '/images/inria_logo.svg', url: 'https://www.inria.fr', group: 'partner' },
]

const partners = computed(() =>
  props.group === 'all' ? all : all.filter(p => p.group === props.group)
)
</script>

<template>
  <div class="partner-logos">
    <a v-for="p in partners" :key="p.name" :href="p.url" target="_blank" rel="noopener"
       :class="{ 'logo-invert': p.invert }">
      <img :src="withBase(p.logo)" :alt="p.name" class="partner-logo" :style="{ height: size + 'px' }" />
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
  padding: 1.5rem 0;
}

.partner-logo {
  height: 48px;
  width: auto;
  opacity: 0.8;
  transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;
}

.partner-logo:hover {
  opacity: 1;
  transform: translateY(-1px);
}

/* White logos: brand-colored pill in light mode */
.logo-invert {
  background: #1e3a5f;
  border-radius: 10px;
  padding: 8px 16px;
  transition: background 0.3s ease;
}

.dark .logo-invert {
  background: transparent;
  padding: 0;
}

/* Dark mode: gold glow on hover */
.dark .partner-logo:hover {
  filter: drop-shadow(0 0 8px rgba(219, 181, 106, 0.15));
}
</style>
