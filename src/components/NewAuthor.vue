<template lang="pug">
    .jumbotron
        .row
            h2.display-2 ADD A NEW AUTHOR
        .row 
            label(for="authorname") Author Name:
            input#authorname(placeholder="Author name..." type="text" v-model="query.name")
            p.text-danger(v-if="error.name != undefined") {{ error.name[0] }}
        .row
            button.btn.btn-primary(@click="newAuthor") ADD
            
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NewAuthors extends Vue {
    error = {}
    query = {
        name : ""
    }

    // functions
    newAuthor() {
        this.axios.post("http://192.168.226.53:3000/authors.json", this.query).then((response)=>{
            console.log(response)
        }).catch((reason)=>{
            this.error = reason.response.data;
        })
    }
}
</script>
