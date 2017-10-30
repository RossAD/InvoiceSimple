import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/actionTypes.js'

export const modal = ( state = {
  modalOpen: false
}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false
      }
    default:
      return state
  } 
}
