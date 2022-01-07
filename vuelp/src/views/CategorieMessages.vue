<template>
  <div class="liste-messages">
    <h2 class="liste-messages-titre">Liste des Messages de la catégorie : {{ categorie.libelle }}</h2>
    <!--<article class="message-card" v-for="message in categorie.messages" :key="message.id">
      <h2>{{message.titre}}</h2>
      <p>Publié le : {{message.date_pub}}</p>
      <p>"{{message.message}}"</p>
    </article>-->
    <v-card class="message-card" elevation="20"
            outlined
            shaped v-for="message in categorie.messages" :key="message.id">
      <v-card-title :style="categorie.couleur">{{ message.titre }}</v-card-title>
      <v-card-text>{{ message.message }}</v-card-text>
      <v-card-actions>
        <v-btn fab
               x-small
               color="error"
               @click="deleteMessage(message.id)">
          <v-icon dark>
            mdi-minus
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-form class="form-flex" ref="form" lazy-validation>
      <v-text-field
          v-model="titre_message"
          :rules="titreRules"
          label="Titre"
          required
      ></v-text-field>
      <v-text-field
          v-model="contenu_message"
          :rules="contenuRules"
          label="Contenu"
          required
      ></v-text-field>
      <v-btn
          color="success"
          class="mr-4"
          @click="ajoutMessage"
      >
        Ajouter
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import {getCategorie} from '../api/categorie';
import {deleteMessage, postMessage} from "../api/message";

export default {
  name: 'Categories',
  data() {
    return {
      categorie: null,
      titre_message: '',
      contenu_message: '',
      titreRules: [
        v => !!v || 'Un titre est requis',
      ],
      contenuRules: [
        v => !!v || 'Veuillez remplir le contenu du message',
      ],
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
    },
    async deleteMessage(id) {
      await deleteMessage(id).then((reponse) => {
        console.log(reponse)
      })
      await this.actualiseCategorie();
    },
    async ajoutMessage() {
      if (this.$refs.form.validate()) {
        await postMessage({
          titre: this.titre_message,
          message: this.contenu_message,
          category: "/projetVueJs/public/index.php/api/categories/" + this.$route.params.id
        }).then((reponse) => {
          console.log(reponse)
        })
        await this.actualiseCategorie();
        this.titre_message = ' ';
        this.contenu_message = ' ';
      }
    }
  }
}
</script>

<style scoped>
.liste-messages {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
}

.liste-messages-titre {
  flex-basis: 100%;
}

.message-card {
  flex-basis: 45%;
  margin: 20px;
}

.form-flex {
  flex-basis: 100%;
  margin: 0 10%;
  text-align: center;
}
</style>