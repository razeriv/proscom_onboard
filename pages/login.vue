<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')
const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm', // TODO: need to change later
    }
  })
  if (error) console.log(error)
}
</script>
<template>
  <div>
    <button @click="signInWithOtp">
      Sign In with E-Mail
    </button>
    <input
        v-model="email"
        type="email"
    />
  </div>
</template>

<style scoped>
input {
  color: black;
}
</style>
