import { combineReducers } from 'redux'
import CanvasReducer from '../containers/Canvas/reducer'

const rootReducer = combineReducers({
  canvas: CanvasReducer
})

export default rootReducer
