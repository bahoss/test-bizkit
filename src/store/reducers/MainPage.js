import {
  LOGIN_IN,
  GET_CLIENTS,
  DELETE_CLIENT,
  ADD_CLIENT,
  GET_CLIENT,
  UPDATE_CLIENT,
  ADD_BANK_DATA,
  UPDATE_BANK_DATA,
  DELETE_BANK_DATA,
  LOG_OUT,
  CHECK_TOKEN
} from '../actionTypes';

const initialState = {
  isAuthenticated: false,
  isLoginError: false,
  isLoginPending: false,
  clients: [],
  isClientsPending: false,
  isDeletePending: false,
  isAddPending: false,
  isClientPending: false,
  isUpdateClientPending: false,
  bankDataPending: false,
  isCheckTokenError: false,
  client: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_IN.PENDING:
      return {
        ...state,
        isLoginError: false,
        isLoginPending: true
      };
    case LOGIN_IN.SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoginPending: false
      };
    case LOGIN_IN.ERROR:
      return {
        ...state,
        isAuthenticated: false,
        isLoginError: true,
        isLoginPending: false
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        isLoginPending: false
      };
    case CHECK_TOKEN.PENDING:
      return {
        ...state,
        isCheckTokenError: false
      };
    case CHECK_TOKEN.SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case CHECK_TOKEN.ERROR:
      return {
        ...state,
        isCheckTokenError: true
      };
    case GET_CLIENTS.PENDING:
      return {
        ...state,
        client: {},
        isClientsPending: true
      };
    case GET_CLIENTS.SUCCESS:
      return {
        ...state,
        isClientsPending: false,
        clients: payload
      };
    case GET_CLIENTS.ERROR:
      return {
        ...state,
        isClientsPending: false
      };
    case DELETE_CLIENT.PENDING:
      return {
        ...state,
        isDeletePending: true
      };
    case DELETE_CLIENT.SUCCESS:
      return {
        ...state,
        isDeletePending: false
      };
    case DELETE_CLIENT.ERROR:
      return {
        ...state,
        isDeletePending: false
      };
    case ADD_CLIENT.PENDING:
      return {
        ...state,
        isAddPending: true
      };
    case ADD_CLIENT.SUCCESS:
      return {
        ...state,
        isAddPending: false
      };
    case ADD_CLIENT.ERROR:
      return {
        ...state,
        isAddPending: false
      };
    case GET_CLIENT.PENDING:
      return {
        ...state,
        client: {},
        isClientPending: true
      };
    case GET_CLIENT.SUCCESS:
      return {
        ...state,
        isClientPending: false,
        client: payload
      };
    case GET_CLIENT.ERROR:
      return {
        ...state,
        isClientPending: false
      };
    case UPDATE_CLIENT.PENDING:
      return {
        ...state,

        isUpdateClientPending: true
      };
    case UPDATE_CLIENT.SUCCESS:
      return {
        ...state,
        isUpdateClientPending: false
      };
    case UPDATE_CLIENT.ERROR:
      return {
        ...state,
        isUpdateClientPending: false
      };
    case ADD_BANK_DATA.PENDING:
      return {
        ...state,
        bankDataPending: true
      };
    case ADD_BANK_DATA.SUCCESS:
      return {
        ...state,
        bankDataPending: false
      };
    case ADD_BANK_DATA.ERROR:
      return {
        ...state,
        bankDataPending: false
      };
    case UPDATE_BANK_DATA.PENDING:
      return {
        ...state,
        bankDataPending: true
      };
    case UPDATE_BANK_DATA.SUCCESS:
      return {
        ...state,
        bankDataPending: false
      };
    case UPDATE_BANK_DATA.ERROR:
      return {
        ...state,
        bankDataPending: false
      };
    case DELETE_BANK_DATA.PENDING:
      return {
        ...state,
        bankDataPending: true
      };
    case DELETE_BANK_DATA.SUCCESS:
      return {
        ...state,
        bankDataPending: false
      };
    case DELETE_BANK_DATA.ERROR:
      return {
        ...state,
        bankDataPending: false
      };
    default: {
      return state;
    }
  }
}
