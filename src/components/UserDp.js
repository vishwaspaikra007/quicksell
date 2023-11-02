import React from 'react'
import "./UserDp.css"

export default function (props) {
  const {src, available, style} = props
  return (
    <div className='UserDp' style={style}>
        <span style={{backgroundColor : available ? "green" : "grey"}}></span>
        <img src={src} />
    </div>
  )
}
