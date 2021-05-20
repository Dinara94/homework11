import { CREATE, DELETE, UPDATE } from "../actions/actions";

const INITIAL_STATE = {
  list: [
    {
      id: 2,
      title: "Complete homework regarding Redux",
      completed: true,
    },
    {
      id: 3,
      title: "Do a daily yoga lesson",
      completed: false,
    },
    {
      id: 4,
      title: "Make a research for work",
      completed: true,
    },
  ],
};

export default function reducers(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case DELETE:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== payload),
      };

    case UPDATE: {
      const item = state.list.find((element) => element.id === payload);
      const newItem = { ...item, completed: !item.completed };
      return {
        ...state,
        list: state.list.map((item) => (item.id !== payload ? item : newItem)),
      };
    }

    case CREATE:
      return {
        ...state,
        list: [...state.list, payload],
      };
    default:
      return state;
  }
}
