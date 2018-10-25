<template lang="pug">
    .jumbotron
        .row
            h2.display-2 REGISTER
        .row
            label(for="reg-username") Username:
            input#reg-username(placeholder="username" type="text" v-model="query.user.username")
            p(v-if="error.username != undefined") {{ error.username[0] }}
        .row
            label(for="reg-password") password:
            input#reg-password(placeholder="password" type="password" v-model="query.user.password")
            p(v-if="error.password != undefined") {{ error.password[0] }}
        .row
            label(for="reg-password-conf") password confirmation:
            input#reg-password-conf(placeholder="confirm password" type="password" v-model="query.user.password_confirmation")
            p(v-if="error.password_confirmation != undefined") {{ error.password_confirmation[0] }}
        .row
            button.btn.btn-primary(@click="login") REGISTER
            p(v-if="error.error != ''") {{ error.error }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class User extends Vue {
    query = {
        user: {
            username : "",
            password : "",
            password_confirmation : ""
        }
    };
    error = {};

    login() {
        this.axios.post("http://api-rateflix.local:3000/users.json", this.query, {withCredentials: true}).then((response)=>{
            this.axios.post("http://api-rateflix.local:3000/session", this.query.user, {withCredentials: true}).then(()=>{
                this.$router.push("/")
            })
        }).catch((reason)=>{
            this.error = reason.response.data;
        })
    }
}
</script>
