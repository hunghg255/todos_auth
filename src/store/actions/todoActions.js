import * as actionTypes from "./todoTypes";

// add todo
export const addTodo = data => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actionTypes.ADD_TODO_START });
  try {
    const res = await firestore
      .collection("todos")
      .doc(userId)
      .get();
    const newTodo = {
      id: new Date().valueOf(),
      todo: data.todo
    };

    if (!res.data()) {
      firestore
        .collection("todos")
        .doc(userId)
        .set({
          todos: [newTodo]
        });
    } else {
      firestore
        .collection("todos")
        .doc(userId)
        .update({
          todos: [...res.data().todos, newTodo]
        });
    }

    dispatch({ type: actionTypes.ADD_TODO_SUCCESS });

    return true;
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TODO_FAIL, payload: error.message });
  }
};
