import React from 'react'
import { useParams } from 'react-router-dom'
const viewAttendance = () => {
  const {id} = useParams();
  return (
    <div>viewAttendance {id}</div>
  )
}

export default viewAttendance