const generateId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

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
