import {ref} from "vue";

function useStorage(name, value = []) {
    const data = ref(JSON.parse(localStorage.getItem(name) || "[]"));
    watchEffect(() => {
        localStorage.setItem(name, JSON.stringify(data.value))
    })
    return data
}
