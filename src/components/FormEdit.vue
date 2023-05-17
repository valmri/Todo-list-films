<template>
  <div class="bg-white text-dark rounded p-3 m-4" id="cardEditFilm" v-show="openCardEdit" v-if="film">
    <span class="fw-bold">Éditer un film</span>
    <input type="text" class="form-control mt-2 mb-3" v-model="film.titre" placeholder="Titre du film">
    <select class="form-control mt-2 mb-3" v-model="film.genre">
      <option disabled value="">Genre</option>
      <option v-for="(genre) in genres" :value="genre">{{ genre }}</option>
    </select>
    <input type="text" class="form-control mt-2 mb-3" v-model="film.annee" placeholder="Année">
    <select class="form-control mt-2 mb-3" v-model="film.langue">
      <option disabled value="">Langue</option>
      <option v-for="(langue) in langues" :value="langue">{{ langue }}</option>
    </select>
    <hr/>
    <span class="fw-bold">Réalisateur</span>
    <input type="text" class="form-control mt-2 mb-3" v-model="film.realisateur.nom" placeholder="Nom">
    <input type="text" class="form-control mt-2 mb-3" v-model="film.realisateur.prenom" placeholder="Prénom">
    <select class="form-control mt-2 mb-3" v-model="film.realisateur.nationalite">
      <option disabled value="">Nationalité</option>
      <option v-for="(nationalite) in nationalites" :value="nationalite">{{ nationalite }}</option>
    </select>
    <input type="text" class="form-control mt-2 mb-3" v-model="film.realisateur.dateNaissance" placeholder="Année de naissance">

    <button class="btn btn-success w-100" @click="editFilm()">Enregistrer</button>
  </div>
</template>

<script>
export default {
  name: "FormEdit",
  props: {
    genres: {
      type: Array,
      default: null
    },
    langues: {
      type: Array,
      default: null
    },
    nationalites: {
      type: Array,
      default: null
    },
    film: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      openCardEdit: false
    }
  },
  methods: {
    openCardEditFilm: function() {
      this.openCardEdit = true;
    },
    editFilm: function() {
      this.openCardEdit = false;
    }
  }
}
</script>

<style scoped>

</style>