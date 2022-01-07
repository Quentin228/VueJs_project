<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
        />

        <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
        />
      </div>
      <router-link class="lien-nav" :to="{name:'Categories'}" style="color: white">Voir les catégories</router-link>
      <router-link class="lien-nav" :to="{name:'new_categorie'}" style="color: white">Ajouter une catégorie
      </router-link>
      <router-link class="lien-nav" :to="{name:'Recherche'}" style="color: white">Effectuer une recherche</router-link>
      <router-link @click="disconnect" class="lien-nav" :to="{name:'Login'}" style="color: white">
        <v-btn
            color="error"
            class="mr-4"
            @click="disconnect"
        >
          Déconnexion
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    disconnect() {
      localStorage.removeItem('usertoken');
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
    }
  }
};
</script>

<style>
.lien-nav {
  margin: 0 20px;
  text-decoration: none;
}
</style>