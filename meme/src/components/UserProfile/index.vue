<template>
  <div class="user-profile">
    <el-row type="flex" class="row-bg top" justify="center">
      <el-col :span="16">
        <div  style="border-top-left-radius:50px">
        <img  class="avatar" src="static/1.jpg" alt="">
      </div>
      </el-col>
</el-row>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: [],
  methods: {

  },
  data: () => ({

  })
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
