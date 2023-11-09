<script setup lang="ts">
const props = defineProps({
  iconName: String,
  heading: String
})
</script>

<template>
  <div class="flex gap-2 items-center">
    <img :src="`/_nuxt/assets/icons/ui/${props.iconName}`" :alt="props.heading">
    <h3 class="text-2xl font-bold">{{props.heading}}</h3>
  </div>
</template>
