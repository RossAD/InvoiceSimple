import {
  OPEN_MODAL,
  CLOSE_MODAL
} from './actionTypes.js'

import { makeActionCreator } from './actionHelper.js'

export const openModal = makeActionCreator(OPEN_MODAL)
export const closeModal = makeActionCreator(CLOSE_MODAL)
