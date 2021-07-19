import React, {
  Icon,
  useState
} from 'react'

import './SortDropdown.scss'

const dummyList = [
  { name: 'item 1', id: 'item-1' },
  { name: 'item 2', id: 'item-2' },
  { name: 'item 3', id: 'item-3' }
]

const OptionItem = ({ 
  onClick = null,
  name 
}) => (
  <li className="sort-dropdown__option-item"
    onClick={onClick}
  >
    <button type="button">{name}</button>
  </li>
)

function SortDropdown ({
  list = dummyList,
  onItemSelect = null
}) {
  const [currentItem, updateCurrentItem] = useState({ name: 'Sort by', id: 'sort-by' });
  const [isDropdownOpen, updateIsDropdownOpen] = useState(false);

  const closeDropdown = () => updateIsDropdownOpen(false);
  const toggleDropdown = () => updateIsDropdownOpen(v => !v);
  const onItemClick = item => {
    console.log('on item click: ', item)
    updateCurrentItem(c => c.id !== item.id ? item : c);
    closeDropdown();

    onItemSelect && onItemSelect(item);
  };

  return (
    <div className={`sort-dropdown-container ${isDropdownOpen ? 'is-open': ''}`}>
      <div className="sort-dropdown__selected-item"
        onClick={toggleDropdown}>
        <span className="name">{currentItem.name}</span>

        <Icon classes="arrow">expand_more</Icon>
      </div>

      <ul className="sort-dropdown__options-list">
        {
          list.filter(item => item.id !== currentItem.id)
            .map(
              (item) => <OptionItem 
                key={item.id}
                name={item.name}
                onClick={() => onItemClick(item)} />
            )
        }
      </ul>
    </div>
  )
}

export default SortDropdown;