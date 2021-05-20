import api from '../../api';

export const TODOS_REMOVE_TODO = 'TODOS_REMOVE_TODO';
export const removeTodo = (payload) => ({
    type: TODOS_REMOVE_TODO,
    payload,
});

export const TODOS_ADD_TODO = 'TODOS_ADD_TODO';
export const addTodo = (payload) => (dispatch) => {
    api.post('', payload).then(({ data }) =>
        dispatch({
            type: TODOS_ADD_TODO,
            payload: data,
        })
    );
};

export const TODOS_SET_TODOS = 'TODOS_SET_TODOS';
export const setTodos = (payload) => ({
    type: TODOS_SET_TODOS,
    payload,
});

export const TODOS_UPDATE_TODO = 'TODOS_UPDATE_TODO';
export const updateTodo = (payload) => ({
    type: TODOS_UPDATE_TODO,
    payload,
});

export const TODOS_FETCH_TODOS = 'TODOS_FETCH_TODOS';
export function fetchTodos() {
    return function (dispatch) {
        api.get().then(({ data }) => {
            dispatch(setTodos(data));
        });
    };
}

export const TODOS_TOGGLE_TODO = 'TODOS_TOGGLE_TODO';
export const toggleTodo = (id) => {
    return function (dispatch, getState) {
        const state = getState();
        const todo = state.todos.items.find((todo) => todo.id === id);

        const updatedTodo = { ...todo, isDone: !todo.isDone };
        api.put(id, updatedTodo);

        dispatch(updateTodo(updatedTodo));
    };
};
