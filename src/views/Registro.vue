<template>
<div class="fondo2 body-home">
  <div class="container"><br>

  <form>
  <div class="transparenciatres">
    <h2 class="registro text-white">Registro de Usuarios</h2><br>
      <form @submit.prevent="Registrar">
        <div class="registrate2">
      <div class="form-group2">
        <label class="text-white" for="exampleInputUser1">Usuario</label>
        <input type="text" class="form-control btn-md" placeholder="ingresar un usuario" id="exampleInputUser1" v-model="nombreUser">
      </div>
      <div class="form-group2">
        <label class="text-white" for="exampleInputEmail1">Correo Electrónico</label>
        <input type="email" class="form-control btn-md" placeholder="ingresar correo electronico" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
      </div>
      <div class="form-group2">
        <label class="text-white" for="exampleInputPassword1">Contraseña</label>
        <input type="password" class="form-control btn-md" placeholder="ingresa una contraseña" id="exampleInputPassword1" v-model="password">
      </div>
      <br>
      <button type="submit" class="button btn-dark btn-lg text-white">Registar</button>
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
  name: 'Registro',
  data(){
    return {
      email: '',
      password: '',
      nombreUser: ''
    }
  },
  methods: {
    Registrar(){
      if(this.nombreUser && this.email && this.password){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(response=>{
          console.log(response.user)
          return response.user.updateProfile({
            displayName: this.nombreUser
          }).then(()=>{
          this.$router.replace('/login');
          })
        }).catch(error => console.error(error))
      }else{
        alert("Complete los campos solicitados");
      }
    }
  },
}
</script>

<style>
 .fondo2{
  background-image: url(../assets/hombre2.jpg);
    margin: 0 auto;
    width:100%;
    height: 85vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
.form-group2 input{
  width: 53%;
  padding: 5px;
  text-align: left;
  margin-left: 24%;
}
.button{
  background-color: #000000;
  border-radius: 10px;
  padding: 8px;
  width: 50%;
  margin-bottom: 15%;
  margin-top: 2%;
}

 /* se agrega clase de fuentes*/
  .body-home{
    font-family:'Raleway', sans-serif;
    color: #737373;
    font-weight: bold;
    text-align: center;
  }

  .registro{
    padding-top:40px ;
    font-family:'Raleway', sans-serif;
    font-weight: bold;
  }

  .text-white{
    padding-top:20px ;
  }

  .registrate2{
    border-top-color: #FFD100;
    align-content: center;
    font-family:'Raleway', sans-serif;
    color: #737373;
    height: 65vh;

  }

  .transparenciatres{
  margin: auto;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 20px 3px rgba(0,0,0,0.4);
  position: relative;
  text-align: center;
  height: 81vh;
}

</style>
