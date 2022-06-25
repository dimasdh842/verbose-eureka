<template>
  <div class="home">
    <div class="container">

      <h1 class="title">MQTT DASHBOARD</h1>
      <p class="desc">MAKE LIFE EASIER</p>
      <br>
      <input type="text" class="input" placeholder="masukan kode..." v-model="input">
      <button class="btn" @click="login">MASUK</button>
    </div>
  </div>
</template>


<script>
// import store from '@/store'
import { mapMutations} from 'vuex'
import router from '@/router'
export default {
  name: 'HomeView',
  data(){
    return {
      input:"",
      token:"belanegara"
    }
  },
  methods:{
    ...mapMutations('user',[
              'setAuthenticated'
    ]),
    ...mapMutations('user',{
        add:'setAuthenticated'
    }),
    login(){
      if(this.input == this.token){
        this.add(true)
        // console.log(store.state.user.authenticated) 
        router.push("/")
      }
    }
  }
}
</script>
