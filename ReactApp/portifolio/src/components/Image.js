import React from 'react'
import photomain from '../img/photomain.jpg'

export default function Image() {
  return (
    <div>
      <img src={photomain} alt='my-main' className='photo'/>
    </div>
  )
}
