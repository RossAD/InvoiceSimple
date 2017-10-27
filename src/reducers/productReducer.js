import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
} from '../actions/actionTypes.js'

export const products = ( state = {
  isFetching: false,
  products: []
}, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        isFetching: false,
        products: action.products
      }
    default:
      return state
  }
}
