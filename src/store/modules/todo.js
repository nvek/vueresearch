export default {
    actions: {

    },
    mutations: {
        createTodo(state, newTodo) {
            state.todos.unshift(newTodo);
        },
        deleteTodo(state, currentTodoId) {
            state.todos = state.todos.filter(item => item.id !== currentTodoId)
        }

    },
    state: {
        todos: [
            {id: 0, title: 'купить хле1б', completed: false},
            {id: 1, title: 'купить пиво', completed: false},
            {id: 2, title: 'купить шпроты', completed: false},
        ]
    },
    getters: {
        allTodos(state) {
            return state.todos;
        }
    }
}