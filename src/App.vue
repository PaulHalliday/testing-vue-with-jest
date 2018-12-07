<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <fancy-heading title="Hello, Vue!" color="red"/>
    <todo-list/>
  </div>
</template>

<script>
import FancyHeading from "./components/FancyHeading.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "app",
  components: {
    FancyHeading,
    TodoList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
