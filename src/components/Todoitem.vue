<template>
    <!--    todo добавить кнопку удаления тудусписка-->
    <li>
        <v-btn v-if="!todo.completed" color="green" icon @click="confirm">
            <v-icon>mdi-check</v-icon>
        </v-btn>

        <span :style="todo.completed ? { textDecoration: 'line-through'}: {} ">
            {{ todo.title }}
        </span>


        <v-btn color="red" icon @click="deleteBtn">
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </li>
</template>

<script>
    import {mapMutations} from "vuex";

    export default {
        name: "Todoitem",
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapMutations(['deleteTodo', 'confirmTodo']),
            deleteBtn() {
                this.deleteTodo(this.todo.id)
            },

            confirm() {
                this.confirmTodo(this.todo.id);
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>