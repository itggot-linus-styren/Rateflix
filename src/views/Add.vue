<template lang="pug">
  div
    Navbar
    NewMovie
    NewAuthor
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import NewMovie from '@/components/NewMovie.vue';
import NewAuthor from '@/components/NewAuthor.vue';

@Component({
  components: {
    Navbar,
    NewMovie,
    NewAuthor
  }
})
export default class Add extends Vue {}
</script>