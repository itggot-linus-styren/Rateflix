<template  lang="pug">
  div
    Navbar
    MovieList
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import MovieList from '@/components/MovieList.vue';

@Component({
  components: {
    Navbar,
    MovieList
  }
})
export default class Home extends Vue {
}
</script>