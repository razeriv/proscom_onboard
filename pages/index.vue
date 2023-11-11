<script setup lang="ts">
import {useUserDataStore} from "~/composables/userDataState";
const client = useSupabaseClient()
const user = useSupabaseUser()

const userDataStore = useUserDataStore()

const {data: userData} = await useAsyncData('user', async () => {
  const {data} = await client.from('user').select("*, depatment_id(*)").eq('id', user.value?.id).single()
  return data
})

userDataStore.user = userData
</script>

<template>
  <div class="page">
    <h1>hi!</h1>
  </div>
</template>

<style scoped>

</style>
