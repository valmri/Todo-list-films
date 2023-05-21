import { createRouter, createWebHistory } from 'vue-router';
import Movie from "../components/Movie.vue";
import List from "../components/List.vue";
import FormEdit from "../components/FormEdit.vue";

const routes = [
  {
    name: 'Home',
    path: '/',
    component: List
  },
  {
    name: 'Movie',
    path: '/movie/:filmId',
    component: Movie
  },
  {
    name: 'Edit',
    path: '/movie/:filmId/edit',
    component: FormEdit
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
