<script setup lang="ts">
const user = useSupabaseUser()

watch(user, async () => {
  if (user.value) {
    return navigateTo('/');
  }
}, { immediate: true })

</script>
<template>
  <div>Ожидаем входа...</div>
</template>
