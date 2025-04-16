const initialState = {
  pref: {
    company: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PREF":
      return {
        ...state,
        pref: {
          ...state.pref,
          company: state.pref.company.concat(action.payload),
        },
      }
    // case:
    default:
      return state
  }
}
export default mainReducer
