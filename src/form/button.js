import React from 'react'

export default ({type, next}) => {
  const nextTypes = {
    default: ['name', 'address'],
    name: ['address'],
    address: ['finish'],
    finish: []
  }

  return nextTypes[type].map((type, i) => <button key={i} onClick={() => next(type)}>to {type}</button>)
}
