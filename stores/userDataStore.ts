import { defineStore } from 'pinia'

export const useUserDataStore = defineStore('user-data-store', {
    // arrow function recommended for full type inference
    state: () => {
        const firstName = ref("")
        const lastName = ref("")
        const department = ref({})

        function $reset() {
            firstName.value = ""
            lastName.value = ""
            department.value = {}
        }

        return {
            // all these properties will have their type inferred automatically
            firstName: firstName,
            lastName: lastName,
            department: department,
        }
    },
    persist: {
        storage: persistedState.sessionStorage,
    }
})
