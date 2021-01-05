const Home = window.httpVueLoader('./components/Home.vue')
const ListChalet = window.httpVueLoader('./components/ListChalet.vue')
const CreateChalet = window.httpVueLoader('./components/CreateChalet.vue')
const HistoryChalet = window.httpVueLoader('./components/HistoryChalet.vue')
const Reservation = window.httpVueLoader('./components/Reservation.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/CreateChalet', component: CreateChalet},
  { path: '/ListChalet', component: ListChalet},
  { path: '/HistoryChalet', component: HistoryChalet},
  { path: '/Reservation', component: Reservation},
  { path: '/register', component: Register },
  { path: '/login', component: Login },
]

const router = new VueRouter({
    routes
  })

var app = new Vue({
  router,
  el: '#app',
  data: {
    listChalet: []
  },
  async mounted () {
    const res = await axios.get('/ListChalet')
    this.listChalet = res.data
  }
})