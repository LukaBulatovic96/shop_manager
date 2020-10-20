/* eslint-disable no-unused-vars */

import axios from 'axios';
import router from '../router/index';

const state = {
  termins:{},
  todayTermins:[],
};

const getters = {
  termins:state=>state.termins,
  todayTermins:state=>state.todayTermins,
};

const actions = {
  async getTermins({ //art
    commit
  }){
    let res = await axios.get('/api/termins/getAll');
    commit('termins',res.data);
    return res;
  },
  async deleteTermin({
    commit
  },terminID){
    commit('deleteTermin_request');
    let res = await axios.delete(`/api/termins/delete/${terminID}`)
      if(res.data.success !== undefined){
        commit('deleteTermin_success');
      }
      return res;
  },

  //post termin
  async postTermin({
    commit
  }, terminData){

    commit('postTermin_request');
    let res = await axios.post('/api/termins/post',terminData);
    if(res.data.success !== undefined){
      commit('postTermin_success');
    }
    return res;
  },

};

const mutations = {
  termins(state,termins){
        state.todayTermins=[];
        state.termins=termins
        var i;
        var currentDate = new Date();
        var formattedCurrentDate=currentDate.getDate()+"/" + Number(currentDate.getMonth()+1)+"/"+currentDate.getFullYear();
        for(i=0;i<state.termins.length;i++){
          if(state.termins[i].date === formattedCurrentDate){
            state.todayTermins.push(state.termins[i]);
          }
        }
        state.todayTermins.sort((a, b) => (
          Number(a.timeH)*60+Number(a.timeM)
          >
          Number(b.timeH)*60+Number(b.timeM))
          ?
          1 : -1
          )
  },
  postTermin_request(state){
    state.status = 'posting termin'
  },
  postTermin_success(state){
    state.status = 'success posted termin'
  },
  deleteTermin_request(state){
    state.status='deleting termin'
  },
  deleteTermin_success(state){
    state.status= ' success deleting termin'
  }


};



export default{
  state,
  actions,
  mutations,
  getters
}
