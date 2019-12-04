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
            p.text-success(v-if="notice") {{ notice }}
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
    notice = "";
    error = {};
    
    created() {
        let that = this
        let callback = ()=>{
            that.axios.get("http://localhost:3000/api/v1/authors.json", {withCredentials: true}).then((response)=>{
                that.authors = response.data;
            });
        }
        this.$root.$on("added-author", callback);
        callback();
    }

    newMovie() {
        this.error = {};
        this.notice = "";
        this.axios.post("http://localhost:3000/api/v1/movies.json", this.query, {withCredentials: true}).then((response)=>{
            this.notice = "Successfully created movie " + this.query.title + "!"
        }).catch((reason)=>{
            this.error = reason.response.data;
        })
    }
}
</script>
