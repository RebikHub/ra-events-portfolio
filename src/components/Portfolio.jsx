import React, { useState } from 'react'
import ProjectList from './ProjectList';
import Toolbar from './Toolbar'

export default function Portfolio(props) {
  const [image, setImage] = useState('All');
  let currentProject = null;
  if (image === 'All') {
    currentProject = props.props.map(el => el.img)
  } else {
    currentProject = props.props.filter(el => console.log(el.category))
  }

  console.log(currentProject);
  return (
    <>
      <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]} selected={image} onSelectFilter={filter => console.log(filter)}/>
      <ProjectList projects={currentProject}/>
    </>
  )
}
