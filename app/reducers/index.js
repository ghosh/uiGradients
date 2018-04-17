import { combineReducers } from 'redux'
import gradientReducer from './gradients'
import paletteReducer from './palettes'
import canvasReducer from './canvas'
import userReducer from './user'

const rootReducer = combineReducers({
  palette: paletteReducer,
  canvas: canvasReducer,
  gradients: gradientReducer,
  user: userReducer
})

export default rootReducer
