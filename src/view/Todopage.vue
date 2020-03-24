<template>
    <v-card
    width="500">
        <Todoform/>
        <todolist
            v-bind:todos="allTodos"
        />
    </v-card>
</template>

<script>
    import Todolist from "@/components/Todolist";
    import Todoform from "@/components/todoform";
    import { mapGetters} from "vuex";

    export default {
        name: "Todoview",
        computed: mapGetters(["allTodos"]),
        components: {Todoform, Todolist}
    }
</script>

<style scoped>

</style>