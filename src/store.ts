import { engines, store } from 'foca'

import pka from '../package.json'

import { commonModel, userModel } from './models'

store.init({
  compose: 'redux-devtools',
  persist: [
    {
      key: pka.name,
      version: pka.version,
      engine: engines.localStorage,
      models: [commonModel, userModel],
    },
  ],
})

if (module.hot) {
  module.hot.accept(() => {
    console.log('Hot updated: store')
  })
}
