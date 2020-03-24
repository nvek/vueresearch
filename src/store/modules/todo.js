export default {
    actions: {},
    mutations: {
        createTodo(state, newTodo) {
            if (newTodo.title)
                state.todos.unshift(newTodo);
        },
        deleteTodo(state, currentTodoId) {
            state.todos = state.todos.filter(item => item.id !== currentTodoId)
        },
        confirmTodo(state, currentTodoId) {
            state.todos.find(item => item.id === currentTodoId).completed = true;
        }
    },
    state: {
        todos: [
            {id: 0, title: 'купить хлеб', completed: false},
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