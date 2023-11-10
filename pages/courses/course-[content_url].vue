<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <p>{{route.params.content_url}}</p>
  <iframe :src="`https://docs.google.com/gview?url=${$route.params.content_url}&embedded=true`"></iframe>
</template>

<style scoped>

</style>
