<template lang="pug">
    ul(v-if="done")
        li(v-if="user.username")
            p Welcome {{ user.username }}!
        li
            b-link(to="/") Home
        li
            b-link(to="/user") User
        li
            b-link(to="/add") Add
        li(v-if="user.id")
            Logout(:user_id="user.id")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logout from '@/components/Logout.vue';

@Component({
    components: {
        Logout
    }
})
export default class Navbar extends Vue {
    done = false;
    user = {
        id : null,
        username : ""
    };


    created() {
        this.axios.get("http://localhost:3000/api/v1/session", {withCredentials: true}).then((response)=>{
            this.user.id = response.data.user_id;
            if (this.user.id) {
                this.axios.get(`http://localhost:3000/api/v1/users/${this.user.id}.json`, {withCredentials: true}).then((response)=>{
                    this.user.username = response.data.username;
                    this.done = true;
                })
            } else {
                this.done = true;
            }
        })
    }
}
</script>

<style lang="sass">
ul
    list-style-type: none
</style>
