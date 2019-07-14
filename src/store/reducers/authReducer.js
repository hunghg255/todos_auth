import * as actionTypes from "../actions/authTypes";

const initialState = {
  error: null,
  loading: false,
  verifyEmail: {
    error: null,
    loading: false
  },
  recoveryPassword: {
    error: null,
    loading: false
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CLEAN_UP:
      return {
        ...state,
        error: null,
        loading: false,
        verifyEmail: {
          ...state.verifyEmail,
          loading: false,
          error: null
        },
        recoveryPassword: {
          error: null,
          loading: false
        }
      };

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

    case actionTypes.VERIFY_START:
      return {
        ...state,
        verifyEmail: {
          ...state.verifyEmail,
          loading: true
        }
      };

    case actionTypes.VERIFY_SUCCESS:
      return {
        ...state,
        verifyEmail: {
          ...state.verifyEmail,
          loading: false,
          error: false
        }
      };

    case actionTypes.VERIFY_FAIL:
      return {
        ...state,
        verifyEmail: {
          ...state.verifyEmail,
          loading: false,
          error: payload
        }
      };

    case actionTypes.RECOVERY_START:
      return {
        ...state,
        recoveryPassword: {
          ...state.recoveryPassword,
          loading: true
        }
      };

    case actionTypes.RECOVERY_SUCCESS:
      return {
        ...state,
        recoveryPassword: {
          ...state.recoveryPassword,
          loading: false,
          error: false
        }
      };

    case actionTypes.RECOVERY_FAIL:
      return {
        ...state,
        recoveryPassword: {
          ...state.recoveryPassword,
          loading: false,
          error: payload
        }
      };

    default:
      return state;
  }
};
