import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Shop from './Shop.vue'
import App from './App.vue'
import Login from './Login.vue'

/**
 * Ovde kreiramo root Vue instancu. Ona nam predstavlja sponu
 * izmedju html-a (public/index.html) i root Vue komponente (Home.vue).
 * 
 * Vue instanci prosledjujemo konfiguracioni objekat.
 * Moguce konfiguracije mozete naci na https://vuejs.org/v2/api/#Options-Data
 * 
 * Prosledili smo komponentu koju zelimo da renderujemo nakon sto smo je importovali na liniji 2. 
 * Komponenta ce biti renderovana na mestu HTML elementa sa id-jem id='app'.
 */

// const routes = {
//     '/': Home,
//     '/shop/:id': Shop
// };

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect : { name: "login" }},
        { path: '/home', name:"home", component: Home },
        { path: '/shop/:id', component: Shop },
        { path: '/login', name:"login", component: Login}
    ]
});

new Vue({
    // computed: {
    //     ViewComponent () {
    //         return routes[this.currentRoute]
    //     }
    // },
    router,
    // components: {Home}
    render (h) { return h(App) }
}).$mount('#app');
