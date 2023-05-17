<template>
  <div v-for="(film, index) in films" class="bg-white text-dark rounded p-3 m-4">
    <div class="d-flex justify-content-between align-items-center">
      <span class="fw-bold">{{ film.titre }}</span>
      <div>
        <button class="btn btn-primary mx-2" title="Éditer le film" @click="openCardEditFilm(index)">
          <i class="las la-edit"></i>
        </button>
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
  <Form @film-added="addFilm" ref="cardEditFilm"></Form>
</template>

<script>
import Form from "./FormAdd.vue";


export default {
  name: "List",
  data() {
    return {
      films: [
        {
          "titre": "Inception",
          "annee": 2010,
          "langue": "Anglais",
          "realisateur": {
            "nom": "Nolan",
            "prenom": "Christopher",
            "nationalite": "Britannique",
            "dateNaissance": 1970
          },
          "genre": "Science-fiction"
        },
        {
          "titre": "Le Parrain",
          "annee": 1972,
          "langue": "Anglais",
          "realisateur": {
            "nom": "Coppola",
            "prenom": "Francis Ford",
            "nationalite": "Américain",
            "dateNaissance": 1939
          },
          "genre": "Drame"
        },
        {
          "titre": "La La Land",
          "annee": 2016,
          "langue": "Anglais",
          "realisateur": {
            "nom": "Chazelle",
            "prenom": "Damien",
            "nationalite": "Américain",
            "dateNaissance": 1985
          },
          "genre": "Comédie musicale"
        },
        {
          "titre": "Blade Runner",
          "annee": 1982,
          "langue": "Anglais",
          "realisateur": {
            "nom": "Scott",
            "prenom": "Ridley",
            "nationalite": "Britannique",
            "dateNaissance": 1937
          },
          "genre": "Science-fiction"
        },
        {
          "titre": "Le Seigneur des Anneaux : La Communauté de l'Anneau",
          "annee": 2001,
          "langue": "Anglais",
          "realisateur": {
            "nom": "Jackson",
            "prenom": "Peter",
            "nationalite": "Néo-Zélandais",
            "dateNaissance": 1961
          },
          "genre": "Fantaisie"
        }
      ],
      indexFilm: null,
      titreFilm: '',
      openCardEdit: false
    }
  },
  components: {
    Form
  },
  methods: {
    addFilm(film) {
      this.films.push(film);
    },
    deleteFilm: function (index) {
      if (index !== -1) {
        this.films.splice(index, 1);
      }
    },
    openCardEditFilm: function (index) {
      this.openCardEdit = true;
      this.$refs.cardEditFilm.openCardEditFilm();
    }
  }
}

</script>

<style scoped>

</style>