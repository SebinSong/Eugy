// images
import dodoImg from '@images/eugy/eugy_dodo.png'
import mermaidImg from '@images/eugy/eugy_mermaid.png'
import tyrannoImg from '@images/eugy/eugy_tyranno.png'
import cardinalImg from '@images/eugy/eugy_cardinal.png'
import hedgehogImg from '@images/eugy/eugy_hedgehog.png'
import turtleImg from '@images/eugy/eugy_turtle.png'

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

const ourStoryMenuData = [
  {
    name: 'Our Story',
    id: 'our-story'
  },
  {
    name: 'About EUGY',
    id: 'about-eugy'
  }
]

export {
  shopMenuListData,
  ourStoryMenuData
}