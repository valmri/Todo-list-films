import {createStore} from 'vuex';

const store = createStore({
  state() {
    return {
      films: [
        {
          "id": 0,
          "titre": "Inception",
          "annee": 2010,
          "langue": "Anglais",
          "realisateur": {
            "nom": "Nolan",
            "prenom": "Christopher",
            "nationalite": "Britannique",
            "dateNaissance": 1970
          },
          "genre": "Science-fiction",
          "affiche": "https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg",
          "note": 0
        },
        {
          "id": 1,
          "titre": "Le Parrain",
          "annee": 1972,
          "langue": "Anglais",
          "realisateur": {
            "nom": "Coppola",
            "prenom": "Francis Ford",
            "nationalite": "Américaine",
            "dateNaissance": 1939
          },
          "genre": "Drame",
          "affiche": "https://fr.web.img4.acsta.net/medias/nmedia/18/35/57/73/18660716.jpg",
          "note": 0
        },
        {
          "id": 2,
          "titre": "La La Land",
          "annee": 2016,
          "langue": "Anglais",
          "realisateur": {
            "nom": "Chazelle",
            "prenom": "Damien",
            "nationalite": "Américaine",
            "dateNaissance": 1985
          },
          "genre": "Comédie musicale",
          "affiche": "https://i0.wp.com/www.zickma.fr/wp-content/uploads/2017/04/la-la-land-quelle-edition-acheter-12.jpg?fit=958%2C1200&ssl=1",
          "note": 0
        },
        {
          "id": 3,
          "titre": "Blade Runner",
          "annee": 1982,
          "langue": "Anglais",
          "realisateur": {
            "nom": "Scott",
            "prenom": "Ridley",
            "nationalite": "Britannique",
            "dateNaissance": 1937
          },
          "genre": "Science-fiction",
          "affiche": "https://m.media-amazon.com/images/I/61dVSMH76yL._AC_SY606_.jpg",
          "note": 0
        },
        {
          "id": 4,
          "titre": "Le Seigneur des Anneaux : La Communauté de l'Anneau",
          "annee": 2001,
          "langue": "Anglais",
          "realisateur": {
            "nom": "Jackson",
            "prenom": "Peter",
            "nationalite": "Néo-Zélandaise",
            "dateNaissance": 1961
          },
          "genre": "Fantaisie",
          "affiche": "https://fr.web.img6.acsta.net/medias/nmedia/00/02/16/27/69218096_af.jpg",
          "note": 0
        }
      ],
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
    };
  },
  mutations: {
    addFilm(state, film) {
      film.id = state.films.length > 0 ? state.films[state.films.length - 1].id + 1 : 0;
      state.films.push(film);
    },
    updateFilm(state, updatedFilm) {
      const index = state.films.findIndex(film => film.id === updatedFilm.id);
      if (index !== -1) {
        state.films.splice(index, 1, updatedFilm);
      }
    },
    deleteFilm(state, id) {
      const index = state.films.findIndex(film => film.id == id);
      if (index !== -1) {
        state.films.splice(index, 1);
      }
    }
  },
  getters: {
    films: state => state.films,
    genres: state => state.genres,
    langues: state => state.langues,
    nationalites: state => state.nationalites,
    getFilmById: (state) => (id) => {
      return state.films.find(film => film.id == id);
    }
  }
});

export default store;
