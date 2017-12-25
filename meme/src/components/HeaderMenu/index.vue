<template>

<header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
        <el-menu-item  index="display">首页</el-menu-item>
        <el-menu-item :route="''" class="header-search"index=""><el-input v-model="input" placeholder="请输入内容"></el-input></el-menu-item>
        <el-menu-item  :route="loginRoute" class="user-profile" index="display">{{ isLogin?user:log }}</el-menu-item>
        <span class="header-title">{{ title }}</span>
      </el-menu>
</header>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HeaderMenu',
  props: ['title'],
  methods: {

  },
  computed: {
    ...mapState({
      isLogin: state => {
        return state.ui.isLogin
      },
      loginRoute: state => {
        if (state.ui.isLogin) {
          return {path: '/user'}
        } else {
          return {path: '/login'}
        }
      }
    })
  },

  data: () => ({
    activeIndex: '0',
    input: '',
    routerAvaliable: true,
    log: '登录',
    user: '个人中心'
  })
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
