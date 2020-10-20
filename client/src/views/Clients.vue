<template>

  <div class="addClientDiv">

    <h4 id="dodajH4">Dodaj Klienta</h4>
    <div class="card-body">
      <form @submit.prevent="postClientThis">
        <div class="form-group">
          <label for="name">Ime</label>
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
          <label for="price">Email</label>
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
          <label for="price">Note</label>
          <input
          id="note"
          class="form-control"
          type="text"
          name="note"
          placeholder="Note"
          v-model="note"
          >
        </div>
        <div class="form-group">
          <label for="price">Telefon</label>
          <input
          id="phoneNumber"
          class="form-control"
          type="text"
          name="phoneNumber"
          placeholder="PhoneNumber"
          v-model="phoneNumber"
          >
        </div>
        <div class="form-group">
          <label for="date">Rodjen/a</label>
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
            <option value="1920">1920</option>
                        <option value="1921">1921</option>
                        <option value="1922">1922</option>
                        <option value="1923">1923</option>
                        <option value="1924">1924</option>
                        <option value="1925">1925</option>
                        <option value="1926">1926</option>
                        <option value="1927">1927</option>
                        <option value="1928">1928</option>
                        <option value="1929">1929</option>
                        <option value="1930">1930</option>
                        <option value="1931">1931</option>
                        <option value="1932">1932</option>
                        <option value="1933">1933</option>
                        <option value="1934">1934</option>
                        <option value="1935">1935</option>
                        <option value="1936">1936</option>
                        <option value="1937">1937</option>
                        <option value="1938">1938</option>
                        <option value="1939">1939</option>
                        <option value="1940">1940</option>
                        <option value="1941">1941</option>
                        <option value="1942">1942</option>
                        <option value="1943">1943</option>
                        <option value="1944">1944</option>
                        <option value="1945">1945</option>
                        <option value="1946">1946</option>
                        <option value="1947">1947</option>
                        <option value="1948">1948</option>
                        <option value="1949">1949</option>
                        <option value="1950">1950</option>
                        <option value="1951">1951</option>
                        <option value="1952">1952</option>
                        <option value="1953">1953</option>
                        <option value="1954">1954</option>
                        <option value="1955">1955</option>
                        <option value="1956">1956</option>
                        <option value="1957">1957</option>
                        <option value="1958">1958</option>
                        <option value="1959">1959</option>
                        <option value="1960">1960</option>
                        <option value="1961">1961</option>
                        <option value="1962">1962</option>
                        <option value="1963">1963</option>
                        <option value="1964">1964</option>
                        <option value="1965">1965</option>
                        <option value="1966">1966</option>
                        <option value="1967">1967</option>
                        <option value="1968">1968</option>
                        <option value="1969">1969</option>
                        <option value="1970">1970</option>
                        <option value="1971">1971</option>
                        <option value="1972">1972</option>
                        <option value="1973">1973</option>
                        <option value="1974">1974</option>
                        <option value="1975">1975</option>
                        <option value="1976">1976</option>
                        <option value="1977">1977</option>
                        <option value="1978">1978</option>
                        <option value="1979">1979</option>
                        <option value="1980">1980</option>
                        <option value="1981">1981</option>
                        <option value="1982">1982</option>
                        <option value="1983">1983</option>
                        <option value="1984">1984</option>
                        <option value="1985">1985</option>
                        <option value="1986">1986</option>
                        <option value="1987">1987</option>
                        <option value="1988">1988</option>
                        <option value="1989">1989</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>


          </select>

        </div>
        <input type="submit" class="btn btn-dark" value="submit"/>
      </form>

    </div>

      </div>

      <div class="ClientsNaslovFilterDiv">
        <h2 id="ClientsH2">Klijenti</h2>
        <div class="centriraj50">
              <input
              id="filter"
              type="text"
              class="form-control"
              v-model="filter"
              >
              <div class="centriraj">
                <button id="filterBtn" class="btn btn-dark" v-on:click="filterClients(filter)">Filter</button>
              </div>

          </div>
      </div>

      <div class="grid-containerClient"  v-for="client in filteredClients" :key="client.name">

        <div class="nameDiv">
          <h5>Ime: {{ client.name }}</h5>
        </div>

        <div class="emailDiv">
          <h6>Email: {{client.email}}</h6>
        </div>
        <div class="birthdayDiv">
          <h6>Datum rodjenja: {{client.birthday}}</h6>
        </div>
        <div class="numberDiv">
          <h6>Telefon: {{client.phoneNumber}}</h6>
        </div>

        <div class="noteDiv">
          <h6>Note: {{client.note}}</h6>
        </div>

        <div class="deleteDiv">
          <button class="btn btn-dark" v-on:click="deleteClientThis(client._id)">ukloni</button>
        </div>

      </div>



</template>

<script>
/* eslint-disable no-unused-vars */
// @ is an alias to /src
import {mapActions,mapGetters} from 'vuex';
import ClientsWH from '../Warehouse/ClientsWH.js'

export default {
  data(){
    return{
      name:"",
      email:"",
      note:"",
      birthday:"",
      phoneNumber:"",
      dateY:1990,
      dateM:1,
      dateD:1,
    }
  },
  computed: mapGetters(["clients","filteredClients"]),
  methods: {
    ...mapActions(["getClients","postClient","deleteClient","filterClients"]),
  async postClientThis(){
    let newClient={
      name:this.name,
      email:this.email,
      note:this.note,
      birthday:this.dateD+"."+this.dateM+"."+this.dateY,
      phoneNumber:this.phoneNumber
    }
    console.log(newClient)
    await this.postClient(newClient);
    await this.getClients();

  },
  async deleteClientThis(clientID){
    await this.deleteClient(clientID);
    await this.getClients();
  },
  
},

  created() {
    this.getClients();
  }
}


/* eslint-enable no-unused-vars */
</script>

<style scoped>
#ClientsLi{
  background-color: #40ff00;
}
.grid-containerClient {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". noteDiv"
    ". noteDiv"
    ". noteDiv"
    ". .";

    background-color: #f59f9f;
    border: 2px inset #9b0909;
}
.noteDiv { grid-area: noteDiv; }


.addClientDiv{

  background-color: #ffbebe;
  border: 2px inset #9b0909;
}
#dodajH4{
  text-align: center;
}

.btn-dark{
    background-color: #fb4f4f;
    border-color: #9b0909;
}
.deleteDiv{
  text-align: right;
}
#ClientsH2{
  text-align: center;
  color: #ffffff;

}
.ClientsNaslovFilterDiv{
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
</style>
