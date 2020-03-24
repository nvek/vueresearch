<template>
    <div class="blog">
        <PostForm/>
<!--        <h1>{{ postsCount }}</h1>-->
        <v-card
            class="mx-auto"
            max-width="500"
        >
            <v-expansion-panels>
                <v-expansion-panel
                        v-for="post in validPost"
                        :key="post.id">
                    <v-expansion-panel-header>{{post.title}}</v-expansion-panel-header>
                    <v-expansion-panel-content>{{ post.body }}</v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
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
</style>