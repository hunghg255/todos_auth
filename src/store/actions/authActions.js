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
   
      // send the verification email
      const user = firebase.auth().currentUser;
      await user.sendEmailVerification();

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


//verify email action
export const verifyEmail = () => async (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase();
  dispatch({ type: actionTypes.VERIFY_START });
  try {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    dispatch({type: actionTypes.VERIFY_SUCCESS});
  } catch (error) {
    dispatch({ type: actionTypes.VERIFY_FAIL, payload: error.message });
  }
}

//recovery password
export const recoveryPassword = data => async (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase();
  console.log(data)
  dispatch({ type: actionTypes.RECOVERY_START });
  try {
    //send email
    await firebase.auth().sendPasswordResetEmail(data.email);
    dispatch({type: actionTypes.RECOVERY_SUCCESS});
  } catch (error) {
    dispatch({ type: actionTypes.RECOVERY_FAIL, payload: error.message });
  }
}