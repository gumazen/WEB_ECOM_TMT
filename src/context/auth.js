import { useContext, useReducer, createContext } from 'react';

// begin type def
/**
 * @typedef {object} AuthState
 * @property {Auth} auth
 */

/**
 * @typedef {object} Auth
 * @property {string} token
 * @property {string} custid
 */

/**
 * @typedef {object} ReducerAction
 * @property {string} action
 * @property {*} payload
 */

// end type def *****************************************************

/**
 * @type AuthState
 */
const initialState = {
  auth: null,
};

// actions
const SET_AUTH = 'SET_AUTH';
const REMOVE_AUTH = 'REMOVE_AUTH';

// reducer

/**
 *
 * @param {AuthState} state
 * @param {ReducerAction} action
 * @returns {AuthState}
 */
const reducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH: {
      return {
        ...state,
        auth: action.payload,
      };
    }

    case REMOVE_AUTH: {
      return {
        ...state,
        auth: null,
      };
    }
    default:
      return state;
  }
};

// builder
const authContext = createContext(initialState);
authContext.displayName = 'auth-context';

export const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAuth = (auth) => {
    dispatch({ type: SET_AUTH, payload: auth });
  };

  const removeAuth = (auth) => {
    dispatch({ type: REMOVE_AUTH });
  };

  const isLoggedIn = !!state.auth;

  return (
    <authContext.Provider
      value={{
        auth: state.auth,
        setAuth,
        removeAuth,
        isLoggedIn,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => useContext(authContext);
