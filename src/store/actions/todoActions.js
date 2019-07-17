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

//delete todo
export const deleteTodo = id => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;

  dispatch({ type: actionTypes.DELETE_TODO_START });
  try {
    const res = await firestore
      .collection("todos")
      .doc(userId)
      .get();

    const previousTodo = res.data().todos;
    const newTodos = previousTodo.filter(todo => todo.id !== id);

    await firestore
      .collection("todos")
      .doc(userId)
      .update({
        todos: newTodos
      });

    dispatch({ type: actionTypes.DELETE_TODO_SUCCESS });
  } catch (error) {
    dispatch({ type: actionTypes.DELETE_TODO_FAIL, payload: error.message });
  }
};


//edit todo
export const editTodo = ({id, todo}) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;

  dispatch({ type: actionTypes.EDIT_TODO_START });
  try {
    const res = await firestore
      .collection("todos")
      .doc(userId)
      .get();

    const previousTodo = res.data().todos;
    const index = previousTodo.findIndex(todo => todo.id === id);
    previousTodo[index].todo = todo;

    await firestore
      .collection("todos")
      .doc(userId)
      .update({
        todos: previousTodo
      });

    dispatch({ type: actionTypes.EDIT_TODO_SUCCESS });
  } catch (error) {
    dispatch({ type: actionTypes.EDIT_TODO_FAIL, payload: error.message });
  }
};