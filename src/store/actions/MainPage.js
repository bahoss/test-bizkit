import {
  CHECK_TOKEN,
  LOGIN_IN,
  LOG_OUT,
  GET_CLIENT,
  GET_CLIENTS,
  UPDATE_CLIENT,
  DELETE_CLIENT,
  ADD_CLIENT,
  ADD_BANK_DATA,
  UPDATE_BANK_DATA,
  DELETE_BANK_DATA
} from '../actionTypes';
import API from '../../api';

const api = new API();

export const loginIn = data => dispatch => {
  dispatch({ type: LOGIN_IN.PENDING });
  api
    .loginIn(data)
    .then(res => {
      dispatch({
        type: LOGIN_IN.SUCCESS
      });
      localStorage.setItem('token', res.data.access);
    })
    .catch(err => {
      dispatch({
        type: LOGIN_IN.ERROR
      });
    });
};

export const loginOut = () => dispatch => {
  dispatch({ type: LOG_OUT });
  localStorage.removeItem('token');
};

export const checkToken = token => dispatch => {
  dispatch({ type: CHECK_TOKEN.PENDING });
  api
    .checkToken(token)
    .then(res => {
      dispatch({
        type: CHECK_TOKEN.SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: CHECK_TOKEN.ERROR
      });
      localStorage.removeItem('token');
    });
};

export const getClients = () => dispatch => {
  dispatch({ type: GET_CLIENTS.PENDING });
  api
    .getCompaniesList()
    .then(res => {
      dispatch({
        type: GET_CLIENTS.SUCCESS,
        payload: res.data.results
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CLIENTS.ERROR
      });
    });
};

export const deleteClient = id => dispatch => {
  dispatch({ type: DELETE_CLIENT.PENDING });
  api
    .deleteCompany(id)
    .then(res => {
      dispatch({
        type: DELETE_CLIENT.SUCCESS
      });
      dispatch(getClients());
    })
    .catch(err => {
      dispatch({
        type: DELETE_CLIENT.ERROR
      });
    });
};

export const addClient = data => dispatch => {
  dispatch({ type: ADD_CLIENT.PENDING });
  api
    .addCompany(data)
    .then(res => {
      dispatch({
        type: ADD_CLIENT.SUCCESS
      });
      dispatch(getClients());
    })
    .catch(err => {
      dispatch({
        type: ADD_CLIENT.ERROR
      });
    });
};

export const getClientById = id => dispatch => {
  dispatch({ type: GET_CLIENT.PENDING });
  api
    .getCompany(id)
    .then(res => {
      dispatch({
        type: GET_CLIENT.SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CLIENT.ERROR
      });
    });
};

export const updateClient = (id, data) => dispatch => {
  dispatch({ type: UPDATE_CLIENT.PENDING });
  api
    .updateCompany(id, data)
    .then(res => {
      dispatch({
        type: UPDATE_CLIENT.SUCCESS
      });
      dispatch(getClientById(id));
    })
    .catch(err => {
      dispatch({
        type: UPDATE_CLIENT.ERROR
      });
    });
};

export const addBankData = (id, data) => dispatch => {
  dispatch({ type: ADD_BANK_DATA.PENDING });
  api
    .addBankData(id, data)
    .then(res => {
      dispatch({
        type: ADD_BANK_DATA.SUCCESS
      });
      dispatch(getClientById(id));
    })
    .catch(err => {
      dispatch({
        type: ADD_BANK_DATA.ERROR
      });
    });
};

export const updateBankData = (companyId, id, data) => dispatch => {
  dispatch({ type: UPDATE_BANK_DATA.PENDING });
  api
    .updateBankData(companyId, id, data)
    .then(res => {
      dispatch({
        type: UPDATE_BANK_DATA.SUCCESS
      });
      dispatch(getClientById(companyId));
    })
    .catch(err => {
      dispatch({
        type: UPDATE_BANK_DATA.ERROR
      });
    });
};

export const deleteBankData = (companyId, id) => dispatch => {
  dispatch({ type: DELETE_BANK_DATA.PENDING });
  api
    .deleteBankData(companyId, id)
    .then(res => {
      dispatch({
        type: DELETE_BANK_DATA.SUCCESS
      });
      dispatch(getClientById(companyId));
    })
    .catch(err => {
      dispatch({
        type: DELETE_BANK_DATA.ERROR
      });
    });
};
