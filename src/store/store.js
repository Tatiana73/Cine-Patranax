import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      peliculasFav: [],
      peliculas: [],
      nombre: '',
      email: '',
      uidUser: ''
    },
  getters: {
    envioPeliculas(state){
      return state.peliculas;
    }
  },
  mutations: {
    agregandoId(state,idRecibido){
   state.uidUser = idRecibido;
 },
 mutandoUserInfo(state, infoUser){
   state.peliculas = infoUser;
 },
 mutandoFav(state, item){
   console.log(item);
   let peluFav = state.peliculasFav.filter(result => result.id === item.id);
    console.log(peluFav);
  if(peluFav.id != item.id){
    state.peliculasFav.push(item)
  }else {
    console.log("Se agrego a favoritos");
  }
 }
  },
  actions: {
    idUserLog(context,idUsuarioRecibido){
   context.commit('agregandoId',idUsuarioRecibido);
   },
    activandoMutacionDB(context){
    context.commit('traerBD');
  },
    recibidoInfoUser(context,infoUser){
    context.commit('mutandoUserInfo',infoUser);
  },
  AgregarFavorito(context,itemCompleto){
    context.commit('mutandoFav',itemCompleto);
  }

},
})
