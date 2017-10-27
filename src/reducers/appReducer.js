import { combineReducers } from 'redux'

import { invoices } from './invoiceReducer.js'
import { customers } from './customerReducer.js'
import { products } from './productReducer.js'

const appReducer = combineReducers({
  invoices,
  customers,
  products,
})

export default appReducer
