import { 
  REQUEST_INVOICES, 
  RECEIVE_INVOICES 
}from '../actions/actionTypes.js'

export const invoices = ( state = {
  isFetching: false,
  invoices: []
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
    default:
      return state
  }
}

