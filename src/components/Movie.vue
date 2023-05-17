<template>
  <div class="container m-4">
    <router-link to="/">
      <button class="btn btn-secondary">
        <i class="fa-solid fa-arrow-left"></i>
        Retour
      </button>
    </router-link>
    <div class="affiche rounded-top" v-bind:style="{ 'background-image': 'url(' + film.affiche + ')' }"></div>
    <div class="bg-white text-dark p-3 rounded-bottom">
      <h2>{{ film.titre }}</h2>
      <div class="mb-4">
        <span class="badge bg-secondary">{{ film.annee }}</span>
        <span class="badge bg-secondary mx-1">{{ film.langue }}</span>
        <span class="badge bg-secondary mx-1">{{ film.realisateur.prenom }} {{ film.realisateur.nom }}</span>
        <span class="badge bg-secondary mx-1">{{ film.genre }}</span>
      </div>
      <h3>Réalisateur</h3>
      <span class="fw-bold">Identité : </span><span>{{ film.realisateur.prenom + ' ' + film.realisateur.nom }}</span><br/>
      <span class="fw-bold">Nationalité : </span><span>{{ film.realisateur.nationalite }}</span><br/>
      <span class="fw-bold">Année de naissance : </span><span>{{ film.realisateur.dateNaissance }}</span>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Movie",
  computed: {
    ...mapState(['films']),
    film() {
      const id = this.$route.params.id;
      return this.films[id];
    }
  },
}
</script>

<style scoped>
.affiche {
  height: 500px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: gray;
}
</style>