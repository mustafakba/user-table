import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);

const store = new Vuex.Store({
    state :{
            users :[]
    },
    mutations: {
        getAllUser2(state){
            fetch('https://dummyjson.com/users')
                .then(res => res.json())
                .then(data=>{
                    state.users = data.users
                    console.log(state.users)
            });

        }
    }
})

export default store ;
