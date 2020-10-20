<template >
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Shop Manager</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/termins" v-if="isLoggedIn"> <!--class nav-link ne radi?-->
          Termini
          <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/clients" v-if="isLoggedIn"> <!--class nav-link ne radi?-->
          Klijenti
          <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/treatmans" v-if="isLoggedIn"> <!--class nav-link ne radi?-->
          Tretmani
          <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/items" v-if="isLoggedIn" > <!--class nav-link ne radi?-->
          Proizvodi
          </router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link class="nav-link" to="/login" > <!--class nav-link ne radi?-->
          Login
          </router-link>
        </li>
      <!--  <li class="nav-item" v-if="!isLoggedIn">
          <router-link class="nav-link" to="/register" >
          Register
          </router-link>
        </li> -->
        <!--<li class="nav-item" v-if="isLoggedIn">
          <router-link class="nav-link" to="/profile" >
          Profile
          </router-link>
        </li>-->
        <li class="nav-item">
          <a class="nav-link" to="/login" @click.prevent="logoutUser" v-if="isLoggedIn"> <!--class nav-link ne radi?-->
          Logout
        </a>
        </li>

      </ul>

    </div>
  </nav>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
  computed:{
    ...mapGetters(["isLoggedIn"])
  },
  methods:{
    ...mapActions(['logout']),
    logoutUser(){
      this.$router.push('/login');
      this.logout();

    }
  },
  created(){
    this.$router.push('/login');
  }
}
</script>

<style scoped>



</style>
