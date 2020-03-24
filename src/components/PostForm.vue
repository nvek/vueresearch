<template>
    <v-card
        class="mx-auto post-form"
        max-width="500"
    >
        <v-container>
            <form @submit.prevent="submit">
                <v-text-field type="text" v-model="title" placeholder="title"/>
                <v-text-field type="text" v-model="body" placeholder="body"/>
                <v-btn type="submit">create post</v-btn>
            </form>
        </v-container>
    </v-card>
</template>

<script>
    import  { mapMutations } from "vuex"
    export default {
        name: "PostForm",
        data() {
            return {
                title: '',
                body: ''
            }
        },
        methods: {
            ...mapMutations(['createPost']),
            submit() {
                this.createPost({
                    title: this.title,
                    body: this.body,
                    id: Date.now()
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .post-form {
        margin-bottom: 10px;
    }
    input {
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 2px;
    }
</style>