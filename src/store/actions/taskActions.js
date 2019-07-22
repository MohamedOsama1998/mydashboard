export const createTask = task => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("tasks")
      .add(task)
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

export const incTaskStatus = task => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("tasks")
      .doc(task.id)
      .update({
        status: task.status + 1
      })
      .then(() => {
        dispatch({
          type: "INC_STATUS"
        });
      })
      .catch(err => {
        dispatch({ type: "INC_STATUS_ERR", err });
      });
  };
};

export const decTaskStatus = task => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("tasks")
      .doc(task.id)
      .update({
        status: task.status - 1
      })
      .then(() => {
        dispatch({
          type: "DECR_STATUS"
        });
      })
      .catch(err => {
        dispatch({ type: "DECR_STATUSK_ERR", err });
      });
  };
};

export const deleteTask = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("tasks")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DEL_TASK_SUC" });
      })
      .catch(err => {
        dispatch({ type: "DEL_TASK_ERR", err });
      });
  };
};
