import React from 'react'

export default ({inputTypes, next}) => {
  const nextButton = <div>
    <button onClick={() => next('finish')}>to finish</button>
  </div>
  const button = 'address' === inputTypes[inputTypes.length - 1] ? nextButton : null

  return <div>
    address input
    {button}
  </div>
}
