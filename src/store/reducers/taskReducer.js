const initState = {
  tasks: [],
  isEditing: false
};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TASK_SUC":
      return state;
    case "ADD_TASK_ERR":
      return state;
    case "INC_STATUS_SUC":
      return state;
    case "INC_STATUS_ERR":
      return state;
    case "DEC_STATUS_SUC":
      return state;
    case "DEC_STATUS_ERR":
      return state;
    case "TASK_EDIT_SUC":
      return state;
    case "TASK_EDIT_ERR":
      return state;
    default:
      return state;
  }
};

export default taskReducer;
