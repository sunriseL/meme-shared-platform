<template>
  <div id="app">
    <header-component :title="title" ></header-component>
    <router-view/>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
export default {
  name: 'app',
  data: () => ({
    title: '表情包分享平台'
  }),
  components: {
    'header-component': HeaderMenu
  }
}
</script>

<style>
body, html{
  margin: 0px;
  padding: 0px;
  border: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  margin: 0px;
}
</style>
