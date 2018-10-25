<template lang="pug">
    div
        b-button(@click="logout") LOGOUT
        p(v-if="error != ''") {{ error }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class User extends Vue {
    error = "";

    logout() {
        this.axios.delete("http://api-rateflix.local:3000/session", {withCredentials: true}).then(()=>{
            this.$router.push("/")
        }).catch((reason)=>{
            this.error = reason.response.data;
        })
    }
}
</script>