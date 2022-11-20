import React from 'react'


export default function Video(props) {

  return (
    <div>
      <img className="content" src={props.image} alt="project art"/>
      {/* <video className="content" loop autoPlay muted >
        <source src={props.image} type="video/webm" preload="auto"></source>
        </video> */}
    </div>
  )
}
