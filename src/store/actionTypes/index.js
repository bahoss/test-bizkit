import { generateTypes } from './genTypes';

//Authentication
export const CHECK_TOKEN = generateTypes('MAIN', 'CHECK_TOKEN');
export const LOGIN_IN = generateTypes('MAIN', 'LOGIN_IN');
export const LOG_OUT = 'LOG_OUT';

//Clients
export const GET_CLIENTS = generateTypes('MAIN', 'GET_CLIENTS');

export const GET_CLIENT = generateTypes('MAIN', 'GET_CLIENT');
export const ADD_CLIENT = generateTypes('MAIN', 'ADD_CLIENT');
export const DELETE_CLIENT = generateTypes('MAIN', 'DELETE_CLIENT');
export const UPDATE_CLIENT = generateTypes('MAIN', 'UPDATE_CLIENT');

export const ADD_BANK_DATA = generateTypes('MAIN', 'ADD_BANK_DATA');
export const DELETE_BANK_DATA = generateTypes('MAIN', 'DELETE_BANK_DATA');
export const UPDATE_BANK_DATA = generateTypes('MAIN', 'UPDATE_BANK_DATA');
