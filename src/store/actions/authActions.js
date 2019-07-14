import * as actionTypes from "./authTypes";

//sign up action
export const signUp = data => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({ type: actionTypes.AUTH_START });

  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    console.log(res.user.uid);

    await firestore
      .collection("users")
      .doc(res.user.uid)
      .set({
        firstName: data.firstName,
        lastName: data.lastName
      });

    dispatch({ type: actionTypes.AUTH_SUCCESS });
  } catch (error) {
    dispatch({ type: actionTypes.AUTH_FAIL, payload: error.message });
  }

  dispatch({ type: actionTypes.AUTH_END });
};

//logout action
export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log(error.message);
  }
};

//login action
export const signIn = data => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actionTypes.AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: actionTypes.AUTH_SUCCESS });
  } catch (error) {
    dispatch({ type: actionTypes.AUTH_FAIL, payload: error.message });
  }
  dispatch({ type: actionTypes.AUTH_END });
};

//clean up message
export const clean = () => ({
  type: actionTypes.CLEAN_UP
});
