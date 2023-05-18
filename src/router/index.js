import { createRouter, createWebHistory } from 'vue-router';
import Movie from "../components/Movie.vue";
import List from "../components/List.vue";

const routes = [
  {
    name: 'Home',
    path: '/',
    component: List
  },
  {
    name: 'Movie',
    path: '/movie/:id',
    component: Movie
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
