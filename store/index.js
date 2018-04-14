export const state = () => ({
  sidebar: false,
  visits: []
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  ADD_VISIT (state, path) {
    state.visits.push({
      path,
      date: new Date().toJSON()
    })
  }
}
