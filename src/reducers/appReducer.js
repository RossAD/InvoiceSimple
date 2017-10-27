import { combineReducers } from 'redux'

import { invoices } from './invoiceReducer.js'
import { customers } from './customerReducer.js'
import { products } from './productReducer.js'
import { invoiceItems } from './invoiceItemReducer.js'

const appReducer = combineReducers({
  invoices,
  invoiceItems,
  customers,
  products,
})

export default appReducer
