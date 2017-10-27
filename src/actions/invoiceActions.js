import {
  REQUEST_INVOICES,
  RECEIVE_INVOICES
} from './actionTypes.js'
import { makeActionCreator } from './actionHelper.js'

export const requestInvoices = makeActionCreator(REQUEST_INVOICES)
export const receiveInvoices = makeActionCreator(RECEIVE_INVOICES, 'invoices')

export const fetchInvoices = () => dispatch => {
  dispatch(requestInvoices())
  return fetch('http://localhost:8000/api/invoices')
    .then(response => response.json())
    .then(json => dispatch(receiveInvoices(json)))
}
