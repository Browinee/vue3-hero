<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo"/>
    <button v-if="active < all" @click="clear">Clear</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done"/>
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>No Data</div>
    <div>
      All<input type="checkbox" v-model="allDone"/>
      <span> {{ active }} / {{ all }} </span>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from "vue";
import useTodos from "./useTodos";

let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
console.log("useTo", useTodos())

</script>


