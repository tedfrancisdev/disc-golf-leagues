import React, { useState, useEffect } from "react"
import LeagueTile from "./LeagueTile"

const LeagueIndex = (props) => {
  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    fetch("/api/v1/leagues")
    .then(response => {
      if(response.ok){
        return response
      } else{
        let errorMessage = `${response.status}(${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      setLeagues(body)
    }).catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let leagueTiles = leagues.map((league) => {
    return(
      <LeagueTile
        key={league.id}
        id={league.id}
        name={league.league_name}
        location={league.location}
      />
    )
  })

  return(
    <div className = 'grid-container'>
      <div className='background-image'></div>
      <div className='show-callout'>
        <table>
          <thead>
            <tr>
              <th width='200'>League Name:</th>
              <th width='200'>Location:</th>
            </tr>
          </thead>
          <tbody>
            {leagueTiles}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeagueIndex