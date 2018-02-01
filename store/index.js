import { createStore } from 'redux'
import withRedux from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

export const initStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
  )
}

export const reduxPage = (comp) => withRedux(initStore)(comp)
