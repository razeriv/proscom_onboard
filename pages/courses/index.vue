<script setup lang="ts">
const selectedDep = useDepartmentFilter()

const client = useSupabaseClient()
const { data: departments } = await useAsyncData('department', async () => {
  const { data } = await client.from('department').select()
  return data
})

const { data: courses } = await useAsyncData('course', async () => {
  const { data } = await client.from('course').select()
  return data
})
</script>

<template>
  <h1 class="text-4xl font-black">Все курсы</h1>
  <Select
      :select-from="departments"
  />
  <div class="flex gap-6">
    <CourseCard
        v-for="course in courses.filter(({ department_id }) => department_id === selectedDep.department.id)"
        :title="course.title"
        :description="course.description"
        :duration="course.duration"
        :content_url="course.content_url"
    />
  </div>
</template>
