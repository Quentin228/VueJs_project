import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categories from "../views/Categories";
import Messages from "../views/Messages";
import Recherche from "../views/Recherche";
import CategorieMessages from "../views/CategorieMessages";
import NouvelleCategorie from "../views/NouvelleCategorie";
import ModifCategorie from "../views/ModifCategorie";
import Login from "../views/Login";
import Menu from "../views/Menu";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/nouvelle-categorie',
    name: 'new_categorie',
    component: NouvelleCategorie
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    children: [
      {
        path: ':id',
        name: 'categorie_messages',
        component: CategorieMessages
      },
      {
        path: ':id',
        name: 'modif_cat',
        component: ModifCategorie
      }
    ]
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/recherche',
    name: 'Recherche',
    component: Recherche
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.getItem('isAuthenticated')) next({ name: 'Login' })
  else next()
})

export default router
