<script setup>
import DefaultTheme from 'vitepress/theme-without-fonts'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-info-after>
      <div class="hero-info-bar">
        <span class="hero-date">April 20, 2026</span>
        <span class="hero-separator">|</span>
        <span class="hero-location">INRIA Paris</span>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.hero-info-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--svil-accent);
}

.hero-separator {
  opacity: 0.5;
}

@media (max-width: 768px) {
  .hero-info-bar {
    font-size: 0.95rem;
  }
}
</style>
