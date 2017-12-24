<template>
  <div id="user-page">
    <el-row class="info">
    <el-col :span="6" class="hidden-sm-and-down">
        <img class="to" id="avatar" alt="aaa" src="static/4.jpg">
    </el-col>
    <el-col :span="6">
      <p id="head">用户名</p>
      <p id="introduction">用户介绍</p>
    </el-col>
    <el-col :span="12">
      <p id="head">已收藏表情</p>
    </el-col>
    </el-row>
    <div class="favourite">
      <p id="head">已收藏表情</p>
    <block :pictures="pictures"></block>
    </div>
    <div class="upload">
      <div class="top-head">
      <span id="head">已上传表情</span>
      <el-button id="upload-button">上传</el-button>
      </div>
    <block :pictures="pictures"></block>
    </div>

  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import Block from 'components/Block'
export default {
  name: 'UserProfile',
  props: [],
  methods: {
    sidebarOpened: () => {

    }
  },
  data: () => ({
    pictures: [
      {
        url: 'static/1.jpg',
        text: '狗狗我'
      }, {
        url: 'static/2.png',
        text: 'pingu'
      }, {
        url: 'static/3.jpg',
        text: '熊猫'
      }, {
        url: 'static/4.jpg',
        text: '熊猫'
      }, {
        url: 'static/5.gif',
        text: '萌豚'
      }, {
        url: 'static/2.png',
        text: 'pingu'
      }
    ]
  }),
  components: {
    'block': Block
  }
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
