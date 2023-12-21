import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MainBox from '../views/MainBox.vue'
import routesconfig from '../router/config.js'
import store from '../store/index.js'

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/mainbox",
    name: "mainbox",
    component: MainBox,
  }
  // nested routers should be added dynamicly later and up to permission
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Add a new home&center route as the child of mainbox
// But if too many children routers, put them into an array in config.js
// routesconfig.forEach(item => {
//   router.addRoute("mainbox", item)
// })

// Router guard
// Only show other pages after login successfully
router.beforeEach((to, from, next) =>{
  if(to.name === "login") {
    next()
  } else {
    // If !authorized -> redirect to login page
    // Else -> display all routes children
    if(!localStorage.getItem("token")){
      next({path: "/login"})
    } else {
      // ConfigRouter()  
      // next() // next({path: to.fullPath})
      if(!store.state.isGetterRouter){ 
        // If first time, need config
        ConfigRouter()  
        next({path: to.fullPath})
      } else {
        next()
      }
    }
  }
})

const ConfigRouter = () => {
  routesconfig.forEach(item => {
    router.addRoute("mainbox", item)
  })
  // Change isGetterRouter to true (1st time)
  store.commit("changeGetterRouter", true)
}

export default router
