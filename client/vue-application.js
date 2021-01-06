const Home = window.httpVueLoader('./components/Home.vue')
const ListChalet = window.httpVueLoader('./components/ListChalet.vue')
const CreateChalet = window.httpVueLoader('./components/CreateChalet.vue')
const HistoryChalet = window.httpVueLoader('./components/HistoryChalet.vue')
const MyProfile = window.httpVueLoader('./components/MyProfile.vue')
const Reservation = window.httpVueLoader('./components/Reservation.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/CreateChalet', component: CreateChalet},
  { path: '/ListChalet', component: ListChalet},
  { path: '/HistoryChalet', component: HistoryChalet},
  { path: '/MyProfile', component: MyProfile},
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
    listChalet: [],
    connected: false,
    currentUser: {}
  },
  async mounted () {
    const res = await axios.get('/api/ListChalet')
    this.listChalet = res.data
  },
  methods: {
    async addUser (newUser) {
      await axios.post('/api/register', newUser)
    },
    async login (user) {
      await axios.post('/api/login', user)
      this.connected = true
      const res = await axios.get('/api/me')
      console.log(res.data)
      this.currentUser = res.data
    },
  },
})