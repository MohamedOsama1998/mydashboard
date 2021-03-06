export const signIn = crednts => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(crednts.email, crednts.password)
      .then(() => {
        dispatch({
          type: "LOGIN_SUC"
        });
      })
      .catch(err => {
        dispatch({
          type: "LOGIN_ERR",
          err
        });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGN_OUT" });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials:
              newUser.firstName[0].toUpperCase() +
              newUser.lastName[0].toUpperCase(),
            email: newUser.email
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const verifyEmail = user => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        dispatch({ type: "VERI_EMAIL_SUC" });
      })
      .catch(err => {
        dispatch({ type: "VERI_EMAIL_ERR", err });
      });
  };
};
