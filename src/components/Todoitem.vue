<template>
    <li>
        {{ todo.title }}
    </li>
</template>

<script>
    export default {
        name: "Todoitem",
        props: {
            todo: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>