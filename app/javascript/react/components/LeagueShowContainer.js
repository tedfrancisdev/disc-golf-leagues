import React, { useState, useEffect } from 'react'

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

  return(
    <div>
      <h1>{league.league_name}</h1>
      <p>{league.location}</p>
      <p>{league.description}</p>
    </div>
  ) 
}

export default LeagueShowContainer  