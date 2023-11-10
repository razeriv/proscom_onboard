<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  isCompleted: Boolean,
  duration: Number,
  content_url: String,
})
</script>

<template>
  <div :class="[
      isCompleted ? 'completed' : 'card', 'card p8'
  ]">
    <h3 class="text-3xl font-bold">{{props.title}}</h3>
    <p class="opacity-70">{{props.description}}</p>
    <a :href="props.content_url">Ссылка на курс</a>
    <Dialog
      :preview-url="props.content_url"
      :title="props.title"
    />
  </div>
</template>

<style scoped>
.completed {
  background: linear-gradient(88deg, rgba(44, 85, 222, 0.47) 1.32%, rgba(99, 82, 203, 0.00) 98.63%);

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
