<template>
    <div>
        <ul>
            <TodoItem
                v-for="todo of todos" :key="todo.id"
                v-bind:todo="todo"
            />
        </ul>
    </div>
</template>

<script>
    import TodoItem from "@/components/Todoitem";
    export default {
        name: "Todolist",
        props: ['todos'],
        components: {
            TodoItem
        }
    }
</script>

<style scoped>

</style>