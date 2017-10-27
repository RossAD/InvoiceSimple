import {
  REQUEST_CUSTOMERS,
  RECEIVE_CUSTOMERS,
} from './actionTypes.js'

import { makeActionCreator } from './actionHelper.js'

export const requestCustomers = makeActionCreator(REQUEST_CUSTOMERS)
export const receiveCustomers = makeActionCreator(RECEIVE_CUSTOMERS, 'customers')

export const fetchCustomers = () => dispatch => {
  dispatch(requestCustomers())
  return fetch('http://localhost:8000/api/customers')
    .then(response => response.json())
    .then(json => dispatch(receiveCustomers(json)))
}
