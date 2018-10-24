<template lang="pug">
    .jumbotron
        .row
            h2.display-2 ADD A NEW MOVIE
        .row
            label(for="moviename") Movie Name:
            input#moviename(placeholder="Movie name..." type="text" v-model="query.title")
            p.text-danger(v-if="error.title != undefined") {{ error.title[0] }}
        .row
            label(for="authername") Name of the Author:
            select#authername(placeholder="Author name" type="text" v-model="query.author_id")
                option(disabled) Author's name
                option(v-for="(author, index) in authors" :value="author.id") {{ author.name }}
            p.text-danger(v-if="error.author != undefined") {{ error.author[0] }}
        .row
            button.btn.btn-primary(@click="newMovie") ADD
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NewMovies extends Vue {
    authors = [];
    query = {
        title : "",
        author_id : ""
    };
    error = {};
    
    created() {
        this.axios.get("http://192.168.226.53:3000/authors.json").then((response)=>{
            this.authors = response.data;
        });
    }

    newMovie() {
        this.axios.post("http://192.168.226.53:3000/movies.json", this.query).then((response)=>{
            console.log(response)
        }).catch((reason)=>{
            this.error = reason.response.data;
        })
    }
}
</script>
