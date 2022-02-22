import React from 'react'

export default function Item(props) {
  const { name, done } = props.item

  const onToggle = () => {
    props.onToggle(props.item)
  }
  const onRemove = () => {
    props.onRemove(props.item)
  }

  return (
    <li>{name}
      <button onClick={onToggle}>{done ? 'Uncheck' : 'Check'}</button>
      <button onClick={onRemove}>Remove</button>
    </li>
  )
}
