<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const props = defineProps({
  selectFrom: {
    type: Array,
    default: [{}]
  }
})

const current = useDepartmentFilter();
</script>

<template>
  <div>
    <Listbox v-model="current.department">
      <div class="relative">
        <ListboxButton
            class="cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 list-btn"
        >
          <span class="block truncate">{{ current.department.title }}</span>
          <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <img src="/_nuxt/assets/icons/ui/ic_menu.svg">
          </span>
        </ListboxButton>

        <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
          <ListboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md list-btn py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none z-20"
          >
            <ListboxOption
                v-slot="{ active, selected }"
                v-for="item in props.selectFrom"
                :key="item.id"
                :value="item"
                as="template"
            >
              <li
                  :class="[
                  active ? 'text-white opacity-100' : 'text-gray-900',
                  'relative cursor-default select-none w-max px-4',
                ]"
              >
                <span
                    :class="[
                    selected ? 'font-bold' : 'font-normal',
                    'block truncate text-white opacity-60 option',
                  ]"
                >{{ item.title }}</span
                >
                <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<style scoped lang="scss">
.list-btn {
  background: var(--Button, linear-gradient(88deg, rgba(44, 85, 222, 1) 1.32%, rgba(99, 82, 203, 1) 98.63%));
  width: max-content;
}

.option {
  opacity: .8;

  transition: .2s;
  &:hover {
      opacity: 1;
  }
}
</style>
