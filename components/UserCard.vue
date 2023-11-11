<script setup lang="ts">
import {useUserDataStore} from "~/composables/userDataState";
const userDataStore = useUserDataStore()
</script>

<template>
  <div class="flex flex-col gap-3 card">
    <h2 class="text-3xl font-black">{{userDataStore.user.name}}</h2>
    <div class="flex gap-4">
      <IconLink
          navigate-to="/"
          link-title="К последнему этапу"
          icon-name="ic_goto.svg"
      />
      <IconLink
          navigate-to="/courses"
          icon-name="ic_courses.svg"
      />
      <IconLink
          navigate-to="/profile/onboarding"
          icon-name="ic_onboarding.svg"
      />
    </div>
  </div>
</template>
