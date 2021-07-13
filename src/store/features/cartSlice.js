const initState = {
  isOpen: false,
  items: []
}

function cartSlice (state = initState, action) {
  const {
    isOpen: prevIsOpen
  } = state
  
  switch (action.type) {
    case 'cart/open':
      return {
        ...state,
        isOpen: true
      }
    case 'cart/close':
      return {
        ...state,
        isOpen: false
      }
    case 'cart/toggle':
      return {
        ...state,
        isOpen: !prevIsOpen
      }
    default:
      return state
  }
}

// action creators
const openCart = () => ({ type: 'cart/open' })
const closeCart = () => ({ type: 'cart/close' })
const toggleCart = () => ({ type: 'cart/toggle' })

export {
  cartSlice,
  openCart,
  closeCart,
  toggleCart
}