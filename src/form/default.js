import React from 'react'

export default ({inputTypes, next}) => {
  const nextButton = <div>
    <button onClick={() => next('name')}>to name</button>
    <button onClick={() => next('address')}>to address</button>
  </div>
  const button = 'default' === inputTypes[inputTypes.length - 1] ? nextButton : null
  return <div>
    default input
    {button}
  </div>
}
