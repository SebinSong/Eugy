import React from 'react'

function ShowcaseItem ({
  name, imgPath
}) {
  return (
    <div className="category-showcase-bar__item">
      <span className="img-container">
        <img alt={name}
          src={imgPath} />
      </span>

      <span className="name">{name}</span>
    </div>
  )
}

export default ShowcaseItem;