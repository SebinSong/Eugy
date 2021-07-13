import React, { Icon } from 'react'

import {
  useSelector,
  useDispatch
} from 'react-redux'
import { closeCart } from '@store/features/cartSlice.js'

// components
import CartItem from './cart-item/CartItem.js'

import './ShoppingCart.scss'

const dummyItemData = {
  name: 'Dodo',
  id: 'dodo',
  imgName: '073_dodo.png',
  price: '18.00'
};

function ShoppingCart (props) {
  const dispatch = useDispatch()
  const isOpen = useSelector(({ cart }) => cart.isOpen)

  return (
    <aside className={`cart-container ${isOpen ? 'is-open': ''}`}>
      <div className="cart__backdrop"></div>

      <div className="cart__main">
        <header className="cart__header">
          <h3 className="cart__heading">CART</h3>

          <Icon classes="cart__close-btn"
            onClick={() => dispatch(closeCart())}>close</Icon>
        </header>

        <section className="cart__content">
          <ul className="cart__list">
            { false && <li className="cart__list-item empty-cart">Your cart is empty</li> }
            <CartItem { ...dummyItemData } />
          </ul>

          <div className="cart__button-container">
            <button className="is-secondary cart__checkout-btn">
              <span className="text">Check out</span>

              <span className="total-amount">$ 18.00</span>
            </button>
          </div>
        </section>
      </div>
    </aside>
  )
}

export default ShoppingCart;