import axios from 'axios';
import store from '../store/store';

export function conexionApi() {
axios.get('https://api.themoviedb.org/3/movie/popular?api_key=096b1682edaa0e1b2fff3425217d7ef6&language=es&page=1')
 .then(response=>{
   store.dispatch('recibidoInfoUser',response.data.results);
 }).catch(error=> {
   console.error(error);
 })
}
