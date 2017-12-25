import Vue from 'vue'
import Router from 'vue-router'
import Display from 'components/Display'
import Login from 'components/Login'
import UserProfile from 'components/UserProfile'
import Upload from 'components/Upload'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/display',
      name: 'Display',
      component: Display
    },
    {
      path: '/user',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }
  ]
})
