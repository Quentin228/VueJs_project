<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: 'Bonjour',
  props: {
    msg: String
  }
}
</script>

<style scoped>
p {
  color: #42b983;
}
</style>
