import { createStore } from 'vuex'
import Auth from '../Warehouse/Auth';
import TreatmansWH from '../Warehouse/TreatmansWH';
import ClientsWH from '../Warehouse/ClientsWH';
import TerminsWH from '../Warehouse/TerminsWH';
import ItemsWH from '../Warehouse/ItemsWH';

export default createStore({

  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Auth,
    TreatmansWH,
    ClientsWH,
    TerminsWH,
    ItemsWH
  }
})
