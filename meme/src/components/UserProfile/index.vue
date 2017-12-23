<template>
  <div id="user-page">
    <el-row>
    <el-col :span="6">
        <img class="to" id="avatar" alt="aaa" src="static/5.gif">
    </el-col>
    <el-col :span="6">
      <p id="head">已收藏表情</p>
    </el-col>
    <el-col :span="12">
      <p id="head">已收藏表情</p>
    </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: [],
  methods: {
    sidebarOpened: () => {

    }
  },
  data: () => ({

  }),
  components: {
  }
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
