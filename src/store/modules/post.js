export default {
    actions: {
        async fetchPosts(ctx) {
            // через промисы?
            const res = await fetch(
                "http://jsonplaceholder.typicode.com/posts"
            );
            const posts = await res.json();
            ctx.commit('updatePosts', posts)
        }
    },
    mutations: {
        // STATE МЕНЯЕТ ЧЕРЕЗ тут
        updatePosts(state, posts) {
            state.posts = posts;
        },
        createPost(state, newPost) {
            if (newPost.title && newPost.body) {
                state.posts.unshift(newPost);
            }
            console.log(123);
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
        postsCount(state, getters) {
            return getters.validPost.length;
        },
        validPost(state) {
            return state.posts.filter(p => {
                return p.title || p.body
            })
        }
    }
}