import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);

const store = new Vuex.Store({
    state :{
            users :[]
    },
    actions: {
        getAllUser2({state}){
            fetch('https://dummyjson.com/users')
                .then(res => res.json())
                .then(data=>{
                    state.users = data.users
            });

        }
    }
})

export default store ;
