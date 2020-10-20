<template >
  <div class="">
    <h2>Register</h2>
    <div class="row">
      <div class="card mx-auto">
          <div class="card-header text-white bg-primary">
            <h4>Register</h4>
            <div class="card-body">
              <form @submit.prevent="registerUser">
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
                  <label for="name">Name</label>
                  <input
                  id="name"
                  class="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  v-model="name"
                  >
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                  id="email"
                  class="form-control"
                  type="text"
                  name="email"
                  placeholder="Email"
                  v-model="email"
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
                <div class="form-group">
                    <label for="confirm_password">Confirm Password</label>
                    <input
                    id="confirm_password"
                    class="form-control"
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm_password"
                    v-model="confirm_password"
                    >
                </div>
                <input type="submit" class="btn btn-primary" value="Register"/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <router-link to="/login" class="card-link" > <!--class nav-link ne radi?-->
                  Already have an account?
                </router-link>
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
    return{
      username:"",
      password:"",
      confirm_password:"",
      name:"",
      email:""
    }
  },
  methods:{
    ...mapActions(['register']),
    registerUser(){
      let user = {
        username: this.username,
        password: this.password,
        confirm_password:this.confirm_password,
        email:this.email,
        name:this.name
      };
      this.register(user).then(res=>{
        if(res.data.success){
          this.$router.push('login');
        }
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
