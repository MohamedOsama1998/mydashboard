const initState = {
  tasks: []
};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return state;
    default:
      return state;
  }
};

export default taskReducer;
