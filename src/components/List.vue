<template>
  <div class="d-block w-25">

      <div v-for="(film, index) in films" class="d-flex justify-content-between align-items-center bg-white text-dark rounded p-3 m-4">
        <span class="fw-bold">{{ film }}</span>
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
      this.titreFilm = this.films[index];
      this.indexFilm = index;
    },
    editFilm: function(index) {
      this.films[index] = this.titreFilm;
      this.openCardEdit = false;
    }
  }
}

</script>

<style scoped>

</style>