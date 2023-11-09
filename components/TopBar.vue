<script setup lang="ts">

</script>

<template>
  <div class="flex items-center gap-8">
    <h1 class="font-black text-4xl">PROSCOM.onboard</h1>
    <nav>
      <ul class="flex gap-3">
        <li><NuxtLink to="/profile">Профиль</NuxtLink></li>
        <li><NuxtLink to="/profile">Тесты</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
a {
  border-radius: 11px;
  border: 1px solid #3C3C3C;
  background: #2C2C35;
  padding: 12px;
  opacity: .8;

  transition: .2s;
  &:hover {
      opacity: 1;
  }

}
</style>
