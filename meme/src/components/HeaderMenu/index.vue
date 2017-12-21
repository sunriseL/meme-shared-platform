<template>
<div>
<header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
        <el-menu-item  index="display">首页</el-menu-item>
        <el-menu-item class="header-search"index="display"><el-input v-model="input" placeholder="请输入内容"></el-input></el-menu-item>
        <el-submenu class="menu" index="3">
          <template slot="title">我的工作台</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item  :route="loginRoute" class="user-profile" index="display">{{ isLogin?user:log }}</el-menu-item>
        <span class="header-title">{{ title }}</span>
      </el-menu>
</header>
</div>
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
          return {path: '/'}
        } else {
          return {path: '/login'}
        }
      }
    })
  },
  data: () => ({
    activeIndex: '0',
    input: '搜索',
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
