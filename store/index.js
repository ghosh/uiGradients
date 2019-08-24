import { createStore } from 'easy-peasy'

import models from './models'

const store = createStore(models, {
  name: 'uiGradients'
})

export default store
