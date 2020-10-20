<template lang="html">
  <div class="DanasnjiTerminsDiv">

    <h4 id="DanasnjiH4" >Danasnji termini</h4>

      <div class="grid-container3"  v-for="termin in todayTermins" :key="termin.date">
      <div class="firstDiv3">

        <h6 v-if="(termin.duration % 60 +termin.timeM>59)&&(termin.timeM+termin.duration % 60-60>=10)&&(termin.timeM>=10)">
          {{termin.timeH}}:{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)+1}}:{{termin.timeM+termin.duration % 60-60}}
        </h6>
        <h6 v-if="(termin.duration % 60 +termin.timeM>59)&&(termin.timeM+termin.duration % 60-60<10)&&(termin.timeM>=10)">
          {{termin.timeH}}:{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)+1}}:0{{termin.timeM+termin.duration % 60-60}}
        </h6>
        <h6 v-if="(termin.duration % 60 +termin.timeM>59)&&(termin.timeM+termin.duration % 60-60>=10)&&(termin.timeM<10)">
          {{termin.timeH}}:0{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)+1}}:{{termin.timeM+termin.duration % 60-60}}
        </h6>
        <h6 v-if="(termin.duration % 60 +termin.timeM>59)&&(termin.timeM+termin.duration % 60-60<10)&&(termin.timeM<10)">
          {{termin.timeH}}:0{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)+1}}:0{{termin.timeM+termin.duration % 60-60}}
        </h6>

        <h6 v-if="(termin.duration % 60 +termin.timeM<=59)&&(termin.timeM+termin.duration % 60>=10)&&(termin.timeM>=10)">
          {{termin.timeH}}:{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)}}:{{termin.timeM+termin.duration % 60}}
        </h6>
        <h6 v-if="(termin.duration % 60 +termin.timeM<=59)&&(termin.timeM+termin.duration % 60<10)&&(termin.timeM>=10)">
          {{termin.timeH}}:{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)}}:0{{termin.timeM+termin.duration % 60}}
        </h6>
        <h6 v-if="(termin.duration % 60 +termin.timeM<=59)&&(termin.timeM+termin.duration % 60>=10)&&(termin.timeM<10)">
          {{termin.timeH}}:0{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)}}:{{termin.timeM+termin.duration % 60}}
        </h6>
        <h6 v-if="(termin.duration % 60 +termin.timeM<=59)&&(termin.timeM+termin.duration % 60<10)&&(termin.timeM<10)">
          {{termin.timeH}}:0{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)}}:0{{termin.timeM+termin.duration % 60}}
        </h6>

      </div>

      <div class="secondDiv3">
        <h6>
          {{ termin.clientName }}
        </h6>
      </div>

      <div class="thirdDiv3">
        <h6>
          {{termin.treatmanName}}
        </h6>
      </div>

      <div class="fourthDiv3">

        <button class="btn btn-dark" v-on:click="deleteTerminThis(termin._id)">ukloni</button>

      </div>

      </div>

  </div>

  <div class="addTerminDiv">

  <h4 id="addTerminH4">Dodaj Termin</h4>
  <div class="card-body">
    <form @submit.prevent="postTerminThis">
      <div class="form-group">
        <label for="clientName">Ime klijenta</label>
        <input
        id="clientName"
        class="form-control"
        type="text"
        name="clientName"
        placeholder="ClientName"
        v-model="clientName"
        >
        <button class="btn btn-dark" v-on:click="checkClients(clientName)">proveri u bazi</button>
        {{checkedClients}}
      </div>
      <div class="form-group">
        <label for="treatmanName">Naziv tretmana</label>

        <select name="treatmanName" id="treatmanName" class="form-control" v-model="treatmanName" >
          <option v-for="treatman in treatmans" :key="treatman.name" :value="treatman.name">{{treatman.name}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="date">Datum</label>
        <select class="form-control" name="dateD" v-model="dateD" id="dateD">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>

        <select class="form-control" name="dateM" v-model="dateM" id="dateM">
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
          <option value="4">Apr</option>
          <option value="5">May</option>
          <option value="6">Jun</option>
          <option value="7">Jul</option>
          <option value="8">Aug</option>
          <option value="9">Sep</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
        </select>

        <select class="form-control" name="dateY" v-model="dateY" id="dateY">
                <option value="2020">2020</option>
        </select>

      </div>

      <div class="form-group">
        <label for="time">Vreme</label>
        <div class="form-group row">
          <div class="col-5">
            <input
            id="timeH"
            type="number"
            class="form-control"
            name="timeH"
            placeholder="timeH"
            v-model="timeH"
            >
          </div>
          <label>:</label>
          <div class="col-5">
          <input
          id="timeM"
          type="number"
            class="form-control"
          name="timeM"
          placeholder="timeM"
          v-model="timeM"
          >
            </div>
        </div>


      </div>
      <input type="submit" class="btn btn-dark" value="submit"/>
    </form>

  </div>
    </div>

  <div class="termins">
    <h3 id="terminiZaDan" >Termini za Dan</h3>
    <div class="grid-container7">
      <button v-for="(day,index) in next7DaysNames" :key="index" class="btn btn-dark" v-on:click="loadTerminsForSelectedDay(next7Days[index])">
        {{day}}
      </button>
    </div>


      <div class="grid-container4"  v-for="termin in terminsForSelectedDay" :key="termin.date">
      <div class="firstDiv4">

        <p v-if="(termin.duration % 60 +termin.timeM>59)&&(termin.timeM+termin.duration % 60-60<10)&&(termin.timeM>=10)">
          {{termin.timeH}}:{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)+1}}:0{{termin.timeM+termin.duration % 60-60}}
        </p>
        <p v-if="(termin.duration % 60 +termin.timeM>59)&&(termin.timeM+termin.duration % 60-60<10)&&(termin.timeM<10)">
          {{termin.timeH}}:0{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)+1}}:0{{termin.timeM+termin.duration % 60-60}}
        </p>
        <p v-if="(termin.duration % 60 +termin.timeM>59)&&(termin.timeM+termin.duration % 60-60>=10)&&(termin.timeM>=10)">
          {{termin.timeH}}:{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)+1}}:{{termin.timeM+termin.duration % 60-60}}
        </p>
        <p v-if="(termin.duration % 60 +termin.timeM>59)&&(termin.timeM+termin.duration % 60-60>=10)&&(termin.timeM<10)">
          {{termin.timeH}}:0{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)+1}}:{{termin.timeM+termin.duration % 60-60}}
        </p>

        <p v-if="(termin.duration % 60 +termin.timeM<=59)&&(termin.timeM+termin.duration % 60 <10)&&(termin.timeM>=10)">
          {{termin.timeH}}:{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)}}:0{{termin.timeM+termin.duration % 60}}
        </p>
        <p v-if="(termin.duration % 60 +termin.timeM<=59)&&(termin.timeM+termin.duration % 60 <10)&&(termin.timeM<10)">
          {{termin.timeH}}:0{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)}}:0{{termin.timeM+termin.duration % 60}}
        </p>
        <p v-if="(termin.duration % 60 +termin.timeM<=59)&&(termin.timeM+termin.duration % 60 >=10)&&(termin.timeM>=10)">
          {{termin.timeH}}:{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)}}:{{termin.timeM+termin.duration % 60}}
        </p>
        <p v-if="(termin.duration % 60 +termin.timeM<=59)&&(termin.timeM+termin.duration % 60 >=10)&&(termin.timeM<10)">
          {{termin.timeH}}:0{{termin.timeM}} - {{termin.timeH+Math.floor(termin.duration/60)}}:{{termin.timeM+termin.duration % 60}}
        </p>
      </div>

      <div class="secondDiv4">
        <p>Klijent: {{ termin.clientName }} </p>
      </div>
      <div class="thirdDiv4">
        <p>Tretman: {{termin.treatmanName}}</p>
      </div>

      <div class="fourthDiv4">
        <p>Datum: {{termin.date}}</p>
      </div>

      <div class="fifthDiv4">

        <button class="btn btn-dark" v-on:click="deleteTerminThis(termin._id)">ukloni</button>

      </div>
      </div>

  </div>



</template>





<script>
/* eslint-disable no-unused-vars */
import {mapActions,mapGetters} from 'vuex';
import TerminsWH from '../Warehouse/TerminsWH.js'
import TreatmansWH from '../Warehouse/TreatmansWH.js'
import ClientsWH from '../Warehouse/ClientsWH.js'

export default {
  data(){
    return{
      clientName:"",
      treatmanName:"",
      dateD:0,
      dateM:0,
      dateY:0,
      timeH:0,
      timeM:0,
      checkedClients:"",
      ClientNames:[],
      next7Days:[],
      next7DaysNames:[],
      terminsForSelectedDay:[],
      selectedDay:""
    }
  },
  computed: mapGetters(["termins","todayTermins","treatmans","clients"]),

  methods: {
    ...mapActions(["getTermins","postTermin","getTreatmans","deleteTermin","getClients"]),
    async postTerminThis(){
      var tempDuration;
      var i;
      for(i=0;i<this.treatmans.length;i++){
        if(this.treatmans[i].name === this.treatmanName){
          tempDuration=this.treatmans[i].duration
          break;
        }
      }

      let termin = {
        clientName: this.clientName,
        treatmanName: this.treatmanName,
        date: this.dateD+"/"+this.dateM+"/"+this.dateY,
        timeH: this.timeH,
        timeM: this.timeM,
        duration: tempDuration
      };
    await this.postTermin(termin);
    await this.getTermins();

    },
    async deleteTerminThis(terminID){
      await this.deleteTermin(terminID);
      await this.getTermins();
    },
    date_function: function () {

            //new Date().getDay()  - dani u nedelji (1-ponedeljak....)
            this.dateY=new Date().getFullYear();
            this.dateM=new Date().getMonth()+1;
            this.dateD=new Date().getDate();
            this.timeH=new Date().getHours();


        },
        async fillClientNames(){
          await this.getClients();
          var i;
          for(i=0;i<this.clients.length;i++){
            var lowerName = this.clients[i].name.toLowerCase();
            this.ClientNames.push(lowerName)
          }
        },
  checkClients: function(checkValue){
          var lowerCheckValue =checkValue.toLowerCase();
          var i;
          let tempStr="{ "
          for(i=0;i<this.ClientNames.length;i++){
            if(this.ClientNames[i].startsWith(lowerCheckValue)){
              tempStr=tempStr+this.ClientNames[i]+" - "
            }
          }
          tempStr=tempStr+"}"
          this.checkedClients=tempStr
      },
    loadTerminsForSelectedDay(day){
      var tempListForDay=[]
      var i;

      for(i=0;i<this.termins.length;i++){
        if(this.termins[i].date == day){
          tempListForDay.push(this.termins[i]);
        }
      }

      tempListForDay.sort((a, b) => (
        Number(a.timeH)*60+Number(a.timeM)
        >
        Number(b.timeH)*60+Number(b.timeM))
        ?
        1 : -1
        )

      this.terminsForSelectedDay=tempListForDay

    },
    async getNext7Days(){
        var currDate=new Date();
        var prestupna;
        if(currDate.getFullYear() % 4 == 0){
          prestupna = true;
        }else{
          prestupna = false;
        }

        var i;
        var tempDate;
        var tempDayOfWeek;
        for(i=1;i<8;i++){
          if(
          currDate.getMonth()+1 == 1 ||
          currDate.getMonth()+1 == 3 ||
          currDate.getMonth()+1 == 5 ||
          currDate.getMonth()+1 == 7 ||
          currDate.getMonth()+1 == 8 ||
          currDate.getMonth()+1 == 10 ||
          currDate.getMonth()+1 == 12
        ){
          if(currDate.getDate()+i >31){
            if(currDate.getMonth()+1 ==12){
              tempDate=(Number(currDate.getDate())+Number(i))%31+"/"+"1"+"/"+Number(currDate.getFullYear()+1);
            }else{
            tempDate=(Number(currDate.getDate())+Number(i))%31+"/"+Number(currDate.getMonth()+2)+"/"+currDate.getFullYear();
            }
          }else{
            tempDate=Number(currDate.getDate())+Number(i)+"/"+Number(currDate.getMonth()+1)+"/"+currDate.getFullYear();
          }
        }
        if(
          currDate.getMonth()+1 == 4 ||
          currDate.getMonth()+1 == 6 ||
          currDate.getMonth()+1 == 9 ||
          currDate.getMonth()+1 == 11
        ){
          if(currDate.getDate()+i >30){
            tempDate=(Number(currDate.getDate())+Number(i))%30+"/"+Number(currDate.getMonth()+2)+"/"+currDate.getFullYear();
          }else{
            tempDate=Number(currDate.getDate())+Number(i)+"/"+Number(currDate.getMonth()+1)+"/"+currDate.getFullYear();
          }
        }
        if(
          currDate.getMonth()+1 == 2 && prestupna
        ){
          if(currDate.getDate()+i >28){
            tempDate=(Number(currDate.getDate())+Number(i))%28+"/"+Number(currDate.getMonth()+2)+"/"+currDate.getFullYear();
          }else{
            tempDate=Number(currDate.getDate())+Number(i)+"/"+Number(currDate.getMonth()+1)+"/"+currDate.getFullYear();
          }
        }
        if(
          currDate.getMonth()+1 == 2 && !prestupna
        ){
          if(currDate.getDate()+i >29){
            tempDate=(Number(currDate.getDate())+Number(i))%29+"/"+Number(currDate.getMonth()+2)+"/"+currDate.getFullYear();
          }else{
            tempDate=Number(currDate.getDate())+Number(i)+"/"+Number(currDate.getMonth()+1)+"/"+currDate.getFullYear();
          }
        }

        if(currDate.getDay()+i>7){
          switch((currDate.getDay()+i)%7) {
            case 1:
              tempDayOfWeek="Ponedeljak"
            break;
            case 2:
              tempDayOfWeek="Utorak"
            break;
            case 3:
              tempDayOfWeek="Sreda"
            break;
            case 4:
              tempDayOfWeek="Cetvrtak"
            break;
            case 5:
              tempDayOfWeek="Petak"
            break;
            case 6:
              tempDayOfWeek="Subota"
            break;
            case 7:
              tempDayOfWeek="Nedelja"
            break;
          }
        }else{
          switch(currDate.getDay()+i) {
            case 1:
              tempDayOfWeek="Ponedeljak"
            break;
            case 2:
              tempDayOfWeek="Utorak"
            break;
            case 3:
              tempDayOfWeek="Sreda"
            break;
            case 4:
              tempDayOfWeek="Cetvrtak"
            break;
            case 5:
              tempDayOfWeek="Petak"
            break;
            case 6:
              tempDayOfWeek="Subota"
            break;
            case 7:
              tempDayOfWeek="Nedelja"
            break;
          }
        }


        await this.next7Days.push(tempDate);
        this.selectedDay=this.next7Days[0];
        await this.next7DaysNames.push(tempDayOfWeek);
        }


    }
  },
  created() {
    this.getTermins();
    this.getTreatmans();
    this.fillClientNames();
    this.getNext7Days();
    this.loadTerminsForSelectedDay(this.selectedDay)
    this.date_function();
  }

}
</script>



<style lang="css" scoped>
.grid-container4 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . .";

    background-color: #ffffff;
    border: 2px inset #9b0909;

   padding: 5px 5px;
}
.grid-container3 {
  display: grid;
 grid-template-columns: 1fr 1fr 1fr 0.5fr;
 grid-template-rows: 1fr;
 gap: 0px 0px;
 grid-template-areas:
   ". . . .";

   background-color: #ffffff;
   border: 2px inset #9b0909;

  padding: 5px 5px;
}
.DanasnjiTerminsDiv{
    margin-bottom: 10px;
    background-color: #f59f9f;
    border: 2px inset #9b0909;
    padding: 10px 10px;
}
.addTerminDiv{
  background-color: #f59f9f;
  border: 2px inset #9b0909;
}
.termins{
   background-color: #f59f9f;
  border: 2px inset #9b0909;
  margin-bottom: 100px;

}

.deleteBtn{

  border: none;
  background-color: #e60000;
}
#DanasnjiH4{
  text-align: center;
}
.btn-dark{
    background-color: #fb4f4f;
    border-color: #9b0909;
}
.fourthDiv3{
  text-align: right;
}
#addTerminH4{
  text-align: center;
}
.grid-container7 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . . . .";
}

#terminiZaDan{
  text-align: center;
}
</style>
