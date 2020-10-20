<template>
  <div class="home">

    <div class="addTreatmanDiv">
      <h4 id="dodajH4">Dodaj tretman</h4>
      <div class="card-body">
        <form @submit.prevent="postTreatmanThis">
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
            <label for="price">Trajanje tretmana</label>
            <div class="form-group row">
              <div class="col-5">
                <input
                id="durationH"
                type="number"
                class="form-control"
                name="durationH"
                placeholder="durationH"
                v-model="durationH"
                >
              </div>
              <label>:</label>
              <div class="col-5">
              <input
              id="durationM"
              type="number"
                class="form-control"
              name="durationM"
              placeholder="durationM"
              v-model="durationM"
              >
                </div>
            </div>
          </div>

          <input type="submit" class="btn btn-dark" value="submit"/>
        </form>



      </div>



    </div>


    <div class="tretmaniNaslovFilterDiv">
      <h2 id="tretmaniH2">Tretmani</h2>
      <div class="centriraj50">
            <input
            id="filter"
            type="text"
            class="form-control"
            v-model="filter"
            >
            <div class="centriraj">
              <button id="filterBtn" class="btn btn-dark" v-on:click="filterTreatmans(filter)">Filter</button>
            </div>

        </div>


    </div>









      <div class="grid-containerTreatman"  v-for="(treatman,index) in filteredTreatmans" :key="treatman.name">

      <div class="firstDiv">
        <h5>
          Naziv: {{ treatman.name }}
        </h5>
      </div>

      <div class="secondDiv">
        <h5>
          Cena: {{treatman.price}}din
        </h5>
      </div>

      <div class="thirdDiv">
        <h5 v-if="treatman.duration % 60<10">
          Trajanje: {{Math.floor(treatman.duration/60)}}:0{{treatman.duration % 60}}
        </h5>
        <h5 v-if="treatman.duration % 60>=10">
          Trajanje: {{Math.floor(treatman.duration/60)}}:{{treatman.duration % 60}}
        </h5>

      </div>

      <div class="fourthDiv">
        <button class="btn btn-dark" v-on:click="deleteTreatmanThis(treatman._id)">Ukloni</button>
      </div>

      <div class="itemsList">
        <h5>Proizvodi</h5>
        <ul>
          <li v-for="item in treatman.itemName" :key="item">{{item}}</li>
        </ul>
      </div>

      <div class="additemPanel">
        <div class="form-group">
          <label>Naziv proizvoda</label>
          <input class="form-control" v-model="itemNameInput[index]">
          <button class="btn btn-dark" v-on:click="addItemToTreatman(treatman.name,itemNameInput[index])">Dodaj</button>
          <button class="btn btn-dark" v-on:click="checkItems(itemNameInput[index],index)">proveri u bazi</button>

        </div>
      </div>

      <div class="checkedItemsList">
        {{checkValue[index]}}
      </div>


      </div>

  </div>


</template>

<script>
/* eslint-disable no-unused-vars */
// @ is an alias to /src
import {mapActions,mapGetters} from 'vuex';
import TreatmansWH from '../Warehouse/TreatmansWH.js'
import ItemsWH from '../Warehouse/ItemsWH.js'

export default {
  data(){
    return{
      name:"",
      price:"",
      duration:0,
      durationM:0,
      durationH:0,
      itemNameInput:[],
      treatmanItemData:{},
      itemNames:[],
      filter:"",
      checkValue:[]
    }
  },
  computed: mapGetters(["treatmans","filteredTreatmans","items"]),
  methods: {
    ...mapActions(["getTreatmans","postTreatman","putItemToTreatman","filterTreatmans","getItems","fillItemNames","deleteTreatman"]),
    async postTreatmanThis(){
      let treatman = {
        name: this.name,
        price: this.price,
        duration: Number(this.durationH)*60+Number(this.durationM),
      };
      await this.postTreatman(treatman);
      await this.getTreatmans();
    },
    async deleteTreatmanThis(treatmanID){
      await this.deleteTreatman(treatmanID);
      await this.getTreatmans();
    },

    addItemToTreatman: async function(treatmanName,itemName){
      console.log(itemName)
      let treatmanItemData ={
        treatmanName:treatmanName,
        itemName: itemName
      };
      await this.putItemToTreatman(treatmanItemData);
      await this.getTreatmans();
    },
    async fillItemNames(){
      await this.getItems();
      var i;
      for(i=0;i<this.items.length;i++){
        var lowerName = this.items[i].name.toLowerCase();
        this.itemNames.push(lowerName)
      }
    },
    checkItems: function(checkValue,index){
      var lowerCheckValue =checkValue.toLowerCase();
      var i;
      let tempStr="{ "
      for(i=0;i<this.itemNames.length;i++){
        if(this.itemNames[i].startsWith(lowerCheckValue)){
          tempStr=tempStr+this.itemNames[i]+" "
        }
      }
      tempStr=tempStr+"}"
      this.checkValue[index]=tempStr
    }

  },
  created() {
    this.getTreatmans();
    this.fillItemNames();
  }
}


/* eslint-enable no-unused-vars */
</script>

<style scoped>

.grid-containerTreatman {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . ."
    "itemsList additemPanel additemPanel checkedItemsList"
    "itemsList additemPanel additemPanel checkedItemsList";
  background-color: #ffbebe;
  border: 2px inset #9b0909;

}
.itemsList { grid-area: itemsList; }
.additemPanel { grid-area: additemPanel; }
.checkedItemsList { grid-area: checkedItemsList; }


.addTreatmanDiv{

  background-color: #ffbebe;
  border: 2px inset #9b0909;
}
#tretmaniH2{
  text-align: center;
  color: #ffffff;

}
.tretmaniNaslovFilterDiv{
  border: 5px inset #9b0909;
  background-color: #3f3f3f;
}
.filterTreatmanDiv{
  text-align: center;
}
.fourthDiv{
  text-align: right;
}
.btn-dark{
    background-color: #fb4f4f;
    border-color: #9b0909;
}
#dodajH4{
  text-align: center;
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
.addItemPanel{

}

</style>
