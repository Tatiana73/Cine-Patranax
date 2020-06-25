<template>
  <div>
  <div class="jumbotron">
    <h1>PELICULAS/SERIES/ESTRENOS</h1>
    <h4>TODO LO QUE BUSCAS EN UN SOLO LUGAR</h4>
    </div>
    <div><h2 class="font-titulo">PRÓXIMOS ESTRENOS</h2></div>
    <!-- contenedor de imagen horizontal  -->
    <div class="caja-hor">
      <figure>
        <img src="../assets/horizontal.jpg" alt="">
      </figure>
    </div>
    <!-- contenedor de imagen vertical-->
  <div class="caja-ver">
      <figure>
          <img src="../assets/vertical.jpg" alt="">
      </figure>
    </div>
    <!-- contenedor pelicula 1 -->
    <div class="parrafo-titulo">
      <h3 class="font-titulo">CURON</h3>
      <h5>Netflix intenta replicar sin éxito <br> La formula fantástica de
      'Dark' en esta serie italiana.
      </h5>
    </div>
    <div class="tres"><img src="../assets/torre.jpg" alt=""></div>
    <div class="parrafo-peli">
      <p>Después de 17 años lejos de su hogar, Anna Raina regresa al pueblo
      italiano de Curon junto con sus hijos Mauro y Daria. Cuando Anna
      desaparece misteriosamente y sin dejar rastro, los gemelos tendrán que
      enfrentarse a una terrible maldición que acecha al pueblo y a una sombría
      herencia familiar. Desapariciones, pueblos misteriosos, herencias
      siniestras, hasta ahora todo suena bien. Pero lo mejor es que el pueblo
      de Curón SÍ EXISTE y efectivamente tiene una torre a mitad del lago
      sobre la que existe una aterradora leyenda local.</p>
    </div>
    <button @click="mostrarVideo" class="btn btn-lg btn-outline-danger">Trailer</button>
    <router-link to="/cartelera"><a href="#" class="btn btn-lg btn-warning">Ver más</a></router-link>
      <div v-show="ocultarVideo">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/w_EaVne6uVM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    <hr>
    <!-- contenedor pelicula 2 -->
    <div class="parrafo-titulo">
      <h3 class="font-titulo">MADRE OSCURA</h3>
      <h5>Una pequeña Joya del terror <br> Ha igualado el records de 'Avatar'
          en la taquilla durante la pandemia.
      </h5>
    </div>
    <div class="tres"><img src="../assets/pelicula.jpg" alt=""></div>
    <div class="parrafo-peli">
      <p>Angustiado por el inminente divorcio de sus padres y esperando que
        le ayude a despejar su cabeza, el joven Ben (John-Paul Howard),
        decide visitar a su padre durante el verano. Pronto se da cuenta de
        los horrores que están ocurriendo en su misma calle. Un mal centenario
        está aterrorizando a la joven familia de la casa de al lado. Escondido
        entre los árboles cercanos, y pronto residiendo en el interior de la
        madre de la familia, el mal empieza a atacar a los niños del pueblo.
        Ben intenta conseguir ayuda, pero nadie parece creerle. Si quiere salvar
        al pueblo, tendrá que hacerlo solo de algún modo. Mientras, desde el
        bosque, unas voces están llamando a la gente desde la base de un
        antiguo árbol....</p>
    </div>
    <button @click="mostrarVideo" class="btn btn-lg btn-outline-danger ">Trailer</button>
     <router-link to="/cartelera"><a href="#" class="btn btn-lg btn-warning ">Ver más</a></router-link>
    <div v-show="ocultarVideo">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/PkyHLudSrCE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
    ocultarVideo: false
  }
},
methods:{
  mostrarVideo(){
    this.ocultarVideo = !this.ocultarVideo;
  }
},
  components: {
  }
}
</script>

<style scoped>
  .body-home{
    font-family:'Raleway', sans-serif;
    color: #737373;
  }
  .font-titulo {
    font-weight: bold;
    color: #737373;
  }
  .home img{
    margin: 0 auto;
    width:100%;
    height: 80vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 6%;
  }
  .body-home {
    text-align: left;
  }
  hr {
  height: 0,6px;
  width: 80%;
  margin: 7% auto;
  background-color: #737373;
}
  @media screen and (max-width: 600px){
  .caja-hor figure img{
      display: none;
      margin: auto;
    }
  }
  @media screen and (min-width: 599px){
  .caja-ver figure img{
      display: none;
      margin: auto;
    }
  }
 .caja-hor figure img{
    margin: 0 auto;
    width:72%;
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
  .tres img{
    margin-top: 2%;
    width: 80%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .parrafo-titulo{
    text-align: left;
    margin: 5% 10% 0% 10%;
    color:#737373;
  }
  .parrafo-peli{
    text-align: justify;
    margin: 2% 10%;
    color:#737373;
  }
  .jumbotron{
    font-family: 'Raleway', sans-serif;
    padding: 5%;
    background-image: url(../assets/principal.jpg);
    margin: auto;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 6%;
    color: #737373;
  }
  .jumbotron h1{
    color: #FDD100;
    font-weight: bold;
    text-align: left;
    padding: 15% 0 2% 10%;
    font-size: 50px;
  }
  .jumbotron h4{
    color: #FFFFFF;
    font-weight: medium;
    text-align: left;
    padding: 0 0 30% 10%;
    font-size: 28px;
  }
  .container{
    width: 20%;
  }
</style>
