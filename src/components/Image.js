import React from 'react'
import photomain from '../images/phomain.jpg'
import '../style/Image.css'

export default function Image() {
  return (
    <div className='imageContainer'>
      <img src={photomain} alt='my-main' className='photo'/>
    </div>
  )
}
