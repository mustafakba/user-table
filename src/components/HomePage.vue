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
        goAbout(user){
            let id = user.item.id
            this.$router.push(`/about/${id}`)
        }
    },
    created() {
        this.items = this.$store.state.users
    },
    computed :{
        changeUser(){
            return this.$store.state.users
        }
    },
    watch :{
        changeUser : function (value){
            this.items = value
            console.log(value)
        }
    }
}
</script>

<style scoped>

</style>