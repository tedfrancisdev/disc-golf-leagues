import React from 'react'

const LeagueUserTile = (props) => {
  return (
    <div className='grid-container'>
      <div className='show-callout-user'>
        <table className="league-user-table unstriped">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Location</th>
              <th>Skill Level</th>
              <th>Position</th>
            </tr>
            <tr>
              <td>{props.first_name} {props.last_name}</td>
              <td>{props.location}</td>
              <td>{props.skill_level}</td>
              <td>Undetermined</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default LeagueUserTile