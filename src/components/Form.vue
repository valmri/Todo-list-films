<template>
  <div class="bg-white rounded p-4" v-show="null">
    <div class="mb-3">
      <label for="nom" class="form-label">Nom</label>
      <input type="text" id="nom" class="form-control">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea name="description" id="description" cols="30" rows="10" class="form-control"></textarea>
    </div>
    <button class="btn btn-primary w-100">Ajouter</button>
  </div>
</template>

<script>
export default {
  name: "Form"
}
</script>

<style scoped>

</style>