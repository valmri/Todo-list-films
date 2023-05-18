<template>
  <div class="container">
    <div v-for="(film, index) in films" class="film position-relative">
      <div class="d-flex rounded bg-white m-4 p-3">
        <div class="affiche rounded" v-bind:style="{ 'background-image': 'url(' + film.affiche + ')' }"></div>
        <div class="w-100 text-dark ps-3">
          <div class="d-flex justify-content-between align-items-center">
            <span class="fw-bold">{{ film.titre }}</span>
            <div class="stretched-link--disabled ">
              <button class="btn btn-danger" title="Supprimer le film" @click="deleteFilm(index)">
                <i class="las la-trash"></i>
              </button>
            </div>
          </div>
          <div>
            <span class="badge bg-secondary">{{ film.annee }}</span>
            <span class="badge bg-secondary mx-1">{{ film.langue }}</span>
            <span class="badge bg-secondary mx-1">{{ film.realisateur.prenom }} {{ film.realisateur.nom }}</span>
            <span class="badge bg-secondary mx-1">{{ film.genre }}</span>
          </div>
        </div>
      </div>
      <router-link :to="{ path: '/movie/' + index }" class="stretched-link"></router-link>
    </div>
    <FormAdd @film-added="addFilm" :genres="genres" :langues="langues" :nationalites="nationalites"></FormAdd>
    <FormEdit :genres="genres" :langues="langues" :nationalites="nationalites" :film="filmSelected" ref="cardEditFilm"></FormEdit>
  </div>
</template>

<script>
import FormAdd from "./FormAdd.vue";
import {mapMutations, mapState} from "vuex";

export default {
  name: "List",
  data() {
    return {
      filmSelected: null,
      indexFilm: null,
      titreFilm: ''
    }
  },
  components: {
    FormAdd
  },
  computed: {
    ...mapState(['films'])
  },
  methods: {
    ...mapMutations(['setFilms']),
    addFilm(film) {
      this.films.push(film);
    },
    deleteFilm: function (index) {
      if (index !== -1) {
        this.films.splice(index, 1);
      }
    }
  }
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

.stretched-link--disabled {
  z-index: 2;
  position: relative;
}

</style>