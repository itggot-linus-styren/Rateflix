<template lang="pug">
  .list-group
    .list-group-item(v-for="(movie, index) in movies" :key="index")
      | {{ movie.title }}
      b-form-input(type="range" min="1" max="10" v-model="movie.rating")
      b-form-input(type="text" v-model="movie.text" placeholder="Enter something")
      b-btn(@click="rate(movie)") RATE

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MovieList extends Vue {
  movies : any = [];

  created() {
    this.axios.get("http://api-rateflix.local:3000/movies.json", {withCredentials: true}).then((response)=>{
      this.movies = response.data;
      this.movies = this.movies.map((m : any) => Object.assign(m, {rating: 5, text: "", updated: false}))
      this.axios.get("http://api-rateflix.local:3000/session", {withCredentials: true}).then((response)=>{
        let user_id = response.data.user_id;
        if (user_id) {
          this.axios.get("http://api-rateflix.local:3000/reviews.json", {withCredentials: true}).then((response)=>{
            this.movies = this.movies.map((m : any) => {
              let review = response.data.find((f : any) => f.user_id == user_id && f.movie_id == m.id)
              if (review) return Object.assign(m, {rating: review.rating, text: review.text, updated: review.id})
              return m
            })
          });
        }
      })
    });
  }

  rate(movie : any) {
    let query = {
      movie_id: movie.id,
      rating: movie.rating,
      text: movie.text
    };
    if (movie.updated) this.axios.patch(`http://api-rateflix.local:3000/reviews/${movie.updated}.json`, query, {withCredentials: true})
    else this.axios.post("http://api-rateflix.local:3000/reviews.json", query, {withCredentials: true})
  }
  
}
</script>