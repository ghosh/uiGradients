import { createStore } from 'redux'
import withRedux from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

import hydratedState from './hydrate.js'

export const initStore = (initialState = hydratedState) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
  )
}

export const reduxPage = (comp) => withRedux(initStore)(comp)
