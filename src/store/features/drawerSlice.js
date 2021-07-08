
const initState = {
  isOpen: false
}

function drawerSlice (state = initState, action) {
  const {
    isOpen: prevIsOpen
  } = state;

  switch (action.type) {
    case 'drawer/open':
      return {
        ...state,
        isOpen: true
      }
    case 'drawer/close':
      return {
        ...state,
        isOpen: false
      }
    case 'drawer/toggle':
      return {
        ...state,
        isOpen: !prevIsOpen
      }
    default:
      return state
  }
}

// action creators
const openDrawer = () => ({ type: 'drawer/open' });
const closeDrawer = () => ({ type: 'drawer/close' });
const toggleDrawer = () => ({ type: 'drawer/toggle' });

export {
  drawerSlice,
  openDrawer,
  closeDrawer,
  toggleDrawer
}