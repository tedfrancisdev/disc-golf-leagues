import React, { useState, useEffect } from "react"
import LeagueTile from "./LeagueTile"
import LeagueFormContainer from './LeagueFormContainer'

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

  const addNewLeague = (formData) => {
    fetch(`/api/v1/leagues`, {
      method: 'POST',
      body: JSON.stringify(formData),
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
      setLeagues([
        ...leagues, 
        body,
      ]);
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

  const leagueTiles = leagues.map((league) => {
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
    <div className='grid-container'>
      <div className='show-callout'>
        <LeagueFormContainer addNewLeague={addNewLeague} />
        <table className="responsive-card-table unstriped">
          <thead>
            <tr>
              <th>League Name</th>
              <th>Location</th>
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