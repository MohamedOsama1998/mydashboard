export const createTask = task => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("tasks")
      .add(task)
      .then(() => {
        dispatch({
          type: "ADD_TASK_SUC",
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
          type: "INC_STATUS_SUC"
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
          type: "DEC_STATUS_SUC"
        });
      })
      .catch(err => {
        dispatch({ type: "DEC_STATUSK_ERR", err });
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

export const editTask = task => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("tasks")
      .doc(task.id)
      .update({
        title: task.title,
        desc: task.desc
      })
      .then(() => {
        dispatch({ type: "TASK_EDIT_SUC" });
      })
      .catch(err => dispatch({ type: "TASK_EDIT_ERR", err }));
  };
};
