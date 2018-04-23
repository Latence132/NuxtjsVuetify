export const state = () => ({
  sidebar: false,
  visits: []
})

const mutations = {
  increment (state) {
    state.counter++
  },
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  ADD_VISIT (state, path) {
    state.visits.push({
      path,
      date: new Date().toJSON()
    })
  },
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

export default mutations
