<template>
<div class="dispaly">
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in items" :key="item">
      <img :src="item.url" alt="">
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
  name: 'Display',
  props: ['title'],
  methods: {
    handleSelect: () => {

    }
  },
  data: () => ({
    items: [
      {
        url: 'static/1.jpg'
      }, {
        url: 'static/2.png'
      }
    ]
  })
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
