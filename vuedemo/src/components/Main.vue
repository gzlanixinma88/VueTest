<template>
  <div>
    <h2 v-if="firstView">请输入相关的关键字</h2>
    <h2 v-if="loading">LOADING......</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index" >
        <a :href="user.url" target="_blank">
          <img :src="user.avatar" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>

</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data(){
      return{
        firstView:true,
        loading:false,
        errorMsg:'',
        users:[]
      }
    },
    mounted(){
      PubSub.subscribe('search', (message, searchName) => {
        this.firstView = false
        this.loading = true
        this.users = []
        this.errorMsg = ''

        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
          .then(response =>{
            this.loading = false
            const result = response.data
            this.users = result.items.map(item => ({
              url: item.html_url,
              avatar: item.avatar_url,
              name:item.login
            }))
          })
          .catch(error =>{
            this.loading = false
            alert('请求失败')
          })
      })
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
