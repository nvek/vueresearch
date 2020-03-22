<template>
    <div class="blog">
        <PostForm>

        </PostForm>
        <h1>{{ postsCount }}</h1>
        <div class="post" v-for="post in validPost" :key="post.id">
            <h2>{{post.title}}</h2>
            <h5>{{ post.body }}</h5>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    import PostForm from "@/components/PostForm";

    export default {
        name: 'Blog',
        components: {PostForm},
        computed: mapGetters(["validPost", "postsCount"]),
        methods: mapActions(['fetchPosts']),
        mounted(){
            this.fetchPosts()
        }

    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .post{
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 2px;
    }
</style>