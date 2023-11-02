import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import "./ColumnForBox.css"

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
import { useParams } from 'react-router-dom'
import UserDp from './UserDp'

export default function ColumnForBox(props) {
    const {img, title, data, hide, available} = props
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

        "No priority" : nopriority,
        "Low" : low,
        "Medium" : medium,
        "High" : high,
        "Urgent" : urgent
    }

    const [list, setList] = useState(data)

    const { order } = useParams()


    // useEffect(() => {
    //   const temp = list;
    //   console.log("order", order)

    //   if(order == "orderByTitle") {
    //     temp.sort((a, b) => a.title[0] < b.title[0] ? 1: -1)
    //   } else if(order == "orderByPriority") {
    //     temp.sort((a, b) => a.priority > b.priority ? 1: -1)
    //   }

    //   setList(temp)
    //   return () => {
        
    //   }
    // }, [order])
    
    
  return (
    <div className='ColumnForBox'>
        
        <div className='head'>
          {hide == "user" ? <UserDp src={img in imagesSrc ? imagesSrc[img] : imagesSrc["usr-default"]} available={available} style={{transform: "scale(0.6)"}} /> : <img src={imagesSrc[img]}/>}
          <span>{title}</span>
        </div>

        {
            order == "orderByTitle" ? list.sort((a, b) => a.title[0] < b.title[0] ? -1: 1).map((obj, index) => {
              return <Cards key={index} data={obj} hide={hide}/>
            }) :
            order == "orderByPriority" ? list.sort((a, b) => a.priority > b.priority ? -1: 1).map((obj, index) => {
              return <Cards key={index} data={obj} hide={hide}/>
            }) : <span />
        }
        
    </div>
  )
}
