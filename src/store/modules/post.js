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
        updatePosts(state, posts) {
            state.posts = posts;
        },
        createPost(state, newPost) {
            if (newPost.title && newPost.body) {
                state.posts.unshift(newPost);
            }
        },
        deletePost(state, post) {
            // находим пост
            let index = state.posts.find(item => ((item.title === post.title) && (item.body === post.body)));
            state.posts.splice(index, 1);
            console.log(post);
            console.log('хрен')
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