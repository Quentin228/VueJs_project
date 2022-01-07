<template>
  <div>
    <label>{{ label }}</label>
    <select type="text" id="fname" :required="isNecessary">
      <option value="">---Faites votre choix---</option>
      <option v-for="(choix, index) in listeChoix" :key="index" >{{ choix }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FormulaireDeroulant",
  props: {
    label: String,
    isNecessary: String,
    listeChoix: Array
  }
}
</script>

<style scoped>
select {
  margin: 10px;
}
</style>