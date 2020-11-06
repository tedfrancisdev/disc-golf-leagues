import React, { useState, useEffect } from 'react'

const LeagueShowContainer = (props) => {
  const[leagueShow, setLeagueShow] = useState({})

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
        setLeagueShow(body)        
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`)) 
    }, [])

  return(
    <div>
      <h1>{leagueShow.league_name}</h1>
      <p>{leagueShow.location}</p>
      <p>{leagueShow.description}</p>
    </div>
  ) 
}

export default LeagueShowContainer  