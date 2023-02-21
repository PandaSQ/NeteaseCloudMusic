import Vue from 'vue'
import App from './App.vue'


//import "@/mobile/flexible" //自动适应宽度，改变font-size的大小
import "@/style/reset.css" //初始话标签
import router from '@/router'

import {Col,Row,Container,Header,Aside,Main,Footer,Input,Image,Menu,MenuItem,
MenuItemGroup,Carousel,CarouselItem,Avatar} from 'element-ui'
Vue.use(Col);
Vue.use(Row);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Input);
Vue.use(Image);
Vue.use(Menu)
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Avatar);


Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
