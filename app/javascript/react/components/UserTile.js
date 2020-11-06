import React from 'react'

const UserTile = (props) => {
  return (
    <div>
      <h3>{props.first_name} {props.last_name}</h3>
      <h3>{props.location}</h3>
      <h3>{props.skill_level}</h3>
      <h3>{props.email}</h3>
    </div>
  )
}

export default UserTile