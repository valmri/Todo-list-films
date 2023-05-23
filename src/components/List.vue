<template>
  <div class="container">
    <Search @search="updateListFilms"></Search>
    <div v-for="(film) in listFilms" class="film position-relative">
      <div class="d-flex rounded bg-white m-4 p-3">
        <div class="affiche rounded" v-bind:style="{ 'background-image': 'url(' + film.affiche + ')' }"></div>
        <div class="w-100 text-dark ps-3">
          <div class="d-flex justify-content-between align-items-center">
            <span class="fw-bold">{{ film.titre }}</span>
          </div>
          <div>
            <span class="badge bg-secondary">{{ film.annee }}</span>
            <span class="badge bg-secondary mx-1">{{ film.langue }}</span>
            <span class="badge bg-secondary mx-1">{{ film.realisateur.prenom }} {{ film.realisateur.nom }}</span>
            <span class="badge bg-secondary mx-1">{{ film.genre }}</span>
          </div>
        </div>
      </div>
      <router-link :to="{ path: '/movie/' + film.id }" class="stretched-link"></router-link>
    </div>
    <FormAdd></FormAdd>
  </div>
</template>

<script>
import FormAdd from "./FormAdd.vue";
import Search from "./Search.vue";
import {mapGetters} from "vuex";

export default {
  name: "List",
  components: {
    Search,
    FormAdd
  },
  computed: {
    ...mapGetters(['getFilms']),
  },
  data() {
    return {
      listFilms: []
    }
  },
  created() {
    this.listFilms = this.getFilms;

    this.$store.watch(
      () => this.getFilms,
      (newFilm) => {
        this.listFilms = newFilm;
      }
    );
  },
  methods: {
    updateListFilms(listFilmsUpdate) {
      this.listFilms = listFilmsUpdate;
    }
  },
}
</script>

<style scoped>
.film {
  cursor: pointer;
}

.film:hover {
  transform: scale(1.1);
  transition: 1s;
}

.affiche {
  height: 150px;
  width: 150px;
  background-size: cover;
  background-position: center;
}
</style>