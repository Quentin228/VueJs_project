<template>
  <div>
    <label :for="idForm">{{ label }}</label>
    <input :required="isNecessary" type="text" :id="idForm" :name="idForm" :placeholder="placeHolder">
  </div>
</template>

<script>
export default {
  name: "Formulaire1",
  props: {
    idForm: String,
    label: String,
    isNecessary: Boolean,
    placeHolder: String
  }
}
</script>

<style scoped>
input{
  margin: 10px;
}
</style>