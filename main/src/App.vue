<template>
  <div id="app">
    <span><router-link to="/">主页面</router-link></span>
    <span><router-link to="/tools">子页面</router-link></span>
    <router-view/>
    <!-- 子应用容器 -->
    <div id="subapp"></div>
  </div>
</template>

<script>
/*
import Father from './components/Father.vue'

export default {
  name: 'App',
  components: {
    Father
  }
}
*/
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

span {
  margin: 10px;
}
</style>
