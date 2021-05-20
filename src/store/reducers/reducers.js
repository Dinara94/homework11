import {
  TODOS_REMOVE_TODO,
  TODOS_TOGGLE_TODO,
  TODOS_ADD_TODO,
  TODOS_SET_TODOS,
  TODOS_UPDATE_TODO,
} from '../actions/actions';

const initialState = {
  items: [],
};

export default function reducers(state = initialState, { type, payload }) {
  switch (type) {
      case TODOS_REMOVE_TODO:
          return {
              ...state,
              items: state.items.filter((todo) => todo.id !== payload),
          };
      case TODOS_TOGGLE_TODO:
          return {
              ...state,
              items: state.items.map((todo) =>
                  todo.id !== payload
                      ? todo
                      : { ...todo, isDone: !todo.isDone }
              ),
          };
      case TODOS_ADD_TODO:
          const newItem = { id: Date.now(), ...payload };

          return {
              ...state,
              items: [...state.items, newItem],
          };

      case TODOS_SET_TODOS:
          return {
              items: payload,
          };

      case TODOS_UPDATE_TODO:
          return {
              items: state.items.map((todo) =>
                  todo.id !== payload.id ? todo : payload
              ),
          };

      default:
          return state;
  }
}