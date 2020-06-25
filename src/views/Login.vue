<template>
  <div class="fondo body-home foto-fondo">
  <div class="container"><br>

  <form>
  <div class="transparencia">
    <h2 class="text-center body-home pt-5 text-white">Cine Patrañax</h2>
    <h4 class="body-home text-white pt-2">Tu mejor entretención a un solo click</h4>
    <form @submit.prevent="ingresar">
      <div class="alert alert-danger" role="alert" v-if="error">
        {{error}}
      </div>
      <div class="alert alert-success" role="alert" v-if="userOk">
        {{userOk}}
      </div>
      <div class="registrate">
      <div class="form-group pt-4">
        <label class="text-white" for="exampleInputEmail1">Correo Electrónico</label>
        <input type="email" class="form-control button-md" placeholder="ingresar correo electronico" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
      </div>
      <div class="form-group">
        <label class="text-white" for="exampleInputPassword1">Contraseña</label>
        <input type="password" class="form-control btn-md" placeholder="ingresa una contraseña" id="exampleInputPassword1" v-model="password">
      </div>
      <br>
      <button type="submit" class="button btn-dark btn-lg ">Ingresar</button>
      <br>
      <br>
      <div class="transparenciados">
      <a @click="restablecer" href="#">Olvide la contraseña</a> |
      <router-link to="/registro">Registrate</router-link>
      </div>
      </div>
      </form>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Login',
  data() {
    return {
      password: '',
      email: '',
      error: '',
      userOk: ''
    }
  },
  methods: {
    ingresar(){
      if (!this.email && !this.password) {
        this.error = 'Debe ingresar los datos del usuario';
      } else if(this.password.length < 6){
        this.error = 'La contraseña debe ser mayor a 6 digitos'
      }else {
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(()=>{
          this.userOk = 'Usuario correcto';
          setTimeout(()=>{
            this.userOk = '';
            this.$router.replace('/cartelera');
          },2000);
          this.password = '';
          this.email = '';
          this.error = '';
        }).catch((error)=>{
          this.error = '';
          console.error(error);
          if (error.code == 'auth/user-not-found'){
            alert("El usuario no existe en nuestra base de datos");
          }else if(error.code == 'auth/wrong-password'){
            alert("La contraseña no es válida");
          }else {
            alert(error.message);
          }
        })
      }
    },

    restablecer(){
      if (this.email){
      firebase.auth().sendPasswordResetEmail(this.email).then(function(){
         console.log("restablecer contaseña")
      }).catch(function(error) {
         console.error(error.message);
        });
      }else{
       alert("Para recuperar su contraseña ingrese su correo");
      }
    }
  }
}
</script>

<style>

.form-group input{
  width: 53%;
  padding: 5px;
  text-align: left;
  margin-left: 24%;
}
.from-group{
  text-align: left;
}
.registrate{
  width: 100%;
  margin-top: 3px;
}

  .button{
    background-color: #000000;
    border-radius: 10px;
    padding: 8px;
    width: 50%;

  }

  /* se agrega clase de fuentes*/
  .fondo{
   background-color: ffffff;
   margin-bottom: 0px 0px 50px;
   height: 37.5em;
  }
  .fondo{
    font-family:'Raleway', sans-serif;
    color: #737373;
    font-weight: bold;
    text-align: center;
  }

  .fondo{
    background-image: url(../assets/camara.jpg);
    margin: 0 auto;
    width:100%;
    height: 110vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

.transparencia{
  width: 100%;
  height: 90vh;
  padding-top: 0%;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom:0%;
  box-shadow: 0 0 20px 3px rgba(0,0,0,0.4);
  position: relative;
  text-align: center;
}

.transparenciados{

  width: 100%;
  height: 22px;
  padding-top: 0%;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom:50%;

  position: relative;
  text-align: center;
  border-radius: 10px;


}

</style>
