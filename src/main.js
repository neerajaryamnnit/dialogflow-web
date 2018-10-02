import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import App from './App.vue'
import Nl2br from 'vue-nl2br'
Vue.use(VueCarousel);
Vue.component('nl2br', Nl2br);
new Vue({
    el: '#app',
    render: h => h(App)
}).$mount('#app')