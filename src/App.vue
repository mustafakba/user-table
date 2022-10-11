<template>
    <router-view>
    </router-view>
</template>

// name: 'App',
// components: {
// }


<script>
export default {

    created() {
        console.log('CREATED APP CALİSTİ')
        this.$store.dispatch("getAllUser2")
    }

}
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;

}
</style>
