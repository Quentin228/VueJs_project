<template>
  <div class="nav-categories">
    <div class="nav-cat">
      <h2>Liste des Catégories</h2>
      <v-list>
        <v-list-group
            color="primary"
            v-for="categorie in categories"
            :key="categorie.id"
            :to="{name:'categorie_messages', params: {id: categorie.id}}"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ categorie.libelle }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item class="liste-item-cat">
            <v-btn fab
                   x-small
                   color="primary"
                   :to="{name:'categorie_messages', params: {id: categorie.id}}">
              <v-icon dark>
                mdi-eye
              </v-icon>
            </v-btn>
            <v-btn fab
                   x-small
                   color="success"
                   :to="{name:'modif_cat', params: {id: categorie.id}}">
              <v-icon dark>
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn fab
                   x-small
                   color="error"
                   @click="deleteCategorie(categorie.id)">
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>
          </v-list-item>
        </v-list-group>
      </v-list>
      <v-btn
          color="success"
          class="mr-4"
          style="align-self: center"
      >
        <router-link :to="{name:'new_categorie'}" style="text-decoration: none; color: white">Ajouter une catégorie
        </router-link>
      </v-btn>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {getCategories, deleteCategorie} from '../api/categorie';

export default {
  name: 'Categories',
  data() {
    return {
      categories: null
    }
  },
  async mounted() {
    console.log(localStorage.getItem('usertoken'));
    this.categories = await getCategories().then((response) => {
      return response.data['hydra:member']
    })
  },
  methods: {
    async deleteCategorie(id) {
      await deleteCategorie(id).then((reponse) => {
        console.log(reponse)
      })
      this.categories = await getCategories().then((response) => {
        return response.data['hydra:member']
      })
    }
  }
}
</script>

<style scoped>
.nav-categories {
  text-align: center;
  display: flex;
  flex-direction: row;
}

.nav-cat {
  flex-basis: 30%;
  text-align: center;
}

.liste-item-cat {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>