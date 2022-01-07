<template>
  <div class="creation-cat">
    <h2>Création d'une catégorie</h2>
    <div v-if="confirm">
      Catégorie ajoutée avec succès !
    </div>
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
          @click="ajoutCategorie"
      >
        Créer
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import {postCategorie} from '../api/categorie'

export default {
  name: 'NouvelleCategorie',
  data() {
    return {
      couleur: '',
      libelle: '',
      confirm: false,
      libelleRules:  [
        v => !!v || 'Un libellé est requis',
      ],
    }
  },
  methods: {
    async ajoutCategorie() {
      await postCategorie({
        couleur: this.couleur,
        libelle: this.libelle
      }).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/categories') //redirection
      })
    }
  }
}
</script>

<style>
.creation-cat{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-basis: 100%;
}

.creation-cat > form{
  width: 80%;
  text-align: center;
}
</style>