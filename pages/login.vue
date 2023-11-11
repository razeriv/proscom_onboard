<script setup lang="ts">
const supabase = useSupabaseClient()

const email = ref('')
const password = ref('')

const errorMessage = ref('')

const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (error) errorMessage.value = error.message
  else await navigateTo('/confirm')
}
</script>
<template>
  <div class="flex flex-col gap-8 w-2/5">
    <input
        v-model="email"
        type="email"
        placeholder="Input your email..."
    />
    <input
        v-model="password"
        type="password"
        placeholder="Input your password..."
    />
    <button @click="signInWithOtp" class="card cursor-pointer">
      Sign In with E-Mail
    </button>
    <p v-if="errorMessage" class="font-bold card bg-red-400 w-2/3">{{errorMessage}}!Пожалуйста, попробуйте снова!</p>
  </div>
</template>

<style scoped>
input {
  color: black;
  padding: 12px;
  border-radius: 12px;
}
</style>
