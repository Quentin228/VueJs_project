<template>
  <div class="modif-cat">
    <h2 style="margin-bottom: 30px">Modification de la catégorie : {{categorie.libelle}}</h2>
    <v-form ref="form" lazy-validation>
      <v-text-field
          v-model="libelle"
          :counter="10"
          label="Libellé"
          required
      ></v-text-field>
      <v-text-field
          v-model="couleur"
          label="Couleur"
          required
      ></v-text-field>
      <v-btn
          color="success"
          class="mr-4"
          @click="putCategorie"
      >
        Validate
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import {getCategorie, putCategorie} from '../api/categorie'

export default {
  name: 'ModifCategorie',
  data() {
    return {
      couleur: '',
      libelle: '',
      categorie: null
    }
  },
  watch: {
    $route() {
      this.actualiseCategorie();
    }
  },
  async mounted() {
    await this.actualiseCategorie();
  },
  methods: {
    async actualiseCategorie() {
      this.categorie = await getCategorie(this.$route.params.id).then((response) => {
        return response.data;
      })
      this.libelle = this.categorie.libelle;
      this.couleur = this.categorie.couleur;
    },
    async putCategorie() {
      await putCategorie(this.$route.params.id, {
        couleur: this.couleur,
        libelle: this.libelle
      }).then((reponse) => {
        console.log(reponse)
        this.$router.push('/categories') //redirection
      })
    }
  }
}
</script>

<style>
.modif-cat{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>