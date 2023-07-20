<template>
  <div id="app">
    <HeaderMenu/>
    <FooterSite/>
  </div>
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue'
import FooterSite from './components/FooterSite.vue'

export default {
  name: 'App',
  components: {
    HeaderMenu,
    FooterSite
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
