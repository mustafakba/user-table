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
        this.$store.commit("getAllUser2")
    }

}
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;

}
</style>
