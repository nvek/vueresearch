export default {
    actions: {

    },
    mutations: {
        createTodo(state, newTodo) {
            state.todos.unshift(newTodo);
            console.log(state.todos);
        },
        deleteTodo(state, currentTodoId) {
            state.todos = state.todos.filter(item => item.id !== currentTodoId)
        },
        confirmTodo(state, currentTodoId) {

            state.todos.find(item => {
                // console.log('|'+item.id  != currentTodoId+'|');
                // console.log(item.id + ':' + currentTodoId);
                //

                //return item.title === title
                 return item.id === currentTodoId;


            }).completed = true;
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