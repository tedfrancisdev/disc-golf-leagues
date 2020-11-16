import React from 'react'
import { Link } from "react-router-dom"

const LeagueTile = (props) => {
  return (
    <tr>
      <td>
        <Link class="league-links" to={`leagues/${props.id}`} >
          {props.name}
        </Link>
      </td>
      <td>{props.location}</td>
    </tr>
  )
}

export default LeagueTile