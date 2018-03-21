import { combineReducers } from 'redux'
import gradientReducer from './gradients'

const rootReducer = combineReducers({
  gradients: gradientReducer
})

export default rootReducer
