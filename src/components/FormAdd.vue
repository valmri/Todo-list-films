<template>
  <div class="modal" tabindex="-1" v-show="openCard">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Ajout d'un film</h5>
          <button type="button" class="btn-close" @click="closeCardNewFilm"></button>
        </div>
        <div class="modal-body" id="cardNewFilm" >
          <span class="fw-bold">Film</span>
          <input type="text" class="form-control mt-2 mb-3" v-model="titreFilm" placeholder="Titre du film">
          <input type="text" class="form-control mt-2 mb-3" v-model="afficheFilm" placeholder="Affiche du film (adresse url)">
          <select class="form-control mt-2 mb-3" v-model="genreFilm">
            <option disabled value="">Genre</option>
            <option v-for="(genre) in genres" :value="genre">{{ genre }}</option>
          </select>
          <input type="text" class="form-control mt-2 mb-3" v-model="anneeFilm" placeholder="Année">
          <select class="form-control mt-2 mb-3" v-model="langueFilm">
            <option disabled value="">Langue</option>
            <option v-for="(langue) in langues" :value="langue">{{ langue }}</option>
          </select>
          <hr/>
          <span class="fw-bold">Réalisateur</span>
          <input type="text" class="form-control mt-2 mb-3" v-model="nomRealisateur" placeholder="Nom">
          <input type="text" class="form-control mt-2 mb-3" v-model="prenomRealisateur" placeholder="Prénom">
          <select class="form-control mt-2 mb-3" v-model="nationaliteRealisateur">
            <option disabled value="">Nationalité</option>
            <option v-for="(nationalite) in nationalites" :value="nationalite">{{ nationalite }}</option>
          </select>
          <input type="text" class="form-control mt-2 mb-3" v-model="naissanceRealisateur" placeholder="Année de naissance">
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeCardNewFilm">Fermer</button>
          <button class="btn btn-success" @click="addFilm">Enregistrer</button>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center p-3 m-4">
    <button class="btn btn-success w-25" @click="openCardNewFilm" v-show="!openCard">Ajouter un film</button>
  </div>
</template>

<script>
export default {
  name: "FormAdd",
  emits: ['film-added'],
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
    }
  },
  data() {
    return {
      openCard: false,

      film: '',

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
    openCardNewFilm: function() {
      this.openCard = true;
    },
    closeCardNewFilm: function() {
      this.openCard = false;
    },
    addFilm: function() {

      const realisateur = {
        nom: this.nomRealisateur,
        prenom: this.prenomRealisateur,
        nationalite: this.nationaliteRealisateur,
        dateNaissance: this.naissanceRealisateur
      }

      const film = {
        titre: this.titreFilm,
        affiche: this.afficheFilm,
        annee: this.anneeFilm,
        langue: this.langueFilm,
        realisateur: realisateur,
        genre: this.genreFilm
      };

      this.$emit('film-added', film);

      this.titreFilm = '';
      this.afficheFilm = '';
      this.anneeFilm = '';
      this.langueFilm = '';
      this.genreFilm = '';

      this.nomRealisateur = '';
      this.prenomRealisateur = '';
      this.nationaliteRealisateur = '';
      this.naissanceRealisateur = '';

      this.openCard = false;
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