import React from 'react'
import ColumnForBox from './ColumnForBox'

export default function ByStatus(props) {
  const { groupByStatusObj } = props

  return (
    <>
      {
        groupByStatusObj ?
        Object.keys(groupByStatusObj).map((key, index) => {
          return <ColumnForBox key={index} title={key} img={key} data={groupByStatusObj[key]} hide="status"/>
        }) : ""
      }
    </>
  )
}
