<template>
    <div class="container">
        <div>
            <b-table striped hover :items="items" :fields="fields">
                <template #cell(button)="prop">
                    <b-button @click="goAbout(prop)">
                        Detay
                    </b-button>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            fields: ['firstName', 'lastName', 'age', 'maidenName', 'gender', 'email','button'],
            items: [],
        }
    },
    methods: {
        getAllUser() {
            this.$store.state.users
        },
        getUserDetail() {
            fetch('https://dummyjson.com/users/1')
                .then(res => res.json())
        },
        goAbout(user){
            let id = user.item.id
            console.log(user.item.id)
            this.$router.push(`/about/${id}`)
        }
    },
    created() {
        this.getAllUser()
        this.getUserDetail()
    },
    computed :{
        changeUser(){
            return this.$store.state.users
        }
    },
    watch :{
        changeUser : function (value){
            console.log(value)
            this.items = value
        }
    }
}
</script>

<style scoped>

</style>