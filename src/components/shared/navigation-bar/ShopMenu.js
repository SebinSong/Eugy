import React, { useContext } from 'react'

// context
import NavigationContext from '@contexts/navigation-context.js'

// images
import dodoImg from '@images/eugy/073_dodo.png'
import mermaidImg from '@images/eugy/050_mermaid.png'
import tyrannoImg from '@images/eugy/005_tyranno.png'
import cardinalImg from '@images/eugy/068_cardinal.png'
import hedgehogImg from '@images/eugy/074_hedgehog.png'
import turtleImg from '@images/eugy/038_turtle.png'

const shopMenuListData = [
  {
    name: 'All products',
    imgPath: dodoImg,
    additionalText: 'New Arrivals',
    id: 'all-product'
  },
  {
    name: 'Fantasy',
    imgPath: mermaidImg,
    additionalText: 'Best',
    id: 'fantasy'
  },
  {
    name: 'Dino',
    imgPath: tyrannoImg,
    additionalText: 'Specials',
    id: 'dino'
  },
  {
    name: 'Land',
    imgPath: hedgehogImg,
    additionalText: 'Clearance',
    isRed: true,
    id: 'land'
  },
  {
    name: 'Water',
    imgPath: turtleImg,
    id: 'water'
  },
  {
    name: 'Sky',
    imgPath: cardinalImg,
    id: 'sky'
  }
]

const ListItem = ({
  name, imgPath,
  additionalText = '', isRed = false
}) => {
  return (
    <li className="shop-menu__list-item">
      <span className="shop-menu__list-item__label">
        <span className="img-container">
          <img className="img" src={imgPath} alt={name} />
        </span>

        <span className="label">{name}</span>
      </span>

      {
        Boolean(additionalText) &&
        <span className={`shop-menu__list-item__additional-text ${isRed ? 'is-red' : ''}`}>
          {additionalText}
        </span>
      }
    </li>
  )
}

export default function ShopMenu (props) {
  const {
    removeAdditionalContent
  } = useContext(NavigationContext);

  return (
    <div className="shop-menu__container"
      onMouseLeave={removeAdditionalContent}>
      <ul className="shop-menu__list">
        {
          shopMenuListData.map(
            item => <ListItem key={item.id} { ...item } />
          )
        }
      </ul>
    </div>
  )
}