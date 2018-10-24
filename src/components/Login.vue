<template lang="pug">
    .jumbotron
        .row
            h2.display-2 LOGIN
        .row
            label(for="username") Username:
            input#username(placeholder="username" type="text" v-model="query.name")
            p.text-danger(v-if="error.name != undefined") {{ error.name[0] }}
        .row
            label(for="password") password:
            input#password(placeholder="password" type="password" v-model="query.password")
            p.text-danger(v-if="error.password != undefined") {{ error.password[0] }}
        .row
            button.btn.btn-primary(@click="login") LOGIN
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class User extends Vue {
    query = {
        name : "",
        password : ""
    };
    error = {};

    login() {
        this.axios.post("http://api-rateflix.local:3000/session", this.query, {withCredentials: true}).then((response)=>{
            console.log(response)
            this.axios.get("http://api-rateflix.local:3000/session", {withCredentials: true}).then((response)=>{
                console.log(response);
            })
        }).catch((reason)=>{
            this.error = reason.response.data;
        })
    }
}
</script>
