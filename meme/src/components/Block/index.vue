<template>
  <div class="block">
  <el-row v-for="(col, index1) in pics" :key="index1" >
  <el-col :span="4" v-for="(el, index) in col"  :key="index" style="padding:5px">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="el.url" class="image">
      <div style="padding: 14px;">
        <span class="text">{{el.text}}</span>
        <div class="bottom clearfix">
          <el-tag>{{el.text}}</el-tag>
          <el-tag>{{el.text}}</el-tag>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: ['pictures'],
  methods: {
  },
  data: () => ({
    currentDate: new Date()
  }),
  computed: {
    pics () {
      var pics = []
      var temp = []
      var i = 0
      this.pictures.forEach(function (el) {
        if (i === 6) {
          pics.push(temp)
          i = 0
          temp = []
          return
        }
        if (i < 6) {
          temp.push(el)
        }
        i++
      })
      if (i !== 0) {
        pics.push(temp)
      }
      return pics
    }
  }
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
