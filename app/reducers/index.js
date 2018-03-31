import { combineReducers } from 'redux'
import gradientReducer from './gradients'
import paletteReducer from './palettes'
import userReducer from './user'

const rootReducer = combineReducers({
  palette: paletteReducer,
  gradients: gradientReducer,
  user: userReducer
})

export default rootReducer
