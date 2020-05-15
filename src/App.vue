<template>
  <div id="app">
    <RecipeSearch />
  </div>
</template>

<script>
  import RecipeSearch from './components/pages/RecipeSearch.vue'

  export default {
    name: 'App',
    components: {
      RecipeSearch
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
