import React, { useState } from 'react'
import ProjectList from './ProjectList';
import Toolbar from './Toolbar'

export default function Portfolio(props) {
  const [image, setImage] = useState('All');
  let currentCategory = null;

  function setFilter(filter) {
    return setImage(filter)
  }
  if (image === 'All') {
    currentCategory = props.props.map(el => el.img)
  } else {
    currentCategory = props.props.filter(el => image === el.category).map(el => el.img)
  }

  return (
    <>
      <Toolbar  filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={image}
                onSelectFilter={filter => setFilter(filter.textContent)}/>
      <ProjectList projects={currentCategory}/>
    </>
  )
}
