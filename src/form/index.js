import React from 'react'

export default ({inputTypes, next}) => {
  const components = []

  inputTypes.forEach((type) => components.push(require(`./${type}`).default))
  return (
    <div>
      {components.map((component, i) => React.createElement(component, {key: i, inputTypes, next}))}
    </div>
  )
}
