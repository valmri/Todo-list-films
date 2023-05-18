<template>
  <div class="container m-4">
    <router-link to="/">
      <button class="btn btn-secondary mb-4">
        <i class="fa-solid fa-arrow-left"></i>
        Retour
      </button>
    </router-link>
    <div class="affiche rounded-top" v-bind:style="{ 'background-image': 'url(' + film.affiche + ')' }"></div>
    <div class="bg-white text-dark p-3 rounded-bottom">
      <div class="d-flex justify-content-between">
        <h2>{{ film.titre }}</h2>
        <div>
          <button class="btn btn-primary mx-2" title="Éditer le film" @click="openFormEdit()">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="btn btn-danger" title="Supprimer le film" @click="deleteFilm()">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
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
  <FormEdit v-show="isOpenCardEdit" @close="closeFormEdit"></FormEdit>
</template>

<script>
import {mapState} from "vuex";
import FormEdit from "./FormEdit.vue";

export default {
  name: "Movie",
  computed: {
    ...mapState(['films']),
    film() {
      const id = this.$route.params.id;
      return this.films[id];
    }
  },
  components: {
    FormEdit
  },
  data() {
    return {
      isOpenCardEdit: false
    }
  },
  methods: {
    openFormEdit: function() {
      this.isOpenCardEdit = true;
    },
    closeFormEdit: function() {
      this.isOpenCardEdit = false;
    },
    deleteFilm: function () {
      const id = this.$route.params.id;
      this.films.splice(id, 1);
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.affiche {
  height: 150%;
  position: relative;
}

.affiche::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: inherit;
  background-position: center;
  background-size: cover;
  filter: brightness(100%) blur(5px);
}

.affiche::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  background-image: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.59);
}
</style>