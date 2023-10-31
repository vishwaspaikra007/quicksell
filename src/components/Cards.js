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

export default function Cards(props) {
  let {status, userImg} = props

  let statusIconMapping = {'done' : done, 'backlog': backlog, 'inprogress': inprogress, 'todo': todo, 'cancel': cancel}
  let userIconMapping = {"usr-1": usr_1, "usr-2": usr_2, "usr-3": usr_3, "usr-4": usr_4, "usr-5": usr_5, "usr-default": usr_default}


  return (
    <div className='cardBody'>
      <div className='body'>
        <div className='cam'>Cam</div>
        <div className='taskBlock'>
          <img src={statusIconMapping[status]} className='statusImg'/>
          <div className='title'>Remove the reduntant part from the code and then report the reduntant code to team lead and after thumbs up from team lead, push the code</div>
        </div>
        <div className='tags'></div>
      </div>
      <img src={userImg in userIconMapping ? userIconMapping[userImg] : userIconMapping["usr-default"]} className='userImg'/>
    </div>
  )
}
