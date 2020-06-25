<template>

  <div class="cartelera">
    <img src="../assets/Actualidad.jpg" alt="">


<!--card agregada -->
   <div class="container">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" v-for="(item,index) in peliculasTraidas" :key="index">
        <div class="card-deck">
          <div class="card">
            <img :src="'https://image.tmdb.org/t/p/w500'+item.poster_path" class="poster_path" :alt="index">
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{item.overview}}</p>
              <p class="card-text"><small class="text-muted">popularidad {{item.popularity}}</small></p>
              <button class="btn btn-md btn-outline-warning rounded-pill" @click="agregarFav(item)">{{favorito ? "favorito":"Agregar a favorito"}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
 <div class="btn-toolbar pagin" role="toolbar" aria-label="Toolbar with button groups">
   <div class="btn-group mr-2" role="group" aria-label="First group">
 <button @click="cambiarPagina(1)"> 1 </button>
 <button @click="cambiarPagina(2)"> 2 </button>
 <button @click="cambiarPagina(3)"> 3 </button>
 <button @click="cambiarPagina(4)"> 4 </button>
</div>
</div>
</div>
</template>

<script>
import axios from 'axios';
import {db} from "../main";

export default {
  name: 'Cartelera',
   data(){
     return{
       favorito: false
     }
   },
  computed: {
     peliculasTraidas(){
       return this.$store.getters.envioPeliculas;
     }
  },
  methods: {
    agregarFav(item){
      console.log(item.id);
      console.log(this.$store.state.uidUser)
      db.collection(this.$store.state.uidUser).doc('Fav-'+item.id).set({
        poster_path: item.poster_path,
        title: item.title,
        overview: item.overview,
        popularity: item.popularity,
        idDoc: 'Fav-'+item.id
      }).then((result)=>{
        console.log(result);
        console.log("Agregado a la lista de favoritos");
       this.$store.dispatch('AgregarFavorito',item);
      })
    },
    cambiarPagina(num){
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=096b1682edaa0e1b2fff3425217d7ef6&language=es&page=${num}`)
       .then(response=>{
         console.log(response.data.results);
         this.$store.dispatch('recibidoInfoUser',response.data.results);
       }).catch(error=> console.error(error))
    }
  }
}
</script>

<style >
.cartelera img{
  height: 35vw;
  width: 100%;
  object-fit: cover;
  padding-bottom: 9%;
}
.pagina button{
  margin-left: 40rem;
  width: 100%;
  margin-top: 8%;
  margin-bottom: 8%;
}
.cartelera {
  margin-bottom: 8%;
}
.container img{
  height: 20rem;
  }
  .card-text {
          display: -webkit-box;
          display: box;
          box-orient: vertical;
          -webkit-box-orient: vertical;
          line-clamp: 4;
          -webkit-line-clamp: 4;
          overflow-y: hidden;
      }
    .card-title {
         display: -webkit-box;
         display: box;
         box-orient: vertical;
         -webkit-box-orient: vertical;
         line-clamp: 1;
         -webkit-line-clamp: 1;
         overflow-y: hidden;
       }
    .card-deck {
      margin-bottom: 50px;
    }
    .container2{
      margin-left: 42%;
    }
    .pagin{
      text-align: center;
      margin-left: 47%;
    }
</style>
