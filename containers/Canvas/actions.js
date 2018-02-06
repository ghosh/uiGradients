import * as constants from './constants.js'

export function setActiveGradient (gradient) {
  return {
    type: constants.SET_ACTIVE_GRADIENT,
    gradient: gradient
  }
}

export function showModal (modalType, modalProps) {
  return {
    type: constants.DEMO_GRADIENT,
    modalType: modalType,
    modalProps: modalProps
  }
}
