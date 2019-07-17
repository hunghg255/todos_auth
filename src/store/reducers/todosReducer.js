import * as actionTypes from "../actions/todoTypes";

const initialState = {
  error: null,
  loading: false,
  deleteTodo: {
    error: null,
    loading: false
  },
  editTodo: {
    error: null,
    loading: false
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false
      };
    case actionTypes.ADD_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case actionTypes.DELETE_TODO_START:
      return {
        ...state,
        deleteTodo: {
          ...state.deleteTodo,
          loading: true
        }
      };

    case actionTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        deleteTodo: {
          ...state.deleteTodo,
          loading: false,
          error: false
        }
      };

    case actionTypes.DELETE_TODO_FAIL:
      return {
        ...state,
        deleteTodo: {
          ...state.deleteTodo,
          loading: false,
          error: payload
        }
      };

    case actionTypes.EDIT_TODO_START:
      return {
        ...state,
        editTodo: {
          ...state.editTodo,
          loading: true
        }
      };

    case actionTypes.EDIT_TODO_SUCCESS:
      return {
        ...state,
        editTodo: {
          ...state.editTodo,
          loading: false,
          error: false
        }
      };

    case actionTypes.EDIT_TODO_FAIL:
      return {
        ...state,
        editTodo: {
          ...state.editTodo,
          loading: false,
          error: payload
        }
      };

    default:
      return state;
  }
};
