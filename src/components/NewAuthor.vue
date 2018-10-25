<template lang="pug">
    .jumbotron
        .row
            h2.display-2 ADD A NEW AUTHOR
        .row 
            label(for="authorname") Author Name:
            input#authorname(placeholder="Author name..." type="text" v-model="query.name")
            p.text-danger(v-if="error.name != undefined") {{ error.name[0] }}
            p.text-success(v-if="notice") {{ notice }}
        .row
            button.btn.btn-primary(@click="newAuthor") ADD
            
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NewAuthors extends Vue {
    error = {}
    notice = "";
    query = {
        name : ""
    }

    newAuthor() {
        this.error = {};
        this.notice = "";
        this.axios.post("http://api-rateflix.local:3000/authors.json", this.query, {withCredentials: true}).then((response)=>{
            this.notice = "Successfully created author " + this.query.name + "!"
            this.$root.$emit("added-author");
        }).catch((reason)=>{
            this.error = reason.response.data;
        })
    }
}
</script>
