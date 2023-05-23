<template>
  <div class="modal" tabindex="-1" v-show="isOpenFormAdd">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Ajout d'un film</h5>
          <button type="button" class="btn-close" @click="closeFormAdd"></button>
        </div>
        <div class="modal-body">
          <form>
            <span class="fw-bold">Film</span>
            <input type="text" class="form-control mt-2 mb-3" v-model="titreFilm" placeholder="Titre du film">
            <input type="text" class="form-control mt-2 mb-3" v-model="afficheFilm"
                   placeholder="Affiche du film (adresse url)">
            <select class="form-control mt-2 mb-3" v-model="genreFilm">
              <option disabled value="">Genre</option>
              <option v-for="(genre) in getGenres" :value="genre">{{ genre }}</option>
            </select>
            <input type="number" class="form-control mt-2 mb-3" v-model="anneeFilm" placeholder="Année">
            <select class="form-control mt-2 mb-3" v-model="langueFilm">
              <option disabled value="">Langue</option>
              <option v-for="(langue) in getLangues" :value="langue">{{ langue }}</option>
            </select>
            <hr/>
            <span class="fw-bold">Réalisateur</span>
            <input type="text" class="form-control mt-2 mb-3" v-model="nomRealisateur" placeholder="Nom">
            <input type="text" class="form-control mt-2 mb-3" v-model="prenomRealisateur" placeholder="Prénom">
            <select class="form-control mt-2 mb-3" v-model="nationaliteRealisateur">
              <option disabled value="">Nationalité</option>
              <option v-for="(nationalite) in getNationalites" :value="nationalite">{{ nationalite }}</option>
            </select>
            <input type="number" class="form-control mt-2 mb-3" v-model="naissanceRealisateur"
                   placeholder="Année de naissance">
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeFormAdd">Fermer</button>
          <button class="btn btn-success" @click="addNewFilm">Enregistrer</button>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center p-3 m-4">
    <button class="btn btn-success w-25" @click="openFormAdd" v-show="!isOpenFormAdd">Ajouter un film</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "FormAdd",
  computed: {
    ...mapGetters(['getGenres']),
    ...mapGetters(['getLangues']),
    ...mapGetters(['getNationalites']),
    ...mapGetters(['getFilms'])
  },
  data() {
    return {
      isOpenFormAdd: false,

      titreFilm: '',
      afficheFilm: '',
      genreFilm: '',
      anneeFilm: '',
      langueFilm: '',

      nomRealisateur: '',
      prenomRealisateur: '',
      nationaliteRealisateur: '',
      naissanceRealisateur: ''
    }
  },
  methods: {
    ...mapMutations(['addFilm']),
    openFormAdd: function () {
      this.isOpenFormAdd = true;
    },
    closeFormAdd: function () {
      this.isOpenFormAdd = false;
    },
    addNewFilm: function () {

      const realisateur = {
        nom: this.nomRealisateur,
        prenom: this.prenomRealisateur,
        nationalite: this.nationaliteRealisateur,
        dateNaissance: this.naissanceRealisateur
      }

      const film = {
        id: null,
        titre: this.titreFilm,
        affiche: this.afficheFilm,
        annee: this.anneeFilm,
        langue: this.langueFilm,
        realisateur: realisateur,
        genre: this.genreFilm,
        note: 0
      };

      this.addFilm(film);

      this.titreFilm = '';
      this.afficheFilm = '';
      this.anneeFilm = '';
      this.langueFilm = '';
      this.genreFilm = '';

      this.nomRealisateur = '';
      this.prenomRealisateur = '';
      this.nationaliteRealisateur = '';
      this.naissanceRealisateur = '';

      this.isOpenFormAdd = false;
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