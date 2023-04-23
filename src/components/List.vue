<template>
  <div class="d-block w-25">

      <div v-for="(film, index) in films" class="d-flex justify-content-between align-items-center bg-white text-dark rounded p-3 m-4">
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

      <div class="bg-white text-dark rounded p-3 m-4" id="cardNewFilm" v-show="openCard">
        <span class="fw-bold">Nouveau film</span>
        <input type="text" class="form-control mt-2 mb-3" v-model="titreFilm">
        <button class="btn btn-success w-100" @click="addFilm">Enregistrer</button>
      </div>

      <div class="bg-white text-dark rounded p-3 m-4" id="cardEditFilm" v-show="openCardEdit">
        <span class="fw-bold">Éditer un film</span>
        <input type="text" class="form-control mt-2 mb-3" v-model="titreFilm" placeholder="titreFilm">
        <button class="btn btn-success w-100" @click="editFilm(indexFilm)">Enregistrer</button>
      </div>
      <button class="btn btn-primary p-2 m-4" @click="openCardNewFilm" v-show="!openCard">Ajouter un film</button>
  </div>
</template>

<script>

class Film {
  titre;
  annee;
  langue;
  realisateur;
  genre;

  constructor(titre, annee, langue, realisateur, genre) {
    this.titre = titre;
    this.annee = annee;
    this.langue = langue;
    this.realisateur = realisateur;
    this.genre = genre;
  }
}

class Realisateur {
  nom;
  prenom;
  nationalite;
  dateNaissance;

  constructor(nom, prenom, nationalite, dateNaissance) {
    this.nom = nom;
    this.prenom = prenom;
    this.nationalite = nationalite;
    this.dateNaissance = dateNaissance;
  }

  getIdentite() {
    return this.prenom + ' ' + this.nom;
  }
}
export default {
  name: "List",
  data() {
    return {
      realisateurs: [
        new Realisateur("Nolan", "Christopher", "Britannique", 1970),
        new Realisateur("Coppola", "Francis Ford", "Américain", 1939),
        new Realisateur("Chazelle", "Damien", "Américain", 1985),
        new Realisateur("Scott", "Ridley", "Britannique", 1937),
        new Realisateur("Jackson", "Peter", "Néo-Zélandais", 1961)
      ],
      films: [
        new Film("Inception", 2010, "Anglais", "this.realisateurs[1].getIdentite()", "Science-fiction"),
        new Film("Le Parrain", 1972, "Anglais", "this.realisateurs[1].getIdentite()", "Drame"),
        new Film("La La Land", 2016, "Anglais", "this.realisateurs[2].getIdentite()", "Comédie musicale"),
        new Film("Blade Runner", 1982, "Anglais", "this.realisateurs[3].getIdentite()", "Science-fiction"),
        new Film("Le Seigneur des Anneaux : La Communauté de l'Anneau", 2001, "Anglais", "this.realisateurs[4].getIdentite()", "Fantaisie")
      ],
      openCard: false,
      openCardEdit: false,
      indexFilm: null,
      titreFilm: ''
    }
  },
  methods: {
    openCardNewFilm: function() {
      this.openCard = true;
    },
    addFilm: function() {
      this.films.push(this.titreFilm);
      this.titreFilm = '';
      this.openCard = false;
    },
    deleteFilm: function(index) {
      if (index !== -1) {
        this.films.splice(index, 1);
      }
    },
    openCardEditFilm: function(index) {
      this.openCardEdit = true;
      this.titreFilm = this.films[index].titre;
      this.indexFilm = index;
    },
    editFilm: function(index) {
      this.films[index].titre = this.titreFilm;
      this.openCardEdit = false;
    }
  }
}

</script>

<style scoped>

</style>