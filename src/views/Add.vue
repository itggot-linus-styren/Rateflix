<template lang="pug">
  div
    NewMovie
    NewAuthor
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NewMovie from '@/components/NewMovie.vue';
import NewAuthor from '@/components/NewAuthor.vue';

@Component({
  components: {
    NewMovie,
    NewAuthor
  }
})
export default class Add extends Vue {}
</script>