import {
  REQUEST_INVOICE_ITEMS,
  RECEIVE_INVOICE_ITEMS,
  REQUEST_INVOICE_ITEM,
  RECEIVE_INVOICE_ITEM,
  UPDATE_INVOICE_ITEM,
  DELETE_INVOICE_ITEM,
  ADD_INVOICE_ITEM,
} from '../actions/actionTypes.js'

export const invoiceItems = ( state = {
  isFetching: false,
  items: [],
  item: {},
  invoiceId: 0,
  itemId: 0
}, action) => {
  switch (action.type) {
    case REQUEST_INVOICE_ITEMS:
      return {
        ...state,
        invoiceId: action.invoiceId,
        isFetching: true
      }
    case RECEIVE_INVOICE_ITEMS:
      return {
        ...state,
        isFetching: false,
        items : action.items
      }
    case REQUEST_INVOICE_ITEM:
      return {
        ...state,
        isFetching: true,
        invoiceId: action.invoiceId,
        itemId: action.itemId
      }
    case RECEIVE_INVOICE_ITEM:
      return {
        ...state,
        isFetching: false,
        item: action.item        
      }
    case UPDATE_INVOICE_ITEM:
      return {
        ...state,
        item: action.item
      }
    case ADD_INVOICE_ITEM:
      return {
        ...state,
        invoiceId: action.invoiceId,
        item: action.item
      }
    default:
      return state
  }
}
