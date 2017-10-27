import { combineReducers } from 'redux'

import { invoices } from './invoiceReducer.js'

const appReducer = combineReducers({
  invoices,
})

export default appReducer
