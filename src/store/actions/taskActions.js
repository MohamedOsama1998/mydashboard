export const createTask = task => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("tasks")
      .add({
        ...task,
        user: "AAAA"
      })
      .then(() => {
        dispatch({
          type: "ADD_TASK",
          task
        });
      })
      .catch(err => {
        dispatch({
          type: "ADD_TASK_ERR",
          err
        });
      });
  };
};
