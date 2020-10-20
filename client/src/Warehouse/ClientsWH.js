/* eslint-disable no-unused-vars */

import axios from 'axios';
import router from '../router/index';

const state = {
  clients:{},
  status:"",
  filteredClients:{},

};

const getters = {
  clients:state=>state.clients,
  filteredClients:state=>state.filteredClients,
};

const actions = {
 async getClients({ //art
    commit
  }){
    let res = await axios.get('/api/clients/getAll');
    commit('clients',res.data);
    return res;
  },
  async postClient({
    commit
  }, clientData){

    commit('postClient_request');
    let res = await axios.post('/api/clients/post',clientData);
    if(res.data.success !== undefined){
      commit('postClient_success');
    }
    return res;
  },
  async deleteClient({
    commit
  },clientID){
    commit('deleteClient_request');
    let res = await axios.delete(`/api/clients/delete/${clientID}`)
      if(res.data.success !== undefined){
        commit('deleteClient_success');
      }
      return res;
  },
  async filterClients({
    commit
  },filterValue){

    let lowerfilterVaule=filterValue.toLowerCase();
    let filteredList = [];

    var i;
    for (i=0;i<state.clients.length;i++){
      let lowerClientName = state.clients[i].name.toLowerCase();
      if(lowerClientName.includes(lowerfilterVaule)){
         filteredList.push(state.clients[i]);
      }
    }

    commit('filter_success',filteredList)

    return true;
  },

};

const mutations = {
  clients(state,clients){
        state.clients=clients
          state.filteredClients=clients
  },
  postClient_request(state){
    state.status="posting client"
  },
  postClient_success(state){
    state.status="client posted"
  },
  deleteClient_request(state){
    state.status='deleting client'
  },
  deleteClient_success(state){
    state.status='success deleting client'
  },
  filter_success(state,filteredList){
    state.filteredClients=filteredList
  },
};

export default{
  state,
  actions,
  mutations,
  getters
}

/* eslint-enable no-unused-vars */
