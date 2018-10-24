<template lang="pug">
    div
        Login
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue';

@Component({
    components: {
        Login
    }
})
export default class User extends Vue {}
</script>
