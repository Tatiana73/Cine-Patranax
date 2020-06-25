<template>
  <div id="app">
  <navegacion v-if="!$store.state.uidUser"></navegacion>
  <navegacion2 v-else></navegacion2>
    <router-view/>
  <footer-app></footer-app>
  </div>
</template>

<script>
import firebase from 'firebase';
import Navegacion from './components/Navegacion.vue';
import Navegacion2 from './components/Navegacion2.vue';
import {conexionApi} from './config/conexionApi';
import FooterApp from './components/FooterApp.vue';

export default {
  name: 'App',
    data(){
      return{
        usuario: '',
        email: '',
        uid: ''
      }
    },
  components:{
    Navegacion,
    Navegacion2,
    FooterApp
  },
  created(){
      conexionApi();
  },
  mounted() {
      firebase.auth().onAuthStateChanged(dato => {
        if(dato) {
        this.usuario = dato.displayName;
        this.email = dato.email;
        this.uid = dato.uid;
          console.log(dato)
        this.$store.dispatch('idUserLog',dato.uid);
        }else{
          console.log("Sesion finalizada")
          this.$store.dispatch('idUserLog','');
        }
      });
    },
  }

</script>


<style lang="scss">
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
