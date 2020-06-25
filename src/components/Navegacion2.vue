<template>
   <div>
    <div>
      <b-navbar toggleable="lg" type="dark" class="oscuro font-weight-bold">
      <b-navbar-brand href="#">CINE PATRAÑAX</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
         <ul class="navbar-nav ml-auto">
           <li class="nav-item active mr-auto">
               <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
           </li>
           <li class="nav-item mr-auto">
               <router-link class="nav-link" to="/cartelera">Cartelera</router-link>
           </li>
             <li class="nav-item mr-auto">
                 <router-link class="nav-link" to="/peliculasFavoritas">PeliculasFavoritas</router-link>
             </li>
             <li class="nav-item mr-auto">
                 <a class="nav-link"  @click.prevent.stop="salida">Cerrar Sesion</a>
             </li>
            </ul>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Navegacion2',
    methods: {
    salida(){
      firebase.auth().signOut().then(()=>{
        console.log("salida de usuario")
        this.$router.replace('/cartelera');
      })//.catch((error=>{console.error(error)}));
    },
  },
}
</script>

<style lang="scss">
  .oscuro{
    background-color: black !important;
  }
</style>
