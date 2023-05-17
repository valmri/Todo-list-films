<template>
  <div class="bg-white text-dark rounded p-3 m-4" id="cardNewFilm" v-show="openCard">
    <span class="fw-bold">Nouveau film</span>
    <input type="text" class="form-control mt-2 mb-3" v-model="titreFilm" placeholder="Titre du film">
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

    <button class="btn btn-success w-100" @click="addFilm">Enregistrer</button>
  </div>

  <div class="bg-white text-dark rounded p-3 m-4" id="cardEditFilm" ref="cardEditFilm" v-show="openCardEdit">
    <span class="fw-bold">Éditer un film</span>
    <input type="text" class="form-control mt-2 mb-3" v-model="film.nom" placeholder="Titre du film">
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

    <button class="btn btn-success w-100" @click="editFilm(indexFilm)">Enregistrer</button>
  </div>

  <div class="text-center p-3 m-4">
    <button class="btn btn-success w-25" @click="openCardNewFilm" v-show="!openCard">Ajouter un film</button>
  </div>

</template>

<script>
export default {
  name: "Form",
  emits: ['film-added'],
  data() {
    return {
      genres: [
        "Action",
        "Aventure",
        "Animation",
        "Biographie",
        "Comédie",
        "Comédie dramatique",
        "Comédie musicale",
        "Documentaire",
        "Drame",
        "Epouvante-horreur",
        "Fantaisie",
        "Guerre",
        "Historique",
        "Policier",
        "Romance",
        "Science-fiction",
        "Thriller",
        "Western"
      ],
      langues: [
        "Anglais",
        "Français",
        "Espagnol",
        "Allemand",
        "Italien",
        "Japonais",
        "Mandarin",
        "Cantonais",
        "Coréen",
        "Russe",
        "Portugais",
        "Arabe",
        "Hindi",
        "Bengali",
        "Tamil",
        "Télougou",
        "Marathi",
        "Punjabi",
        "Gujarati"
      ],
      nationalites: [
        "Afghan",
        "Albanian",
        "Algerian",
        "American",
        "Andorran",
        "Angolan",
        "Antiguans",
        "Argentinean",
        "Armenian",
        "Australian",
        "Austrian",
        "Azerbaijani",
        "Bahamian",
        "Bahraini",
        "Bangladeshi",
        "Barbadian",
        "Barbudans",
        "Batswana",
        "Belarusian",
        "Belgian",
        "Belizean",
        "Beninese",
        "Bhutanese",
        "Bolivian",
        "Bosnian",
        "Brazilian",
        "British",
        "Bruneian",
        "Bulgarian",
        "Burkinabe",
        "Burmese",
        "Burundian",
        "Cambodian",
        "Cameroonian",
        "Canadian",
        "Cape Verdean",
        "Central African",
        "Chadian",
        "Chilean",
        "Chinese",
        "Colombian",
        "Comoran",
        "Congolese",
        "Costa Rican",
        "Croatian",
        "Cuban",
        "Cypriot",
        "Czech",
        "Danish",
        "Djibouti",
        "Dominican",
        "Dutch",
        "East Timorese",
        "Ecuadorean",
        "Egyptian",
        "Emirian",
        "Equatorial Guinean",
        "Eritrean",
        "Estonian",
        "Ethiopian",
        "Fijian",
        "Filipino",
        "Finnish",
        "French",
        "Gabonese",
        "Gambian",
        "Georgian",
        "German",
        "Ghanaian",
        "Greek",
        "Grenadian",
        "Guatemalan",
        "Guinea-Bissauan",
        "Guinean",
        "Guyanese",
        "Haitian",
        "Herzegovinian",
        "Honduran",
        "Hungarian",
        "I-Kiribati",
        "Icelander",
        "Indian",
        "Indonesian",
        "Iranian",
        "Iraqi",
        "Irish",
        "Israeli",
        "Italian",
        "Ivorian",
        "Jamaican",
        "Japanese",
        "Jordanian",
        "Kazakhstani",
        "Kenyan",
        "Kittian and Nevisian",
        "Kuwaiti",
        "Kyrgyz",
        "Laotian",
        "Latvian",
        "Lebanese",
        "Liberian",
        "Libyan",
        "Liechtensteiner",
        "Lithuanian",
        "Luxembourger",
        "Macedonian",
        "Malagasy",
        "Malawian",
        "Malaysian",
        "Maldivan",
        "Malian",
        "Maltese",
        "Marshallese",
        "Mauritanian",
        "Mauritian",
        "Mexican",
        "Micronesian",
        "Moldovan",
        "Monacan",
        "Mongolian",
        "Moroccan",
        "Mosotho",
        "Motswana",
        "Mozambican",
        "Namibian",
        "Nauruan",
        "Nepalese",
        "New Zealander",
        "Nicaraguan",
        "Nigerian",
        "Nigerien",
        "North Korean",
        "Northern Irish",
        "Norwegian",
        "Omani",
        "Pakistani",
        "Palauan",
        "Panamanian",
        "Papua New Guinean",
        "Paraguayan",
        "Peruvian",
        "Polish",
        "Portuguese",
        "Qatari",
        "Romanian",
        "Russian",
        "Rwandan",
        "Saint Lucian",
        "Salvadoran",
        "Samoan",
        "San Marinese",
        "Sao Tomean",
        "Saudi",
        "Scottish",
        "Senegalese",
        "Serbian",
        "Seychellois",
        "Sierra Leonean",
        "Singaporean",
        "Slovakian",
        "Slovenian",
        "Solomon Islander",
        "Somali",
        "South African",
        "South Korean",
        "Spanish",
        "Sri Lankan",
        "Sudanese",
        "Surinamer",
        "Swazi",
        "Swedish",
        "Swiss",
        "Syrian",
        "Taiwanese",
        "Tajik",
        "Tanzanian",
        "Thai",
        "Togolese",
        "Tongan",
        "Trinidadian or Tobagonian",
        "Tunisian",
        "Turkish",
        "Tuvaluan",
        "Ugandan",
        "Ukrainian",
        "Uruguayan",
        "Uzbekistani",
        "Venezuelan",
        "Vietnamese",
        "Welsh",
        "Yemenite",
        "Zambian",
        "Zimbabwean"
      ],
      openCard: false,
      openCardEdit: false,

      film: '',

      titreFilm: '',
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
    openCardEditFilm: function() {
      this.openCardEdit = true;
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
        annee: this.anneeFilm,
        langue: this.langueFilm,
        realisateur: realisateur,
        genre: this.genreFilm
      };

      this.$emit('film-added', film);

      this.titreFilm = '';
      this.anneeFilm = '';
      this.langueFilm = '';
      this.genreFilm = '';
      this.openCard = false;
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