<script setup lang="ts">
import {useUserDataStore} from "~/composables/userDataState";

const user = useSupabaseUser()
const client = useSupabaseClient()

watch(user, async () => {
  if (user.value) {
    return navigateTo('/');
  }
}, { immediate: true })

</script>
<template>
  <div>Ожидаем входа...</div>
</template>
