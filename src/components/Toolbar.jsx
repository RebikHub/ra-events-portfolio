import React from 'react'

export default function Toolbar(props) {
  const {filters, selected} = props
  console.log(props);
  return (
    <ul className='toolbar'>
      {filters.map(el => el === selected ? <li className='current'>{el}</li> : <li >{el}</li>)}
    </ul>
  )
}
