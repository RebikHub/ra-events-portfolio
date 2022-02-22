import React from 'react'

export default function ProjectList(props) {
  const { projects } = props
  return (
    <div className='list'>{projects.map((el, i) => <img className='images' src={el} key={i} alt={el}/>)}</div>
  )
}
