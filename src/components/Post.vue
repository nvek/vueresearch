<template>
    <v-card
            class="mx-auto post-form"
            max-width="500"
    >
        <v-btn color="red" icon @click="deleteBtn" max-width="25px" max-height="25px">
            <v-icon>mdi-delete</v-icon>
        </v-btn>

        <v-expansion-panels style="margin-bottom: 5px">
        <v-expansion-panel>
            <v-expansion-panel-header>{{post.title}}

            </v-expansion-panel-header>
            <v-expansion-panel-content>{{ post.body }}</v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>
    </v-card>

</template>
<script>
    import {mapMutations} from "vuex";

    export default {
        name: 'PostCard',
        props: [ 'post' ],
        methods: {
            ...mapMutations(['deletePost']),
            deleteBtn() {
                this.deletePost({
                    title: this.post.title,
                    body: this.post.body
                })
            }
        }
    }
</script>
