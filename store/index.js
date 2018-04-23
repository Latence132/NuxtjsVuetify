import Vuex from 'vuex'

import mutations from './mutations'

export const state = () => ({
  sidebar: false,
  visits: [],
  counter: 0,
  locales: ['en', 'fr'],
  locale: 'en'
})

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations
  })
}

export default createStore
