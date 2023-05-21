<template>
  <div class="container m-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <router-link :to="{name: 'Home'}">
        <button class="btn btn-secondary">
          <i class="fa-solid fa-arrow-left"></i>
          Retour
        </button>
      </router-link>

      <div>
        <router-link :to="{name: 'Edit', params: {filmId: id}}">
          <button class="btn btn-primary mx-2">
            <i class="fa-solid fa-pen-to-square"></i>
            Éditer le film
          </button>
        </router-link>

        <button class="btn btn-danger" @click="removeFilm()">
          <i class="fa-solid fa-trash"></i>
          Supprimer le film
        </button>
      </div>
    </div>
    <div class="affiche rounded-top" v-bind:style="{ 'background-image': 'url(' + film.affiche + ')' }"></div>
    <div class="bg-white text-dark p-3 rounded-bottom">
      <div class="d-flex justify-content-between">
        <h2 class="flex-grow-1">{{ film.titre }}</h2>
        <div class="d-inline-flex align-items-center">
          <input type="number" min="0" max="5" id="note" v-model="film.note" class="form-control">
          <span class="ms-2">/ 5</span>
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
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Movie",
  computed: {
    ...mapGetters(['getFilmById']),
    ...mapMutations(['deleteFilm']),
    film() {
      return this.getFilmById(this.id);
    }
  },
  data() {
    return {
      id: this.$route.params.filmId,
    }
  },
  methods: {
    removeFilm: function () {
      this.deleteFilm(this.id);
      this.$router.push({name: 'Home'});
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

#note {
  width: 60px;
}
</style>