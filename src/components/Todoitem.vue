<template>
<!--    todo добавить кнопку удаления тудусписка-->
    <li>
        {{ todo.title }}

        <v-btn color="red" icon @click="deleteBtn">
        <v-icon>mdi-clear</v-icon>
        </v-btn>
    </li>
</template>

<script>
    import { mapMutations } from "vuex";

    export default {
        name: "Todoitem",
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapMutations(['deleteTodo']),
            deleteBtn() {
                this.deleteTodo(this.todo.id)
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>