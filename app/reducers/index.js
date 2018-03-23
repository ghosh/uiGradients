import { combineReducers } from 'redux'
import gradientReducer from './gradients'
import paletteReducer from './palettes'

const rootReducer = combineReducers({
  palette: paletteReducer,
  gradients: gradientReducer
})

export default rootReducer
