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
        this.axios.delete("http://localhost:3000/api/v1/session", {withCredentials: true}).then(()=>{
            this.$router.push("/")
        }).catch((reason)=>{
            this.error = reason.response.data;
        })
    }
}
</script>