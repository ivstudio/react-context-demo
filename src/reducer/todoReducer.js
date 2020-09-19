const generateId = () => Math.floor(Math.random() * 100);

export function todoReducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: generateId(),
          title: payload.title
        }
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== payload.id);
    default: {
      return state;
    }
  }
}
