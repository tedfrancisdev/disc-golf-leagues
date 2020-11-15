import React, { useState, useEffect } from 'react'

import UserTile from './UserTile'
import UserLeagueTile from './UserLeagueTile'

const UserShowContainer = (props) => {
  const[userShow, setUserShow] = useState({})
    
  useEffect(()=>{
    let id = props.match.params.id
    fetch(`/api/v1/users/${id}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        setUserShow(body)
      })   
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let userLeagueArray = []
  let userNoLeagueMessage = ""
  if (userShow.leagues) {
    userLeagueArray = userShow.leagues.map((league) => {
      return(
        < UserLeagueTile
          key={league.id}
          id={league.id}
          league_name={league.league_name}
          location={league.location}
        />
      )
    })
  } else {
    userNoLeagueMessage = "You have not joined any leagues yet."
  }

  return(
    <div>
      <UserTile
          id={userShow.id}
          first_name={userShow.first_name}
          last_name={userShow.last_name}
          email={userShow.email}
          location={userShow.location}
          skill_level={userShow.skill_level}
        />
      <h3>Leagues: {userNoLeagueMessage}</h3>
      {userLeagueArray}
    </div>
  )
}

export default UserShowContainer