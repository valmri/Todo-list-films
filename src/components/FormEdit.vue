<template>
  <div class="container m-4">
    <div class="bg-white text-dark p-3 rounded-bottom">
      <div>
        <span class="fw-bold">Film</span>
        <input type="text" class="form-control mt-2 mb-3" v-model="film.titre" placeholder="Titre du film">
        <input type="text" class="form-control mt-2 mb-3" v-model="film.affiche"
               placeholder="Affiche du film (adresse url)">
        <select class="form-control mt-2 mb-3" v-model="film.genre">
          <option disabled value="">Genre</option>
          <option v-for="(genre) in getGenres" :value="genre">{{ genre }}</option>
        </select>
        <input type="number" class="form-control mt-2 mb-3" v-model="film.annee" min="1000" placeholder="Année">
        <select class="form-control mt-2 mb-3" v-model="film.langue">
          <option disabled value="">Langue</option>
          <option v-for="(langue) in getLangues" :value="langue">{{ langue }}</option>
        </select>
        <hr/>
        <span class="fw-bold">Réalisateur</span>
        <input type="text" class="form-control mt-2 mb-3" v-model="film.realisateur.nom" placeholder="Nom">
        <input type="text" class="form-control mt-2 mb-3" v-model="film.realisateur.prenom" placeholder="Prénom">
        <select class="form-control mt-2 mb-3" v-model="film.realisateur.nationalite">
          <option disabled value="">Nationalité</option>
          <option v-for="(nationalite) in getNationalites" :value="nationalite">{{ nationalite }}</option>
        </select>
        <input type="number" class="form-control mt-2 mb-3" min="1000" v-model="film.realisateur.dateNaissance" placeholder="Année de naissance">
      </div>
      <div class="text-end">
        <router-link :to="{name: 'Movie', params: {filmId: id}}">
          <button class="btn btn-danger me-2">
            Annuler
          </button>
        </router-link>
        <button class="btn btn-success" @click="editFilm()">
          Enregistrer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "FormEdit",
  computed: {
    ...mapGetters(['getGenres']),
    ...mapGetters(['getLangues']),
    ...mapGetters(['getNationalites']),
    ...mapGetters(['getFilms']),
    film() {
      return {...this.getFilms[this.id]};
    }
  },
  data() {
    return {
      id: this.$route.params.filmId,
    }
  },
  methods: {
    ...mapMutations(['updateFilm']),
    editFilm: function() {
      this.updateFilm(this.film);
      this.$router.push({name: 'Movie', params:{filmId: this.film.id}})
    }
  }
}
</script>

<style scoped>
</style>