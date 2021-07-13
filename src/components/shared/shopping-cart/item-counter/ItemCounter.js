import React, {
  useState,
  useEffect
} from 'react'

import './ItemCounter.scss'

const MAX_COUNT = 9 

function ItemCounter ({
  value = 1,
  onValueChange = null
}) {
  const [currentValue, updateCurrentValue] = useState(value)

  const increment = () => updateCurrentValue(v => v < MAX_COUNT ? v + 1 : v)
  const decrement = () => updateCurrentValue(v => v > 1 ? v - 1: v)

  useEffect(() => {
    onValueChange(currentValue)
  }, [currentValue, onValueChange])

  return (
    <span className="item-counter-container">
      <button className="item-counter__btn plus"
        onClick={increment}>+</button>

      <span className="item-counter__value">{currentValue}</span>

      <button className="item-counter__btn minus"
        onClick={decrement}>-</button>
    </span>
  )
}

export default ItemCounter;