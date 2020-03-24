<template>
    <v-container>
        <form @submit.prevent="submit">
            <v-text-field type="text" v-model="title" placeholder="title"/>
            <v-btn type="submit">create todo</v-btn>
        </form>
    </v-container>
</template>

<script>
    import  { mapMutations } from "vuex"
    export default {
        name: "Todoform",
        data() {
            return {
                title: ''
            }
        },
        methods: {
            ...mapMutations(['createTodo']),
            submit() {
                this.createTodo({
                    title: this.title,
                    id: Date.now()
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .todo-form {
        margin-bottom: 20px;
    }
</style>