<script setup lang="ts">
const selectedDep = useDepartmentFilter()
</script>

<template>
  <h1 class="text-4xl font-black">Все курсы</h1>
  <Select
      :select-from="departments"
  />
  <div class="flex gap-6">
    <CourseCard
        v-for="course in courses.filter(({ department }) => department === selectedDep.department.id)"
        :title="course.title"
        :description="course.description"
        link="1"
        :is-completed="course.isCompleted"
    />
  </div>
</template>
