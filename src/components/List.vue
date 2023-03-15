<template>
  <div class="d-block w-25">

      <div v-for="film in films" class="bg-white text-dark rounded p-3 m-4">
        <span class="fw-bold">{{ film }}</span>
      </div>

      <div class="bg-white text-dark rounded p-3 m-4" id="cardNewFilm" v-show="openCard">
        <span class="fw-bold">Nouveau film</span>
        <input type="text" class="form-control mt-2 mb-3" v-model="titreFilm">
        <button class="btn btn-success w-100" @click="addFilm">Enregistrer</button>
      </div>
      <button class="btn btn-primary p-2 m-4" @click="openCardNewFilm" v-show="!openCard">Ajouter un film</button>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      films: [
          'Ratatouille',
          'Blanche neige et les 7 nains',
          'Fast and furious'
      ],
      openCard: false,
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
    }
  }
}

</script>

<style scoped>

</style>