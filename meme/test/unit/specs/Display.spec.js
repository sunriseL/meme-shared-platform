import Vue from 'vue'
import Display from '@/components/Display'



describe('display', () => {
  it('应显示标题内容： 表情包分享平台', () => {
     let vm = new Vue(Display).$mount();
     expect(vm.items).toEqual([
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
     ])
        // 断言组件的child组件的props是否生效


  })
})

function getRenderedVm (Component, propsData) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor({ propsData }).$mount()
    return vm
}
