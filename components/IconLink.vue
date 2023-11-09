<script setup lang="ts">
const props = defineProps({
  iconName: String,
  linkTitle: {
    type: String,
    default: ""
  },
  navigateTo: String
})
</script>

<template>
  <NuxtLink :to="navigateTo" class="flex gap-2 items-center font-bold">
    <img :src="`/_nuxt/assets/icons/ui/${props.iconName}`" alt="">
    <p v-if="linkTitle">{{linkTitle}}</p>
  </NuxtLink>
</template>

<style scoped lang="scss">
a {
  border-radius: 11px;
  border: 0.5px solid #49566F;
  background: var(--Button, linear-gradient(88deg, rgba(44, 85, 222, 0.27) 1.32%, rgba(99, 82, 203, 0.40) 98.63%));
  padding: 8px;

  opacity: .8;

  transition: .2s;
  &:hover {
    opacity: 1;
  }
}
</style>
