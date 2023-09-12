const todoReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [...state, action.payload];
  case 'LIST_TODO':
    return action.payload;
  default:
    return state
  }
};
export default todoReducer;
