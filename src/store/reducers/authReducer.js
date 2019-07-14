import * as actionTypes from "../actions/authTypes";

const initialState = {
  error: null,
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.AUTH_END:
      return {
        ...state,
        loading: false
      };

    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        error: false
      };

    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: payload
      };

    case actionTypes.CLEAN_UP:
      return {
        ...state,
        error: null,
        loading: false
      };

    default:
      return state;
  }
};
