import React from 'react'
import '../styles/Skills.css'


const SkillsBox = ({ title, image, color }) => {

  const shadow = {
    boxShadow: `0px 6px 5px ${color}`
  }

  return (
    <div className='skillbox' style={shadow}>
      <img src={image} alt={title}/>
      <span>
        {title}
      </span>
    </div>
  )
}

export default SkillsBox