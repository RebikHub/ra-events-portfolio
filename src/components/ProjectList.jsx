import React from 'react'

export default function ProjectList(props) {
  console.log(props);
  const { projects } = props
  return (
    <div className='list'>{projects.map(el => <img className='images' src={el}/>)}</div>
  )
}
