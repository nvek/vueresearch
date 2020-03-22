<template>
    <form @submit.prevent="submit">
    <v-text-field type="text" v-model="title" placeholder="title"/>
    <v-text-field type="text" v-model="body" placeholder="body"/>
    <v-btn type="submit">create post</v-btn>
    <hr>
    </form>

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
                console.log('submit')
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
input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 2px;
}
</style>