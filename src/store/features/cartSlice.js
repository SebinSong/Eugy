import { combineReducers } from 'redux'

const MAX_CART_ITEM_AMOUNT = 9

const cartToggleInitState = false
function cartToggleSlice (state = cartToggleInitState, action) {
  switch (action.type) {
    case 'cart/open':
      return true
    case 'cart/close':   
      return false
    case 'cart/toggle':
      return !state
    default:
      return state
  }
}

const cartItemInitState = []
function cartItemSlice (state = cartItemInitState, action) {
  const { payload, type } = action;
  const stateClone = state.slice();

  // methods
  const pushItem = v => [ ...stateClone, { ...v, amount: 1 } ]
  const removeItem = targetId => stateClone.filter(({ id }) => id !== targetId)
  const findItem = targetId => stateClone.find(({ id }) => targetId === id)
  const incrementItem = targetId => {
    const found = findItem(targetId)

    if (found &&
      found.amount < MAX_CART_ITEM_AMOUNT)
      found.amount += 1;

    return stateClone
  }
  const decrementItem = targetId => {
    const found = findItem(targetId)

    if (found &&
      found.amount > 1)
      found.amount -= 1;
  
    return stateClone
  }
  const setItemAmount = ({id: targetId, amount }) => {
    const found = findItem(targetId)

    if (found &&
      amount > 0 &&
      amount <= MAX_CART_ITEM_AMOUNT)
      found.amount = amount

    return stateClone
  }

  switch (type) {
    case 'cart/item/add':
      return pushItem(payload);
    case 'cart/item/remove':
      return removeItem(payload.id);
    case 'cart/item/increment':
      return incrementItem(payload.id);
    case 'cart/item/decrement':
      return decrementItem(payload.id);
    case 'cart/item/set-amount':
      return setItemAmount(payload);
    default:
      return state;
  }
}

const cartSlice = combineReducers({
  isOpen: cartToggleSlice,
  items: cartItemSlice
})

// action creators
const openCart = () => ({ type: 'cart/open' })
const closeCart = () => ({ type: 'cart/close' })
const toggleCart = () => ({ type: 'cart/toggle' })

const addCartItem = (item) => ({ type: 'cart/item/add', payload: item })
const removeCartItem = (targetId) => ({ type: 'cart/item/remove', payload: { id: targetId } })
const incrementCartItem = (targetId) => ({ type: 'cart/item/increment', payload: { id: targetId } })
const decrementCartItem = (targetId) => ({ type: 'cart/item/decrement', payload: { id: targetId } })
const setAmountCartItem = ({ id, amount }) => ({ type: 'cart/item/set-amount', payload: {id, amount } })

export {
  cartSlice,

  openCart,
  closeCart,
  toggleCart,
  addCartItem,
  removeCartItem,
  incrementCartItem,
  decrementCartItem,
  setAmountCartItem
}