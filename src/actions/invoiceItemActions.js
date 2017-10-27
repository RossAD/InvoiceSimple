import {
  REQUEST_INVOICE_ITEMS,
  RECEIVE_INVOICE_ITEMS,
  REQUEST_INVOICE_ITEM,
  RECEIVE_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
  DELETE_INVOICE_ITEM
} from '../actions/actionTypes.js'

import { makeActionCreator } from '../actions/actionHelper.js'

export const requestInvoiceItem = makeActionCreator(REQUEST_INVOICE_ITEM,'invoiceId','itemId')
export const receiveInvoiceItem = makeActionCreator(RECEIVE_INVOICE_ITEM, 'item')
export const requestInvoiceItems = makeActionCreator(REQUEST_INVOICE_ITEMS, 'invoiceId')
export const receiveInvoiceItems = makeActionCreator(RECEIVE_INVOICE_ITEMS, 'items')
export const updateInvoiceItem = makeActionCreator(UPDATE_INVOICE_ITEM, 'invoiceId', 'itemId')
export const deleteInvoiceItem = makeActionCreator(DELETE_INVOICE_ITEM, 'invoiceId', 'itemId')


export const fetchInvoiceItems = (invoiceId) => dispatch => {
  dispatch(requestInvoiceItems(invoiceId))
  return fetch(`http://localhost:8000/api/invoices/${invoiceId}/items`)
    .then(response => response.json())
    .then(json => dispatch(receiveInvoiceItems(json)))
}

export const fetchInvoiceItem = (invoiceId, itemId) => dispatch => {
  dispatch(requestInvoiceItem(invoiceId, itemId))
  return fetch(`http://localhost:8000/api/invoices/${invoiceId}/items/${itemId}`)
    .then(response => response.json())
    .then(json => dispatch(receiveInvoiceItem(json)))
}

