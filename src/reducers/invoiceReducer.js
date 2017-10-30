import { 
  REQUEST_INVOICES, 
  RECEIVE_INVOICES,
  ADD_INVOICE,
  UPDATE_INVOICE
}from '../actions/actionTypes.js'

export const invoices = ( state = {
  isFetching: false,
  invoices: [],
  invoiceObj: {}
}, action) => {
  switch (action.type) {
    case REQUEST_INVOICES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_INVOICES:
      return {
        ...state,
        isFetching: false,
        invoices: action.invoices
      }
    case ADD_INVOICE:
      return {
        ...state,
        invoiceObj: action.invoice
      }
    case UPDATE_INVOICE:
      return {
        ...state,
        invoiceObj: action.invoice
      }
    default:
      return state
  }
}

