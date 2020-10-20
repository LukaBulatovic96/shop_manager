/* eslint-disable no-unused-vars */
import axios from 'axios';
import router from '../router/index';

const state = {
  items:{},
  filteredItems:{},
  status:""
};

const getters = {
  items:state=>state.items,
  filteredItems:state=>state.filteredItems,
};

const actions = {
  //filter items by filter value
  async filterItems({
    commit
  },filterValue){

    let lowerfilterVaule=filterValue.toLowerCase();
    let filteredList = [];

    var i;
    for (i=0;i<state.items.length;i++){
      let lowerItemName = state.items[i].name.toLowerCase();
      console.log(lowerItemName + " " + lowerfilterVaule)
      if(lowerItemName.includes(lowerfilterVaule)){
         filteredList.push(state.items[i]);
      }
    }

    commit('filter_success',filteredList)

    return true;
  },
  //post item
  async postItem({
    commit
  }, itemData){
    commit('postItem_request');
    let res = await axios.post('/api/items/post',itemData);
    if(res.data.success !== undefined){
      commit('postItem_success');
    }
    return res;
  },

  //Get items
  async getItems({ //art
    commit
  }){
    commit('items_request');
    let res = await axios.get('/api/items/getAll');
    commit('items',res.data);
    return res;
  },
  async addQuantity({
    commit
  },itemQuantityData){
    commit('changeItemQuantity_request');
    let res = await axios.put(`/api/items/put/${itemQuantityData.itemName}`,itemQuantityData)

    if(res.data.success !== undefined){
        commit('changeItemQuantity_success');
    }
    return res;

  },
  async deleteItem({
    commit
  },itemID){
    commit('deleteItem_request');
    let res = await axios.delete(`/api/items/delete/${itemID}`)
      if(res.data.success !== undefined){
        commit('deleteItem_success');
      }
      return res;
  },



};

const mutations = {

  items_request(state){
        state.status = 'loading items'
  },
  items(state,items){
        state.items=items
        state.filteredItems=items
  },
  postItem_request(state){
    state.status = 'posting item'
  },
  postItem_success(state){
    state.status = 'success posted item'
  },
  changeItemQuantity_request(state){
    state.status= 'changing item quantity'
  },
  changeItemQuantity_success(state){
    state.status = ' sucess changing item quantity'
  },
  filter_request(state){
    state.status = 'filtering items'
  },
  filter_success(state,filteredList){
    state.filteredItems=filteredList
  },
  deleteItem_request(state){
    state.status ='deleting item'
  },
  deleteItem_success(state){
    state.status='item deleted success'
  }


};

export default{
  state,
  actions,
  mutations,
  getters
}
/* eslint-enable no-unused-vars */
