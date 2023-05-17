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
  <FormAdd @film-added="addFilm" :genres="genres" :langues="langues" :nationalites="nationalites"></FormAdd>
  <FormEdit :genres="genres" :langues="langues" :nationalites="nationalites" :film="filmSelected" ref="cardEditFilm"></FormEdit>
</template>

<script>
import FormAdd from "./FormAdd.vue";
import FormEdit from "./FormEdit.vue";

export default {
  name: "List",
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
        "Albanaise",
        "Algérienne",
        "Allemande",
        "Américaine",
        "Andorrane",
        "Angolaise",
        "Antiguaise-et-Barbudienne",
        "Argentine",
        "Arménienne",
        "Australienne",
        "Autrichienne",
        "Azerbaïdjanaise",
        "Bahamienne",
        "Bahreïnienne",
        "Bangladaise",
        "Barbadienne",
        "Belge",
        "Bélizienne",
        "Béninoise",
        "Bhoutanaise",
        "Biélorusse",
        "Birmane",
        "Bissau-Guinéenne",
        "Bolivienne",
        "Bosnienne",
        "Botswanaise",
        "Brésilienne",
        "Britannique",
        "Brunéienne",
        "Bulgare",
        "Burkinabée",
        "Burundaise",
        "Cambodgienne",
        "Camerounaise",
        "Canadienne",
        "Cap-verdienne",
        "Centrafricaine",
        "Chilienne",
        "Chinoise",
        "Chypriote",
        "Colombienne",
        "Comorienne",
        "Congolaise",
        "Costaricaine",
        "Croate",
        "Cubaine",
        "Danoise",
        "Djiboutienne",
        "Dominicaine",
        "Dominiquaise",
        "Égyptienne",
        "Émirienne",
        "Équatorienne",
        "Érythréenne",
        "Espagnole",
        "Est-timoraise",
        "Estonienne",
        "Éthiopienne",
        "Fidjienne",
        "Finlandaise",
        "Française",
        "Gabonaise",
        "Gambienne",
        "Géorgienne",
        "Ghanéenne",
        "Grecque",
        "Grenadienne",
        "Guatémaltèque",
        "Guinéenne",
        "Guyanienne",
        "Haïtienne",
        "Hondurienne",
        "Hongroise",
        "Indienne",
        "Indonésienne",
        "Irakienne",
        "Iranienne",
        "Irlandaise",
        "Islandaise",
        "Israélienne",
        "Italienne",
        "Ivoirienne",
        "Jamaïcaine",
        "Japonaise",
        "Jordanienne",
        "Kazakhstanaise",
        "Kenyane",
        "Kirghize",
        "Kiribatienne",
        "Kittitienne-et-Névicienne",
        "Koweïtienne",
        "Laotienne",
        "Lesothane",
        "Lettone",
        "Libanaise",
        "Libérienne",
        "Libyenne",
        "Liechtensteinoise",
        "Lituanienne",
        "Luxembourgeoise",
        "Macédonienne",
        "Malaisienne",
        "Malawienne",
        "Maldivienne",
        "Malgache",
        "Malgache",
        "Malienne",
        "Maltaise",
        "Marocaine",
        "Marshallaise",
        "Mauricienne",
        "Mauritanienne",
        "Mexicaine",
        "Micronésienne",
        "Moldave",
        "Monegasque",
        "Mongole",
        "Monténégrine",
        "Mozambicaine",
        "Namibienne",
        "Nauruane",
        "Néerlandaise",
        "Néo-Zélandaise",
        "Népalaise",
        "Nicaraguayenne",
        "Nigériane",
        "Nigérienne",
        "Niuéenne",
        "Nord-coréenne",
        "Norvégienne",
        "Omanaise",
        "Ougandaise",
        "Ouzbéke",
        "Pakistanaise",
        "Palaosienne",
        "Palestinienne",
        "Panaméenne",
        "Papouasienne-Néo-Guinéenne",
        "Paraguayenne",
        "Péruvienne",
        "Philippine",
        "Polonaise",
        "Portugaise",
        "Qatarienne",
        "Roumaine",
        "Russe",
        "Rwandaise",
        "Saint-Lucienne",
        "Saint-Marinaise",
        "Saint-Vincentaise-et-Grenadine",
        "Salomonaise",
        "Salvadorienne",
        "Samoane",
        "Santoméenne",
        "Saoudienne",
        "Sénégalaise",
        "Serbe",
        "Seychelloise",
        "Sierra-Léonaise",
        "Singapourienne",
        "Slovaque",
        "Slovène",
        "Somalienne",
        "Soudanaise",
        "Sri-Lankaise",
        "Sud-Africaine",
        "Sud-Coréenne",
        "Sud-Soudanaise",
        "Suédoise",
        "Suisse",
        "Surinamaise",
        "Swazie",
        "Syrienne",
        "Tadjike",
        "Tanzanienne",
        "Tchadienne",
        "Tchèque",
        "Thaïlandaise",
        "Togolaise",
        "Tonguienne",
        "Trinidadienne",
        "Tunisienne",
        "Turkmène",
        "Turque",
        "Tuvaluane",
        "Ukrainienne",
        "Uruguayenne",
        "Vanuatuane",
        "Vaticane",
        "Vénézuélienne",
        "Vietnamienne",
        "Yéménite",
        "Zambienne",
        "Zimbabwéenne"
      ],
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
      filmSelected: null,
      indexFilm: null,
      titreFilm: '',
      openCardEdit: false
    }
  },
  components: {
    FormAdd,
    FormEdit
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
      this.filmSelected = this.films[index];
      this.$refs.cardEditFilm.openCardEditFilm();
    }
  }
}

</script>

<style scoped>

</style>