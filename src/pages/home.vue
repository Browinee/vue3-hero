<template>
  <h1>App</h1>
  <TodoList/>

  <Rate :value="3"></Rate>
  <Rate :value="4" theme="red"></Rate>
  <Rate :value="1" theme="green"></Rate>

  <h1>您的評分是</h1>
  <Rate :value="score" @update-rate="update">Test:</Rate>
</template>

<script setup>
import {ref} from 'vue'

const score = ref(3)
console.log("sore", score)

function update(num) {
  score.value = num
}

</script>
