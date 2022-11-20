import React from 'react'
import tagsTecData from '../tagsTecData'
import '../style/Tec.css'

export default function Tec() {

  return (
    <div className='tagsContainer'>
      {tagsTecData.map((tag) => {
       return <img 
        key={tag.tagName}
        src={tag.link} 
        alt={tag.tagName} 
        className='tag'
         />
      })}
    </div>
  )
}
