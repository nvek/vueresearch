<template>
    <div class="blog">
        <PostForm/>
        <post v-for="(post, index) of validPost" :key="index"
              v-bind:post="post"/>
     </div>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex'
    import PostForm from "@/components/PostForm";
    import Post from "../components/Post";

    export default {
        name: 'Blog',
        components: {Post, PostForm},
        computed: mapGetters(["validPost", "postsCount"]),
        methods: mapActions(['fetchPosts']),
        mounted(){
            this.fetchPosts()
        }

    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
