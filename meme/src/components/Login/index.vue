<template>
  <div class="log-in">
    <h1>登录</h1>
        <el-form>
          <el-row>
          <el-col :span="12" :offset="6">
            <el-form-item label="username">
                <el-input type="text" id="user" v-model="formName.user" ></el-input>
            </el-form-item>
          </el-col>
          </el-row>
          <el-row>
          <el-col :span="12" :offset="6">
            <el-form-item label="password">
                <el-input type="password" id="password" v-model="formName.password" ></el-input>
            </el-form-item>
          </el-col>
          </el-row>
            <el-button type="primary" v-bind:disabled="formName.beDisabled">登录</el-button>
        </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: [],
  methods: {
    resetForm: () => {
      this.formName.user = ''
      this.formName.password = ''
    }
  },
  data: () => ({
    formName: {
      user: '',
      password: '',
      beDisabled: false
    }
  })
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
