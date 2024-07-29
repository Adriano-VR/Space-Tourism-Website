import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Destination from '../views/Destination.vue';
import Crew from '../views/Crew.vue';
import Technology from '../views/Technology.vue';


const routes = [
  {
    path: '/',
    component: DefaultLayout, // Usar o layout global
    children: [
      { path: '', redirect: 'home' } ,// Redirect the base path to 'home'
      { path: 'home', name: 'Home', component: HomePage },
      { path: 'Destination', name: 'Destination', component: Destination },
      { path: 'Crew', name: 'Crew',  component: Crew } ,
      { path: 'Technology', name: 'Technology',  component: Technology } 
   
    ]
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
