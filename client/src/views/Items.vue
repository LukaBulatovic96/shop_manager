<template>

  <div class="addItemDiv">
    <h4 id="dodajH4">Dodaj Proizvod</h4>
    <div class="card-body">
      <form @submit.prevent="postItemThis">
        <div class="form-group">
          <label for="name">Naziv</label>
          <input
          id="name"
          class="form-control"
          type="text"
          name="name"
          placeholder="Naziv"
          v-model="name"
          >
        </div>
        <div class="form-group">
          <label for="price">Cena</label>
          <input
          id="price"
          class="form-control"
          type="number"
          name="price"
          placeholder="Cena"
          v-model="price"
          >
        </div>
        <div class="form-group">
          <label for="quantity">Kolicina</label>
          <input
          id="quantity"
          class="form-control"
          type="number"
          name="quantity"
          placeholder="Kolicina"
          v-model="quantity"
          >
        </div>
        <input class="btn btn-dark" type="submit"  value="submit"/>
      </form>

    </div>
  </div>

  <div class="ItemsNaslovFilterDiv">
    <h2 id="ItemsH2">Proizvodi</h2>
    <div class="centriraj50">
          <input
          id="filter"
          type="text"
          class="form-control"
          v-model="filter"
          >
          <div class="centriraj">
            <button id="filterBtn" class="btn btn-dark" v-on:click="filterItems(filter)">Filter</button>
          </div>

      </div>
  </div>




        <div class="grid-container5"  v-for="(item,index) in filteredItems" :key="item.name">

          <div class="firstDiv">
            Naziv: {{ item.name }}
          </div>

          <div class="secondDiv">
            Cena: {{item.price}}din
          </div>

          <div class="thirdDiv">
            Kolicina: {{item.quantity}}
          </div>


          <div class="input-group mb-3">
            <input
            v-model="quant[index]"
            class="form-control"
            >
            <div class="input-group-append">
            <button class="btn btn-dark" v-on:click="changeQuantity(item.name,Number(quant[index]))">+</button>
            <button class="btn btn-dark" v-on:click="changeQuantity(item.name,-Number(quant[index]))">-</button>
            </div>
          </div>


          <div class="fifthDiv">
            <button  class="btn btn-dark" v-on:click="deleteItemThis(item._id)">ukloni</button>
          </div>



        </div>




</template>



<script>
/* eslint-disable no-unused-vars */
import {mapActions,mapGetters} from 'vuex';
import ItemsWH from '../Warehouse/ItemsWH.js'

export default {
  data(){
    return{
      name:"",
      price:"",
      quantity:"",
      quant:{}
    }
  },
  computed: mapGetters(["items","filteredItems"]),
  methods: {
    ...mapActions(["getItems","postItem","addQuantity","filterItems","deleteItem"]),
    async postItemThis(){
      let item = {
        name: this.name,
        price: this.price,
        quantity: this.quantity
      };
      await this.postItem(item);
      await this.getItems();


    },
    async deleteItemThis(itemID){
      await this.deleteItem(itemID);
      await this.getItems(itemID);
    },
     changeQuantity: async function(itemName,quantity){
      console.log(itemName + "||"+quantity)
      let itemQuantityData ={
        itemName:itemName,
        quantity: quantity
      };
      await this.addQuantity(itemQuantityData);
      await this.getItems();
    },



  },
  async created() {
    await  this.getItems();
  }
}
/* eslint-enable no-unused-vars */
</script>

<style scoped>
#itemsLi{
  background-color: #40ff00;
}

.grid-container5 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . .";
    background-color: #ffbebe;
    border: 2px inset #9b0909;
    padding: 5px;
}

#dodajH4{
  text-align: center;
}

.btn-dark{
    background-color: #fb4f4f;
    border-color: #9b0909;
}

.addItemDiv{

  background-color: #ffbebe;
  border: 2px inset #9b0909;
}

#ItemsH2{
  text-align: center;
  color: #ffffff;

}
.ItemsNaslovFilterDiv{
  border: 5px inset #9b0909;
  background-color: #3f3f3f;
}
.centriraj50{
  margin: auto;
  width: 50%;
}
.centriraj{
  text-align: center;
}
#filterBtn{
  width: 50%;
}
.fifthDiv{
  text-align: right;
}

</style>
