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
                 <router-link class="nav-link" to="/login">Iniciar sesion</router-link>
             </li>
             <li class="nav-item mr-auto">
                 <router-link class="nav-link" to="/registro">Registro de Usuario</router-link>
             </li>
         </ul>
 </b-collapse>
</b-navbar>
</div>

</div>

</template>

<script>
export default {
}
</script>

<style lang="scss">
  .oscuro{
    background-color: black !important;
  }
</style>
