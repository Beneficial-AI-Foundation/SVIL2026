<script setup>
const props = defineProps({
  u: String,
  d: String,
})

function open() {
  window.location.href = ['ma', 'il', 'to:'].join('') + props.u + '@' + props.d
}
</script>

<template>
  <a href="#" @click.prevent="open" class="email-link" :title="'Contact ' + u">&#9993;</a>
</template>

<style scoped>
.email-link {
  text-decoration: none;
  opacity: 0.5;
  transition: opacity 0.2s;
  margin-left: 0.25em;
  font-style: normal;
}
.email-link:hover {
  opacity: 1;
}
</style>
