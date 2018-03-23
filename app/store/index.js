import { createStore } from 'redux'
import withRedux from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '@/reducers'

import hydratedState from './hydrator.js'

export const initStore = (initialState = hydratedState) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
  )
}

export const reduxPage = (comp) => withRedux(initStore)(comp)
