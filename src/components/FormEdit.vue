<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Édition du film</h5>
          <button type="button" class="btn-close" @click="closeFormEdit"></button>
        </div>
        <div class="modal-body" id="cardNewFilm" >
          <span class="fw-bold">Film</span>
          <input type="text" class="form-control mt-2 mb-3" v-model="film.titre" placeholder="Titre du film">
          <input type="text" class="form-control mt-2 mb-3" v-model="film.affiche" placeholder="Affiche du film (adresse url)">
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
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeFormEdit">Fermer</button>
          <button class="btn btn-success" @click="editFilm">Enregistrer</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: "FormEdit",
  computed: {
    ...mapState(['genres']),
    ...mapState(['langues']),
    ...mapState(['nationalites']),
    ...mapState(['films']),
    film() {
      const id = this.$route.params.id;
      return this.films[id];
    }
  },
  methods: {
    editFilm: function () {
      this.$emit('close');
    },
    closeFormEdit() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.modal {
  display: block;
  background: rgba(0, 0, 0, 0.44);
}
</style>