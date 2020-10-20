<template >
  <div class="">
    <h2>User</h2>
    <div class="card" v-if="user">
      <ul class="list-group">
        <li class="list-group-item">Email: {{user.email}}</li>
        <li class="list-group-item">Username: {{user.username}}</li>
        <li class="list-group-item">Name: {{user.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import {mapActions,mapGetters} from 'vuex';
import Auth from '../Warehouse/Auth.js'
export default {
  data(){
    return{
      articleName:"",
      username:"",
      ammount:""
    }
  },
  computed: mapGetters(["user","articles","items"]),
  methods: {
    ...mapActions(["getProfile","getArticles","purchase","getItems"]),
    purchaseArticle(articleN){
      let purchase = {
        articleName: articleN,
        ammount: "1",
        username: Auth.state.user.username
      };
      this.purchase(purchase);
    }
  },
  created() {
    this.getProfile();
    this.getArticles();
    this.getItems();
  }
}
/* eslint-enable no-unused-vars */
</script>

<style >
#items{
  background-color: yellow;
}

</style>
