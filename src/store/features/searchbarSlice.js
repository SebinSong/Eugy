const initState = {
  isOpen: false
}

const searchbarSlice = (state = initState, action) => {
  const {
    isOpen: prevIsOpen
  } = state;

  switch (action.type) {
    case 'searchbar/open':
      return {
        ...state,
        isOpen: true
      };
    case 'searchbar/close':
      return {
        ...state,
        isOpen: false
      };
    case 'searchbar/toggle':
      return {
        ...state,
        isOpen: !prevIsOpen
      }
    default:
      return state
  }
}

// action creators
const toggleSearchbar = () => ({ type: 'searchbar/toggle' })

export {
  searchbarSlice,
  toggleSearchbar
}