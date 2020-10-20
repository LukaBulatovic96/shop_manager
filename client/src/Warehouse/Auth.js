
import axios from 'axios';
import router from '../router/index';

const state = {
  token:localStorage.getItem('token')||'',
  user:{},
  articles:{},  //art
  status:''
};

const getters = {
  isLoggedIn: state => !!state.token,
  authState:state=>state.status,
  user:state=>state.user,
  articles:state=>state.articles, //art
};

const actions = {
  //LoginAction
  async login({
    commit
  },user){
    commit('auth_request');
    let res = await axios.post('/api/users/login',user)
    if(res.data.success){
      const token = res.data.token;
      const user = res.data.user;
      //Store the token into localStorage
      localStorage.setItem('token',token);
      //set the axios defaults
      axios.defaults.headers.common['Authorization'] = token;
      commit('auth_success',token,user);
    }
    return res;
  },
  //register user
  async register({
    commit
  }, userData){
    commit('register_request');
    let res = await axios.post('/api/users/register',userData);
    if(res.data.success !== undefined){
      commit('register_success');
    }
    return res;
  },
  //Purchase article
  async purchase({
    commit
  }, purchaseData){
    console.log(`bought ${purchaseData}`);
    commit('purchase_request');
    let res = await axios.post('/api/purchases/post',purchaseData);
    if(res.data.success !== undefined){
      commit('purchase_success');
    }
    return res;
  },

  //Get the user Profile
  async getProfile({
        commit
    }){
        if(state.user){
          return state.user;
        }else{
          commit('profile_request');
          let res = await axios.get('/api/users/profile');
          commit('user_profile', res.data.user);
          return res;
        }
    },
  //Get Articles
  async getArticles({ //art
    commit
  }){
    commit('articles_request');
    let res = await axios.get('/api/articles/getAll');
    commit('articles',res.data);
    return res;
  },
  //logout user
  async logout({
    commit
  }){
    await localStorage.removeItem('token');
    commit('logout');
    delete axios.defaults.headers.common['Authorization'];
    router.push('/login');
    return
  }


};

const mutations = {



  auth_request(state){
    state.status= 'loading'
  },
  auth_success(state,token, user){
    state.token=token
    state.user =user
    state.status = 'success'
  },
  register_request(state){
    state.status = 'loading'
  },
  register_success(state){
    state.status = 'success'
  },
  logout(state){
    state.status = '',
    state.token='',
    state.user = ''
  },
  profile_request(state) {
        state.status = 'loading'
  },
  user_profile(state, user) {
        state.user = user
  },
  articles_request(state){
        state.status = 'loadingArticles'
  },
  articles(state,articles){
        state.articles=articles
  },
  purchase_request(state){
        state.status = 'loading'
  },
  purchase_success(state){
        state.status = 'success'
  }
};

export default{
  state,
  actions,
  mutations,
  getters
}
/* eslint-enable no-unused-vars */
