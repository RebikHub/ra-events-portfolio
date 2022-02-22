import React, { useState } from 'react'
import Model from './Model'
import Item from './Item'

function List(props) {
  const [items, setItems] = useState([
    new Model(1, 'pizza'), new Model(2, 'juice')
  ])

  const onItemToggle = item => {
    setItems(prevItems => prevItems.map(o => {
      if (o.id === item.id) {
        return {...o, done: !o.done}
      }
      return o
    }))
  }
  const onItemRemove = item => {
    setItems(prevItems => prevItems.filter(o => o.id !== item.id))
  }

  return (
    <ul>{items.map(o => <Item key={o.id} item={o} onToggle={onItemToggle} onRemove={onItemRemove} />)}</ul>
  )
}

export default List
