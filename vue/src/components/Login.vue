<template lang="pug">
    .jumbotron
        .row
            h2.display-2 LOGIN
        .row
            label(for="username") Username:
            input#username(placeholder="username" type="text" v-model="query.username")
        .row
            label(for="password") password:
            input#password(placeholder="password" type="password" v-model="query.password")
        .row
            button.btn.btn-primary(@click="login") LOGIN
            p(v-if="error != {}") {{ error.error }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class User extends Vue {
    query = {
        username : "",
        password : ""
    };
    error = {};

    login() {
        this.axios.post("http://localhost:3000/api/v1/session", this.query, {withCredentials: true}).then(()=>{
            this.$router.push("/")
        }).catch((reason)=>{
            this.error = reason.response.data;
        })
    }
}
</script>
