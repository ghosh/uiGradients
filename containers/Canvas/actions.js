import * as constants from './constants.js'

export function setActiveGradient (gradient) {
  return {
    type: constants.SET_ACTIVE_GRADIENT,
    gradient: gradient
  }
}

export function changeGradient (direction) {
  return {
    type: constants.CHANGE_GRADIENT,
    direction: direction
  }
}
