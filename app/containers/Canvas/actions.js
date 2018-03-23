export function setActiveGradient (gradient) {
  return {
    type: 'SET_ACTIVE_GRADIENT',
    gradient: gradient
  }
}

export function changeGradient (direction) {
  return {
    type: 'CHANGE_GRADIENT',
    direction: direction
  }
}

export function rotateGradient (direction) {
  return {
    type: 'ROTATE_GRADIENT',
    direction: direction
  }
}
