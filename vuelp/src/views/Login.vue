<template>
  <div class="login">
    <h2>Login</h2>
    <v-form ref="form" lazy-validation>
      <v-text-field
          v-model="email"
          label="Email"
          required
      ></v-text-field>
      <v-text-field
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          v-model="password"
          label="Mot de passe"
          required
          @click:append="show1 = !show1"
      ></v-text-field>
      <v-btn
          color="success"
          class="mr-4"
          @click="login"
      >
        Se connecter
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: 'Login',
  data() {
    return {
      show1: false,
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      axios({url: 'http://forumlp_api/projetVueJs/public/index.php/authentication_token', data: {email:this.email, password:this.password}, method: 'POST' }) //username et password proviennent du formulaire
          .then(resp => {
            const token = resp.data.token
            const userData = atob(resp.data.token.split('.')[1]) //on récupère les données de l'utilisateur, par défaut, login, rôles
            localStorage.setItem('user', userData) // store the user in localstorage
            localStorage.setItem('usertoken', token) // store the token in localstorage
            localStorage.setItem('isAuthenticated', true) // store the token in localstorage
            router.push('/')
          })
          .catch(err => {
            localStorage.removeItem('usertoken'); // if the request fails, remove any possible user token if possible
            console.log(err);
          })
    }
  }
}
</script>

<style scoped>
.login{
  text-align: center;
  padding: 5% 30%;
}


</style>