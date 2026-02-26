<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  group: { type: String, default: 'all' },
  size: { type: Number, default: 48 },
})

const all = [
  { name: 'BAIF', logo: '/images/BAIF_logo_white.png', darkLogo: '/images/BAIF_Logo.png', url: 'https://beneficialaifoundation.org', group: 'organizer' },
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
    <a v-for="p in partners" :key="p.name" :href="p.url" target="_blank" rel="noopener">
      <img v-if="p.darkLogo" :src="withBase(p.logo)" :alt="p.name" class="partner-logo light-only" :style="{ height: size + 'px' }" />
      <img v-if="p.darkLogo" :src="withBase(p.darkLogo)" :alt="p.name" class="partner-logo dark-only" :style="{ height: size + 'px' }" />
      <img v-if="!p.darkLogo" :src="withBase(p.logo)" :alt="p.name" class="partner-logo" :style="{ height: size + 'px' }" />
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

/* Light/dark logo swap */
.dark-only { display: none; }
.dark .light-only { display: none; }
.dark .dark-only { display: block; }

/* Dark mode: gold glow on hover */
.dark .partner-logo:hover {
  filter: drop-shadow(0 0 8px rgba(219, 181, 106, 0.15));
}
</style>
