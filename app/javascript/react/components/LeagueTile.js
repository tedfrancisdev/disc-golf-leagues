import React from 'react'
import { Link } from "react-router-dom"

const LeagueTile = (props) => {
  return (
    <div>
      <Link to={`leagues/${props.id}`} >
        {props.name}
      </Link>
      <p>{props.location}</p>
    </div>
  )
}

export default LeagueTile