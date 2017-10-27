import {
  REQUEST_INVOICES,
  RECEIVE_INVOICES,
  ADD_INVOICE,
} from './actionTypes.js'
import { makeActionCreator } from './actionHelper.js'

export const requestInvoices = makeActionCreator(REQUEST_INVOICES)
export const receiveInvoices = makeActionCreator(RECEIVE_INVOICES, 'invoices')
export const addInvoice = makeActionCreator(ADD_INVOICE, 'invoice')

export const fetchInvoices = () => dispatch => {
  dispatch(requestInvoices())
  return fetch('http://localhost:8000/api/invoices')
    .then(response => response.json())
    .then(json => dispatch(receiveInvoices(json)))
}

// export const fetchAddInvoice = invoice => dispatch => {
//   dispatch(addInvoice(invoice))
//   return fetch('http://localhost:8000/api/invoices', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: invoice
//   })
//   .then(response => response.json())
//   .then(json => )
// }
