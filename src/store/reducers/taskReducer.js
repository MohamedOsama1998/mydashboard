const initState = {
  tasks: []
};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log("FROM REDUCER! ADDED TASK: ", action.task);
      return state;
    default:
      return state;
  }
};

export default taskReducer;
