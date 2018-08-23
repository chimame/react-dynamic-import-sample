import React from 'react'
import NextButton from './button'

export default ({inputTypes, next}) => {
  const components = []

  inputTypes.forEach((type) => components.push(require(`./${type}`).default))
  return (
    <div>
      {components.map((component, i) => React.createElement(component, {key: i, inputTypes, next}))}
      <NextButton type={inputTypes[inputTypes.length - 1]} next={next} />
    </div>
  )
}
