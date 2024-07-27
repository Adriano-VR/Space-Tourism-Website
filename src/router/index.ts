import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Destination from '../views/Destination.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout, // Usar o layout global
    children: [
      { path: '', name: 'Home', component: HomePage },
      { path: 'Destination', name: 'Destination', component: Destination },
     
    ]
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
