import React from 'react'
import ColumnForBox from './ColumnForBox'

export default function ByPriority(props) {
  const { groupByPriorityObj } = props
  const priority = {
    0 : "No priority",
    1 : "Low",
    2 : "Medium",
    3 : "High",
    4 : "Urgent"
  }
  console.log("from insie ", groupByPriorityObj)
  return (
    <>
      {
        Object && Object.keys(groupByPriorityObj).map((key, index) => {
          return <ColumnForBox key={index} title={priority[key]} img={priority[key]} data={groupByPriorityObj[key]}  hide="priority"/>
        })
      }
    </>
  )
}
