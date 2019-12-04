<template lang="pug">
    div(v-if="done")
        Login(v-if="user_id == null")
        Register(v-if="user_id == null")
        Logout(v-if="user_id != null")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import Logout from '@/components/Logout.vue';

@Component({
    components: {
        Login,
        Register,
        Logout
    }
})
export default class User extends Vue {
    done = false;
    user_id = null;

    created() {
        this.axios.get("http://localhost:3000/api/v1/session", {withCredentials: true}).then((response)=>{
            this.user_id = response.data.user_id;
            this.done = true;
        })
    }
}
</script>
