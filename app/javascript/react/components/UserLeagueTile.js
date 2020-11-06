import React from 'react'
import { Link } from "react-router-dom"

const UserLeagueTile = (props) => {
  return (
    <div>
      <Link to={`/leagues/${props.id}`} >
        {props.league_name}
      </Link>
      <p>{props.location}</p>
    </div>
  )
}

export default UserLeagueTile