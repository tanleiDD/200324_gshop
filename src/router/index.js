import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import LoginByMessage from '../pages/Login/LoginByMessage/LoginByMessage.vue'
import LoginByPassword from '../pages/Login/LoginByPassword/LoginByPassword.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login,
      children: [
        {
          path: '/login/loginbymessage',
          component: LoginByMessage
        },
        {
          path: '/login/loginbypassword',
          component: LoginByPassword
        },
        {
          path: '/login',
          redirect: '/login/loginbymessage'
        }
      ]
    }

  ]
})
