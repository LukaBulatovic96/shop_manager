/* eslint-disable no-unused-vars */

import axios from 'axios';
import router from '../router/index';

const state = {
  treatmans:{},
  filteredTreatmans:{},
};

const getters = {
  treatmans:state=>state.treatmans,
  filteredTreatmans:state=>state.filteredTreatmans,
};

const actions = {

  //filter Treatmans by filter value
  async filterTreatmans({
    commit
  },filterValue){

    let lowerfilterVaule=filterValue.toLowerCase();
    let filteredList = [];

    var i;
    for (i=0;i<state.treatmans.length;i++){
      let lowerTreatmanName = state.treatmans[i].name.toLowerCase();
      if(lowerTreatmanName.includes(lowerfilterVaule)){
         filteredList.push(state.treatmans[i]);
      }
    }

    commit('filter_success',filteredList)

    return true;
  },
  async deleteTreatman({
    commit
  },treatmanID){
    commit('deleteTreatman_request');
    let res = await axios.delete(`/api/treatmans/delete/${treatmanID}`)
      if(res.data.success !== undefined){
        commit('deleteTreatman_success');
      }
      return res;
  },
  async getTreatmans({ //art
    commit
  }){
    let res = await axios.get('/api/treatmans/getAll');
    commit('treatmans',res.data);
    return res;
  },

  //post treatman
  async postTreatman({
    commit
  }, treatmanData){

    commit('postTreatman_request');
    let res = await axios.post('/api/treatmans/post',treatmanData);
    if(res.data.success !== undefined){
      commit('postTreatman_success');
    }
    return res;
  },
  async putItemToTreatman({
    commit
  }, treatmanItemData){
    console.log(treatmanItemData);
    commit('putItemToTreatman_request');
    let res = await axios.put(`/api/treatmans/put/${treatmanItemData.treatmanName}`,treatmanItemData);

    if(res.data.success !== undefined){
      commit('putItemToTreatman_success');
    }
    return res;
  },

};

const mutations = {
  treatmans(state,treatmans){
        state.treatmans=treatmans
        state.filteredTreatmans=treatmans
  },
  postTreatman_request(state){
    state.status = 'posting treatman'
  },
  postTreatman_success(state){
    state.status = 'success posted treatman'
  },
  putItemToTreatman_request(state){
    state.status = 'putting item to treatman'
  },
  putItemToTreatman_success(state){
    state.status = 'item is added to treatman'
  },
  filter_success(state,filteredList){
    state.filteredTreatmans=filteredList
  },
  deleteTreatman_request(state){
    state.status='deleting treatman'
  },
  deleteTreatman_success(state){
    state.status='success deleting treatman'
  }

};

export default{
  state,
  actions,
  mutations,
  getters
}

/* eslint-enable no-unused-vars */
