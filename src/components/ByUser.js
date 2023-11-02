import React from 'react'
import ColumnForBox from './ColumnForBox'

export default function ByUser(props) {
  const { groupByUsrObj, names } = props

  return (
    <>
      {
        groupByUsrObj ?
        Object && Object.keys(groupByUsrObj).map((key, index) => {
          return <ColumnForBox key={index} title={names[key].name} img={key} data={groupByUsrObj[key]} hide="user" available={names[key].available}/>
        }) : ""
      }
    </>
  )
}
