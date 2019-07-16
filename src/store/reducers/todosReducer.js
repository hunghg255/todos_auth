import * as actionTypes from "../actions/todoTypes";

const initialState = {
  error: null,
  loading: false
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

    default:
      return state;
  }
};
