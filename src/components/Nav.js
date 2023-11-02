import React, { useEffect, useState } from 'react'
import menu from '../assets/icons/menu.png'
import downArrow from '../assets/icons/down arrow.png'
import './Nav.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function Nav() {
    // ***************** NOTE ********************
    // Besides what I have implemented User view state can be saved in local storage
    // And localstorage can be used to get last view state of the user even after reload
    // but I did this on top of routing without using localstorage 
    // so it's not just storing last state but 
    // also all selected previous view state of the user and also user can simply share the 
    // current view state with other just by using URL 
    
    const navigate = useNavigate()
    const location = useLocation()

    const getPath = () => {
        return location.pathname.slice(1, location.pathname.lastIndexOf('/')) != "" ? 
            location.pathname.slice(1, location.pathname.lastIndexOf('/')) : "groupByPriority"
    }

    const getParams = () => {
        return location.pathname.slice(location.pathname.lastIndexOf('/')+1) != "" ? 
            location.pathname.slice(location.pathname.lastIndexOf('/')+1) : "orderByPriority"
    }
    
    const [groupBy, setGroupBy] = useState(getPath()) // default value of group retrieved from path
    const [orderBy, setOrderBy] = useState(getParams()) // default value of group retrieved from path
    const [toggleDisplayOption, setToggleDisplayOption] = useState(false)


    const handleChanges = e => {
        console.log("handle changes called")
        if(e.target.name == "group") {
            setGroupBy(e.target.value)
            navigate(e.target.value + "/" + orderBy)
        } else {
            setOrderBy(e.target.value)   
            navigate(groupBy + "/" + e.target.value)
        }
    }


    useEffect(() => {
        console.log("location change", location)
        setGroupBy(getPath())
        setOrderBy(getParams())
        return () => {
          
        }
      }, [location])
    

    return (
    <div className='Nav' onMouseEnter={e => setToggleDisplayOption(!toggleDisplayOption)} onMouseLeave={e => setToggleDisplayOption(!toggleDisplayOption)}>
        <button onClick={e => setToggleDisplayOption(!toggleDisplayOption)}>
            <img src={menu} />
            <span>Display</span>
            <img src={downArrow} />
        </button>
        {/* {groupBy} , {orderBy} */}
        {toggleDisplayOption ? <div className='NavBody'>
            <label>
                Grouping
                <select name="group" value={groupBy} onChange={e => handleChanges(e)}>
                    <option value="groupByPriority">Priority</option>
                    <option value="groupByUser">User</option>
                    <option value="groupByStatus">Status</option>
                </select>
            </label>
            <label>
                Ordering
                <select name="order" value={orderBy} onChange={e => handleChanges(e)}>
                    <option value="orderByPriority">Priority</option>
                    <option value="orderByTitle">Title</option>
                </select>
            </label>
        </div> : ""}
    </div>
  )
}
