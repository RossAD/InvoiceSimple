import {
  REQUEST_INVOICES,
  RECEIVE_INVOICES,
  ADD_INVOICE,
  UPDATE_INVOICE,
  DELETE_INVOICE,
} from './actionTypes.js'
import { makeActionCreator } from './actionHelper.js'

export const requestInvoices = makeActionCreator(REQUEST_INVOICES)
export const receiveInvoices = makeActionCreator(RECEIVE_INVOICES, 'invoices')
export const addInvoice = makeActionCreator(ADD_INVOICE, 'invoice')
export const updateInvoice = makeActionCreator(UPDATE_INVOICE, 'invoice')
export const deleteInvoice = makeActionCreator(DELETE_INVOICE, 'invoice')

export const fetchInvoices = () => dispatch => {
  dispatch(requestInvoices())
  return fetch('http://localhost:8000/api/invoices')
    .then(response => response.json())
    .then(json => dispatch(receiveInvoices(json)))
    .catch(error => console.log('Problem with Fetch: ', error))
}

export const fetchAddInvoice = invoice => dispatch => {
  return fetch('http://localhost:8000/api/invoices', {
    method: 'POST',
    // headers: {'Content-Type': 'application/json'},
    body: invoice
  })
    .then(response => response.json())
    .then(json => dispatch(addInvoice(json)))
    .catch(error => console.log('Problem with Fetch: ', error))
}

export const fetchUpdateInvoice = invoice => dispatch => {
  return fetch(`http://localhost:8000/api/invoices/${invoice.id}`, {
    method: 'PUT',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(invoice)
  })
    .then(response => response.json())
    .then(json => dispatch(updateInvoice(json)))
    .catch(error => console.log('Problem with Fetch: ', error))
    
}

export const fetchDeleteInvoice = invoice => dispatch => {
  return fetch(`http://localhost:8000/api/invoices/${invoice.id}`, {
    method: "DELETE",
  })
    .then(response => response.json())
    .then(json => deleteInvoice(json))
}
