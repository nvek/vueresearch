<template>
    <todolist
        v-bind:todos="todos"
    />
</template>

<script>
    import Todolist from "@/components/Todolist";

    export default {
        name: "Todoview",
        data () {
            // перенести в стор
            return {
                todos: [
                    {id:1, title: 'купить хлеб', completed: false},
                    {id:2, title: 'купить пиво', completed: false},
                    {id:3, title: 'купить шпроты', completed: false},
                ]
            }
        },
        components: {Todolist}
    }
</script>

<style scoped>

</style>