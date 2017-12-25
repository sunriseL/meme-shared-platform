<template>
<div class="dispaly">
  <div class="card">
  <el-carousel :interval="50000" type="card" arrow="hover" width="10px">
    <el-carousel-item v-for="(item, index) in items" :key="index"  label="表情包" >
      <img :src="item.url" alt="" >
    </el-carousel-item>
  </el-carousel>
  </div>
  <block :pictures="pictures"></block>
</div>
</template>

<script>
import Block from 'components/Block'
export default {
  name: 'Display',
  props: [],
  methods: {
  },
  data: () => ({
    items: [
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
      }
    ],
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
      }, {
        url: 'static/3.jpg',
        text: '熊猫'
      }, {
        url: 'static/4.jpg',
        text: '熊猫'
      }, {
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
