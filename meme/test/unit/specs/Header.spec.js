import Vue from 'vue'
import HeaderMenu from '@/components/HeaderMenu'

function getRenderedVm (Component, propsData) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor({ propsData }).$mount()
    return vm
}

describe('header', () => {
  it('应显示标题内容： 表情包分享平台', () => {
    let childvm = getRenderedVm(HeaderMenu, {
            title: '表情包分享平台'
        });

        // 断言组件的child组件的props是否生效
        expect(childvm.$el.querySelector('.header-title').textContent).toEqual('表情包分享平台');

  })
})
