import {
  REQUEST_CUSTOMERS,
  RECEIVE_CUSTOMERS,
} from '../actions/actionTypes.js'

export const customers = ( state = {
  isFetching: false,
  customers: []
}, action) => {
  switch (action.type) {
    case REQUEST_CUSTOMERS:
      return { 
        ...state,
        isFetching: true
      }
    case RECEIVE_CUSTOMERS:
      return {
        ...state,
        isFetching: false,
        customers: action.customers 
      }
    default:
      return state
  }
}
