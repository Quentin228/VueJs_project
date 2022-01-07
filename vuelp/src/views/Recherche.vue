<template>
  <div class="recherche">
    <h1>Création d'une catégorie</h1>
    <v-form ref="form" lazy-validation>
      <v-text-field
          v-model="libelle"
          :counter="10"
          label="Libellé"
          required
      ></v-text-field>
      <v-btn
          color="success"
          class="mr-4"
          @click="searchCategorie"
      >
        Rechercher
      </v-btn>
    </v-form>
    <v-list>
      <v-subheader>Résultats de la recherche :</v-subheader>
      <v-list-item-group
          color="primary"
      >
        <v-list-item v-for="categorie in categories" :key="categorie.id">
          <v-list-item-content>
            <router-link :to="{name:'categorie_messages', params: {id: categorie.id}}">
              {{ categorie.libelle }}
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import {getCategorieByLibelle} from '../api/categorie'

export default {
  name: 'Recherche',
  data() {
    return {
      libelle: '',
      categories: null
    }
  },
  methods: {
    async searchCategorie() {
      this.categories = await getCategorieByLibelle(this.libelle).then((response) => {
        return response.data['hydra:member'];
      })
    }
  }
}
</script>

<style>
.recherche {
  padding: 0 20%;
}

a {
  text-decoration: none;
  color: black
}

li {
  list-style-type: none;

}
</style>