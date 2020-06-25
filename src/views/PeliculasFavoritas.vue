<template>
  <div class="favoritas">
    <div v-if="$store.state.uidUser">
      <div class="jumbotron">
            <h3>PELICULAS / SERIES / ESTRENOS</h3>
            <h4>FAVORITOS</h4>
      </div>
      <b-container>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="(item, index) in peliLocalFav" :key="index">
          <b-card
            :title = "item.title"
            :img-src = "'https://image.tmdb.org/t/p/w500'+item.poster_path"
            :img-alt = "item.title"
            :sub-title = "item.popularity"
            img-top
            tag = "artículo"
            class = "mb-2">
           <b-card-text>{{item.overview}}</b-card-text>
           <b-button  href = "#"  variant = "outline-warning" @click="eliminarFav(item.idDoc)" >Eliminar pelicula</b-button>
         </b-card>
       </div>
     </div>
</b-container>
<!--card agregada -->
    </div>
    <div v-else>
     <h1>No esta registrado</h1>
     <img src="" alt="">
    </div>
  </div>
</template>

<script>
import {db} from "../main";

  export default {
    name: 'PeliculasFavoritas',
    data(){
      return{
      peliLocalFav: []
      }
    },
    methods:{
      traerDataDb(){
        db.collection(this.$store.state.uidUser).get().then(doc=>{
          let aux = [];
          doc.forEach(element=>{
            aux.push({
              poster_path: element.data().poster_path,
              title: element.data().title,
              overview: element.data().overview,
              popularity: element.data().popularity,
              idDoc: element.data().idDoc
            })
          });
          this.peliLocalFav = aux;
        })
      },
      eliminarFav(IdDoc){
        console.log(this.$store.state.uidUser);
        db.collection(this.$store.state.uidUser).doc(IdDoc).delete().then(()=>{
        console.log("Eliminado de favoritos");
        this.traerDataDb();
      })
      }
    },
    mounted(){
      this.traerDataDb();
    },
  }
</script>

<style>
.favoritas img{
    height: 30vw;
    width: 100%;
    object-fit: cover;
    padding-bottom: 9%;
  }
  .jumbotron{
    font-family:'Raleway', sans-serif;
    padding: 5%;
    background-image: url(../assets/tv.jpg);
    margin: auto;
    width:100%;
    height: 30vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 6%;
    color: #737373;
  }

  .jumbotron h3 {
    color: #ffd100;
    font-weight: bold;
    text-align: left;
    padding: 5% 0 0% 10%;
  }
  .jumbotron h4 {
    color: #ffffff;
    font-weight: bold;
    text-align: left;
    padding: 0 0 30% 10%;
  }
</style>
