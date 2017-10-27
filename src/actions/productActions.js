import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
} from './actionTypes.js'

import { makeActionCreator } from './actionHelper.js'

export const requestProducts = makeActionCreator(REQUEST_PRODUCTS)
export const receiveProducts = makeActionCreator(RECEIVE_PRODUCTS, 'products')

export const fetchProducts = () => dispatch => {
  dispatch(requestProducts())
  return fetch('http://localhost:8000/api/products')
    .then(response => response.json())
    .then(json => dispatch(receiveProducts(json)))
}
