<template>
    <div class="container d-flex justify-content-center align-items-center my-5">
        <div class="card" style="width: 22rem;">
            <img :src="user.image" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{user.firstName}} {{user.lastName}}</h5>
                <p class="card-text m-0">
                    <span class="title">Kullanıcı ID </span>: {{user.id}} <br>
                </p>
                <p class="card-text m-0">
                    <span class="title">Yaş</span> : {{user.age}} <br>
                </p>
                <p class="card-text  m-0">
                    <span class="title">Mail Adresi</span> : {{user.email}} <br>
                </p>
                <p class="card-text  m-0">
                    <span class="title"> Telefon Numarası </span>: {{user.phone}}
                </p>
                <p class="card-text  m-0">
                    <span class="title">Kullanıcı Adı</span>: {{user.username}} <br>
                </p>
                <p class="card-text  m-0">
                    <span class="title">Şifre </span>: {{user.password}} <br>
                </p>
                <p class="card-text  m-0">
                    <span class="title">Doğum Tarihi</span> : {{user.birthDate}} <br>
                </p>
                <p class="card-text  m-0">
                    <span class="title">Kan Grubu </span>: {{user.bloodGroup}} <br>
                </p>
                <p class="card-text  m-0">
                    <span class="title">Boy - Kilo  </span>: {{user.height}} cm  - {{user.weight}} kg  <br>
                </p>
            </div>
        </div>
    </div>




</template>

<script>
export default {

    name: "AboutPage",
    data() {
        return {
            user: {
                firstName :"",
                lastName :"",
            }
        }
    },
    created() {
        let users = this.$store.state.users
        this.user = users.find(x => x.id == this.$route.params.id)
    },
}
</script>

<style scoped>
 .title{
     color: cadetblue;
 }
 .card-text{
     white-space: nowrap;
 }
</style>