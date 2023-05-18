<template>
  <div class="row m-2">
    <div class="input-group rounded-pill">
    <span class="input-group-text" id="search">
      <i class='fa-solid fa-magnifying-glass'></i>
    </span>
      <input v-model="searchQuery" @input="searchFilm" type="text" class="form-control"
             placeholder="Rechercher un film..." aria-label="Search" aria-describedby="search">
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Search",
  computed: {
    ...mapState(['films'])
  },
  data() {
    return {
      searchQuery: '',
      searchResult: []
    }
  },
  methods: {
    searchFilm: function () {
      this.searchResults = [];

      if (this.searchQuery.length > 0) {
        this.searchResults = this.films.filter(movie => {
          const searchTerms = [
            movie.titre,
            movie.realisateur.nom,
            movie.realisateur.prenom,
            movie.langue,
            movie.genre,
            movie.annee.toString(),
          ];
          const lowercaseQuery = this.searchQuery.toLowerCase();
          return searchTerms.some(term => term.toLowerCase().includes(lowercaseQuery));
        });
      } else {
        this.searchResults = this.films;
      }

      this.$emit('search', this.searchResults);
    }
  }
}
</script>

<style scoped>

</style>