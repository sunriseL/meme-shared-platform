<template>
  <div id="app">
    <div class="page-layout">
      <div class="page-layout-inner">
        <header-component :title="title" />
        <main>
          <div class="main-content">
            <el-row class="container">
              <router-view></router-view>
            </el-row>
          </div>
        </main>
      </div>
    </div>
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

<style lang='scss'>
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
@import './style.scss'
</style>
