import React from 'react'

export default function Toolbar(props) {
  const {filters, selected, onSelectFilter} = props

  return (
    <ul className='toolbar'>
      {filters.map(el => 
        el === selected ? 
        <li onClick={(ev) => onSelectFilter(ev.currentTarget)} className='current' key={el}>{el}</li> : 
        <li onClick={(ev) => onSelectFilter(ev.currentTarget)} key={el}>{el}</li>)}
    </ul>
  )
}
