<script setup lang="ts">
import {useUserDataStore} from "~/stores/userDataStore";
const client = useSupabaseClient()
const user = useSupabaseUser()

const userDataStore = useUserDataStore()

const {data: userData} = await useAsyncData('user', async () => {
  const {data} = await client.from('user').select("*, depatment_id(*)").eq('id', user.value?.id).single()
  return data
})

userDataStore.firstName = userData.value.first_name
userDataStore.lastName = userData.value.last_name
userDataStore.department = userData.value.depatment_id
</script>

<template>
  <div class="page">
    <h1></h1>
  </div>
</template>

<style scoped>

</style>
