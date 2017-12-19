<template>
<div>
<header>
      <el-menu 
       :default-active="activeIndex" 
       class="el-menu-demo" 
       mode="horizontal" 
       @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <span class="header-title">{{ title }}</span>
        <el-menu-item index="2"><el-input v-model="input" placeholder="请输入内容"></el-input></el-menu-item>
        <el-submenu index="3">
          <template slot="title">我的工作台</template>
          <el-menu-item index="3-1">上传图片</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-submenu>
        <el-upload
          index = 4
          class="imgUpload"
          :on-preview="hanflePreview"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-menu>
</header>
</div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  props: ['title'],
  methods: {
    handleSelect: () => {
      
    },
    handleRemove(file, fileList) {

    }
  },

  data: () => ({
    activeIndex: '0',
    input: '搜索'
  })
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
