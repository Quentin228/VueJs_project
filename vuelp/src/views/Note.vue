<template>
  <span v-if="note > 10"> | Accepté !</span>
  <span v-else> | Refusé !</span>
</template>

<script>
export default {
  name: "Note",
  props:{
    note: Number
  }
}
</script>

<style scoped>

</style>