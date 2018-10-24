<template lang="pug">
  p {{ movies }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class MovieList extends Vue {
  movies = [];

  created() {
    this.axios.get("http://192.168.226.53:3000/movies.json").then((response)=>{
      this.movies = response.data;
    });
  }
  
}
</script>