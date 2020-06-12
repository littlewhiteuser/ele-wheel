// 导入组件
import ChooseDrawer from './ChooseDrawer.vue'

// 为组件提供 install 安装方法，供按需引入
ChooseDrawer.install = function(Vue) {
  Vue.component(ChooseDrawer.name, ChooseDrawer)
}

// 默认导出组件
export default ChooseDrawer
