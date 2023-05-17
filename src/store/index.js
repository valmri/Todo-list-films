import { createStore } from 'vuex';

const store = createStore({
  state() {
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
          "genre": "Science-fiction",
          "affiche": "https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg"
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
          "genre": "Drame",
          "affiche": "https://fr.web.img4.acsta.net/medias/nmedia/18/35/57/73/18660716.jpg"
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
          "genre": "Comédie musicale",
          "affiche": "https://i0.wp.com/www.zickma.fr/wp-content/uploads/2017/04/la-la-land-quelle-edition-acheter-12.jpg?fit=958%2C1200&ssl=1"
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
          "genre": "Science-fiction",
          "affiche": "https://m.media-amazon.com/images/I/61dVSMH76yL._AC_SY606_.jpg"
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
          "genre": "Fantaisie",
          "affiche": "https://fr.web.img6.acsta.net/medias/nmedia/00/02/16/27/69218096_af.jpg"
        }
      ],
    };
  },
  mutations: {
    setFilms(state, films) {
      state.films = films;
    }
  }
});

export default store;
