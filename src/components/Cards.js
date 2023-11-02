import React from 'react'
import './Cards.css'

import done from '../assets/icons/done.svg'
import inprogress from '../assets/icons/inprogress.png'
import backlog from '../assets/icons/backlog.svg'
import todo from '../assets/icons/todo.png'
import cancel from '../assets/icons/cancel.png'

import usr_1 from "../assets/images/usr-1.jpg"
import usr_2 from "../assets/images/usr-2.jpg"
import usr_3 from "../assets/images/usr-3.jpg"
import usr_4 from "../assets/images/usr-4.jpg"
import usr_5 from "../assets/images/usr-5.jpg"
import usr_default from "../assets/images/usr-default.png"

import nopriority from '../assets/icons/nopriority.png'
import low from '../assets/icons/low.png'
import medium from '../assets/icons/medium.png'
import high from '../assets/icons/high.png'
import urgent from '../assets/icons/urgent.png'
import UserDp from './UserDp'

export default function Cards(props) {
  let {data, hide} = props

  const imagesSrc = {
    "Done" : done,
    "In progress" : inprogress,
    "Backlog" : backlog,
    "Todo" : todo,
    "Cancel" : cancel,

    "usr-1" : usr_1,
    "usr-2" : usr_2,
    "usr-3" : usr_3,
    "usr-4" : usr_4,
    "usr-5" : usr_5,
    "usr-default" : usr_default,

    0: ["No priority", nopriority],
    1: ["Low", low],
    2: ["Medium", medium],
    3: ["High", high],
    4: ["Urgent", urgent]
  }

  return (
    <div className='cardBody'>
      <div className='body'>
        <div className='cam'>{data.id}</div>
        <div className='taskBlock'>
          {hide == "status" ? <span /> : <img src={imagesSrc[data.status]} className='statusImg'/>}
          <div className='title'>{data.title}</div>
        </div>
        <div className='tags'>
        {hide == "priority" ? <span /> : 
            <div className='head'>
              <img className='tagImg' src={imagesSrc[data.priority][1]}/>
              {/* <span>{imagesSrc[data.priority][0]}</span> */}
            </div>
          }

          {
            data.tag.map((tag, index) => {
              return <div key={index} className='tag'><span></span>{tag}</div>
            })
          }
          
        </div>
      </div>
      {hide == "user" ? <span /> : <UserDp src={data.userId in imagesSrc ? imagesSrc[data.userId] : imagesSrc["usr-default"]} available={data.available}/>}
    </div>
  )
}
