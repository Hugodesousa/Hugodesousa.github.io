import React from 'react'


export default function Video(props) {
  // const Movie = () =>{
  //   <Video>
  //     <source src={props.image} type="video/webm" />

  //   </Video>}

  return (
    <div>
      <img className="content" src={props.image} alt="test"/>
      {/* <video className="content" loop autoPlay muted >
        <source src={props.image} type="video/webm" preload="auto"></source>
        </video> */}
    </div>
  )
}
