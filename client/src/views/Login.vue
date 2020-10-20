
<template >
  <div class="">
    <h2>Login</h2>
    <div class="row">
      <div class="card mx-auto">
          <div class="card-header text-white bg-primary">
            <h4>Login</h4>
            <div class="card-body">
              <form method="post" @submit.prevent="loginUser"> <!-- -->
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                  id="username"
                  class="form-control"
                  type="text"
                  name="username"
                  placeholder="Username"
                  v-model="username"
                  >
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                    id="password"
                    class="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    v-model="password"
                    >
                </div>
                <input type="submit" class="btn btn-primary" value="Login"/>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <!--  <router-link to="/register" class="card-link" > class nav-link ne radi?
                  Need an account?
                </router-link>-->
              </form>

            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import {mapActions} from 'vuex';
export default {
  data(){
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    ...mapActions(['login']),
    loginUser(){
      let user={
        username: this.username,
        password: this.password
      };
      this.login(user)
      .then(res=>{
        if(res.data.success){
          this.$router.push('/termins');
        }
      }).catch(err=>{
        console.log(err);
      });
    }
  }
}
/* eslint-enable no-unused-vars */
</script>

<style >
.card-link{
  color:white;
}
.card{
  width: 60%;
  border-radius:0;
}
.btn{
  border-radius:0;
}
.form-control{
  border-radius:0;
}
</style>
