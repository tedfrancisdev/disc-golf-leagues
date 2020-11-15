import React, { useState, useEffect } from 'react'
import LeagueUserTile from './LeagueUserTile'

const LeagueShowContainer = (props) => {
  const[league, setLeague] = useState({})
  
  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/leagues/${id}`)
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
      setLeague(body)        
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`)) 
  }, [])

  const addRoster = (formData) => {
    fetch(`/api/v1/joins`, {
      method: 'POST',
      body: JSON.stringify(league),
      credentials: 'same-origin',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      debugger
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

  let leagueUserArray = []
  let leagueUsersMessage = ""
  if (league.users) {
    leagueUserArray = league.users.map((user) => {
      return(
        <LeagueUserTile
          key={user.id}
          id={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          location={user.location}
          skill_level={user.skill_level}
        />
      )
    })
  } else {
    leagueUsersMessage = "You have no users yet."
  }
  
  return(
    <div className="basic-card">
    <div className="basic-card-image scoreboard">
      {/* <img src='/images/Leaderboard.png'/> */}
    </div>
    <div className="basic-card-content content callout secondary">
      <h5>{league.league_name}</h5>
      <p>Location: {league.location}</p>
    </div>
    <div className="links callout primary">
      <ul className="menu">
        <li>
        <p>{league.description}</p>
        </li>
      </ul>
    </div>
    <div className="button-group">
      <input onClick={addRoster} className="button" type="submit" value="Join League" />
    </div>
    <div>
      {leagueUserArray}
      {leagueUsersMessage}
    </div>
  </div>
  
  
  ) 
}

export default LeagueShowContainer  