import { createRouter, createWebHistory } from 'vue-router';
import Movie from "../components/Movie.vue";
import List from "../components/List.vue";

const routes = [
  {
    path: '/',
    component: List
  },
  {
    path: '/movie',
    component: Movie
  }
  // Autres routes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
