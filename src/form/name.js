import React from 'react'

export default ({inputTypes, next}) => {
  const nextButton = <div>
    <button onClick={() => next('address')}>to address</button>
  </div>
  const button = 'name' === inputTypes[inputTypes.length - 1] ? nextButton : null

  return <div>
    name input
    {button}
  </div>
}
