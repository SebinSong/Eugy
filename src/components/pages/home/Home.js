import React from 'react'

// components
import ShopItem from '@components/shared/shop-item/ShopItem'

import './Home.scss'

const dummyData = {
  "name": "Tui",
  "id": "tui",
  "price": "19.00",
  "imgName": "003_tui.png"
}

function Home (props) {
  return (
    <main className="page home">
      <ShopItem { ...dummyData } />
    </main>
  )
}

export default Home