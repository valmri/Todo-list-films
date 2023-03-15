<template>
  <div class="d-block w-25">

      <div v-for="(film, index) in films" class="d-flex justify-content-between align-items-center bg-white text-dark rounded p-3 m-4">
        <span class="fw-bold">{{ film }}</span>
        <button class="btn btn-danger" title="Supprimer le film" @click="deleteFilm(index)">
          <i class="las la-trash"></i>
        </button>
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
    },
    deleteFilm: function(index) {
      if (index !== -1) {
        this.films.splice(index, 1);
      }
    }
  }
}

</script>

<style scoped>

</style>