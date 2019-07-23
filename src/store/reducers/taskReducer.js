const initState = {
  tasks: [],
  isEditing: false
};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TASK_SUC":
      console.log("TASK ADDED");
      return state;
    case "ADD_TASK_ERR":
      console.log("TASK ADDED FAILED, ", action.err);
      return state;
    case "INC_STATUS_SUC":
      console.log("TASK STATUS CHANGED");
      return state;
    case "INC_STATUS_ERR":
      console.log("TASK STATUS CHANGE ERR", action.err);
      return state;
    case "DEC_STATUS_SUC":
      console.log("STATUS CHANGED!");
      return state;
    case "DEC_STATUS_ERR":
      console.log("STATUS CHANGE ERROR", action.err);
      return state;
    case "TASK_EDIT_SUC":
      console.log("TASK EDITED!");
      return state;
    case "TASK_EDIT_ERR":
      console.log("TASK EDIT FAILED!", action.err);
      return state;
    default:
      return state;
  }
};

export default taskReducer;
